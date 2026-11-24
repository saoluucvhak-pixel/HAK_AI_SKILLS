---
name: hak-accounting-report
description: "Chuẩn hóa định dạng số, ngày, căn lề, schema báo cáo kế toán HAK, xử lý linh hoạt đơn vị Tấn/m³ và kiểm toán khớp Excel 100%."
---
# HAK Accounting & Reporting Standard

## 1. Nguồn chuẩn & Tham chiếu
- https://github.com/saoluucvhak-pixel/HAK_ACCOUNTING_REPORT_STANDARD
- Mọi logic kế toán phải bảo toàn công thức tài chính khớp với dữ liệu thực tế 100%.

## 2. Quy ước Trình bày & Định dạng
- **Số Việt Nam:** `1.250.000,75` (dấu chấm ngăn nghìn, dấu phẩy thập phân).
- **Số khi nhập liệu (Live Input Grouping):** Khi nhập số (số tiền, đơn giá, khối lượng, số lượng) trên giao diện form hoặc ô bảng, phải hiển thị dấu ngăn cách hàng nghìn theo thời gian thực (ví dụ: `1.000.000`, `1.250.000,75`) để người nhập nhìn rõ hàng đơn vị, hàng nghìn, hàng triệu và tránh sai sót; giữ ổn định vị trí con trỏ khi gõ/xóa, và chuẩn hóa về giá trị số thuần (`number` / `decimal`) khi tính toán hoặc lưu DB.
- **Ngày tháng:** `dd/MM/yyyy`, xác minh lịch hợp lệ; dữ liệu ngày lưu dạng chuẩn hóa ISO.
- **Tiền tệ:** Mặc định 0 chữ số thập phân (VND); cấu hình linh hoạt khi có ngoại tệ.
- **Khối lượng / Thể tích:** Mặc định 2 chữ số thập phân (`0,00`).
- **Căn lề chuẩn:** Số tiền, khối lượng, tỷ lệ căn phải; chuỗi văn bản căn trái; ngày căn giữa.
- **Mã định danh:** STK, MST, CCCD, biển số xe phải là dạng chuỗi (`text`), giữ nguyên số 0 ở đầu.

## 3. Quy tắc Đơn vị tính Động (Dynamic UOM Rule - Tấn vs m³)
1. **Tiêu đề cột Bảng kê & Hóa đơn:**
   - Khi hợp đồng hoặc kỳ vận chuyển tính cước theo mét khối (`uomLabel === 'm³'`), tiêu đề cột số lượng trong Excel BKVC phải hiển thị là `Khối lượng (m³)` hoặc `Thể tích (m³)`.
   - Tuyệt đối không được gán cứng chữ `"Tấn"` khi đang tính theo $m^3$.
2. **Sheet HOA_DON:**
   - Dòng tổng cộng và diễn giải hóa đơn phải phản ánh đúng đơn vị tính tương ứng ($m^3$ hoặc Tấn).
3. **Đối soát Đối chứng Excel:**
   - Chạy `verify:seed` phải xác nhận khớp 100% từng số liệu, từng chuyến xe giữa ứng dụng và bảng Excel gốc của các nhà máy.

## 4. Quy trình Kiểm thử Bắt buộc
- Bổ sung test tự động xuất Excel cho cả 2 trường hợp hợp đồng (Tấn và $m^3$), đọc lại workbook kiểm tra ô tiêu đề và ô tổng cộng.
- Không đưa thông tin nhạy cảm của khách hàng hoặc bảng lương thật vào repository công khai.
