---
name: hak-migration-manager
description: Lập và chạy migration schema/dữ liệu an toàn cho ứng dụng HAK. Dùng khi đổi cấu trúc bảng/Sheet, nâng version dữ liệu, gộp hoặc tách bảng, chuyển dữ liệu giữa hệ thống.
---

# HAK Migration Manager

## Mục đích
Nâng cấp dữ liệu mà không mất, không nhân đôi, luôn có đường lui.

## Khi dùng
Mọi thay đổi cấu trúc dữ liệu đã có dữ liệu thật.

## Đầu vào
Schema nguồn/đích, version hiện tại, bản sao dữ liệu ẩn danh.

## Quy trình
1. Xác định schema nguồn/đích, version và tương thích ngược.
2. Thiết kế migration có backup tự động và kiểm tra điều kiện trước khi ghi.
3. Chạy thử trên dữ liệu ẩn danh; so số dòng, tổng tiền/khối lượng và checksum.
4. Bảo đảm chạy lại không nhân đôi (idempotent, đánh dấu version).
5. Viết rollback và thử rollback.
6. Báo cáo đối chiếu trước/sau.

## Đầu ra
Script migration, script rollback, báo cáo đối chiếu.

## Kiểm thử
Test chạy 2 lần liên tiếp cho cùng kết quả; test rollback đưa dữ liệu về checksum ban đầu.

## Ràng buộc
- Không chạy migration sản xuất khi chưa có backup đã xác minh khôi phục được.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
