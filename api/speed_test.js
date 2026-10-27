export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;
  const start = Date.now();
  
  const models = [
    'gemini-3.5-flash-lite',
    'gemini-3.8-flash',
    'gemini-flash-latest'
  ];

  const results = [];

  for (const name of models) {
    const t0 = Date.now();
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${name}:generateContent?key=${apiKey}`;
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'Gợi ý 3 trường đào tạo CNTT tại TP.HCM ngắn gọn 1 câu' }] }]
        })
      });
      const data = await r.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      results.push({
        model: name,
        timeMs: Date.now() - t0,
        ok: !!text,
        error: data.error?.message,
        preview: text ? text.substring(0, 80) : null
      });
    } catch (e) {
      results.push({ model: name, error: e.message, timeMs: Date.now() - t0 });
    }
  }

  return res.status(200).json({ totalMs: Date.now() - start, results });
}
