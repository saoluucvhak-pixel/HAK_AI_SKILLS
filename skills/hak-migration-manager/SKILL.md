# HAK Migration Manager

## Mục đích
Nâng cấp schema và dữ liệu ứng dụng HAK an toàn.

## Quy trình
1. Xác định schema nguồn/đích, version và khả năng tương thích.
2. Thiết kế migration có backup và kiểm tra trước khi ghi.
3. Chạy thử với dữ liệu ẩn danh, kiểm tra số dòng, tổng và checksum.
4. Bảo đảm chạy lại không làm nhân đôi dữ liệu.
5. Có phương án rollback và báo cáo đối chiếu.

## Ràng buộc
Không thay đổi dữ liệu gốc hoặc chạy migration sản xuất khi chưa có bản sao lưu xác minh.
