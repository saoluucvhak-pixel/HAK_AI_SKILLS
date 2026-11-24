---
name: hak-payroll-validator
description: "Đối chiếu kết quả tính lương của ứng dụng HAK với chứng từ và dữ liệu mẫu để phát hiện sai lệch. Dùng khi người dùng yêu cầu kiểm tra bảng lương, công thức lương hoặc đối chiếu số liệu lương giữa các nguồn."
---

# HAK Payroll Validator

## Mục đích
Đối chiếu kết quả tính lương với chứng từ và dữ liệu mẫu.

## Quy trình
1. Ghi nhận quy tắc lương đang áp dụng, không tự thay đổi.
2. Kiểm tra chấm công, tăng ca, phụ cấp, hỗ trợ, khấu trừ và thuế.
3. Đối chiếu tổng hợp với chi tiết, số tiền trước/sau khấu trừ.
4. Kiểm tra đồng bộ định dạng ngày & số theo cấu hình **Cài đặt (Settings)** của hệ thống: tất cả cột ngày trong phần lương/chấm công (kể cả `"Từ ngày"` – `"Đến ngày"`) phải dùng thống nhất một định dạng từ Settings (mặc định `dd/MM/yyyy`), không để lẫn lộn 2 định dạng (`dd/MM/yyyy` và `yyyy-MM-dd`), và số khi nhập phải có ngăn cách hàng nghìn.
5. Dùng dữ liệu giả lập hoặc dữ liệu được phép xử lý trong môi trường riêng.
6. Xuất báo cáo chênh lệch, nguyên nhân và test hồi quy.

## Ràng buộc
Không đưa thông tin nhân sự, tài khoản ngân hàng, mã định danh hoặc dữ liệu lương thật lên repo công khai.
