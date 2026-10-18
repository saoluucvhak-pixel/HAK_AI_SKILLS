---
name: hak-release-builder
description: Kiểm thử và đóng gói bản phát hành ứng dụng HAK (Electron Windows, Apps Script). Dùng khi chuẩn bị phát hành, tạo bộ cài, tăng version hoặc viết changelog.
---

# HAK Release Builder

## Mục đích
Phát hành có thể truy vết và quay lại được.

## Khi dùng
Trước mỗi lần giao bản cài hoặc deploy webapp.

## Đầu vào
Nhánh, version mới, danh sách thay đổi.

## Quy trình
1. Kiểm tra nhánh sạch, version, lockfile.
2. Chạy `hak-quality --fail-on-findings`, test và build trên CI.
3. Xác minh artifact Windows: checksum, tên file, chữ ký (nếu có).
4. Thử cài mới, nâng cấp từ bản cũ, rollback trên máy kiểm thử (1366×768 và 1920×1080).
5. Ghi changelog, kết quả test và vấn đề tồn tại.

## Đầu ra
Artifact + checksum, changelog, biên bản kiểm thử.

## Kiểm thử
Biên bản ghi rõ máy, hệ điều hành, kết quả từng bước.

## Ràng buộc
- Không coi CI xanh là đủ cho giao diện; không phát hành nếu test quan trọng thất bại.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
