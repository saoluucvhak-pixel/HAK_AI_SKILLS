# HAK Data Integrity

## Mục đích
Kiểm tra khóa, quan hệ, dữ liệu trùng và an toàn lưu trữ.

## Quy trình
1. Lập bản đồ schema, khóa chính và khóa ngoại.
2. Kiểm tra dòng mồ côi, trùng khóa, null bất thường và kiểu dữ liệu.
3. Kiểm tra giao dịch, khôi phục backup, đồng bộ và tính idempotent.
4. Thử nghiệm migration trên bản sao dữ liệu đã ẩn danh.
5. Báo cáo sai lệch trước khi đề xuất sửa.

## Ràng buộc
Không xóa/sửa dữ liệu sản xuất khi chưa được phê duyệt.
