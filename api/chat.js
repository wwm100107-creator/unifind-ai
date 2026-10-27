// api/chat.js - Vercel Serverless Function
// Gọi Google Gemini API (Free Tier 100% không tốn tiền)

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

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

  // Get API key from environment variable
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      reply: "💡 *Ghi chú:* Serverless API chưa được cấu hình biến môi trường `GEMINI_API_KEY` trên Vercel. Bạn có thể thêm key miễn phí tại Vercel Dashboard hoặc sử dụng Hệ tri thức UniFind sẵn có để tra cứu chính xác 100% nhé!"
    });
  }

  const systemPrompt = `Bạn là UniBot AI - trợ lý tư vấn tuyển sinh và định hướng đại học của nền tảng UniFind (Việt Nam).
Nhiệm vụ:
- Hỗ trợ học sinh và phụ huynh tư vấn chọn trường, ngành nghề, điểm chuẩn, và học phí năm 2026-2027.
- Luôn trả lời bằng tiếng Việt thân thiện, nhiệt tình, có cấu trúc gạch đầu dòng rõ ràng.
- Gợi ý thí sinh phân bổ nguyện vọng thông minh (NV1 yêu thích nhất, NV2-3 vừa tầm, NV4-5 an toàn).
- Đính kèm lời khuyên thực tế về cơ hội nghề nghiệp và học bổng.`;

  const formattedHistory = (chatHistory || []).slice(-6).map(item => ({
    role: item.role === 'model' || item.role === 'bot' ? 'model' : 'user',
    parts: [{ text: item.parts?.[0]?.text || item.text || '' }]
  })).filter(item => item.parts[0].text);

  const contents = [
    ...formattedHistory,
    { role: 'user', parts: [{ text: message }] }
  ];

  // Danh sách model ưu tiên
  const candidateModels = [
    'gemini-2.5-flash',
    'gemini-flash-latest',
    'gemini-2.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-2.5-pro'
  ];

  let lastError = null;

  for (const model of candidateModels) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800
          }
        })
      });

      const data = await response.json();
      if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
      }

      lastError = data.error?.message || 'Error calling model ' + model;
    } catch (err) {
      lastError = err.message;
    }
  }

  // Fallback nếu không gọi được model
  return res.status(200).json({
    reply: `Xin lỗi bạn, tạm thời chưa kết nối được tới mô hình Gemini (${lastError}). Hệ thống UniFind vẫn hỗ trợ bạn tra cứu điểm chuẩn và học phí qua kho dữ liệu sẵn có!`
  });
}
