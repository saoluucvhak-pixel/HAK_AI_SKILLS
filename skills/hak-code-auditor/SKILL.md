---
name: hak-code-auditor
description: "Rà soát chất lượng mã nguồn, kiến trúc, hiệu năng và lỗi hồi quy của ứng dụng HAK, phân loại P0/P1/P2 kèm bằng chứng và đề xuất sửa. Dùng khi người dùng yêu cầu kiểm tra/audit/review toàn bộ code, tìm lỗi, hoặc đánh giá chất lượng một repo HAK."
---

# HAK Code Auditor

## Mục đích
Phân tích chất lượng mã nguồn, kiến trúc, hiệu năng và lỗi hồi quy.

## Quy trình
1. Xác định stack, entry points, test scripts và ranh giới module.
2. Kiểm tra lint, unit/integration test, dependency và mã trùng.
3. Phân tích luồng dữ liệu, cache, vòng đời sự kiện và xử lý lỗi.
4. Phân loại P0/P1/P2, ghi file, vị trí, cách tái hiện và đề xuất sửa.
5. Chạy lại test và báo cáo kết quả có bằng chứng.

## Ràng buộc
Không công bố dữ liệu cá nhân hoặc bí mật; không kết luận 'đã test' nếu chưa chạy.
