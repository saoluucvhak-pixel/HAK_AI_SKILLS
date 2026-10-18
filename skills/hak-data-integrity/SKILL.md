---
name: hak-data-integrity
description: Kiểm tra toàn vẹn dữ liệu của ứng dụng HAK: khóa, quan hệ cha-con, dòng trùng, dòng mồ côi, backup và đồng bộ. Dùng khi rà dữ liệu Sheet/SQLite/JSON, trước migration, hoặc khi số liệu tổng không khớp chi tiết.
---

# HAK Data Integrity

## Mục đích
Phát hiện sai lệch dữ liệu trước khi chúng thành sai số báo cáo.

## Khi dùng
Trước/sau migration, khi tổng hợp lệch chi tiết, khi nghi trùng chứng từ, khi đồng bộ nhiều máy.

## Đầu vào
Schema hoặc cấu trúc Sheet, bản sao dữ liệu đã ẩn danh, quy tắc khóa nghiệp vụ (vd. ID_KEY, số phiếu + ngày).

## Quy trình
1. Lập bản đồ schema: khóa chính, khóa ngoại, khóa nghiệp vụ, cột bắt buộc.
2. Kiểm tra dòng mồ côi, trùng khóa, null bất thường, sai kiểu (số lưu dạng chữ, ngày sai định dạng dd/MM/yyyy).
3. Đối chiếu tổng cha = tổng con theo đơn vị và quy tắc làm tròn.
4. Kiểm tra giao dịch, khôi phục backup, đồng bộ và tính idempotent (chạy lại không nhân đôi).
5. Thử nghiệm sửa/migration trên bản sao; so số dòng, tổng và checksum trước/sau.
6. Báo cáo sai lệch **trước** khi đề xuất sửa.

## Đầu ra
Danh sách sai lệch theo loại, số dòng ảnh hưởng, mẫu dòng (đã ẩn danh), đề xuất xử lý.

## Kiểm thử
Mỗi loại kiểm tra có truy vấn/script tái chạy được.

## Ràng buộc
- Không xóa/sửa dữ liệu sản xuất khi chưa có phê duyệt và backup đã xác minh.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
