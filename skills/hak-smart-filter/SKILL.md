---
name: hak-smart-filter
description: Tích hợp và kiểm thử thư viện lọc dữ liệu chung HAK_SMART_FILTER vào ứng dụng HAK. Dùng khi thêm/sửa bộ lọc, tìm kiếm không dấu, lọc ngày, preset lọc, hoặc khi kết quả lọc trên màn hình khác bản xuất/in.
---

# HAK Smart Filter

## Mục đích
Một bộ lọc thống nhất cho mọi màn hình danh sách.

## Khi dùng
Mỗi khi màn hình có bảng danh sách cần lọc/tìm.

## Đầu vào
Màn hình đích, danh sách cột cần lọc, adapter dữ liệu.

## Quy trình
1. Kiểm kê bộ lọc hiện tại và API `createFilter(config)` (xem `HAK_SMART_FILTER/docs/INTEGRATION.md`).
2. Khai báo `screenId`, `fields` (`multi`/`enum`/`bool`), `matchQ`, `matchDate`.
3. Kiểm tra tìm không dấu (gõ "keo la tram" ra "Keo lá tràm"), nhiều giá trị, khoảng ngày, preset, trạng thái rỗng.
4. Kiểm tra kết quả màn hình trùng kết quả xuất/in theo cùng điều kiện.
5. Kiểm tra bàn phím, responsive, khôi phục focus.
6. Viết test hồi quy; chỉ thay bộ lọc cũ khi test đạt.

## Đầu ra
Cấu hình bộ lọc, test hồi quy, ghi chú khác biệt so với bộ lọc cũ.

## Kiểm thử
Test cùng điều kiện cho cùng số dòng trên UI và bản xuất.

## Ràng buộc
- Không thay đổi dữ liệu nguồn, kỳ lương hoặc công thức tính lương.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
