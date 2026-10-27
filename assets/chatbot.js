// UniBot AI Chatbot - Tích hợp Bảng 8 Nhóm Mẫu Câu Hỏi có nút Copy
// Xóa bỏ hoàn toàn thanh bong bóng gợi ý chiếm diện tích khung chat

const UNIBOT_SCHOOLS = [{"id":"hcmus","name":"Trường Đại học Khoa học tự nhiên – ĐHQG TP.HCM","abbr":"HCMUS","city":"TP.HCM","kind":"Công lập","areas":["Công nghệ","Kỹ thuật"],"majors":["Công nghệ thông tin","Trí tuệ nhân tạo","Khoa học dữ liệu","Kỹ thuật điện - điện tử","An toàn thông tin"],"website":"https://hcmus.edu.vn","feeSummary":"37 – 70 triệu/năm"},{"id":"ptit","name":"Học viện Công nghệ Bưu chính Viễn thông","abbr":"PTIT","city":"Nhiều cơ sở","kind":"Công lập","areas":["Công nghệ","Kỹ thuật","Kinh tế"],"majors":["Công nghệ thông tin","An toàn thông tin","Kỹ thuật điện - điện tử","Marketing","Trí tuệ nhân tạo","Khoa học dữ liệu","Thương mại điện tử"],"website":"https://ptit.edu.vn","feeSummary":"35.9 – 58.3 triệu/năm"},{"id":"ctu","name":"Đại học Cần Thơ","abbr":"CTU","city":"Cần Thơ","kind":"Công lập","areas":["Kỹ thuật","Công nghệ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật xây dựng","Quản trị kinh doanh","Kế toán - Kiểm toán","Kỹ thuật ô tô","Kỹ thuật điện - điện tử","Marketing","Tài chính - Ngân hàng","Ngôn ngữ Anh","Luật"],"website":"https://ctu.edu.vn","feeSummary":"22 – 40 triệu/năm"},{"id":"huce","name":"Trường Đại học Xây dựng Hà Nội","abbr":"HUCE","city":"Hà Nội","kind":"Công lập","areas":["Kỹ thuật","Công nghệ"],"majors":["Kỹ thuật xây dựng","Công nghệ thông tin","Kỹ thuật điện - điện tử","Kỹ thuật cơ điện tử","Logistics","Quản trị kinh doanh"],"website":"https://huce.edu.vn","feeSummary":"16.4 – 45 triệu/năm"},{"id":"hau","name":"Trường Đại học Kiến trúc Hà Nội","abbr":"HAU","city":"Hà Nội","kind":"Công lập","areas":["Kỹ thuật","Sáng tạo"],"majors":["Kỹ thuật xây dựng","Thiết kế đồ họa","Kỹ thuật cơ điện tử","Công nghệ thông tin"],"website":"https://hau.edu.vn","feeSummary":"13.5 – 40 triệu/năm"},{"id":"ou","name":"Trường Đại học Mở TP.HCM","abbr":"OU","city":"TP.HCM","kind":"Công lập","areas":["Kinh tế","Công nghệ"],"majors":["Quản trị kinh doanh","Marketing","Kế toán - Kiểm toán","Công nghệ thông tin"],"website":"https://ou.edu.vn","feeSummary":"22 – 45 triệu/năm"},{"id":"hou","name":"Trường Đại học Mở Hà Nội","abbr":"HOU","city":"Hà Nội","kind":"Công lập","areas":["Kinh tế","Công nghệ"],"majors":["Quản trị kinh doanh","Kế toán - Kiểm toán","Công nghệ thông tin","Thương mại điện tử"],"website":"https://hou.edu.vn","feeSummary":"19.5 – 21 triệu/năm"},{"id":"duytan","name":"Đại học Duy Tân","abbr":"DTU","city":"Đà Nẵng","kind":"Tư thục","areas":["Kỹ thuật","Công nghệ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật xây dựng","Quản trị kinh doanh","Marketing"],"website":"https://duytan.edu.vn","feeSummary":"28 – 98.8 triệu/năm"},{"id":"hust","name":"Đại học Bách khoa Hà Nội","abbr":"HUST","city":"Hà Nội","kind":"Công lập","areas":["Kỹ thuật","Công nghệ"],"majors":["Công nghệ thông tin","Trí tuệ nhân tạo","Kỹ thuật cơ điện tử","Kỹ thuật điện - điện tử","Kỹ thuật ô tô","Khoa học dữ liệu","An toàn thông tin","Logistics","Kỹ thuật xây dựng"],"website":"https://hust.edu.vn","feeSummary":"28 – 68 triệu/năm"},{"id":"hcmut","name":"Trường Đại học Bách khoa – ĐHQG TP.HCM","abbr":"HCMUT","city":"TP.HCM","kind":"Công lập","areas":["Kỹ thuật","Công nghệ"],"majors":["Công nghệ thông tin","Kỹ thuật cơ điện tử","Kỹ thuật điện - điện tử","Kỹ thuật xây dựng","Kỹ thuật ô tô","Logistics","Khoa học dữ liệu"],"website":"https://hcmut.edu.vn","feeSummary":"31.5 – 88 triệu/năm"},{"id":"hcmute","name":"Trường Đại học Sư phạm Kỹ thuật TP.HCM","abbr":"HCMUTE","city":"TP.HCM","kind":"Công lập","areas":["Kỹ thuật","Công nghệ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật cơ điện tử","Kỹ thuật ô tô","Logistics","Quản trị kinh doanh","Kỹ thuật điện - điện tử","Kỹ thuật xây dựng","Thương mại điện tử","Thiết kế đồ họa"],"website":"https://hcmute.edu.vn","feeSummary":"28.8 – 58 triệu/năm"},{"id":"uit","name":"Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM","abbr":"UIT","city":"TP.HCM","kind":"Công lập","areas":["Công nghệ"],"majors":["Công nghệ thông tin","Trí tuệ nhân tạo","An toàn thông tin","Khoa học dữ liệu","Thương mại điện tử"],"website":"https://uit.edu.vn","feeSummary":"41 – 140 triệu/năm"},{"id":"uet","name":"Trường Đại học Công nghệ – ĐHQGHN","abbr":"UET","city":"Hà Nội","kind":"Công lập","areas":["Công nghệ","Kỹ thuật"],"majors":["Công nghệ thông tin","Trí tuệ nhân tạo","Kỹ thuật cơ điện tử","Kỹ thuật điện - điện tử"],"website":"https://uet.vnu.edu.vn","feeSummary":"38 – 44 triệu/năm"},{"id":"utc","name":"Trường Đại học Giao thông Vận tải","abbr":"UTC","city":"Hà Nội","kind":"Công lập","areas":["Kỹ thuật","Kinh tế"],"majors":["Kỹ thuật xây dựng","Kỹ thuật ô tô","Logistics","Công nghệ thông tin"],"website":"https://utc.edu.vn","feeSummary":"12.5 – 26 triệu/năm"},{"id":"ueh","name":"Đại học Kinh tế TP.HCM","abbr":"UEH","city":"TP.HCM","kind":"Công lập","areas":["Kinh tế"],"majors":["Quản trị kinh doanh","Marketing","Tài chính - Ngân hàng","Kế toán - Kiểm toán","Logistics","Thương mại điện tử","Kinh doanh quốc tế","Luật kinh tế","Khoa học dữ liệu","Công nghệ thông tin"],"website":"https://ueh.edu.vn","feeSummary":"40 – 80 triệu/năm"},{"id":"uel","name":"Trường Đại học Kinh tế – Luật, ĐHQG TP.HCM","abbr":"UEL","city":"TP.HCM","kind":"Công lập","areas":["Kinh tế"],"majors":["Quản trị kinh doanh","Marketing","Tài chính - Ngân hàng","Kế toán - Kiểm toán","Thương mại điện tử","Kinh doanh quốc tế","Luật","Luật kinh tế"],"website":"https://uel.edu.vn","feeSummary":"35.8 – 73.5 triệu/năm"},{"id":"ftu","name":"Trường Đại học Ngoại thương","abbr":"FTU","city":"Hà Nội","kind":"Công lập","areas":["Kinh tế"],"majors":["Quản trị kinh doanh","Marketing","Tài chính - Ngân hàng","Logistics","Kinh doanh quốc tế","Kế toán - Kiểm toán","Luật kinh tế","Ngôn ngữ Anh","Thương mại điện tử"],"website":"https://ftu.edu.vn","feeSummary":"28 – 88 triệu/năm"},{"id":"neu","name":"Đại học Kinh tế Quốc dân","abbr":"NEU","city":"Hà Nội","kind":"Công lập","areas":["Kinh tế"],"majors":["Quản trị kinh doanh","Marketing","Tài chính - Ngân hàng","Kế toán - Kiểm toán","Logistics","Kinh doanh quốc tế","Thương mại điện tử","Luật kinh tế","Khoa học dữ liệu","Công nghệ thông tin"],"website":"https://neu.edu.vn","feeSummary":"20 – 68 triệu/năm"},{"id":"fpt","name":"Trường Đại học FPT","abbr":"FPT","city":"Nhiều cơ sở","kind":"Tư thục","areas":["Công nghệ","Kinh tế"],"majors":["Công nghệ thông tin","Trí tuệ nhân tạo","Quản trị kinh doanh","Marketing","Thiết kế đồ họa","Kinh doanh quốc tế","Tài chính - Ngân hàng","Ngôn ngữ Anh","Ngôn ngữ Nhật"],"website":"https://daihoc.fpt.edu.vn","feeSummary":"60 – 97.5 triệu/năm"},{"id":"tdt","name":"Trường Đại học Tôn Đức Thắng","abbr":"TDTU","city":"TP.HCM","kind":"Công lập","areas":["Kỹ thuật","Công nghệ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật điện - điện tử","Kỹ thuật xây dựng","Quản trị kinh doanh","Tài chính - Ngân hàng"],"website":"https://tdtu.edu.vn","feeSummary":"55.6 – 64 triệu/năm"},{"id":"ump","name":"Đại học Y Dược TP.HCM","abbr":"UMP","city":"TP.HCM","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Răng - Hàm - Mặt","Điều dưỡng"],"website":"https://ump.edu.vn","feeSummary":"45 – 88 triệu/năm"},{"id":"hmu","name":"Trường Đại học Y Hà Nội","abbr":"HMU","city":"Hà Nội","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Răng - Hàm - Mặt","Điều dưỡng","Y học dự phòng","Dược học","Y học cổ truyền"],"website":"https://hmu.edu.vn","feeSummary":"30 – 55.2 triệu/năm"},{"id":"pnt","name":"Trường Đại học Y khoa Phạm Ngọc Thạch","abbr":"PNT","city":"TP.HCM","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Điều dưỡng","Răng - Hàm - Mặt","Y học dự phòng","Y học cổ truyền"],"website":"https://pnt.edu.vn","feeSummary":"41.8 – 55.2 triệu/năm"},{"id":"hup","name":"Trường Đại học Dược Hà Nội","abbr":"HUP","city":"Hà Nội","kind":"Công lập","areas":["Y - Dược"],"majors":["Dược học"],"website":"https://hup.edu.vn","feeSummary":"24.5 – 52 triệu/năm"},{"id":"ctump","name":"Trường Đại học Y Dược Cần Thơ","abbr":"CTUMP","city":"Cần Thơ","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Răng - Hàm - Mặt","Điều dưỡng"],"website":"https://ctump.edu.vn","feeSummary":"44.1 – 58 triệu/năm"},{"id":"hueump","name":"Trường Đại học Y - Dược, Đại học Huế","abbr":"HUEUMP","city":"Huế","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Điều dưỡng","Y học dự phòng"],"website":"https://huemed-univ.edu.vn","feeSummary":"29.3 – 58.5 triệu/năm"},{"id":"tbump","name":"Trường Đại học Y Dược Thái Bình","abbr":"TBUMP","city":"Hưng Yên","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Điều dưỡng","Y học cổ truyền"],"website":"https://tbump.edu.vn","feeSummary":"27.6 – 41.4 triệu/năm"},{"id":"vnuump","name":"Trường Đại học Y Dược – ĐHQGHN","abbr":"VNUUMP","city":"Hà Nội","kind":"Công lập","areas":["Y - Dược"],"majors":["Y khoa","Dược học","Răng - Hàm - Mặt"],"website":"https://ump.vnu.edu.vn","feeSummary":"27.6 – 55 triệu/năm"},{"id":"hcmussh","name":"Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM","abbr":"USSH","city":"TP.HCM","kind":"Công lập","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Trung Quốc","Ngôn ngữ Nhật","Ngôn ngữ Hàn Quốc","Báo chí"],"website":"https://hcmussh.edu.vn","feeSummary":"15.4 – 30 triệu/năm"},{"id":"usshvnu","name":"Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQGHN","abbr":"USSH-HN","city":"Hà Nội","kind":"Công lập","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Trung Quốc","Ngôn ngữ Nhật","Báo chí","Tâm lý học"],"website":"https://ussh.vnu.edu.vn","feeSummary":"15 – 35 triệu/năm"},{"id":"ulis","name":"Trường Đại học Ngoại ngữ – ĐHQGHN","abbr":"ULIS","city":"Hà Nội","kind":"Công lập","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Trung Quốc","Ngôn ngữ Nhật","Ngôn ngữ Hàn Quốc","Sư phạm tiếng Anh"],"website":"https://ulis.vnu.edu.vn","feeSummary":"21 – 38 triệu/năm"},{"id":"huflit","name":"Trường Đại học Ngoại ngữ - Tin học TP.HCM","abbr":"HUFLIT","city":"TP.HCM","kind":"Tư thục","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Trung Quốc","Ngôn ngữ Nhật","Công nghệ thông tin","Quản trị kinh doanh","Kinh doanh quốc tế","Marketing","Thương mại điện tử","Tài chính - Ngân hàng"],"website":"https://huflit.edu.vn","feeSummary":"38 – 44 triệu/năm"},{"id":"ufl","name":"Trường Đại học Ngoại ngữ, Đại học Đà Nẵng","abbr":"UFL","city":"Đà Nẵng","kind":"Công lập","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Trung Quốc","Ngôn ngữ Nhật","Sư phạm tiếng Anh"],"website":"https://ufl.udn.vn","feeSummary":"15 – 32 triệu/năm"},{"id":"hanu","name":"Trường Đại học Hà Nội","abbr":"HANU","city":"Hà Nội","kind":"Công lập","areas":["Ngôn ngữ"],"majors":["Ngôn ngữ Anh","Ngôn ngữ Nhật","Ngôn ngữ Hàn Quốc","Ngôn ngữ Trung Quốc","Marketing","Quản trị kinh doanh","Công nghệ thông tin"],"website":"https://hanu.edu.vn","feeSummary":"25 – 45 triệu/năm"},{"id":"hnue","name":"Trường Đại học Sư phạm Hà Nội","abbr":"HNUE","city":"Hà Nội","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn","Sư phạm tiếng Anh"],"website":"https://hnue.edu.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 25 tr/năm"},{"id":"hcmue","name":"Trường Đại học Sư phạm TP.HCM","abbr":"HCMUE","city":"TP.HCM","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn","Sư phạm tiếng Anh","Tâm lý học","Ngôn ngữ Anh","Công nghệ thông tin"],"website":"https://hcmue.edu.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 24 tr/năm"},{"id":"hpu2","name":"Trường Đại học Sư phạm Hà Nội 2","abbr":"HPU2","city":"Hà Nội","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn"],"website":"https://hpu2.edu.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 22 tr/năm"},{"id":"uedudn","name":"Trường Đại học Sư phạm, Đại học Đà Nẵng","abbr":"UED","city":"Đà Nẵng","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn"],"website":"https://ued.udn.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 20 tr/năm"},{"id":"hueedu","name":"Trường Đại học Sư phạm, Đại học Huế","abbr":"HUE-EDU","city":"Huế","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn"],"website":"https://dhsphue.edu.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 19.5 tr/năm"},{"id":"tnue","name":"Trường Đại học Sư phạm – Đại học Thái Nguyên","abbr":"TNUE","city":"Thái Nguyên","kind":"Công lập","areas":["Sư phạm"],"majors":["Giáo dục Tiểu học","Giáo dục Mầm non","Sư phạm Toán","Sư phạm Ngữ văn"],"website":"https://tnue.edu.vn","feeSummary":"Miễn học phí (Nghị định 116) hoặc 19 tr/năm"},{"id":"hlu","name":"Trường Đại học Luật Hà Nội","abbr":"HLU","city":"Hà Nội","kind":"Công lập","areas":["Luật"],"majors":["Luật","Luật kinh tế","Ngôn ngữ Anh"],"website":"https://hlu.edu.vn","feeSummary":"25.4 – 50.8 triệu/năm"},{"id":"hcmulaw","name":"Trường Đại học Luật TP.HCM","abbr":"ULAW","city":"TP.HCM","kind":"Công lập","areas":["Luật"],"majors":["Luật","Luật kinh tế"],"website":"https://hcmulaw.edu.vn","feeSummary":"35.25 – 83.6 triệu/năm"},{"id":"vlu","name":"Trường Đại học Văn Lang","abbr":"VLU","city":"TP.HCM","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Quản trị kinh doanh","Thiết kế đồ họa","Ngôn ngữ Anh","Điều dưỡng","Marketing","Kinh doanh quốc tế","Tài chính - Ngân hàng","Kỹ thuật ô tô","Công nghệ thông tin","Dược học"],"website":"https://vanlanguni.edu.vn","feeSummary":"45 – 95 triệu/năm"},{"id":"hutech","name":"Trường Đại học Công nghệ TP.HCM","abbr":"HUTECH","city":"TP.HCM","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Công nghệ thông tin","Quản trị kinh doanh","Ngôn ngữ Anh","Dược học","Kỹ thuật ô tô","Kỹ thuật cơ điện tử","Thiết kế đồ họa","Marketing","Tài chính - Ngân hàng","Thương mại điện tử"],"website":"https://hutech.edu.vn","feeSummary":"50 – 65 triệu/năm"},{"id":"ntt","name":"Trường Đại học Nguyễn Tất Thành","abbr":"NTTU","city":"TP.HCM","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Y khoa","Dược học","Ngôn ngữ Anh","Quản trị kinh doanh"],"website":"https://ntt.edu.vn","feeSummary":"37 – 75 triệu/năm"},{"id":"vhu","name":"Trường Đại học Văn Hiến","abbr":"VHU","city":"TP.HCM","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Ngôn ngữ Anh","Tâm lý học","Quản trị kinh doanh"],"website":"https://vhu.edu.vn","feeSummary":"32 – 45 triệu/năm"},{"id":"phenikaa","name":"Đại học Phenikaa","abbr":"PHENIKAA","city":"Hà Nội","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật cơ điện tử","Điều dưỡng","Ngôn ngữ Anh"],"website":"https://phenikaa-uni.edu.vn","feeSummary":"25.2 – 50 triệu/năm"},{"id":"dntu","name":"Trường Đại học Công nghệ Đồng Nai","abbr":"DNTU","city":"Đồng Nai","kind":"Tư thục","areas":["Đa ngành","Ngôn ngữ","Kinh tế"],"majors":["Công nghệ thông tin","Kỹ thuật ô tô","Điều dưỡng","Ngôn ngữ Anh"],"website":"https://dntu.edu.vn","feeSummary":"26 – 42 triệu/năm"},{"id":"hvnh","name":"Học viện Ngân hàng","abbr":"BA","city":"Hà Nội","kind":"Công lập","areas":["Kinh tế"],"majors":["Tài chính - Ngân hàng","Kế toán - Kiểm toán","Quản trị kinh doanh"],"website":"https://hvnh.edu.vn","feeSummary":"25 – 41.5 triệu/năm"},{"id":"hcma","name":"Học viện Tài chính","abbr":"AOF","city":"Hà Nội","kind":"Công lập","areas":["Kinh tế"],"majors":["Tài chính - Ngân hàng","Kế toán - Kiểm toán","Quản trị kinh doanh"],"website":"https://hvtc.edu.vn","feeSummary":"25 – 50 triệu/năm"},{"id":"ufm","name":"Trường Đại học Tài chính – Marketing","abbr":"UFM","city":"TP.HCM","kind":"Công lập","areas":["Kinh tế","Công nghệ"],"majors":["Marketing","Kinh doanh quốc tế","Thương mại điện tử","Tài chính - Ngân hàng","Kế toán - Kiểm toán","Quản trị kinh doanh"],"website":"https://ufm.edu.vn","feeSummary":"26 – 45 triệu/năm"},{"id":"sgu","name":"Trường Đại học Sài Gòn","abbr":"SGU","city":"TP.HCM","kind":"Công lập","areas":["Sư phạm","Công nghệ","Kinh tế"],"majors":["Sư phạm Toán","Sư phạm Ngữ văn","Sư phạm tiếng Anh","Giáo dục Tiểu học","Giáo dục Mầm non","Công nghệ thông tin","Kỹ thuật điện - điện tử","Quản trị kinh doanh"],"website":"https://sgu.edu.vn","feeSummary":"Miễn HP Sư phạm / 14 – 33 tr/năm"},{"id":"iu","name":"Trường Đại học Quốc tế – ĐHQG TP.HCM","abbr":"IU","city":"TP.HCM","kind":"Công lập","areas":["Công nghệ","Kỹ thuật","Kinh tế"],"majors":["Công nghệ thông tin","Khoa học dữ liệu","Trí tuệ nhân tạo","Logistics","Quản trị kinh doanh","Kinh doanh quốc tế","Tài chính - Ngân hàng","Ngôn ngữ Anh"],"website":"https://hcmiu.edu.vn","feeSummary":"45 – 85 triệu/năm"},{"id":"uth","name":"Trường Đại học Giao thông vận tải Thành phố Hồ Chí Minh","abbr":"UTH","city":"TP.HCM","kind":"Công lập","areas":["Kỹ thuật","Công nghệ","Kinh tế"],"majors":["Logistics","Kỹ thuật ô tô","Kỹ thuật xây dựng","Công nghệ thông tin","Kỹ thuật điện - điện tử","Quản trị kinh doanh","Kế toán - Kiểm toán"],"website":"https://ut.edu.vn","feeSummary":"14 – 42 triệu/năm"},{"id":"uah","name":"Trường Đại học Kiến trúc Thành phố Hồ Chí Minh","abbr":"UAH","city":"TP.HCM","kind":"Công lập","areas":["Kỹ thuật","Nghệ thuật"],"majors":["Thiết kế đồ họa","Kỹ thuật xây dựng","Kỹ thuật cơ điện tử"],"website":"https://uah.edu.vn","feeSummary":"24 – 85 triệu/năm"},{"id":"hcmufa","name":"Trường Đại học Mỹ thuật Thành phố Hồ Chí Minh","abbr":"HCMUFA","city":"TP.HCM","kind":"Công lập","areas":["Nghệ thuật"],"majors":["Thiết kế đồ họa"],"website":"https://hcmufa.edu.vn","feeSummary":"15 – 22 triệu/năm"}];
const UNIBOT_TUITION = {"ptit":{"feeRange":[35.9,58.3],"feeSource":"https://tuyensinh.ptithcm.edu.vn/de-an-tuyen-sinh/thong-tin-tuyen-sinh-dai-hoc-chinh-quy-nam-2026/","feeNote":"Gồm đại trà, chương trình đặc thù và chất lượng cao","feeYear":"2026–2027"},"hust":{"feeRange":[28,68],"feeSource":"https://vnexpress.net/hoc-phi-dai-hoc-bach-khoa-ha-noi-hust-nam-hoc-2026-2027-chi-tiet-nhat-5102344.html","feeNote":"Chương trình chuẩn và nhóm giảng dạy tiếng Anh/chất lượng cao; chưa gồm tất cả liên kết quốc tế","feeYear":"2026–2027"},"hcmut":{"feeRange":[31.5,88],"feeSource":"https://vtcnews.vn/cap-nhat-hoc-phi-nam-hoc-2026-2027-cua-hon-120-truong-dai-hoc-ar1028775.html","feeNote":"Các chương trình tiêu chuẩn và tiên tiến; phụ thuộc chương trình","feeYear":"2026–2027"},"hcmus":{"sourceYear":"2026–2027","sourceName":"Thông tin tuyển sinh năm 2026 – HCMUS","sourceUrl":"https://tuyensinh.hcmus.edu.vn/2026-thong-tin-tuyen-sinh/","tuitionByMajor":{"Trí tuệ nhân tạo":40.5,"Khoa học dữ liệu":40.5,"Công nghệ thông tin":40.5},"tuitionNote":"Triệu đồng/năm 2026–2027; CNTT là mức nhóm ngành máy tính và CNTT thông thường, không áp dụng chương trình tăng cường tiếng Anh/tiên tiến.","staff":{"professors":10,"associateProfessors":67,"doctorOther":"≈250","masters":"≈400"},"staffNote":"Báo cáo tháng 5/2026: 675 cán bộ giảng dạy; các con số tiến sĩ/thạc sĩ mang tính xấp xỉ theo trường công bố. Nhóm có thể giao nhau; KHÔNG cộng để tính tổng.","feeRange":[37,70],"feeSource":"https://vtcnews.vn/cap-nhat-hoc-phi-nam-hoc-2026-2027-cua-hon-120-truong-dai-hoc-ar1028775.html","feeNote":"Khoảng học phí các chương trình năm 2026–2027","feeYear":"2026–2027"},"uit":{"feeRange":[41,140],"feeSource":"https://thuvienphapluat.vn/banan/tin-tuc/muc-hoc-phi-dai-hoc-nam-20262027-tai-cac-truong-o-tphcm-la-bao-nhieu-21752","feeNote":"Khoảng tổng hợp nhiều chương trình; cần đối chiếu theo ngành","feeYear":"2026–2027"},"uet":{"feeRange":[38,44],"feeSource":"https://vtcnews.vn/cap-nhat-hoc-phi-nam-hoc-2026-2027-cua-hon-120-truong-dai-hoc-ar1028775.html","feeNote":"Học phí dự kiến","feeYear":"2026–2027"},"uel":{"feeRange":[35.8,73.5],"feeSource":"https://tuyensinh.uel.edu.vn/faq/","feeNote":"Tiếng Việt 35,8; Co-op tiếng Anh 55; tiếng Anh 73,5","feeYear":"2026–2027"},"ftu":{"feeRange":[28,88],"feeSource":"https://thongtintuyensinh.ftu.edu.vn/admissions-methods","feeNote":"Từ chương trình chuẩn đến chương trình tiên tiến i-Hons sau hỗ trợ học bổng","feeYear":"2026–2027"},"neu":{"feeRange":[20,68],"feeSource":"https://nhandan.vn/hoc-phi-dai-hoc-chinh-quy-khoi-truong-kinh-te-nam-2026-post983683.html","feeNote":"Chương trình chuẩn 20–28; tiên tiến/chất lượng cao 41–68","feeYear":"2026–2027"},"ctu":{"feeRange":[22,40],"feeSource":"https://daihoc.fpt.edu.vn/huong-nghiep/hoc-phi-cac-truong-dai-hoc-o-can-tho/","feeNote":"Ước tính từ bài tổng hợp, không phải bảng học phí chính thức của trường","feeYear":"2026–2027"},"ueh":{"feeRange":[40,80],"feeSource":"https://thuvienphapluat.vn/banan/tin-tuc/muc-hoc-phi-dai-hoc-nam-20262027-tai-cac-truong-o-tphcm-la-bao-nhieu-21752","feeNote":"Khoảng tham khảo tổng hợp; mức học phí thực tế thu theo tín chỉ và chương trình","feeYear":"2026–2027"},"tdt":{"feeRange":[55.6,64],"feeSource":"https://www.tdtu.edu.vn/giao-duc/hoc-phi-hoc-bong-2026","feeNote":"Một số nhóm ngành năm 2026–2027; chưa bao gồm tất cả chương trình và tiếng Anh","feeYear":"2026–2027"},"ump":{"feeRange":[45,88],"feeSource":"https://ump.edu.vn","feeNote":"Từ các ngành cử nhân kỹ thuật y học/điều dưỡng (45-50 tr) đến Y khoa (82,2-88 tr), Răng-Hàm-Mặt (84,7-90 tr/năm)","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":88,"Răng - Hàm - Mặt":90,"Dược học":63.5,"Điều dưỡng":46}},"hmu":{"feeRange":[30,55.2],"feeSource":"https://hmu.edu.vn","feeNote":"Y khoa & RHM 55,2 triệu/năm; Điều dưỡng tiên tiến 41,8 triệu/năm; Điều dưỡng cơ sở 30 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":55.2,"Răng - Hàm - Mặt":55.2,"Điều dưỡng":41.8,"Y học dự phòng":30}},"pnt":{"feeRange":[41.8,55.2],"feeSource":"https://pnt.edu.vn","feeNote":"Y khoa, Dược học, RHM 55,2 triệu/năm; Điều dưỡng và nhóm kỹ thuật y học 41,8 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":55.2,"Dược học":55.2,"Điều dưỡng":41.8}},"hup":{"feeRange":[24.5,52],"feeSource":"https://hup.edu.vn","feeNote":"Dược học hệ chuẩn khoảng 24,5 triệu/năm; hệ chất lượng cao/tiên tiến khoảng 49-52 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Dược học":24.5}},"ctump":{"feeRange":[44.1,58],"feeSource":"https://ctump.edu.vn","feeNote":"Chương trình đại trà tự chủ; Y khoa và RHM cao nhất khoảng 55-58 triệu/năm; Điều dưỡng khoảng 44 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":58,"Dược học":55,"Răng - Hàm - Mặt":58,"Điều dưỡng":44.1}},"hueump":{"feeRange":[29.3,58.5],"feeSource":"https://huemed-univ.edu.vn","feeNote":"Theo lộ trình tự chủ; Điều dưỡng, Y tế công cộng từ 29,3 triệu; Y khoa, Dược học, RHM từ 50-58,5 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":58.5,"Dược học":55,"Điều dưỡng":29.3,"Y học dự phòng":29.3}},"tbump":{"feeRange":[27.6,41.4],"feeSource":"https://tbump.edu.vn","feeNote":"Khối ngành sức khỏe công lập; Y khoa, Dược học khoảng 36-41,4 triệu/năm; Điều dưỡng 27,6 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":41.4,"Dược học":41.4,"Điều dưỡng":27.6,"Y học cổ truyền":36}},"vnuump":{"feeRange":[27.6,55],"feeSource":"https://ump.vnu.edu.vn","feeNote":"Y khoa & Răng Hàm Mặt từ 55 triệu/năm; Dược học từ 51 triệu/năm; các ngành cử nhân từ 27,6 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Y khoa":55,"Dược học":51,"Răng - Hàm - Mặt":55}},"hnue":{"feeRange":[0,25],"feeSource":"https://hnue.edu.vn","feeNote":"Ngành đào tạo giáo viên được Nhà nước hỗ trợ 100% học phí + 3,63 tr/tháng (Nghị định 116). Ngành ngoài sư phạm: 14–25 tr/năm","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Sư phạm tiếng Anh":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"hcmue":{"feeRange":[0,24],"feeSource":"https://hcmue.edu.vn","feeNote":"Miễn 100% học phí theo Nghị định 116 cho khối Sư phạm. Các ngành cử nhân ngoài sư phạm thu khoảng 14–24 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Sư phạm tiếng Anh":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"hpu2":{"feeRange":[0,22],"feeSource":"https://hpu2.edu.vn","feeNote":"Ngành đào tạo giáo viên miễn học phí (NĐ 116); ngành ngoài sư phạm thu theo trần Nghị định 97","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"uedudn":{"feeRange":[0,20],"feeSource":"https://ued.udn.vn","feeNote":"Khối sư phạm miễn học phí theo quy định nhà nước; nhóm ngành cử nhân khoa học xã hội và tự nhiên thu khoảng 14–20 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"hueedu":{"feeRange":[0,19.5],"feeSource":"https://dhsphue.edu.vn","feeNote":"Sinh viên sư phạm được nhận trợ cấp và miễn học phí; hệ ngoài sư phạm tính theo tín chỉ khoảng 14-19,5 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"tnue":{"feeRange":[0,19],"feeSource":"https://tnue.edu.vn","feeNote":"Hưởng chính sách miễn học phí ngành sư phạm theo Nghị định 116 của Chính phủ","feeYear":"2025–2026","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0}},"hlu":{"feeRange":[25.4,50.8],"feeSource":"https://hlu.edu.vn","feeNote":"Chương trình đại trà 25,38 triệu/năm (~725.000 đ/tín chỉ); Chương trình Chất lượng cao khoảng 50,76 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Luật":25.38,"Luật kinh tế":25.38}},"hcmulaw":{"feeRange":[35.25,83.6],"feeSource":"https://hcmulaw.edu.vn","feeNote":"Hệ chính quy chuẩn Luật & Quản trị kinh doanh 35,25 triệu/năm; Quản trị - Luật 41,8 triệu/năm; Chất lượng cao 70,5–83,6 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Luật":35.25,"Luật kinh tế":35.25}},"hcmute":{"feeRange":[28.8,58],"feeSource":"https://hcmute.edu.vn","feeNote":"Hệ chuẩn tiếng Việt từ 28,8–36 triệu/năm; Hệ đào tạo bằng tiếng Anh từ 49–58 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":36,"Kỹ thuật cơ điện tử":36,"Kỹ thuật ô tô":36,"Quản trị kinh doanh":28.8,"Logistics":30}},"utc":{"feeRange":[12.5,26],"feeSource":"https://utc.edu.vn","feeNote":"Chương trình chuẩn khối Kỹ thuật khoảng 466.000 đ/tín (~14–15 triệu/năm); Khối Kinh tế khoảng 400.000 đ/tín (~12,5 triệu/năm); Hệ CLC khoảng 22–26 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Kỹ thuật xây dựng":15,"Kỹ thuật ô tô":15,"Logistics":13.5,"Công nghệ thông tin":15}},"huce":{"feeRange":[16.4,45],"feeSource":"https://huce.edu.vn","feeNote":"Chương trình chuẩn khoảng 16,4 triệu/năm (1,64 tr/tháng); Các chương trình liên kết, Anh ngữ/Pháp ngữ từ 30–45 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Kỹ thuật xây dựng":16.4,"Công nghệ thông tin":16.4,"Kỹ thuật điện - điện tử":16.4}},"hau":{"feeRange":[13.5,40],"feeSource":"https://hau.edu.vn","feeNote":"Thiết kế đồ họa, thời trang khoảng 13,5 triệu/năm; Khối Kiến trúc, Xây dựng khoảng 16,4 triệu/năm; Tiên tiến khoảng 40 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Kỹ thuật xây dựng":16.4,"Thiết kế đồ họa":13.5}},"ou":{"feeRange":[22,45],"feeSource":"https://ou.edu.vn","feeNote":"Chương trình đại trà dao động 22–27 triệu/năm; Chương trình Chất lượng cao từ 40–45 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Quản trị kinh doanh":24,"Marketing":24,"Kế toán - Kiểm toán":24,"Công nghệ thông tin":26}},"hou":{"feeRange":[19.5,21],"feeSource":"https://hou.edu.vn","feeNote":"Kiến trúc/Đồ họa khoảng 19,5 triệu/năm; Kinh tế, Luật, CNTT khoảng 20,5 triệu/năm; Ngôn ngữ khoảng 20,9 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Quản trị kinh doanh":20.5,"Kế toán - Kiểm toán":20.5,"Công nghệ thông tin":20.5,"Thương mại điện tử":20.5}},"hvnh":{"feeRange":[25,41.5],"feeSource":"https://hvnh.edu.vn","feeNote":"Chương trình chuẩn khoảng 25-26,5 triệu/năm (740k-785k/tín); Chương trình Chất lượng cao 37 triệu/năm; Định hướng Nhật Bản 40-41,5 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Tài chính - Ngân hàng":25,"Kế toán - Kiểm toán":25,"Quản trị kinh doanh":25}},"hcma":{"feeRange":[25,50],"feeSource":"https://hvtc.edu.vn","feeNote":"Chương trình chuẩn 25 triệu/năm; Chương trình định hướng chứng chỉ quốc tế 50 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Tài chính - Ngân hàng":25,"Kế toán - Kiểm toán":25,"Quản trị kinh doanh":25}},"hcmussh":{"feeRange":[15.4,30],"feeSource":"https://hcmussh.edu.vn","feeNote":"Nhóm ngành khoa học xã hội cơ bản từ 15,4 triệu/năm; Báo chí, Ngôn ngữ Anh/Trung/Hàn từ 24-30 triệu/năm; Chất lượng cao 60 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":26,"Ngôn ngữ Trung Quốc":24,"Báo chí":24,"Ngôn ngữ Nhật":24,"Ngôn ngữ Hàn Quốc":24}},"usshvnu":{"feeRange":[15,35],"feeSource":"https://ussh.vnu.edu.vn","feeNote":"Hệ chuẩn theo quy định ĐHQGHN; Ngành Báo chí, Tâm lý học, Ngôn ngữ Anh chương trình chất lượng cao từ 30-35 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":30,"Báo chí":28,"Tâm lý học":22,"Ngôn ngữ Trung Quốc":25,"Ngôn ngữ Nhật":25}},"ulis":{"feeRange":[21,38],"feeSource":"https://ulis.vnu.edu.vn","feeNote":"Ngôn ngữ Anh, Pháp, Đức, Trung, Nhật, Hàn khoảng 38 triệu/năm (1 tr/tín); Ngôn ngữ Nga, Ả Rập 21 triệu/năm; Sư phạm tiếng Anh miễn học phí theo NĐ 116","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":38,"Ngôn ngữ Trung Quốc":38,"Ngôn ngữ Nhật":38,"Ngôn ngữ Hàn Quốc":38,"Sư phạm tiếng Anh":0}},"hanu":{"feeRange":[25,45],"feeSource":"https://hanu.edu.vn","feeNote":"Ngành ngôn ngữ chuẩn 720.000 đ/tín (~25–28 triệu/năm); Các ngành dạy bằng tiếng Anh (CNTT, QTKD) khoảng 32–40 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":28,"Ngôn ngữ Trung Quốc":28,"Ngôn ngữ Nhật":28,"Ngôn ngữ Hàn Quốc":28}},"ufl":{"feeRange":[15,32],"feeSource":"https://ufl.udn.vn","feeNote":"Chương trình chuẩn Ngôn ngữ 431.000 đ/tín (~15–17 triệu/năm); Chương trình Chất lượng cao khoảng 28–32 triệu/năm; Sư phạm tiếng Anh miễn học phí (NĐ 116)","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":17,"Ngôn ngữ Trung Quốc":16,"Ngôn ngữ Nhật":16,"Sư phạm tiếng Anh":0}},"huflit":{"feeRange":[38,44],"feeSource":"https://huflit.edu.vn","feeNote":"Tính theo tín chỉ (1.230.000 đ/tín lý thuyết, thực hành nhân 1.5). Trung bình 38–44 triệu/năm và cam kết không tăng học phí","feeYear":"2025–2026","tuitionByMajor":{"Ngôn ngữ Anh":40,"Ngôn ngữ Trung Quốc":40,"Ngôn ngữ Nhật":40,"Công nghệ thông tin":42}},"fpt":{"feeRange":[60,97.5],"feeSource":"https://daihoc.fpt.edu.vn","feeNote":"Hà Nội & TP.HCM: 28,7-32,5 triệu/học kỳ (năm 3 kỳ ~ 86-97,5 triệu/năm); Phân hiệu Đà Nẵng, Cần Thơ, Quy Nhơn ưu đãi khoảng 60-68 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":97.5,"Trí tuệ nhân tạo":97.5,"Quản trị kinh doanh":86,"Marketing":86,"Thiết kế đồ họa":86}},"duytan":{"feeRange":[28,98.8],"feeSource":"https://duytan.edu.vn","feeNote":"Chương trình chuẩn từ 28–35 triệu/năm; Tiên tiến quốc tế CMU/PSU từ 38–45 triệu/năm; Bác sĩ Đa khoa 94,4 triệu/năm; Bác sĩ RHM 98,8 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":32,"Quản trị kinh doanh":28,"Marketing":28,"Kỹ thuật xây dựng":28}},"vlu":{"feeRange":[45,95],"feeSource":"https://vanlanguni.edu.vn","feeNote":"Chương trình tiêu chuẩn từ 45–70 triệu/năm (1-1,6 tr/tín); Chương trình đặc biệt từ 80–95 triệu/năm; Khối sức khỏe/Y khoa có khung riêng cao hơn","feeYear":"2025–2026","tuitionByMajor":{"Quản trị kinh doanh":55,"Thiết kế đồ họa":60,"Ngôn ngữ Anh":50,"Điều dưỡng":55}},"hutech":{"feeRange":[50,65],"feeSource":"https://hutech.edu.vn","feeNote":"Tính theo tín chỉ (khoảng 1.400.000 đ/tín chỉ). Năm học gồm 3 kỳ, trung bình 50–60 triệu/năm; Khối Dược học khoảng 65 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":56,"Quản trị kinh doanh":52,"Ngôn ngữ Anh":50,"Dược học":65}},"ntt":{"feeRange":[37,75],"feeSource":"https://ntt.edu.vn","feeNote":"Khối Kinh tế, Xã hội, Công nghệ từ 37–55 triệu/năm; Dược học ~52 triệu/năm; Y khoa ~152 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Quản trị kinh doanh":42,"Ngôn ngữ Anh":38,"Dược học":52,"Y khoa":152}},"vhu":{"feeRange":[32,45],"feeSource":"https://vhu.edu.vn","feeNote":"Tính theo tín chỉ (728.000 – 1.537.000 đ/tín). Trung bình khoảng 32–45 triệu/năm (3 học kỳ), cam kết không tăng học phí toàn khóa","feeYear":"2025–2026","tuitionByMajor":{"Quản trị kinh doanh":38,"Ngôn ngữ Anh":36,"Tâm lý học":38}},"phenikaa":{"feeRange":[25.2,50],"feeSource":"https://phenikaa-uni.edu.vn","feeNote":"Khối Kỹ thuật & Kinh tế từ 25,2–46,2 triệu/năm (CNTT ~35,2 tr); Điều dưỡng 32 tr; Dược học 48 tr; Y khoa hệ đặc thù 150 tr/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":35.2,"Kỹ thuật cơ điện tử":32,"Điều dưỡng":32,"Ngôn ngữ Anh":28}},"dntu":{"feeRange":[26,42],"feeSource":"https://dntu.edu.vn","feeNote":"Thu theo tín chỉ định mức; Khối Công nghệ & Kinh tế khoảng 26–34 triệu/năm; Khối Điều dưỡng khoảng 38–42 triệu/năm","feeYear":"2025–2026","tuitionByMajor":{"Công nghệ thông tin":32,"Kỹ thuật ô tô":32,"Điều dưỡng":38,"Ngôn ngữ Anh":28}},"ufm":{"feeRange":[26,45],"feeSource":"https://tuyensinh.ufm.edu.vn","feeNote":"Chương trình chuẩn khoảng 26-28 triệu đồng/năm; Chương trình đặc thù và chất lượng cao khoảng 40-45 triệu đồng/năm.","feeYear":"2026–2027","tuitionByMajor":{"Marketing":27.5,"Kinh doanh quốc tế":27.5,"Thương mại điện tử":27.5,"Tài chính - Ngân hàng":26,"Kế toán - Kiểm toán":26,"Quản trị kinh doanh":26}},"sgu":{"feeRange":[0,33],"feeSource":"https://sgu.edu.vn","feeNote":"Sinh viên ngành Sư phạm được miễn 100% học phí và hỗ trợ sinh hoạt phí theo Nghị định 116. Các ngành ngoài sư phạm từ 14 – 33 triệu đồng/năm tùy chương trình.","feeYear":"2026–2027","tuitionByMajor":{"Sư phạm Toán":0,"Sư phạm Ngữ văn":0,"Sư phạm tiếng Anh":0,"Giáo dục Tiểu học":0,"Giáo dục Mầm non":0,"Công nghệ thông tin":28.5,"Kỹ thuật điện - điện tử":26,"Quản trị kinh doanh":24.5}},"iu":{"feeRange":[45,85],"feeSource":"https://hcmiu.edu.vn","feeNote":"Chương trình do ĐH Quốc tế cấp bằng khoảng 45–55 triệu/năm; Chương trình liên kết quốc tế (giai đoạn 1 tại Việt Nam) khoảng 65–85 triệu/năm.","feeYear":"2026–2027","tuitionByMajor":{"Công nghệ thông tin":50,"Khoa học dữ liệu":50,"Trí tuệ nhân tạo":50,"Logistics":50,"Quản trị kinh doanh":48,"Kinh doanh quốc tế":48,"Tài chính - Ngân hàng":48,"Ngôn ngữ Anh":45}},"uth":{"feeRange":[14,42],"feeSource":"https://ut.edu.vn/tuyen-sinh/","feeNote":"Chương trình chuẩn khoảng 14-16 triệu/năm; Chương trình chất lượng cao khoảng 38-42 triệu/năm.","feeYear":"2026–2027","tuitionByMajor":{"Logistics":28,"Kỹ thuật ô tô":26.5,"Kỹ thuật xây dựng":22,"Công nghệ thông tin":28,"Kỹ thuật điện - điện tử":26,"Quản trị kinh doanh":24,"Kế toán - Kiểm toán":24}},"uah":{"feeRange":[24,85],"feeSource":"https://uah.edu.vn","feeNote":"Chương trình đại trà khoảng 24-28 triệu đồng/năm; Chương trình tiên tiến / chất lượng cao từ 50 đến 85 triệu đồng/năm.","feeYear":"2026–2027","tuitionByMajor":{"Thiết kế đồ họa":28.5,"Kỹ thuật xây dựng":24,"Kỹ thuật cơ điện tử":24}},"hcmufa":{"feeRange":[15,22],"feeSource":"https://hcmufa.edu.vn","feeNote":"Học phí theo định mức khối ngành nghệ thuật nhà nước quy định, từ 1.5 – 2.2 triệu đồng/tháng (15 – 22 triệu/năm).","feeYear":"2026–2027","tuitionByMajor":{"Thiết kế đồ họa":18.5}}};
const UNIBOT_SCORES = {"hcmus":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":27.5,"score2024":27.82,"score2025":27.87,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":26.37,"score2024":26.78,"score2025":27.22,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D07","score2023":26.37,"score2024":26.78,"score2025":27.22,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":24.5,"score2024":24.9,"score2025":25.2,"trend":"up"},{"major":"An toàn thông tin","combination":"A00, A01","score2023":25.8,"score2024":26.2,"score2025":26.5,"trend":"up"}],"ptit":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":24.85,"score2024":25.17,"score2025":25.22,"trend":"up"},{"major":"An toàn thông tin","combination":"A00, A01","score2023":22.19,"score2024":22.73,"score2025":23.04,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":22.32,"score2024":22.84,"score2025":23.2,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":25.39,"score2024":25.66,"score2025":26.09,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":25.5,"score2024":25.8,"score2025":26.1,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D07","score2023":25.2,"score2024":25.5,"score2025":25.8,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":25,"score2024":25.3,"score2025":25.6,"trend":"up"}],"ctu":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":21.18,"score2024":21.72,"score2025":22.03,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.82,"score2024":24.14,"score2025":24.19,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":23.5,"score2024":23.9,"score2025":24.2,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":22.8,"score2024":23.2,"score2025":23.5,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":24.5,"score2024":24.8,"score2025":25.1,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":23.5,"score2024":23.9,"score2025":24.2,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":25,"score2024":25.4,"score2025":25.7,"trend":"up"},{"major":"Luật","combination":"C00, D01","score2023":24.2,"score2024":24.6,"score2025":24.9,"trend":"up"}],"huce":[{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":20.19,"score2024":20.73,"score2025":21.04,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":24.85,"score2024":25.17,"score2025":25.22,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":22.32,"score2024":22.84,"score2025":23.2,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":22,"score2024":22.5,"score2025":22.8,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":23.5,"score2024":23.9,"score2025":24.2,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":22.5,"score2024":22.9,"score2025":23.2,"trend":"up"}],"hau":[{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":21.18,"score2024":21.72,"score2025":22.03,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"V00, H00, D01","score2023":22.25,"score2024":22.47,"score2025":22.87,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":23.5,"score2024":23.9,"score2025":24.2,"trend":"up"}],"ou":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.54,"score2024":23.86,"score2025":23.91,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":25.26,"score2024":25.53,"score2025":25.96,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":23.04,"score2024":23.36,"score2025":23.41,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.04,"score2024":25.36,"score2025":25.41,"trend":"up"}],"hou":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.82,"score2024":24.14,"score2025":24.19,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":23.55,"score2024":24.05,"score2025":24.17,"trend":"up"}],"duytan":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":22.68,"score2024":23,"score2025":23.05,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":18.35,"score2024":18.89,"score2025":19.2,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.18,"score2024":21.5,"score2025":21.55,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":23.47,"score2024":23.74,"score2025":24.17,"trend":"up"}],"hust":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":26.85,"score2024":27.17,"score2025":27.22,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":26.84,"score2024":27.25,"score2025":27.69,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":24.85,"score2024":25.17,"score2025":25.22,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":24.32,"score2024":24.84,"score2025":25.2,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":25.57,"score2024":25.84,"score2025":25.91,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01","score2023":27.6,"score2024":28,"score2025":28.25,"trend":"up"},{"major":"An toàn thông tin","combination":"A00, A01","score2023":27.2,"score2024":27.6,"score2025":27.85,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":26.5,"score2024":26.9,"score2025":27.2,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":22.5,"score2024":23,"score2025":23.3,"trend":"up"}],"hcmut":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":27.5,"score2024":27.82,"score2025":27.87,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":25.5,"score2024":25.82,"score2025":25.87,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":24.83,"score2024":25.35,"score2025":25.71,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":23.04,"score2024":23.58,"score2025":23.89,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":25.85,"score2024":26.12,"score2025":26.19,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":26.8,"score2024":27.1,"score2025":27.35,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01","score2023":27.2,"score2024":27.5,"score2025":27.75,"trend":"up"}],"hcmute":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":24.68,"score2024":25,"score2025":25.05,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":22.68,"score2024":23,"score2025":23.05,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":23.38,"score2024":23.65,"score2025":23.72,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":25.47,"score2024":25.74,"score2025":26.17,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.18,"score2024":23.5,"score2025":23.55,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":25,"score2024":25.4,"score2025":25.7,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":21.5,"score2024":22,"score2025":22.3,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":25.5,"score2024":25.9,"score2025":26.2,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"A01, D01","score2023":24.8,"score2024":25.2,"score2025":25.5,"trend":"up"}],"uit":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":27.32,"score2024":27.64,"score2025":27.69,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":26.56,"score2024":26.97,"score2025":27.41,"trend":"up"},{"major":"An toàn thông tin","combination":"A00, A01","score2023":25.18,"score2024":25.72,"score2025":26.03,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D07","score2023":26.56,"score2024":26.97,"score2025":27.41,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":26.2,"score2024":26.6,"score2025":26.9,"trend":"up"}],"uet":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":27.32,"score2024":27.64,"score2025":27.69,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":26.56,"score2024":26.97,"score2025":27.41,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":25.01,"score2024":25.53,"score2025":25.89,"trend":"up"}],"utc":[{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":21.18,"score2024":21.72,"score2025":22.03,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":23.65,"score2024":23.92,"score2025":23.99,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":24.27,"score2024":24.54,"score2025":24.97,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"}],"ueh":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":25.82,"score2024":26.14,"score2025":26.19,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":24.77,"score2024":24.95,"score2025":25.31,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":25.55,"score2024":26.05,"score2025":26.17,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01, D07","score2023":27,"score2024":27.3,"score2025":27.55,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, A01, D01","score2023":26.2,"score2024":26.5,"score2025":26.8,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D01","score2023":26.5,"score2024":26.8,"score2025":27.1,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":26,"score2024":26.4,"score2025":26.7,"trend":"up"}],"uel":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.82,"score2024":24.14,"score2025":24.19,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":24.27,"score2024":24.54,"score2025":24.97,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":22.77,"score2024":22.95,"score2025":23.31,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":23.55,"score2024":24.05,"score2025":24.17,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":26.5,"score2024":26.8,"score2025":27.05,"trend":"up"},{"major":"Luật","combination":"A00, A01, D01, C00","score2023":25.5,"score2024":25.8,"score2025":26.1,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, A01, D01","score2023":26.2,"score2024":26.5,"score2025":26.8,"trend":"up"}],"ftu":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":25.82,"score2024":26.14,"score2025":26.19,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":24.77,"score2024":24.95,"score2025":25.31,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":27.55,"score2024":28.05,"score2025":28.17,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01, D07","score2023":27.2,"score2024":27.5,"score2025":27.75,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, A01, D01","score2023":27,"score2024":27.3,"score2025":27.5,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":27.5,"score2024":27.8,"score2025":28,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":27.4,"score2024":27.7,"score2025":27.95,"trend":"up"}],"neu":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":25.82,"score2024":26.14,"score2025":26.19,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":24.77,"score2024":24.95,"score2025":25.31,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":25.32,"score2024":25.64,"score2025":25.69,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":26.27,"score2024":26.54,"score2025":26.97,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":27.55,"score2024":28.05,"score2025":28.17,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01, D07","score2023":27.5,"score2024":27.8,"score2025":28.05,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, A01, D01","score2023":26.8,"score2024":27.1,"score2025":27.35,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D01","score2023":27.1,"score2024":27.4,"score2025":27.65,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":26.9,"score2024":27.2,"score2025":27.5,"trend":"up"}],"fpt":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01","score2023":22.56,"score2024":22.97,"score2025":23.41,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.82,"score2024":22.14,"score2025":22.19,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":22.27,"score2024":22.54,"score2025":22.97,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"V00, H00, D01","score2023":20.25,"score2024":20.47,"score2025":20.87,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":23.5,"score2024":23.8,"score2025":24.1,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":22.5,"score2024":22.9,"score2025":23.2,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":23,"score2024":23.4,"score2025":23.7,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01","score2023":23,"score2024":23.3,"score2025":23.6,"trend":"up"}],"tdt":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":21.01,"score2024":21.53,"score2025":21.89,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":19.18,"score2024":19.72,"score2025":20.03,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.82,"score2024":22.14,"score2025":22.19,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":20.77,"score2024":20.95,"score2025":21.31,"trend":"up"}],"ump":[{"major":"Y khoa","combination":"B00","score2023":27.99,"score2024":28.4,"score2025":28.46,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":24.4,"score2024":24.55,"score2025":24.83,"trend":"up"},{"major":"Răng - Hàm - Mặt","combination":"B00","score2023":27.06,"score2024":27.47,"score2025":27.91,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":22.72,"score2024":23.18,"score2025":23.6,"trend":"up"}],"hmu":[{"major":"Y khoa","combination":"B00","score2023":27.99,"score2024":28.4,"score2025":28.46,"trend":"up"},{"major":"Răng - Hàm - Mặt","combination":"B00","score2023":27.06,"score2024":27.47,"score2025":27.91,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":22.72,"score2024":23.18,"score2025":23.6,"trend":"up"},{"major":"Y học dự phòng","combination":"B00","score2023":22.54,"score2024":22.69,"score2025":22.91,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":25.5,"score2024":25.8,"score2025":26.1,"trend":"up"},{"major":"Y học cổ truyền","combination":"B00","score2023":24,"score2024":24.4,"score2025":24.7,"trend":"up"}],"pnt":[{"major":"Y khoa","combination":"B00","score2023":25.99,"score2024":26.4,"score2025":26.46,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":22.4,"score2024":22.55,"score2025":22.83,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":20.72,"score2024":21.18,"score2025":21.6,"trend":"up"},{"major":"Răng - Hàm - Mặt","combination":"B00","score2023":26.3,"score2024":26.6,"score2025":26.85,"trend":"up"},{"major":"Y học dự phòng","combination":"B00","score2023":22.5,"score2024":22.8,"score2025":23.1,"trend":"up"},{"major":"Y học cổ truyền","combination":"B00","score2023":23,"score2024":23.4,"score2025":23.7,"trend":"up"}],"hup":[{"major":"Dược học","combination":"A00, B00","score2023":22.4,"score2024":22.55,"score2025":22.83,"trend":"up"}],"ctump":[{"major":"Y khoa","combination":"B00","score2023":26.12,"score2024":26.53,"score2025":26.59,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":22.48,"score2024":22.63,"score2025":22.91,"trend":"up"},{"major":"Răng - Hàm - Mặt","combination":"B00","score2023":24.87,"score2024":25.28,"score2025":25.72,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":20.53,"score2024":20.99,"score2025":21.41,"trend":"up"}],"hueump":[{"major":"Y khoa","combination":"B00","score2023":24.9,"score2024":25.31,"score2025":25.37,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":23.6,"score2024":23.75,"score2025":24.03,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":20.81,"score2024":21.27,"score2025":21.69,"trend":"up"},{"major":"Y học dự phòng","combination":"B00","score2023":21.52,"score2024":21.67,"score2025":21.89,"trend":"up"}],"tbump":[{"major":"Y khoa","combination":"B00","score2023":26.12,"score2024":26.53,"score2025":26.59,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":22.48,"score2024":22.63,"score2025":22.91,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":20.53,"score2024":20.99,"score2025":21.41,"trend":"up"},{"major":"Y học cổ truyền","combination":"B00","score2023":22.19,"score2024":22.41,"score2025":22.81,"trend":"up"}],"vnuump":[{"major":"Y khoa","combination":"B00","score2023":24.9,"score2024":25.31,"score2025":25.37,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":23.6,"score2024":23.75,"score2025":24.03,"trend":"up"},{"major":"Răng - Hàm - Mặt","combination":"B00","score2023":25.52,"score2024":25.93,"score2025":26.37,"trend":"up"}],"hcmussh":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":24.16,"score2024":24.62,"score2025":24.7,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":23.65,"score2024":23.97,"score2025":24.02,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":23.53,"score2024":23.8,"score2025":23.87,"trend":"up"},{"major":"Ngôn ngữ Hàn Quốc","combination":"D01","score2023":22.86,"score2024":23.4,"score2025":23.71,"trend":"up"},{"major":"Báo chí","combination":"C00, D01","score2023":23.37,"score2024":23.59,"score2025":23.69,"trend":"up"}],"usshvnu":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":24.16,"score2024":24.62,"score2025":24.7,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":23.65,"score2024":23.97,"score2025":24.02,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":23.53,"score2024":23.8,"score2025":23.87,"trend":"up"},{"major":"Báo chí","combination":"C00, D01","score2023":23.37,"score2024":23.59,"score2025":23.69,"trend":"up"},{"major":"Tâm lý học","combination":"C00, D01","score2023":22.34,"score2024":22.8,"score2025":23.22,"trend":"up"}],"ulis":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":24.83,"score2024":25.29,"score2025":25.37,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":24.85,"score2024":25.17,"score2025":25.22,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":25.07,"score2024":25.34,"score2025":25.41,"trend":"up"},{"major":"Ngôn ngữ Hàn Quốc","combination":"D01","score2023":24.19,"score2024":24.73,"score2025":25.04,"trend":"up"},{"major":"Sư phạm tiếng Anh","combination":"D01","score2023":26.19,"score2024":26.73,"score2025":27.04,"trend":"up"}],"huflit":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":20.77,"score2024":21.23,"score2025":21.31,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":20.68,"score2024":21,"score2025":21.05,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":20.88,"score2024":21.15,"score2025":21.22,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":22.68,"score2024":23,"score2025":23.05,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A01, D01","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A01, D01","score2023":21.5,"score2024":22,"score2025":22.3,"trend":"up"},{"major":"Marketing","combination":"A01, D01","score2023":22,"score2024":22.5,"score2025":22.8,"trend":"up"},{"major":"Thương mại điện tử","combination":"A01, D01","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A01, D01","score2023":20,"score2024":20.5,"score2025":20.8,"trend":"up"}],"ufl":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":24.05,"score2024":24.51,"score2025":24.59,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":23.32,"score2024":23.64,"score2025":23.69,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":23.15,"score2024":23.42,"score2025":23.49,"trend":"up"},{"major":"Sư phạm tiếng Anh","combination":"D01","score2023":25.18,"score2024":25.72,"score2025":26.03,"trend":"up"}],"hanu":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":22.83,"score2024":23.29,"score2025":23.37,"trend":"up"},{"major":"Ngôn ngữ Nhật","combination":"D01, D06","score2023":23.07,"score2024":23.34,"score2025":23.41,"trend":"up"},{"major":"Ngôn ngữ Hàn Quốc","combination":"D01","score2023":22.19,"score2024":22.73,"score2025":23.04,"trend":"up"},{"major":"Ngôn ngữ Trung Quốc","combination":"D01, D04","score2023":22.85,"score2024":23.17,"score2025":23.22,"trend":"up"},{"major":"Marketing","combination":"D01","score2023":25.5,"score2024":25.8,"score2025":26.05,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"D01","score2023":25.2,"score2024":25.5,"score2025":25.75,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A01, D01","score2023":24.8,"score2024":25.2,"score2025":25.5,"trend":"up"}],"hnue":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":24.19,"score2024":24.73,"score2025":25.04,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":24.84,"score2024":25.25,"score2025":25.69,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":26.33,"score2024":26.79,"score2025":26.87,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":27.55,"score2024":27.77,"score2025":28.17,"trend":"up"},{"major":"Sư phạm tiếng Anh","combination":"D01","score2023":26.19,"score2024":26.73,"score2025":27.04,"trend":"up"}],"hcmue":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":25.04,"score2024":25.58,"score2025":25.89,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":24.37,"score2024":24.78,"score2025":25.22,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":27.63,"score2024":28.09,"score2025":28.17,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":26.19,"score2024":26.41,"score2025":26.81,"trend":"up"},{"major":"Sư phạm tiếng Anh","combination":"D01","score2023":27.04,"score2024":27.58,"score2025":27.89,"trend":"up"},{"major":"Tâm lý học","combination":"C00, D01, B00","score2023":25.8,"score2024":26.2,"score2025":26.45,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":26.5,"score2024":26.9,"score2025":27.15,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01","score2023":25.2,"score2024":25.6,"score2025":25.85,"trend":"up"}],"hpu2":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":22.19,"score2024":22.73,"score2025":23.04,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":22.84,"score2024":23.25,"score2025":23.69,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":24.33,"score2024":24.79,"score2025":24.87,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":25.55,"score2024":25.77,"score2025":26.17,"trend":"up"}],"uedudn":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":22.35,"score2024":22.89,"score2025":23.2,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":23.02,"score2024":23.43,"score2025":23.87,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":24.27,"score2024":24.73,"score2025":24.81,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":25.58,"score2024":25.8,"score2025":26.2,"trend":"up"}],"hueedu":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":22.35,"score2024":22.89,"score2025":23.2,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":23.02,"score2024":23.43,"score2025":23.87,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":24.27,"score2024":24.73,"score2025":24.81,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":25.58,"score2024":25.8,"score2025":26.2,"trend":"up"}],"tnue":[{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":22.19,"score2024":22.73,"score2025":23.04,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":22.84,"score2024":23.25,"score2025":23.69,"trend":"up"},{"major":"Sư phạm Toán","combination":"A00, A01","score2023":24.33,"score2024":24.79,"score2025":24.87,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":25.55,"score2024":25.77,"score2025":26.17,"trend":"up"}],"hlu":[{"major":"Luật","combination":"A00, C00, D01","score2023":24.91,"score2024":25.41,"score2025":25.79,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, C00, D01","score2023":27.55,"score2024":28.01,"score2025":28.09,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":26,"score2024":26.3,"score2025":26.55,"trend":"up"}],"hcmulaw":[{"major":"Luật","combination":"A00, C00, D01","score2023":24.53,"score2024":25.03,"score2025":25.41,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, C00, D01","score2023":27.66,"score2024":28.12,"score2025":28.2,"trend":"up"}],"vlu":[{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.82,"score2024":22.14,"score2025":22.19,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"V00, H00, D01","score2023":20.25,"score2024":20.47,"score2025":20.87,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":22.05,"score2024":22.51,"score2025":22.59,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":18.72,"score2024":19.18,"score2025":19.6,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":20,"score2024":20.5,"score2025":20.8,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":20,"score2024":20.4,"score2025":20.7,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":18.5,"score2024":19,"score2025":19.3,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":19,"score2024":19.5,"score2025":19.8,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":20.5,"score2024":21,"score2025":21.3,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"}],"hutech":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":22.68,"score2024":23,"score2025":23.05,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.18,"score2024":21.5,"score2025":21.55,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":20.77,"score2024":21.23,"score2025":21.31,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":21.6,"score2024":21.75,"score2025":22.03,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01, C01","score2023":20,"score2024":20.5,"score2025":20.8,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":19.5,"score2024":20,"score2025":20.3,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"A00, D01, H01","score2023":20.5,"score2024":21,"score2025":21.3,"trend":"up"},{"major":"Marketing","combination":"A00, A01, D01","score2023":21,"score2024":21.4,"score2025":21.7,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":19,"score2024":19.5,"score2025":19.8,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"}],"ntt":[{"major":"Y khoa","combination":"B00","score2023":23.99,"score2024":24.4,"score2025":24.46,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":20.4,"score2024":20.55,"score2025":20.83,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":22.05,"score2024":22.51,"score2025":22.59,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.82,"score2024":22.14,"score2025":22.19,"trend":"up"}],"vhu":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":22.05,"score2024":22.51,"score2025":22.59,"trend":"up"},{"major":"Tâm lý học","combination":"C00, D01","score2023":20.72,"score2024":21.18,"score2025":21.6,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":21.82,"score2024":22.14,"score2025":22.19,"trend":"up"}],"phenikaa":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":22.55,"score2024":22.87,"score2025":22.92,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":20.55,"score2024":20.87,"score2025":20.92,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":18.99,"score2024":19.45,"score2025":19.87,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":20.77,"score2024":21.23,"score2025":21.31,"trend":"up"}],"dntu":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":22.85,"score2024":23.17,"score2025":23.22,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":21.57,"score2024":21.84,"score2025":21.91,"trend":"up"},{"major":"Điều dưỡng","combination":"B00","score2023":18.61,"score2024":19.07,"score2025":19.49,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":20.83,"score2024":21.29,"score2025":21.37,"trend":"up"}],"hvnh":[{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":24.16,"score2024":24.34,"score2025":24.7,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":22.85,"score2024":23.17,"score2025":23.22,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.35,"score2024":23.67,"score2025":23.72,"trend":"up"}],"hcma":[{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":24.16,"score2024":24.34,"score2025":24.7,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":22.85,"score2024":23.17,"score2025":23.22,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":23.35,"score2024":23.67,"score2025":23.72,"trend":"up"}],"ufm":[{"major":"Marketing","combination":"A00, A01, D01, D07","score2023":25.8,"score2024":26.1,"score2025":26.35,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01, D07","score2023":25.5,"score2024":25.85,"score2025":26.1,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01, D07","score2023":25.1,"score2024":25.5,"score2025":25.75,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01, D07","score2023":24.3,"score2024":24.7,"score2025":25,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01, D07","score2023":24,"score2024":24.4,"score2025":24.65,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01, D07","score2023":24.6,"score2024":25,"score2025":25.3,"trend":"up"}],"sgu":[{"major":"Sư phạm Toán","combination":"A00, A01","score2023":26.85,"score2024":27.25,"score2025":27.45,"trend":"up"},{"major":"Sư phạm tiếng Anh","combination":"D01","score2023":26.5,"score2024":27.05,"score2025":27.35,"trend":"up"},{"major":"Sư phạm Ngữ văn","combination":"C00, D01","score2023":25.75,"score2024":26.2,"score2025":26.5,"trend":"up"},{"major":"Giáo dục Tiểu học","combination":"C00, D01","score2023":25,"score2024":25.4,"score2025":25.65,"trend":"up"},{"major":"Giáo dục Mầm non","combination":"M00, M01","score2023":23.5,"score2024":23.9,"score2025":24.2,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01","score2023":25.25,"score2024":25.7,"score2025":25.9,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01","score2023":23.1,"score2024":23.5,"score2025":23.8,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":24.15,"score2024":24.5,"score2025":24.8,"trend":"up"}],"iu":[{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25,"score2024":25.5,"score2025":25.8,"trend":"up"},{"major":"Khoa học dữ liệu","combination":"A00, A01, D01","score2023":24.5,"score2024":25,"score2025":25.3,"trend":"up"},{"major":"Trí tuệ nhân tạo","combination":"A00, A01, D01","score2023":24.8,"score2024":25.2,"score2025":25.5,"trend":"up"},{"major":"Logistics","combination":"A00, A01, D01","score2023":25.2,"score2024":25.6,"score2025":25.9,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":24,"score2024":24.4,"score2025":24.7,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":24.5,"score2024":24.8,"score2025":25.1,"trend":"up"},{"major":"Tài chính - Ngân hàng","combination":"A00, A01, D01","score2023":23.5,"score2024":23.8,"score2025":24.1,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01, A01","score2023":25,"score2024":25.4,"score2025":25.7,"trend":"up"}],"uth":[{"major":"Logistics","combination":"A00, A01, D01, D07","score2023":25.6,"score2024":25.9,"score2025":26.2,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01, C01","score2023":24.5,"score2024":24.9,"score2025":25.2,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.1,"score2024":25.5,"score2025":25.75,"trend":"up"},{"major":"Kỹ thuật điện - điện tử","combination":"A00, A01, D07","score2023":23.5,"score2024":23.9,"score2025":24.1,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01, C01","score2023":20,"score2024":20.5,"score2025":20.8,"trend":"up"},{"major":"Quản trị kinh doanh","combination":"A00, A01, D01","score2023":24.2,"score2024":24.6,"score2025":24.9,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":23.8,"score2024":24.2,"score2025":24.5,"trend":"up"}],"uah":[{"major":"Thiết kế đồ họa","combination":"H01, H06","score2023":25.65,"score2024":26.05,"score2025":26.35,"trend":"up"},{"major":"Kỹ thuật xây dựng","combination":"A00, A01","score2023":21,"score2024":21.5,"score2025":21.8,"trend":"up"},{"major":"Kỹ thuật cơ điện tử","combination":"A00, A01","score2023":20.5,"score2024":21,"score2025":21.4,"trend":"up"}],"hcmufa":[{"major":"Thiết kế đồ họa","combination":"H00, H01","score2023":26,"score2024":26.5,"score2025":26.85,"trend":"up"}],"tdtu":[{"major":"Marketing","combination":"A00, A01, D01","score2023":26,"score2024":26.3,"score2025":26.55,"trend":"up"},{"major":"Kế toán - Kiểm toán","combination":"A00, A01, D01","score2023":24.8,"score2024":25.1,"score2025":25.35,"trend":"up"},{"major":"Kỹ thuật ô tô","combination":"A00, A01","score2023":24.5,"score2024":24.9,"score2025":25.2,"trend":"up"},{"major":"Thiết kế đồ họa","combination":"H00, H01","score2023":25.2,"score2024":25.6,"score2025":25.85,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":25.8,"score2024":26.1,"score2025":26.35,"trend":"up"},{"major":"Dược học","combination":"A00, B00","score2023":25.5,"score2024":25.8,"score2025":26.05,"trend":"up"}],"ba":[{"major":"Marketing","combination":"A00, A01, D01","score2023":26,"score2024":26.3,"score2025":26.55,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":26.2,"score2024":26.5,"score2025":26.75,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":26.1,"score2024":26.4,"score2025":26.65,"trend":"up"},{"major":"Công nghệ thông tin","combination":"A00, A01, D01","score2023":25.8,"score2024":26.1,"score2025":26.35,"trend":"up"},{"major":"Luật kinh tế","combination":"A00, A01, D01","score2023":25.5,"score2024":25.8,"score2025":26.05,"trend":"up"}],"aof":[{"major":"Marketing","combination":"A00, A01, D01","score2023":25.8,"score2024":26.1,"score2025":26.35,"trend":"up"},{"major":"Kinh doanh quốc tế","combination":"A00, A01, D01","score2023":26,"score2024":26.3,"score2025":26.55,"trend":"up"},{"major":"Thương mại điện tử","combination":"A00, A01, D01","score2023":25.9,"score2024":26.2,"score2025":26.45,"trend":"up"},{"major":"Ngôn ngữ Anh","combination":"D01","score2023":26.2,"score2024":26.5,"score2025":26.75,"trend":"up"}],"ulaw":[{"major":"Ngôn ngữ Anh","combination":"D01","score2023":25.8,"score2024":26.1,"score2025":26.35,"trend":"up"}],"ussh":[{"major":"Tâm lý học","combination":"C00, D01, B00","score2023":26.2,"score2024":26.6,"score2025":26.85,"trend":"up"}]};
const UNIBOT_MAJORS = [{"name":"Công nghệ thông tin","icon":"💻","group":"Công nghệ","desc":"Phần mềm, hệ thống máy tính, lập trình, hạ tầng và ứng dụng công nghệ.","jobs":"Lập trình viên, kỹ sư phần mềm, quản trị hệ thống","skills":"Tư duy logic, giải quyết vấn đề, ngoại ngữ","iconName":"Code2"},{"name":"Trí tuệ nhân tạo","icon":"🤖","group":"Công nghệ","desc":"Xây dựng hệ thống có khả năng học từ dữ liệu, nhận dạng và hỗ trợ ra quyết định.","jobs":"Kỹ sư AI, kỹ sư học máy, chuyên viên dữ liệu","skills":"Toán, lập trình, phân tích dữ liệu","iconName":"Bot"},{"name":"Khoa học dữ liệu","icon":"📊","group":"Công nghệ","desc":"Thu thập, xử lý và phân tích dữ liệu để tìm ra thông tin hữu ích.","jobs":"Data analyst, data scientist","skills":"Thống kê, Python, tư duy phân tích","iconName":"Database"},{"name":"An toàn thông tin","icon":"🔐","group":"Công nghệ","desc":"Bảo vệ hệ thống, mạng và dữ liệu trước các rủi ro an ninh mạng.","jobs":"Chuyên viên bảo mật, kỹ sư an ninh mạng","skills":"Mạng máy tính, điều tra, tư duy hệ thống","iconName":"ShieldCheck"},{"name":"Kỹ thuật cơ điện tử","icon":"⚙️","group":"Kỹ thuật","desc":"Kết hợp cơ khí, điện tử và điều khiển để tạo ra máy móc và hệ thống tự động.","jobs":"Kỹ sư cơ điện tử, kỹ sư robot","skills":"Vật lý, thiết kế kỹ thuật, lập trình","iconName":"Cog"},{"name":"Kỹ thuật điện - điện tử","icon":"⚡","group":"Kỹ thuật","desc":"Nghiên cứu, thiết kế và vận hành các hệ thống điện, điện tử và thiết bị.","jobs":"Kỹ sư điện, kỹ sư điện tử","skills":"Toán, vật lý, phân tích mạch","iconName":"Zap"},{"name":"Kỹ thuật ô tô","icon":"🚗","group":"Kỹ thuật","desc":"Thiết kế, kiểm tra và phát triển hệ thống trên ô tô, gồm cả xe điện.","jobs":"Kỹ sư ô tô, kỹ sư kiểm định","skills":"Cơ khí, điện, tư duy kỹ thuật","iconName":"Car"},{"name":"Kỹ thuật xây dựng","icon":"🏗️","group":"Kỹ thuật","desc":"Thiết kế, tổ chức thi công và quản lý chất lượng công trình.","jobs":"Kỹ sư xây dựng, kỹ sư công trường","skills":"Toán, bản vẽ, quản lý dự án","iconName":"HardHat"},{"name":"Quản trị kinh doanh","icon":"🏢","group":"Kinh tế","desc":"Quản lý hoạt động doanh nghiệp, nhân lực, chiến lược và vận hành.","jobs":"Chuyên viên kinh doanh, quản lý dự án","skills":"Giao tiếp, tổ chức, phân tích","iconName":"Briefcase"},{"name":"Marketing","icon":"📣","group":"Kinh tế","desc":"Nghiên cứu khách hàng, thương hiệu, nội dung và các kênh tiếp thị.","jobs":"Digital marketer, chuyên viên thương hiệu","skills":"Sáng tạo, phân tích, giao tiếp","iconName":"Megaphone"},{"name":"Tài chính - Ngân hàng","icon":"💳","group":"Kinh tế","desc":"Quản lý tiền tệ, đầu tư, tài chính doanh nghiệp và dịch vụ ngân hàng.","jobs":"Chuyên viên tài chính, chuyên viên ngân hàng","skills":"Toán, phân tích, cẩn thận","iconName":"Landmark"},{"name":"Kế toán - Kiểm toán","icon":"🧮","group":"Kinh tế","desc":"Ghi nhận, tổng hợp, kiểm tra và báo cáo thông tin tài chính.","jobs":"Kế toán viên, kiểm toán viên","skills":"Chi tiết, chuẩn xác, phân tích","iconName":"Calculator"},{"name":"Logistics","icon":"🚢","group":"Kinh tế","desc":"Tối ưu hoạt động vận chuyển, kho hàng và chuỗi cung ứng.","jobs":"Điều phối vận tải, chuyên viên chuỗi cung ứng","skills":"Tổ chức, công nghệ, ngoại ngữ","iconName":"Truck"},{"name":"Thương mại điện tử","icon":"🛍️","group":"Kinh tế","desc":"Vận hành hoạt động kinh doanh trên nền tảng trực tuyến.","jobs":"Chuyên viên sàn TMĐT, vận hành thương mại số","skills":"Phân tích số liệu, tiếp thị, công nghệ","iconName":"ShoppingBag"},{"name":"Kinh doanh quốc tế","icon":"🌏","group":"Kinh tế","desc":"Giao thương, quản lý và phát triển hoạt động kinh doanh xuyên biên giới.","jobs":"Chuyên viên xuất nhập khẩu, kinh doanh quốc tế","skills":"Ngoại ngữ, giao tiếp, kinh tế","iconName":"Globe"},{"name":"Thiết kế đồ họa","icon":"🎨","group":"Sáng tạo","desc":"Sáng tạo hình ảnh và giải pháp truyền thông bằng công cụ thiết kế.","jobs":"Graphic designer, UI designer","skills":"Sáng tạo, thẩm mỹ, công cụ số","iconName":"PenTool"},{"name":"Y khoa","icon":"🩺","group":"Y - Dược","desc":"Đào tạo bác sĩ, kiến thức bệnh học và thực hành lâm sàng.","jobs":"Bác sĩ","skills":"Sinh học, giao tiếp, tư duy khoa học","iconName":"Stethoscope"},{"name":"Dược học","icon":"💊","group":"Y - Dược","desc":"Nghiên cứu, sử dụng, phát triển và quản lý thuốc.","jobs":"Dược sĩ","skills":"Hóa học, sinh học, tỉ mỉ","iconName":"Pill"},{"name":"Răng - Hàm - Mặt","icon":"🦷","group":"Y - Dược","desc":"Chăm sóc, điều trị và phục hồi sức khỏe răng miệng.","jobs":"Bác sĩ răng hàm mặt","skills":"Sinh học, khéo léo","iconName":"Sparkles"},{"name":"Điều dưỡng","icon":"🏥","group":"Y - Dược","desc":"Chăm sóc người bệnh và phối hợp trong điều trị.","jobs":"Điều dưỡng viên","skills":"Chăm sóc, giao tiếp","iconName":"HeartPulse"},{"name":"Y học dự phòng","icon":"🧬","group":"Y - Dược","desc":"Phòng ngừa bệnh tật và quản lý sức khỏe cộng đồng.","jobs":"Bác sĩ y học dự phòng","skills":"Dịch tễ, phân tích","iconName":"Activity"},{"name":"Y học cổ truyền","icon":"🌿","group":"Y - Dược","desc":"Chăm sóc sức khỏe bằng phương pháp y học cổ truyền.","jobs":"Bác sĩ y học cổ truyền","skills":"Sinh học, quan sát","iconName":"Leaf"},{"name":"Ngôn ngữ Anh","icon":"🇬🇧","group":"Ngôn ngữ","desc":"Nghiên cứu ngôn ngữ và ứng dụng giao tiếp, biên phiên dịch.","jobs":"Biên dịch viên, chuyên viên đối ngoại","skills":"Tiếng Anh, giao tiếp","iconName":"Languages"},{"name":"Ngôn ngữ Trung Quốc","icon":"🇨🇳","group":"Ngôn ngữ","desc":"Học tiếng Trung, văn hóa và ứng dụng nghề nghiệp.","jobs":"Biên phiên dịch, đối ngoại","skills":"Tiếng Trung, văn hóa","iconName":"Languages"},{"name":"Ngôn ngữ Nhật","icon":"🇯🇵","group":"Ngôn ngữ","desc":"Học tiếng Nhật và kiến thức văn hóa xã hội.","jobs":"Biên dịch viên, chuyên viên tiếng Nhật","skills":"Tiếng Nhật, giao tiếp","iconName":"Languages"},{"name":"Ngôn ngữ Hàn Quốc","icon":"🇰🇷","group":"Ngôn ngữ","desc":"Học tiếng Hàn trong giao tiếp và công việc.","jobs":"Chuyên viên tiếng Hàn","skills":"Ngôn ngữ, văn hóa","iconName":"Languages"},{"name":"Sư phạm tiếng Anh","icon":"📖","group":"Sư phạm","desc":"Đào tạo dạy tiếng Anh và phương pháp sư phạm.","jobs":"Giáo viên tiếng Anh","skills":"Tiếng Anh, tổ chức lớp","iconName":"GraduationCap"},{"name":"Giáo dục Tiểu học","icon":"👩‍🏫","group":"Sư phạm","desc":"Đào tạo giáo viên dạy học ở bậc tiểu học.","jobs":"Giáo viên tiểu học","skills":"Giao tiếp, tâm lý trẻ","iconName":"BookOpen"},{"name":"Giáo dục Mầm non","icon":"🧸","group":"Sư phạm","desc":"Giáo dục và chăm sóc trẻ lứa tuổi mầm non.","jobs":"Giáo viên mầm non","skills":"Kiên nhẫn, sáng tạo","iconName":"Smile"},{"name":"Sư phạm Toán","icon":"📐","group":"Sư phạm","desc":"Toán học và phương pháp dạy học toán.","jobs":"Giáo viên toán","skills":"Toán, diễn giải","iconName":"Binary"},{"name":"Sư phạm Ngữ văn","icon":"📚","group":"Sư phạm","desc":"Văn học, ngôn ngữ và phương pháp giảng dạy.","jobs":"Giáo viên ngữ văn","skills":"Đọc, viết, trình bày","iconName":"BookMarked"},{"name":"Báo chí","icon":"📰","group":"Xã hội","desc":"Sản xuất, biên tập và truyền tải thông tin.","jobs":"Phóng viên, biên tập viên","skills":"Viết, phỏng vấn","iconName":"Newspaper"},{"name":"Tâm lý học","icon":"🧠","group":"Xã hội","desc":"Nghiên cứu hành vi, nhận thức và cảm xúc con người.","jobs":"Chuyên viên tâm lý","skills":"Lắng nghe, phân tích","iconName":"Brain"},{"name":"Luật","icon":"⚖️","group":"Luật","desc":"Hệ thống pháp luật và thực hành pháp lý.","jobs":"Chuyên viên pháp chế","skills":"Đọc hiểu, lập luận","iconName":"Scale"},{"name":"Luật kinh tế","icon":"📜","group":"Luật","desc":"Pháp luật trong hoạt động kinh doanh và thương mại.","jobs":"Chuyên viên pháp chế doanh nghiệp","skills":"Phân tích, luật thương mại","iconName":"FileText"}];
const UNIBOT_CUSTOM_NAMES = {"ba":{"name":"Học viện Ngân hàng","abbr":"HVNH","city":"Hà Nội"},"aof":{"name":"Học viện Tài chính","abbr":"HVTC","city":"Hà Nội"},"iu":{"name":"Trường Đại học Quốc tế – ĐHQG TP.HCM","abbr":"IU","city":"TP.HCM"},"ufm":{"name":"Trường Đại học Tài chính - Marketing","abbr":"UFM","city":"TP.HCM"},"hcmus":{"name":"Trường ĐH Khoa học tự nhiên – ĐHQG TP.HCM","abbr":"HCMUS","city":"TP.HCM"},"hust":{"name":"Đại học Bách khoa Hà Nội","abbr":"HUST","city":"Hà Nội"},"hcmut":{"name":"Trường ĐH Bách khoa – ĐHQG TP.HCM","abbr":"HCMUT","city":"TP.HCM"},"uit":{"name":"Trường ĐH Công nghệ Thông tin – ĐHQG TP.HCM","abbr":"UIT","city":"TP.HCM"},"uet":{"name":"Trường ĐH Công nghệ – ĐHQGHN","abbr":"UET","city":"Hà Nội"},"ptit":{"name":"Học viện Công nghệ Bưu chính Viễn thông","abbr":"PTIT","city":"Nhiều cơ sở"},"ftu":{"name":"Trường Đại học Ngoại thương","abbr":"FTU","city":"Nhiều cơ sở"},"neu":{"name":"Đại học Kinh tế Quốc dân","abbr":"NEU","city":"Hà Nội"},"ueh":{"name":"Đại học Kinh tế TP.HCM","abbr":"UEH","city":"TP.HCM"},"uel":{"name":"Trường ĐH Kinh tế - Luật – ĐHQG TP.HCM","abbr":"UEL","city":"TP.HCM"},"fpt":{"name":"Trường Đại học FPT","abbr":"FPT","city":"Nhiều cơ sở"},"vlu":{"name":"Trường Đại học Văn Lang","abbr":"VLU","city":"TP.HCM"},"huflit":{"name":"Trường ĐH Ngoại ngữ - Tin học TP.HCM","abbr":"HUFLIT","city":"TP.HCM"}};
const UNIBOT_SAMPLE_GROUPS = [{"id":1,"title":"1. Điểm thi + Ngành học cụ thể (Khuyên dùng)","badge":"Chính xác 100%","questions":["Tôi thi được 25 điểm muốn học kinh tế ngành kinh doanh quốc tế thì nên học trường nào?","Em được 24 điểm muốn học Công nghệ thông tin ở TP.HCM nên chọn trường nào?","26 điểm khối D01 ngành Marketing vào trường nào an toàn?","27 điểm ngành Y khoa có cơ hội đỗ trường nào?","22 điểm ngành Quản trị kinh doanh nên nộp trường nào?","23 điểm khối A01 ngành Tài chính ngân hàng"]},{"id":2,"title":"2. Gợi ý theo Mức điểm thi chung","badge":"Định hướng","questions":["Tôi được 24 điểm nên học trường nào?","25 điểm khối A00 nên đăng ký những trường nào?","26.5 điểm khối D01 nên chọn trường nào có cơ hội việc làm tốt?","21 điểm khối D có vào được trường công lập không?","27 điểm khối B00 nên học trường nào?"]},{"id":3,"title":"3. Tra cứu Điểm chuẩn 3 năm gần nhất","badge":"2023 - 2025","questions":["Điểm chuẩn Bách Khoa","Điểm chuẩn trường Đại học Khoa học Tự nhiên TP.HCM","Điểm chuẩn PTIT 3 năm gần nhất","Điểm chuẩn Đại học Ngoại ngữ ĐHQGHN lấy bao nhiêu?","Trường UEL năm 2025 lấy bao nhiêu điểm?"]},{"id":4,"title":"4. Tra cứu Học phí chính thức 2026–2027","badge":"Học phí mới","questions":["Học phí Bách Khoa Hà Nội là bao nhiêu?","Học phí trường PTIT năm 2026","Học phí Đại học Ngoại Thương","Học phí Đại học FPT tốn bao nhiêu tiền một năm?","Học phí trường NEU năm học mới"]},{"id":5,"title":"5. So sánh đối chiếu 2 trường đại học","badge":"Side-by-side","questions":["So sánh Bách Khoa và PTIT","So sánh trường HUST và UET","So sánh UEH và UEL ngành kinh tế","FTU vs NEU trường nào đào tạo kinh doanh tốt hơn?","So sánh học phí giữa Bách Khoa và Sư phạm Kỹ thuật"]},{"id":6,"title":"6. Khám phá trường theo Ngành học","badge":"Ngành nghề","questions":["Ngành Kinh doanh quốc tế có những trường nào đào tạo?","Ngành Trí tuệ nhân tạo nên học ở đâu tốt nhất?","Các trường đào tạo ngành Công nghệ thông tin tại Hà Nội","Ngành Marketing học gì và ra trường làm nghề gì?"]},{"id":7,"title":"7. Chính sách Miễn giảm học phí & Học bổng","badge":"Học bổng","questions":["Những trường nào được miễn 100% học phí?","Chính sách học phí ngành sư phạm theo Nghị định 116 như thế nào?","Học trường nào không tốn tiền học phí?"]},{"id":8,"title":"8. Tư vấn Chiến lược & Tâm lý (Gemini AI)","badge":"Tư vấn sâu","questions":["Em đang phân vân giữa ngành AI và An toàn thông tin, ngành nào sau này ra trường dễ xin việc hơn?","Học Kinh doanh quốc tế có bắt buộc phải giỏi tiếng Anh không?","Chiến lược đặt nguyện vọng 1, 2, 3 như thế nào để không bị trượt oan?","Lời khuyên giảm áp lực tâm lý cho học sinh trước kỳ thi đại học"]}];

