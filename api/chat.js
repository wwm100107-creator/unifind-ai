// api/chat.js - Vercel Serverless Function
// Gọi Google Gemini 1.5 Flash API (Free Tier 100% không tốn tiền)

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
- Tư vấn chọn trường, ngành nghề, điểm chuẩn, và học phí năm 2026-2027.
- Luôn trả lời bằng tiếng Việt thân thiện, nhiệt tình, có cấu trúc gạch đầu dòng rõ ràng.
- Gợi ý thí sinh phân bổ nguyện vọng thông minh (NV1 yêu thích nhất, NV2-3 vừa tầm, NV4-5 an toàn).
- Đính kèm lời khuyên thực tế về cơ hội nghề nghiệp và học bổng.`;

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const formattedHistory = (chatHistory || []).slice(-6).map(item => ({
      role: item.role === 'model' || item.role === 'bot' ? 'model' : 'user',
      parts: [{ text: item.parts?.[0]?.text || item.text || '' }]
    })).filter(item => item.parts[0].text);

    const contents = [
      ...formattedHistory,
      { role: 'user', parts: [{ text: message }] }
    ];

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
    if (!response.ok) {
      console.error('Gemini API Error:', data);
      return res.status(200).json({
        reply: `Xin lỗi bạn, kết nối tới Gemini AI tạm thời gián đoạn (${data.error?.message || 'Lỗi API'}). Vui lòng thử lại sau ít phút!`
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Mình chưa thể tìm ra câu trả lời phù hợp, bạn thử đặt lại câu hỏi cụ thể hơn nhé!";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
