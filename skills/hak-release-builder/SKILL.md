# HAK Release Builder

## Mục đích
Kiểm thử và phát hành ứng dụng HAK có thể truy vết.

## Quy trình
1. Kiểm tra nhánh, version và lockfile.
2. Chạy lint, test và build trên CI.
3. Xác minh artifact Windows, checksum và tên file.
4. Thử cài mới, nâng cấp và rollback trên máy kiểm thử.
5. Ghi changelog, kết quả test và vấn đề tồn tại.

## Ràng buộc
Không coi CI xanh là đủ để xác nhận giao diện thực tế; không phát hành nếu test quan trọng thất bại.
