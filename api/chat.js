// api/chat.js - Vercel Serverless Function
// Tối ưu hóa siêu tốc: Sử dụng gemini-3.5-flash-lite (phản hồi nhanh nhất, không nghẽn)

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

  const systemPrompt = `Bạn là UniBot AI - trợ lý tuyển sinh thông minh của UniFind (Việt Nam).
Yêu cầu:
- Trả lời thật ngắn gọn, súc tích, đi thẳng vào trọng tâm trong 3-4 gạch đầu dòng.
- Không rườm rà, giải thích nhanh các phương án chọn trường, chọn ngành cho thí sinh.`;

  const formattedHistory = (chatHistory || []).slice(-4).map(item => ({
    role: item.role === 'model' || item.role === 'bot' ? 'model' : 'user',
    parts: [{ text: item.parts?.[0]?.text || item.text || '' }]
  })).filter(item => item.parts[0].text);

  const contents = [
    ...formattedHistory,
    { role: 'user', parts: [{ text: message }] }
  ];

  // Danh sách model ưu tiên theo tốc độ
  const fastModels = [
    'gemini-3.5-flash-lite',
    'gemini-2.5-flash',
    'gemini-3.8-flash'
  ];

  for (const model of fastModels) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000); // Timeout 7s để không bắt người dùng đợi lâu

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
            maxOutputTokens: 350
          }
        })
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
      }
    } catch (err) {
      // Thử model tiếp theo nếu lỗi
    }
  }

  return res.status(200).json({ reply: null });
}
