---
name: hak-payroll-validator
description: Đối chiếu kết quả tính lương của ứng dụng HAK với chấm công và quy tắc lương. Dùng khi kiểm thử phần mềm lương (LUONG_HAK, HAK_LUONG_OFFLINE), sau khi sửa công thức, hoặc khi lương tính ra khác bảng lương Excel.
---

# HAK Payroll Validator

## Mục đích
Bảo đảm phần mềm lương tính đúng theo quy tắc đang áp dụng.

## Khi dùng
Sau mỗi thay đổi liên quan lương, trước khi chốt kỳ lương trên phần mềm mới.

## Đầu vào
Quy tắc lương hiện hành (văn bản), dữ liệu giả lập hoặc dữ liệu được phép xử lý, kết quả cần đối chiếu.

## Quy trình
1. Ghi nhận quy tắc lương đang áp dụng; **không tự thay đổi**.
2. Kiểm tra chấm công, tăng ca, phụ cấp, hỗ trợ, khấu trừ, BHXH và thuế TNCN.
3. Tính tiền bằng số thập phân chính xác; làm tròn theo `HAK_ACCOUNTING_REPORT_STANDARD`.
4. Đối chiếu tổng hợp với chi tiết, trước/sau khấu trừ.
5. Xuất báo cáo chênh lệch, nguyên nhân và test hồi quy.

## Đầu ra
Bảng chênh lệch theo người/khoản, nguyên nhân, test hồi quy.

## Kiểm thử
Bộ ca mẫu có kết quả kỳ vọng tính tay; chạy lại sau mỗi lần sửa.

## Ràng buộc
- Dùng dữ liệu giả lập trên repo; dữ liệu thật chỉ xử lý trong môi trường riêng.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
