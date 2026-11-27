---
name: hak-cap-lai-bao-cao-ngay
description: Hướng dẫn quản trị viên HAK dùng HTML đi kèm đúng bản Setup để tạo mã phản hồi hoặc file .haksetup cho Báo cáo ngày trên Windows, kể cả khi cài lại hoặc nâng cấp.
---

# Duyệt cài Báo cáo ngày HAK

Dùng **HAK-CapPhep.html đi kèm đúng bản Setup**. Từ phiên bản 2.3.0, mỗi lần đóng gói tạo một cặp mới. HAK mở HTML bằng Chrome hoặc Edge trên máy quản trị. Quy trình tạo phản hồi chạy offline.

## Duyệt mỗi lần cài

1. Người cài mở Setup, sao chép mã yêu cầu 8 chữ số và gửi HAK. Giữ cửa sổ Setup mở trong khi chờ.
2. Quản trị viên đối chiếu người yêu cầu hoặc mã tài sản theo quy trình nội bộ. Dán mã vào HTML của đúng bản cài, bấm **Tạo mã trả lời** rồi gửi mã về.
3. Người cài dán mã trả lời vào Setup và bấm **Kích hoạt**. Mỗi lần chạy lại bộ cài có một mã yêu cầu mới.

## Gửi kèm cấu hình công ty

- Dùng **Thông tin công ty và nguồn Google Sheets** để nhập tên công ty, đường dẫn CSV và ngày hết hạn. **Phiếu cân** và **Đề nghị thanh toán** là nguồn bắt buộc. **Hợp đồng NCC** và **Hồ sơ keo** có thể để trống.
- Chọn **Tạo file cài đặt HAK** rồi gửi file `HAK-CaiDat.haksetup`. Người cài chọn **Nạp file HAK…** ngay trong cửa sổ Setup.
- Dùng **Dùng lại cấu hình khi cài lại** để nạp các trường từ file cũ của cùng bản dựng. Kiểm tra dữ liệu, dán mã đang hiện trên Setup và tạo phản hồi mới.

Nếu phản hồi không khớp, đối chiếu mã đang hiển thị và dùng HTML đúng đợt phát hành. Với bản GitHub, bản nháp **HAK quản trị nội bộ** chứa HTML cho người quản trị kho. Giữ HTML trong nhóm quản trị và chia sẻ Setup cho người cần cài.
