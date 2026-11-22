---
name: hak-accounting-report
description: Chuẩn hóa định dạng số, ngày, căn lề và schema báo cáo kế toán HAK.
---
# HAK Accounting & Reporting Standard

## Nguồn chuẩn
- https://github.com/saoluucvhak-pixel/HAK_ACCOUNTING_REPORT_STANDARD
- Tham chiếu skill/SKILL.md, src, tests trong repository nguồn.
- Tích hợp thư viện pin commit/tag, không sao chép mã formatter.

## Quy ước
- Số Việt Nam: 1.250.000,75 (dấu chấm ngăn nghìn, dấu phẩy thập phân).
- Ngày dd/MM/yyyy, xác minh lịch hợp lệ; dữ liệu ngày lưu dạng chuẩn hóa.
- Số tiền mặc định 2 chữ số thập phân, cấu hình 0–6.
- Khối lượng, độ ẩm, độ khô mặc định 2 chữ số thập phân, cấu hình 0–6.
- USD trong hồ sơ vay HAK cấu hình 0 chữ số thập phân; không áp dụng mặc định cho mọi tiền tệ.
- Số tiền/khối lượng/tỷ lệ căn phải, chuỗi căn trái; ngày theo schema.
- STK, MST, CCCD, mã định danh phải là text, giữ số 0 đầu.
- Chỉ định dạng hiển thị; không thay đổi độ chính xác dữ liệu gốc hoặc quy tắc làm tròn nghiệp vụ.
- Số lớn vượt an toàn Number phải dùng API exact; không âm 0.
- Schema báo cáo phải có key, label, type, width/alignment và precision thích hợp; tránh cắt chữ, đè khung.

## Quy trình triển khai
1. Đọc README, API src, skill/SKILL.md, tests và package.json của thư viện nguồn.
2. Lập schema cột và quy tắc định dạng theo từng báo cáo.
3. Dùng formatNumber, formatDateISO, validateColumns, formatConfigured, formatExact theo API được xác nhận; không tự tạo hàm định dạng trùng lặp.
4. Chạy npm ci, npm test, npm run build, npm run check:dist nếu scripts tương ứng tồn tại; đối chiếu Node và browser.
5. Kiểm thử số âm, 0, ngày không hợp lệ, 0–6 chữ số thập phân, số 0 đầu, số nguyên lớn và dữ liệu trống.
6. Đối chiếu bản in/PDF/XLSX với cùng schema; nếu renderer chưa có, đánh dấu CHƯA TRIỂN KHAI, không báo PASS.

## Đầu ra
- Schema cột, phiên bản nguồn, cấu hình precision, dữ liệu thử đã ẩn thông tin nhạy cảm, bằng chứng CI và kiểm thử hồi quy.
- Không đưa dữ liệu khách hàng, tài khoản ngân hàng hay bảng lương thật vào repository công khai.
