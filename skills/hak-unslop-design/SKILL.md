---
name: hak-unslop-design
description: Thiết kế và rà soát UI HAK theo nguyên tắc chống giao diện AI rập khuôn, dùng Unslop như công cụ tham khảo khi đã xác minh nguồn và cách sử dụng.
---
# HAK Unslop Design Review

## Mục tiêu
Định hướng thiết kế rõ ràng, dễ dùng, không rập khuôn và nhất quán với HAK Enterprise Design System. Unslop là công cụ/quy trình bổ trợ được đề xuất; **chưa xác minh CLI/API hoặc phiên bản**. Không tự bịa lệnh cài đặt hay kết quả đánh giá.

## Luồng thiết kế
1. Đọc UI hiện tại, mục tiêu nghiệp vụ, design token và ràng buộc desktop/offline.
2. Lập inventory màn hình, các trạng thái empty/loading/error/success, bảng dữ liệu, master-detail, modal.
3. Phác thảo phương án bố cục và typography; ưu tiên thông tin nghiệp vụ, tránh card thừa, gradient, hiệu ứng và màu sắc vô nghĩa.
4. Kiểm tra mật độ dữ liệu, thứ bậc thị giác, độ tương phản, điều hướng bàn phím, focus, responsive và dark/light.
5. Đối chiếu ảnh trước/sau ở cùng viewport, lập danh sách lỗi có mức độ ưu tiên và acceptance criteria.
6. Nếu dùng công cụ Unslop bên ngoài: xác minh repository chính thức, giấy phép, phiên bản, quyền truy cập và đầu ra; không chuyển source/dữ liệu nhạy cảm cho dịch vụ ngoài khi chưa được phép.
7. Agent UI chỉ sửa file giao diện trong phạm vi phân công; không sửa tính lương, kho, thanh toán.

## Đầu ra
- Design brief, wireframe/đặc tả, token delta, checklist accessibility, ảnh so sánh và PR có kiểm thử UI.
- Không tự tuyên bố Unslop đã chạy nếu chỉ áp dụng checklist thủ công.
