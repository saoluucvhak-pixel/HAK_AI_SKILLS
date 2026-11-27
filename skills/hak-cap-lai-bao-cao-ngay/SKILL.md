---
name: hak-cap-lai-bao-cao-ngay
description: Hướng dẫn HAK cấp mã và file hồ sơ công ty .haksetup đã mã hóa cho Báo cáo ngày Windows, dùng khi cài mới, nâng cấp hoặc đổi cấu hình công ty đã duyệt.
---

# Duyệt cài và đổi cấu hình Báo cáo ngày HAK

Dùng **HAK-CapPhep.html đi kèm đúng bản Setup**. Từ phiên bản Desktop 2.4.0, mỗi lần cài hoặc đổi cấu hình cần mã phản hồi và file hồ sơ HAK cho đúng mã yêu cầu đang hiển thị.

## Lưu một hoặc nhiều công ty

1. Trong HTML quản trị, bấm **Thêm công ty**.
2. Điền thông tin công ty và các link Google Sheets dạng CSV. **Phiếu cân** và **Đề nghị thanh toán** là hai nguồn bắt buộc. **Hợp đồng NCC** và **Hồ sơ keo** tùy chọn.
3. Bấm **Lưu công ty**. Lần sau chọn công ty đã lưu để điền lại. Khi đổi máy hoặc HTML, dùng **Sao lưu danh sách công ty** để chuyển danh sách. File sao lưu dùng trong nhóm quản trị.

## Cấp mã và file

1. Người dùng chạy Setup hoặc chọn **Cấu hình → Thông tin công ty → Đổi cấu hình công ty…** rồi gửi mã yêu cầu 8 chữ số cho HAK. Giữ cửa sổ yêu cầu đang mở.
2. Quản trị viên xác nhận yêu cầu theo quy trình nội bộ. Chọn công ty, dán mã, kiểm tra hạn dùng và bấm **Tạo mã và file HAK**. Gửi cả mã trả lời và file `HAK-CaiDat.haksetup` đã mã hóa.
3. Người dùng nhập mã và bấm **Kiểm tra mã**. Khi nút **Nạp file HAK…** được bật, chọn file được cấp. Nếu thay đổi bị hủy hoặc file bị từ chối, ứng dụng giữ cấu hình đã duyệt trước đó.

Tab **Thông tin công ty** trong app dùng để xem dữ liệu. Link Google Sheets được ẩn trên giao diện. App vẫn kết nối Google trực tiếp để tải dữ liệu. Nếu báo phản hồi không khớp, đối chiếu mã đang hiển thị và dùng đúng HTML đi kèm Setup.
