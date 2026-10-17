# HAK Parent–Child Data Model

## Mục đích
Thiết kế, kiểm toán và kiểm thử mô hình dữ liệu cha–con dùng chung cho ứng dụng HAK (offline, LAN, WebApp, AppSheet).

## Đầu vào
Schema hiện tại, khóa nghiệp vụ, luồng tạo/sửa/xóa, cơ chế lưu trữ, quy tắc phân quyền và mẫu dữ liệu đã ẩn danh.

## Quy trình
1. Xác định thực thể cha, con, quan hệ 1–N / N–N, bảng nối và vòng đời dữ liệu.
2. Thiết kế khóa ổn định (PK), khóa ngoại (FK), UNIQUE, NOT NULL, CHECK và index theo truy vấn thực tế; không dùng số thứ tự hiển thị làm khóa.
3. Mô tả trạng thái chứng từ và các thao tác tạo cha cùng nhiều con trong một transaction; rollback khi bất kỳ bước nào thất bại.
4. Định nghĩa chính sách xóa (RESTRICT, soft-delete, cascade có kiểm soát), tránh dòng mồ côi và mất lịch sử.
5. Thiết kế API CRUD/batch với idempotency key, optimistic concurrency/version khi nhiều máy cùng sửa.
6. Đối chiếu tổng cha = tổng con theo đơn vị tính, quy tắc làm tròn và phạm vi dữ liệu được phép tính.
7. Thiết kế giao diện master–detail: chọn cha, bảng con, modal/drawer chi tiết, validation, trạng thái chưa lưu, thông báo lỗi.
8. Xây dựng migration có backup, chạy thử trên dữ liệu ẩn danh, kiểm tra số lượng và checksum trước/sau.
9. Kiểm thử: cha không con, một con, nhiều con, khóa trùng, FK sai, tạo đồng thời, lỗi giữa transaction, rollback, xóa, cập nhật, import trùng, phân quyền.

## Ví dụ HAK
- DNTT (cha) → DNTT_CT (nhiều phiếu cân chi tiết), tham chiếu bằng ID_KEY.
- Danh mục tăng ca/phụ cấp/hỗ trợ (cha) → nhiều phiên bản hoặc dòng quy tắc (con).
- Phiếu kho (cha) → dòng nhập/xuất/chuyển kho (con).

## Đầu ra bắt buộc
ERD, data dictionary, DDL hoặc schema, API contract, ma trận CRUD/quyền, test cases, kế hoạch migration và báo cáo rủi ro.

## Ràng buộc
- Không thay đổi công thức lương hoặc logic nghiệp vụ đang chạy nếu không có yêu cầu rõ ràng.
- Không sửa/xóa dữ liệu sản xuất khi chưa có backup được xác minh.
- Không đưa thông tin nhân sự, CCCD, tài khoản ngân hàng hay dữ liệu nhạy cảm lên GitHub.
- Không tuyên bố đã kiểm thử khi chưa thực thi test.
- Tách logic dữ liệu khỏi UI; UI không được tự tạo khóa hoặc tính tổng thay cho nguồn dữ liệu có thẩm quyền.
