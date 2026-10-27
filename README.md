# 🎓 UniFind AI - Định hướng đại học & Chọn trường thông minh

Nền tảng tra cứu, định hướng ngành nghề và so sánh thông tin 56 trường đại học tại Việt Nam, tích hợp **UniBot AI - Trợ lý tuyển sinh ảo thông minh (Hoàn toàn miễn phí 100%, không tốn chi phí thuê API)**.

---

## 🌟 Tính năng chính

### 1. Bản sao nguyên bản của UniFind:
* **Tra cứu 56 trường Đại học toàn quốc**: Phân loại theo khu vực (Bắc, Trung, Nam), loại hình (Công lập, Tư thục), mức học phí và phổ điểm.
* **Chi tiết từng trường (`/school/:id`)**:
  * Điểm chuẩn THPT trúng tuyển 3 năm gần nhất (2023, 2024, 2025) theo từng ngành & tổ hợp.
  * Xu hướng tăng/giảm điểm trúng tuyển.
  * Biểu phí và học phí tham khảo năm học 2026–2027 có nguồn trích dẫn chính thức.
  * Các phương thức xét tuyển (ĐGNL ĐHQG, học bạ, tuyển thẳng...).
  * Số lượng cán bộ giảng dạy (GS, PGS, TS, ThS).
* **Khám phá 35 nhóm ngành nghề (`/majors`)**: Mô tả ngành, kỹ năng cần có, cơ hội việc làm và danh sách các trường đào tạo.
* **So sánh trực diện (`/compare`)**: Đối chiếu song song tối đa 3 trường về học phí, điểm chuẩn, ngành mũi nhọn.
* **Danh sách yêu thích (`/favorites`)**: Lưu lại trường mong muốn.
* **Thông báo tuyển sinh (`/notifications`)**: Lịch đăng ký nguyện vọng của Bộ GD&ĐT, chính sách miễn học phí theo Nghị định 116.
* **Hồ sơ & Sao lưu offline (`/profile`)**: Xuất/nhập file JSON trực tiếp trên trình duyệt mà không cần tài khoản máy chủ.

---

### 2. Tính năng mới: UniBot AI Chatbot (100% Free)

UniBot được tích hợp sẵn ở góc phải dưới màn hình với cơ chế **Dual-Engine thông minh**:

1. **Engine 1 - Hệ tri thức UniFind Offline (0đ, 0 latency, không cần API Key)**:
   * Trả lời tức thì câu hỏi về học phí năm 2026-2027 của mọi trường trong hệ thống.
   * Tra cứu điểm chuẩn 3 năm của từng ngành và tổ hợp xét tuyển.
   * Gợi ý trường phù hợp theo số điểm thi (ví dụ: *"24 điểm khối A00 nên học trường nào?"*).
   * So sánh đối chiếu học phí và thế mạnh giữa 2 trường.
   * Giải đáp chính sách miễn giảm học phí (ngành sư phạm, công an, quân đội).

2. **Engine 2 - Google Gemini 1.5 Flash (Free Tier)**:
   * Hỗ trợ giải đáp các câu hỏi mở rộng về định hướng nghề nghiệp, cách chọn ngành, tâm lý thi cử.
   * Tích hợp qua Vercel Serverless Function (`/api/chat.js`) bảo mật API key.
   * Người dùng cũng có thể tự nhập Gemini API key cá nhân trong hộp thoại Cài đặt (⚙️) của Chatbot.

---

## 🚀 Hướng dẫn chạy thử trên máy cục bộ (Local)

Yêu cầu: Đã cài Node.js trên máy.

```bash
cd C:\kn\web
npx serve .
```

Mở trình duyệt truy cập `http://localhost:3000` để trải nghiệm web và chatbot.

---

## 🔑 Cấu hình Google Gemini Free Tier trên Vercel (Tùy chọn)

1. Lấy API key miễn phí tại [Google AI Studio](https://aistudio.google.com/).
2. Trên Vercel Dashboard, vào dự án -> **Settings** -> **Environment Variables**.
3. Thêm biến:
   * **Name**: `GEMINI_API_KEY`
   * **Value**: *(Key của bạn)*
4. Redeploy để kích hoạt. *(Lưu ý: Ngay cả khi chưa thêm key, Chatbot vẫn hoạt động trơn tru 100% nhờ Engine tri thức UniFind Offline)*.

---

## 📄 Bản quyền & Tác quyền
Dự án được xây dựng và phát triển bởi **wwm100107-creator**.
Mã nguồn phát hành dưới giấy phép MIT.
