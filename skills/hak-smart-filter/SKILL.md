# HAK Smart Filter

## Mục đích
Rà soát, tích hợp và kiểm thử bộ lọc dữ liệu chung HAK.

## Nguồn
`HAK_SMART_FILTER` gồm `core/smart-filter.js`, `ui/filter-popover.js`, `ui/smart-filter.js`.

## Quy trình
1. Kiểm kê bộ lọc hiện tại, API và adapter của ứng dụng đích.
2. Kiểm tra tìm kiếm không dấu, lọc nhiều giá trị, khoảng ngày, preset và trạng thái rỗng.
3. Kiểm tra kết quả màn hình trùng kết quả xuất/in theo cùng điều kiện.
4. Kiểm tra bàn phím, responsive và khả năng khôi phục focus.
5. Viết test hồi quy, chỉ thay thế khi test đạt.

## Ràng buộc
Không thay đổi dữ liệu nguồn, kỳ lương hoặc công thức tính lương. Không tự động sửa nhánh production.