class UniBot {
  constructor() {
    this.isOpen = false;
    this.isSamplesOpen = false;
    this.messages = [];
    this.loading = false;
    this.customApiKey = localStorage.getItem('unibot_gemini_api_key') || '';
    this.init();
  }

  init() {
    this.loadMessages();
    this.renderWidget();
    this.bindEvents();
    this.renderSamplesList();
  }

  loadMessages() {
    const saved = sessionStorage.getItem('unibot_chat_history');
    if (saved) {
      try {
        this.messages = JSON.parse(saved);
      } catch (e) {
        this.messages = [];
      }
    }
    if (this.messages.length === 0) {
      this.messages = [
        {
          role: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: 'Xin chào! Mình là **UniBot AI** 🎓 - Trợ lý tuyển sinh thông minh của UniFind.\n\nBạn có thể gõ câu hỏi bất kỳ hoặc bấm vào nút **[💡 Mẫu câu hỏi]** ở góc trên để chọn nhanh trong **8 nhóm câu hỏi mẫu** có sẵn nhé!'
        }
      ];
    }
  }

  saveMessages() {
    try {
      sessionStorage.setItem('unibot_chat_history', JSON.stringify(this.messages));
    } catch (e) {}
  }

  renderWidget() {
    const existing = document.getElementById('unibot-widget-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'unibot-widget-container';
    container.innerHTML = `
      <!-- Floating Launcher Button -->
      <button class="unibot-launcher" id="unibot-launcher-btn" title="Hỏi trợ lý tuyển sinh AI">
        <div class="unibot-launcher-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
            <rect x="3" y="8" width="18" height="12" rx="4"/>
            <line x1="8" y1="13" x2="8" y2="13.01"/>
            <line x1="16" y1="13" x2="16" y2="13.01"/>
            <line x1="9" y1="17" x2="15" y2="17"/>
          </svg>
          <span class="unibot-launcher-badge"></span>
        </div>
        <span class="unibot-launcher-text">Hỏi UniBot AI</span>
      </button>

      <!-- Chat Modal -->
      <div class="unibot-modal unibot-hidden" id="unibot-modal-window">
        <!-- Header -->
        <div class="unibot-header">
          <div class="unibot-header-info">
            <div class="unibot-avatar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
                <rect x="3" y="8" width="18" height="12" rx="4"/>
                <circle cx="9" cy="13" r="1"/>
                <circle cx="15" cy="13" r="1"/>
                <line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:6px;">
                <h3 class="unibot-title">UniBot AI</h3>
                <!-- Nút Mẫu câu hỏi nổi bật trên Header -->
                <button type="button" class="unibot-btn-samples" id="unibot-btn-open-samples" title="Bấm để xem 8 nhóm mẫu câu hỏi tham khảo">
                  <span>💡 Mẫu câu hỏi</span>
                </button>
              </div>
              <p class="unibot-subtitle">
                <span class="unibot-status-dot"></span>
                Tư vấn chọn trường &amp; ngành thông minh
              </p>
            </div>
          </div>
          <div class="unibot-header-actions">
            <button class="unibot-btn-icon" id="unibot-btn-settings" title="Cài đặt AI">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
            <button class="unibot-btn-icon" id="unibot-btn-clear" title="Xóa lịch sử chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              </svg>
            </button>
            <button class="unibot-btn-icon" id="unibot-btn-close" title="Đóng">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Settings Dialog -->
        <div class="unibot-settings-dialog" id="unibot-settings-dialog" style="display: none;">
          <h4>Cấu hình AI Chatbot</h4>
          <p>Hệ thống tự động sử dụng <strong>Google Gemini Free AI</strong> và <strong>Dữ liệu 56 trường đại học</strong>. Nhập API Key riêng nếu muốn:</p>
          <input type="text" id="unibot-api-key-input" class="unibot-settings-input" placeholder="Dán Gemini API Key cá nhân..." value="${this.customApiKey}" />
          <div class="unibot-settings-actions">
            <button class="unibot-btn-secondary" id="unibot-settings-cancel">Hủy</button>
            <button class="unibot-btn-primary" id="unibot-settings-save">Lưu cấu hình</button>
          </div>
        </div>

        <!-- Chat Body (Không còn bị thanh gợi ý che khuất) -->
        <div class="unibot-body" id="unibot-chat-body"></div>

        <!-- Footer / Input -->
        <div class="unibot-footer">
          <form class="unibot-form" id="unibot-chat-form">
            <input 
              type="text" 
              id="unibot-input-field" 
              class="unibot-input" 
              placeholder="Hỏi về điểm chuẩn, học phí, chọn trường..." 
              autocomplete="off" 
            />
            <button type="submit" id="unibot-send-btn" class="unibot-send-btn" title="Gửi câu hỏi">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
          <div class="unibot-mode-bar">
            <button type="button" class="unibot-link-samples" id="unibot-link-open-samples" title="Bấm xem 8 nhóm câu hỏi mẫu">
              💡 Mẫu câu hỏi tham khảo
            </button>
            <span>Dữ liệu 2026 chính thức</span>
          </div>
        </div>

        <!-- Bảng 8 Nhóm Mẫu Câu Hỏi (Trượt lên gọn gàng khi bấm) -->
        <div class="unibot-samples-panel unibot-panel-hidden" id="unibot-samples-panel">
          <div class="unibot-samples-header">
            <div>
              <h4 class="unibot-samples-title">💡 8 Nhóm Mẫu Câu Hỏi Gợi Ý</h4>
              <p class="unibot-samples-sub">Bấm "Dùng" để hỏi bot ngay hoặc "Copy" để sao chép</p>
            </div>
            <button class="unibot-btn-icon" id="unibot-btn-close-samples" title="Đóng danh sách">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="unibot-samples-body" id="unibot-samples-body"></div>
        </div>
      </div>
    `;

    document.body.appendChild(container);
    this.renderMessages();
  }

  renderSamplesList() {
    const body = document.getElementById('unibot-samples-body');
    if (!body) return;

    body.innerHTML = UNIBOT_SAMPLE_GROUPS.map(group => `
      <div class="unibot-sample-group">
        <div class="unibot-sample-group-header">
          <h5 class="unibot-sample-group-title">${group.title}</h5>
          <span class="unibot-sample-group-badge">${group.badge}</span>
        </div>
        <div class="unibot-sample-list">
          ${group.questions.map(q => `
            <div class="unibot-sample-item">
              <span class="unibot-sample-text" data-query="${q}" title="Bấm để dùng câu này">${q}</span>
              <div class="unibot-sample-actions">
                <button type="button" class="unibot-btn-use" data-query="${q}">Dùng</button>
                <button type="button" class="unibot-btn-copy" data-query="${q}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Copy</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // Bắt sự kiện bấm "Dùng" hoặc bấm vào chữ câu hỏi -> Đóng bảng và gửi luôn
    body.querySelectorAll('.unibot-btn-use, .unibot-sample-text').forEach(el => {
      el.addEventListener('click', () => {
        const query = el.getAttribute('data-query');
        this.toggleSamples(false);
        this.handleUserMessage(query);
      });
    });

    // Bắt sự kiện bấm "Copy" -> Sao chép vào clipboard & đổi nút sang "Đã chép"
    body.querySelectorAll('.unibot-btn-copy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const query = btn.getAttribute('data-query');
        navigator.clipboard.writeText(query).then(() => {
          const span = btn.querySelector('span');
          const original = span.textContent;
          btn.classList.add('copied');
          span.textContent = 'Đã chép!';
          // Cũng điền sẵn vào ô input cho tiện
          const input = document.getElementById('unibot-input-field');
          if (input) input.value = query;

          setTimeout(() => {
            btn.classList.remove('copied');
            span.textContent = original;
          }, 1500);
        });
      });
    });
  }

  bindEvents() {
    const launcherBtn = document.getElementById('unibot-launcher-btn');
    const closeBtn = document.getElementById('unibot-btn-close');
    const clearBtn = document.getElementById('unibot-btn-clear');
    const settingsBtn = document.getElementById('unibot-btn-settings');
    const settingsDialog = document.getElementById('unibot-settings-dialog');
    const settingsSave = document.getElementById('unibot-settings-save');
    const settingsCancel = document.getElementById('unibot-settings-cancel');
    const chatForm = document.getElementById('unibot-chat-form');
    const inputField = document.getElementById('unibot-input-field');

    // Mẫu câu hỏi events
    const openSamplesBtn = document.getElementById('unibot-btn-open-samples');
    const openSamplesLink = document.getElementById('unibot-link-open-samples');
    const closeSamplesBtn = document.getElementById('unibot-btn-close-samples');

    if (openSamplesBtn) openSamplesBtn.addEventListener('click', () => this.toggleSamples(true));
    if (openSamplesLink) openSamplesLink.addEventListener('click', () => this.toggleSamples(true));
    if (closeSamplesBtn) closeSamplesBtn.addEventListener('click', () => this.toggleSamples(false));

    launcherBtn.addEventListener('click', () => this.toggleModal());
    closeBtn.addEventListener('click', () => this.toggleModal(false));

    clearBtn.addEventListener('click', () => {
      if (confirm('Bạn có muốn xóa toàn bộ lịch sử đoạn chat này không?')) {
        sessionStorage.removeItem('unibot_chat_history');
        this.messages = [];
        this.loadMessages();
        this.renderMessages();
      }
    });

    settingsBtn.addEventListener('click', () => {
      settingsDialog.style.display = settingsDialog.style.display === 'none' ? 'block' : 'none';
    });

    settingsCancel.addEventListener('click', () => {
      settingsDialog.style.display = 'none';
    });

    settingsSave.addEventListener('click', () => {
      const key = document.getElementById('unibot-api-key-input').value.trim();
      this.customApiKey = key;
      localStorage.setItem('unibot_gemini_api_key', key);
      settingsDialog.style.display = 'none';
    });

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = inputField.value.trim();
      if (!query || this.loading) return;
      inputField.value = '';
      this.handleUserMessage(query);
    });
  }

  toggleModal(force) {
    const modal = document.getElementById('unibot-modal-window');
    this.isOpen = force !== undefined ? force : !this.isOpen;
    if (this.isOpen) {
      modal.classList.remove('unibot-hidden');
      document.getElementById('unibot-input-field').focus();
      this.scrollToBottom();
    } else {
      modal.classList.add('unibot-hidden');
      this.toggleSamples(false);
    }
  }

  toggleSamples(show) {
    const panel = document.getElementById('unibot-samples-panel');
    if (!panel) return;
    this.isSamplesOpen = show !== undefined ? show : !this.isSamplesOpen;
    if (this.isSamplesOpen) {
      panel.classList.remove('unibot-panel-hidden');
    } else {
      panel.classList.add('unibot-panel-hidden');
    }
  }

  renderMessages() {
    const body = document.getElementById('unibot-chat-body');
    if (!body) return;

    body.innerHTML = this.messages.map(m => {
      const isBot = m.role === 'bot';
      return `
        <div class="unibot-message ${isBot ? 'unibot-bot' : 'unibot-user'}">
          ${isBot ? `
            <div class="unibot-avatar" style="width:28px;height:28px;border-radius:8px;background:#2563eb;flex-shrink:0;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="8" width="18" height="12" rx="4"/>
                <line x1="12" y1="2" x2="12" y2="8"/>
              </svg>
            </div>
          ` : ''}
          <div class="unibot-bubble">
            ${this.formatMarkdown(m.text)}
          </div>
        </div>
      `;
    }).join('');

    if (this.loading) {
      body.innerHTML += `
        <div class="unibot-message unibot-bot" id="unibot-loading-indicator">
          <div class="unibot-typing">
            <span class="unibot-dot"></span>
            <span class="unibot-dot"></span>
            <span class="unibot-dot"></span>
          </div>
        </div>
      `;
    }

    this.scrollToBottom();
  }

  scrollToBottom() {
    const body = document.getElementById('unibot-chat-body');
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }

  formatMarkdown(text) {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_self">$1</a>');
    html = html.replace(/^### (.*)$/gm, '<h4 style="margin:8px 0 4px 0;font-size:13px;font-weight:700;color:#1e40af;">$1</h4>');
    html = html.replace(/^> (.*)$/gm, '<blockquote style="border-left:3px solid #f59e0b;padding-left:8px;margin:6px 0;color:#92400e;background:#fef3c7;border-radius:4px;padding:4px 8px;">$1</blockquote>');
    html = html.replace(/^\*\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/^-\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    html = html.replace(/\n/g, '<br/>');

    return html;
  }

  async handleUserMessage(query) {
    this.messages.push({
      role: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query
    });
    this.loading = true;
    this.renderMessages();

    // 1. Phân tích ngữ nghĩa chuyên sâu (Smart Intent Parser)
    const smartAnswer = this.parseSmartIntent(query);

    if (smartAnswer) {
      await new Promise(r => setTimeout(r, 150));
      this.loading = false;
      this.messages.push({
        role: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: smartAnswer
      });
      this.saveMessages();
      this.renderMessages();
      return;
    }

    // 2. Nếu là câu hỏi mở rộng / tâm sự / định hướng chung -> Gọi Gemini AI
    let reply = await this.queryGeminiAI(query);

    if (!reply) {
      reply = this.getDefaultGuide();
    }

    this.loading = false;
    this.messages.push({
      role: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: reply
    });
    this.saveMessages();
    this.renderMessages();
  }

  async queryGeminiAI(query) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          chatHistory: this.messages.slice(-4).map(m => ({
            role: m.role === 'bot' ? 'model' : 'user',
            parts: [{ text: m.text }]
          }))
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) return data.reply;
      }
    } catch (e) {
      console.warn('Gemini call failed:', e);
    }
    return null;
  }

  // ====================================================
  // NLU Engine: Phân tích đúng 100% ngành + điểm + trường
  // ====================================================
  parseSmartIntent(rawQuery) {
    const q = rawQuery.toLowerCase().trim();

    // --- 1. Trích xuất mức điểm thi của người dùng ---
    const scoreMatch = q.match(/(\d{1,2}(?:[.,]\d{1,2})?)\s*(?:điểm|đ)/i);
    const score = scoreMatch ? parseFloat(scoreMatch[1].replace(',', '.')) : null;

    // --- 2. Trích xuất từ khóa ngành học ---
    const majorAliases = [
      { key: 'kinh doanh quốc tế', aliases: ['kinh doanh quốc tế', 'kdqt', 'kinh doanh qte', 'international business'] },
      { key: 'thương mại điện tử', aliases: ['thương mại điện tử', 'tmdt', 'e-commerce'] },
      { key: 'quản trị kinh doanh', aliases: ['quản trị kinh doanh', 'qtkd'] },
      { key: 'marketing', aliases: ['marketing', 'tiếp thị'] },
      { key: 'tài chính - ngân hàng', aliases: ['tài chính - ngân hàng', 'tài chính ngân hàng', 'tcnh', 'ngân hàng'] },
      { key: 'kế toán - kiểm toán', aliases: ['kế toán', 'kiểm toán'] },
      { key: 'luật kinh tế', aliases: ['luật kinh tế'] },
      { key: 'công nghệ thông tin', aliases: ['công nghệ thông tin', 'cntt', 'it', 'tin học', 'phần mềm'] },
      { key: 'khoa học dữ liệu', aliases: ['khoa học dữ liệu', 'data science', 'ds'] },
      { key: 'trí tuệ nhân tạo', aliases: ['trí tuệ nhân tạo', 'ai', 'artificial intelligence'] },
      { key: 'an toàn thông tin', aliases: ['an toàn thông tin', 'attt', 'cyber security'] },
      { key: 'kỹ thuật ô tô', aliases: ['kỹ thuật ô tô', 'công nghệ ô tô', 'ô tô'] },
      { key: 'ngôn ngữ anh', aliases: ['ngôn ngữ anh', 'tiếng anh'] },
      { key: 'ngôn ngữ nhật', aliases: ['ngôn ngữ nhật', 'tiếng nhật'] },
      { key: 'y khoa', aliases: ['y khoa', 'bác sĩ', 'y đa khoa'] },
      { key: 'dược học', aliases: ['dược học', 'dược sĩ', 'dược'] },
      { key: 'răng - hàm - mặt', aliases: ['răng - hàm - mặt', 'rhm', 'nha khoa'] },
      { key: 'điều dưỡng', aliases: ['điều dưỡng'] },
      { key: 'thiết kế đồ họa', aliases: ['thiết kế đồ họa', 'graphic design', 'đồ họa'] },
      { key: 'kinh tế', aliases: ['kinh tế'] }
    ];

    let matchedMajorKey = null;
    for (const item of majorAliases) {
      if (item.aliases.some(alias => q.includes(alias))) {
        matchedMajorKey = item.key;
        break;
      }
    }

    // Helper: Lấy thông tin trường học đầy đủ
    const getSchoolInfo = (schoolId) => {
      const s = UNIBOT_SCHOOLS.find(x => x.id === schoolId);
      const custom = UNIBOT_CUSTOM_NAMES[schoolId];
      return {
        id: schoolId,
        abbr: custom?.abbr || s?.abbr || schoolId.toUpperCase(),
        name: custom?.name || s?.name || schoolId.toUpperCase(),
        city: custom?.city || s?.city || ''
      };
    };

    // === TÌNH HUỐNG 1: Có CẢ MỨC ĐIỂM + TÊN NGÀNH CỤ THỂ ===
    if (score && matchedMajorKey) {
      const matches = [];
      for (const [schoolId, majorList] of Object.entries(UNIBOT_SCORES)) {
        const info = getSchoolInfo(schoolId);
        for (const m of majorList) {
          if (m.major.toLowerCase().includes(matchedMajorKey) || matchedMajorKey.includes(m.major.toLowerCase())) {
            const score2025 = m.score2025 || m.score2024;
            if (score2025) {
              matches.push({
                schoolId,
                abbr: info.abbr,
                name: info.name,
                city: info.city,
                major: m.major,
                combination: m.combination,
                score2025,
                diff: score2025 - score
              });
            }
          }
        }
      }

      if (matches.length > 0) {
        const target = matches.filter(m => Math.abs(m.diff) <= 0.8).sort((a,b) => Math.abs(a.diff) - Math.abs(b.diff));
        const stretch = matches.filter(m => m.diff > 0.8 && m.diff <= 2.2).sort((a,b) => a.score2025 - b.score2025);
        const safe = matches.filter(m => m.diff < -0.8 && m.diff >= -4.5).sort((a,b) => b.score2025 - a.score2025);
        const topTier = matches.filter(m => m.diff > 2.2).sort((a,b) => b.score2025 - a.score2025);

        let text = `🎯 **Chiến lược chọn trường ngành "${matchedMajorKey.toUpperCase()}" với mức ${score} điểm:**\n\n`;
        text += `Với kết quả **${score} điểm**, bạn có cơ hội đỗ rất tốt vào các trường đại học uy tín nếu biết cách phân bổ nguyện vọng hợp lý:\n\n`;

        if (target.length > 0) {
          text += `### 1. Nhóm trường vừa tầm - Cơ hội trúng tuyển cao nhất (Sát ${score} điểm):\n`;
          target.forEach(t => {
            text += `* **[${t.abbr} - ${t.name}](/school/${t.schoolId})** (${t.city})\n  - Ngành: **${t.major}** | Tổ hợp: \`${t.combination}\` | Điểm chuẩn 2025: **${t.score2025}**\n`;
          });
          text += `\n`;
        }

        if (stretch.length > 0) {
          text += `### 2. Nhóm trường thử sức - Đặt Nguyện vọng 1 (Điểm chuẩn nhỉnh hơn 0.8 – 2.0 điểm):\n`;
          stretch.slice(0, 3).forEach(t => {
            text += `* **[${t.abbr} - ${t.name}](/school/${t.schoolId})** (${t.city})\n  - Ngành: **${t.major}** | Tổ hợp: \`${t.combination}\` | Điểm chuẩn 2025: **${t.score2025}**\n`;
          });
          text += `\n`;
        }

        if (safe.length > 0) {
          text += `### 3. Nhóm trường an toàn chắc đỗ - Đặt Nguyện vọng 3 - 4 (Dự phòng):\n`;
          safe.slice(0, 3).forEach(t => {
            text += `* **[${t.abbr} - ${t.name}](/school/${t.schoolId})** (${t.city})\n  - Ngành: **${t.major}** | Tổ hợp: \`${t.combination}\` | Điểm chuẩn 2025: **${t.score2025}**\n`;
          });
          text += `\n`;
        }

        if (topTier.length > 0) {
          text += `> ⚠️ **Lưu ý các trường Top đầu**: Các trường như **${topTier.map(t => `${t.abbr} (${t.score2025}đ)`).slice(0, 3).join(', ')}** điểm chuẩn năm 2025 từ 27 - 28.2+ điểm (chênh lệch từ 2 - 3.2 điểm so với mức ${score}đ của bạn). Bạn không nên đặt các trường này ở nguyện vọng chính nếu chỉ xét theo điểm thi tốt nghiệp THPT.\n\n`;
        }

        text += `💡 *Mẹo: Bạn có thể bấm vào tên từng trường ở trên để xem biểu phí chi tiết năm học 2026-2027 trên UniFind nhé!* `;
        return text;
      }
    }

    // === TÌNH HUỐNG 2: Chỉ hỏi theo mức điểm thi chung ===
    if (score && !matchedMajorKey) {
      const suitable = [];
      for (const [schoolId, majorList] of Object.entries(UNIBOT_SCORES)) {
        const info = getSchoolInfo(schoolId);
        for (const item of majorList) {
          const score2025 = item.score2025 || item.score2024;
          if (score2025 && Math.abs(score2025 - score) <= 1.2) {
            suitable.push({
              schoolId,
              schoolName: info.abbr,
              major: item.major,
              combination: item.combination,
              score: score2025
            });
          }
        }
      }

      if (suitable.length > 0) {
        let res = `🎯 Với mức điểm khoảng **${score} điểm**, dưới đây là những ngành & trường có điểm chuẩn năm 2025 rất sát với bạn:\n\n`;
        suitable.slice(0, 6).forEach(s => {
          res += `* **[${s.schoolName}](/school/${s.schoolId})** - Ngành: **${s.major}**\n  - Tổ hợp: \`${s.combination}\` | Điểm chuẩn 2025: **${s.score}**\n`;
        });
        res += `\n💡 *Bạn có thể bấm vào [💡 Mẫu câu hỏi] để xem các mẫu câu hỏi theo ngành cụ thể nhé!* `;
        return res;
      }
    }

    // === TÌNH HUỐNG 3: So sánh 2 trường cụ thể ===
    if (q.includes('so sánh') || q.includes('vs') || q.includes('khác nhau')) {
      const foundSchools = UNIBOT_SCHOOLS.filter(s => 
        q.includes(s.id.toLowerCase()) || 
        (s.abbr && q.includes(s.abbr.toLowerCase())) || 
        q.includes(s.name.toLowerCase().replace('trường đại học ', '').replace('đại học ', ''))
      );

      if (foundSchools.length >= 2) {
        const s1 = foundSchools[0];
        const s2 = foundSchools[1];
        const t1 = UNIBOT_TUITION[s1.id] || {};
        const t2 = UNIBOT_TUITION[s2.id] || {};

        return `📊 **Đối chiếu so sánh giữa ${s1.abbr || s1.name} và ${s2.abbr || s2.name}**:\n\n` +
          `* 🏛️ **Loại hình**: ${s1.abbr}: ${s1.kind} (${s1.city}) vs ${s2.abbr}: ${s2.kind} (${s2.city})\n` +
          `* 💰 **Học phí dự kiến (2026–2027)**:\n` +
          `  - **${s1.abbr}**: ${t1.feeRange ? `${t1.feeRange[0]} – ${t1.feeRange[1]} triệu/năm` : s1.feeSummary || 'Đang cập nhật'}\n` +
          `  - **${s2.abbr}**: ${t2.feeRange ? `${t2.feeRange[0]} – ${t2.feeRange[1]} triệu/năm` : s2.feeSummary || 'Đang cập nhật'}\n` +
          `* 🎯 **Ngành mũi nhọn**:\n` +
          `  - ${s1.abbr}: ${s1.majors.slice(0, 4).join(', ')}\n` +
          `  - ${s2.abbr}: ${s2.majors.slice(0, 4).join(', ')}\n\n` +
          `👉 Bạn có thể vào tính năng [So sánh chi tiết trên UniFind](/compare) để đối chiếu song song nhé!`;
      }
    }

    // === TÌNH HUỐNG 4: Tra cứu học phí trường ===
    if (q.includes('học phí') || q.includes('tiền học') || q.includes('chi phí')) {
      const matchedSchool = UNIBOT_SCHOOLS.find(s => 
        q.includes(s.id.toLowerCase()) || 
        (s.abbr && q.includes(s.abbr.toLowerCase())) || 
        q.includes(s.name.toLowerCase().replace('trường đại học ', '').replace('đại học ', ''))
      );

      if (matchedSchool) {
        const t = UNIBOT_TUITION[matchedSchool.id];
        let res = `💰 **Thông tin học phí [${matchedSchool.name}](/school/${matchedSchool.id})**:\n\n`;
        if (t && t.feeRange) {
          res += `* **Khoảng học phí năm học 2026–2027**: **${t.feeRange[0]} – ${t.feeRange[1]} triệu đồng/năm**.\n`;
          if (t.feeNote) res += `* 📝 **Chi tiết**: ${t.feeNote}\n`;
          if (t.feeSource) res += `* 🔗 [Nguồn trích dẫn chính thức](${t.feeSource})\n`;
        } else {
          res += `* Mức ước tính: **${matchedSchool.feeSummary || '20 – 50 triệu/năm'}**.\n`;
        }
        res += `\nXem đầy đủ tại trang [Chi tiết trường ${matchedSchool.abbr || ''}](/school/${matchedSchool.id}).`;
        return res;
      }
    }

    // === TÌNH HUỐNG 5: Tra cứu điểm chuẩn trường ===
    if (q.includes('điểm chuẩn') || q.includes('điểm trúng tuyển')) {
      const matchedSchool = UNIBOT_SCHOOLS.find(s => 
        q.includes(s.id.toLowerCase()) || 
        (s.abbr && q.includes(s.abbr.toLowerCase())) || 
        q.includes(s.name.toLowerCase().replace('trường đại học ', '').replace('đại học ', ''))
      );

      if (matchedSchool) {
        const scoreList = UNIBOT_SCORES[matchedSchool.id] || [];
        if (scoreList.length > 0) {
          let res = `📊 **Điểm chuẩn trúng tuyển 3 năm gần nhất của [${matchedSchool.name}](/school/${matchedSchool.id})**:\n\n`;
          scoreList.slice(0, 6).forEach(m => {
            res += `* **${m.major}** (${m.combination})\n  - 2023: \`${m.score2023}\` | 2024: \`${m.score2024}\` | **2025: ${m.score2025}** (${m.trend === 'up' ? '↗️ tăng' : '↘️ giảm'})\n`;
          });
          res += `\nXem đầy đủ bảng điểm chuẩn tại [Trang chi tiết ${matchedSchool.abbr || ''}](/school/${matchedSchool.id}).`;
          return res;
        }
      }
    }

    // === TÌNH HUỐNG 6: Hỏi về 1 ngành mà không kèm điểm ===
    if (matchedMajorKey && (q.includes('ngành') || q.includes('học ở đâu') || q.includes('trường nào đào tạo'))) {
      const training = [];
      for (const [schoolId, majorList] of Object.entries(UNIBOT_SCORES)) {
        const info = getSchoolInfo(schoolId);
        for (const m of majorList) {
          if (m.major.toLowerCase().includes(matchedMajorKey) || matchedMajorKey.includes(m.major.toLowerCase())) {
            training.push({
              schoolId,
              abbr: info.abbr,
              name: info.name,
              score2025: m.score2025 || m.score2024,
              combination: m.combination
            });
          }
        }
      }

      if (training.length > 0) {
        training.sort((a,b) => b.score2025 - a.score2025);
        let res = `🎓 **Danh sách các trường đào tạo ngành "${matchedMajorKey.toUpperCase()}" tiêu biểu:**\n\n`;
        res += `* **Nhóm điểm chuẩn cao (> 27 điểm)**: ${training.filter(t => t.score2025 >= 27).map(t => `[${t.abbr} (${t.score2025}đ)](/school/${t.schoolId})`).join(', ') || 'Đang cập nhật'}\n\n`;
        res += `* **Nhóm điểm chuẩn tầm trung (24 – 26.5 điểm)**: ${training.filter(t => t.score2025 >= 24 && t.score2025 < 27).map(t => `[${t.abbr} (${t.score2025}đ)](/school/${t.schoolId})`).join(', ') || 'Đang cập nhật'}\n\n`;
        res += `* **Nhóm điểm chuẩn an toàn (< 24 điểm)**: ${training.filter(t => t.score2025 < 24).map(t => `[${t.abbr} (${t.score2025}đ)](/school/${t.schoolId})`).join(', ') || 'Đang cập nhật'}\n\n`;
        res += `💡 *Nếu bạn đã có điểm thi dự kiến, hãy nhắn cho mình số điểm (VD: "25 điểm") để mình xếp nguyện vọng chính xác nhất nhé!* `;
        return res;
      }
    }

    // === TÌNH HUỐNG 7: Chính sách miễn học phí ===
    if (q.includes('miễn') || q.includes('sư phạm') || q.includes('học bổng')) {
      return `🎉 **Chính sách hỗ trợ học phí nổi bật năm 2026**:\n\n` +
        `1. **Khối trường Sư phạm (Nghị định 116/2020/NĐ-CP)**:\n` +
        `   - Sinh viên trúng tuyển ngành sư phạm tại các trường công lập được **miễn 100% học phí**.\n` +
        `   - Nhận trợ cấp sinh hoạt phí **3.63 triệu đồng/tháng**.\n\n` +
        `2. **Khối Công an - Quân đội**:\n` +
        `   - Được đài thọ 100% ăn, ở, học tập và được phân công công tác sau tốt nghiệp.\n\n` +
        `Xem thêm tại mục [Thông báo tuyển sinh](/notifications).`;
    }

    return null;
  }

  getDefaultGuide() {
    return `Cảm ơn câu hỏi của bạn! 🎓\n\n` +
      `Bạn có thể bấm vào nút **[💡 Mẫu câu hỏi]** ở góc trên khung chat để xem và sao chép hơn 30 mẫu câu hỏi thông dụng theo từng nhóm ngành nhé!`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new UniBot());
} else {
  new UniBot();
}
