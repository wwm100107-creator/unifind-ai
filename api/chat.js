// api/chat.js - Vercel Serverless Function
// Gọi Gemini AI với cơ chế tối ưu cho tư vấn tuyển sinh

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, chatHistory } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ reply: null });
  }

  const systemPrompt = `Bạn là UniBot AI - chuyên gia tư vấn tuyển sinh đại học hàng đầu của nền tảng UniFind (Việt Nam).
Nhiệm vụ:
- Khi thí sinh hỏi về một ngành cụ thể kèm mức điểm thi (VD: 25 điểm ngành kinh doanh quốc tế, 24 điểm CNTT...), PHẢI tập trung 100% vào ngành đó.
- Phân loại rõ: Nhóm vừa tầm (sát điểm), nhóm thử sức NV1 (cao hơn 0.8-1.5đ), nhóm an toàn (thấp hơn 1.5-2.5đ).
- Nêu rõ tên trường, điểm chuẩn năm gần nhất, tổ hợp xét tuyển.
- Trả lời bằng tiếng Việt thân thiện, súc tích, cấu trúc gạch đầu dòng rõ ràng.`;

  const formattedHistory = (chatHistory || []).slice(-4).map(item => ({
    role: item.role === 'model' || item.role === 'bot' ? 'model' : 'user',
    parts: [{ text: item.parts?.[0]?.text || item.text || '' }]
  })).filter(item => item.parts[0].text);

  const contents = [
    ...formattedHistory,
    { role: 'user', parts: [{ text: message }] }
  ];

  const candidateModels = [
    'gemini-3.5-flash-lite',
    'gemini-2.5-flash',
    'gemini-3.8-flash'
  ];

  for (const model of candidateModels) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7500);

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: contents,
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 500
          }
        })
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
      }
    } catch (err) {
      // Thử model tiếp theo
    }
  }

  return res.status(200).json({ reply: null });
}
