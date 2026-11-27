---
name: hak-cap-lai-bao-cao-ngay
description: Hướng dẫn quản trị viên HAK cấp hoặc cấp lại file .haksetup của Báo cáo ngày trên Windows, duyệt mã HAK-R1 theo máy, khôi phục cấu hình công ty và link Google Sheets từ file cũ sau khi cài lại Windows.
---

# Cấp lại Báo cáo ngày HAK

Dùng công cụ **HAK-CapPhep.html** phiên bản có mục **Cấp lại sau khi cài Windows**. Công cụ chạy offline trong Chrome hoặc Edge trên máy quản trị HAK.

## Xác định có cần cấp lại

- Nếu chỉ cài lại ứng dụng trên cùng tài khoản Windows, mở ứng dụng trước. Khi được hỏi kích hoạt, nạp file `HAK-CaiDat.haksetup` cũ còn hạn. File dùng được khi khóa máy cũ còn nguyên.
- Khi cài lại Windows, đổi tài khoản hoặc mất khóa máy, lấy mã yêu cầu `HAK-R1.…` từ màn hình kích hoạt mới. Quản trị viên đối chiếu mã tài sản hoặc đầu mối đề nghị với hồ sơ phê duyệt nội bộ trước khi cấp.

## Cấp file mới và giữ cấu hình

1. Yêu cầu người dùng chạy Setup, bấm **Sao chép** rồi gửi mã `HAK-R1.…` mới cho HAK.
2. Trên máy quản trị, mở `HAK-CapPhep.html`. Chọn file khóa riêng `.hakkey` và nhập mật khẩu trực tiếp vào công cụ. Khóa riêng và mật khẩu được giữ tại máy quản trị.
3. Mở **Cấp lại sau khi cài Windows**, chọn file `.haksetup` cũ, rồi bấm **Nạp cấu hình từ file cũ**. Công cụ điền lại thông tin công ty và các liên kết Google Sheets nếu chữ ký khớp với khóa HAK đang dùng. File cũ đã hết hạn vẫn dùng để lấy cấu hình.
4. Kiểm tra tên công ty và nguồn dữ liệu trước khi phát hành. Hai link CSV bắt buộc là **Phiếu cân** và **Đề nghị thanh toán**. **Hợp đồng NCC** và **Hồ sơ keo** để trống nếu công ty không dùng.
5. Dán mã yêu cầu mới và chọn hạn dùng đã duyệt. Bấm **Tạo file cài đặt HAK**. Gửi riêng file mới `HAK-CaiDat.haksetup` cho người được duyệt để họ chọn **Nạp file HAK…**. Khi ứng dụng đã mở, dùng mục **Nạp file cài đặt HAK…** trong menu **Báo cáo ngày**.
6. Xác nhận máy mở báo cáo với tên công ty và nguồn đã duyệt. Để kiểm tra dữ liệu mới từ Google Sheets cần có Internet.

## Xử lý lỗi

- **Chữ ký file cũ không khớp** → kiểm tra file nguyên bản và đúng khóa đã cấp. Nếu HAK đã đổi khóa, có thể điền cấu hình từ hồ sơ công ty đã duyệt và cấp file mới bằng khóa tương ứng bộ cài hiện tại.
- **Không còn file cũ** → nhập cấu hình từ hồ sơ doanh nghiệp, rồi cấp theo mã mới.
- **Sai máy hoặc tài khoản** → lấy mã từ đúng tài khoản Windows sẽ sử dụng và đối chiếu với yêu cầu đã duyệt.
- **Ứng dụng hỏi kích hoạt sau khi đã nhận file** → kiểm tra hạn dùng, đúng bản Setup của HAK và mã yêu cầu gửi đi. Authenticode xác thực bộ cài Windows. Chữ ký trong file `.haksetup` xác thực giấy phép và cấu hình cho máy.
