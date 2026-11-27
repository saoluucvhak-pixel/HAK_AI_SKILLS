---
name: hak-cap-lai-bao-cao-ngay
description: Hướng dẫn quản trị HAK dùng một khóa Ed25519 chung để cấp giấy phép qua mã ứng dụng và mã thiết bị, bảo vệ bản sao khóa và cấp file cấu hình đã mã hóa cho Báo cáo ngày Windows.
---

# Khóa cấp phép chung HAK

Dùng một file `HAK-CapPhep.html` đã triển khai Ed25519 trên máy quản trị. Công cụ dùng offline bằng Chrome hoặc Edge cập nhật.

## Chuẩn bị và phục hồi

- Lần đầu chọn **Tạo khóa chung**, đặt mật khẩu và giữ file sao lưu mã hóa `HAK-KhoaChung.hakkey`. Giữ mật khẩu ở nơi quản trị HAK kiểm soát riêng.
- Dùng **Tải khóa công khai để đóng bộ cài** để xuất `HAK-PublicKey.jwk`. Bộ cài của các app HAK đã tích hợp giao thức dùng file công khai này. Dùng lại cùng khóa qua các lần nâng cấp.
- Nếu đổi máy quản trị, mở HTML trên máy mới và chọn **Khôi phục khóa**, nạp file sao lưu và nhập mật khẩu. Dùng **Sao lưu danh sách công ty** để chuyển các hồ sơ công ty nếu cần.

## Duyệt cài và đổi cấu hình

1. Người dùng sao chép mã yêu cầu `HAK4.…` từ cửa sổ cài hoặc đổi cấu hình rồi gửi HAK. Giữ cửa sổ mở.
2. HAK dán mã vào HTML. Kiểm tra mã ứng dụng, mã máy và hạn dùng. Với Báo cáo ngày, chọn công ty và kiểm tra hai nguồn CSV bắt buộc **Phiếu cân** và **Đề nghị thanh toán**.
3. Bấm **Tạo mã và file HAK**. Gửi mã phản hồi và file `.haksetup` cho đúng người đặt yêu cầu. Người dùng kiểm tra mã rồi nạp file.
4. App xác minh chữ ký Ed25519, mã sản phẩm, mã máy và thời hạn khi mở. Mỗi lần cài lại hoặc đổi cấu hình có mã ngẫu nhiên mới.

## Tích hợp ứng dụng HAK khác

- Chọn mã sản phẩm ổn định dạng `com.hakgroup.ten-app`. Đóng gói khóa công khai HAK và cố định mã sản phẩm trong trình xác minh của app. Khi mở, phải kiểm tra mã này và định danh thiết bị thực tế.
- Theo cấu trúc yêu cầu, phản hồi và file được triển khai ở [LicenseProtocol.cs](https://github.com/saoluucvhak-pixel/HAK_BAOCAONGAY/blob/main/desktop-app/licensing/LicenseProtocol.cs). Yêu cầu mang mã sản phẩm, định danh máy, nonce và khóa X25519 của phiên. Hai chữ ký Ed25519 dùng miền `hak-unlock-v4` và `hak-setup-v4`.
- Kiểm thử chữ ký sai, file sửa nội dung, mã sản phẩm sai, thiết bị khác, lần cài khác và khôi phục quản trị trên máy mới. Hồ sơ Báo cáo ngày mã hóa AES-256-GCM cho máy đích. Ứng dụng HAK khác có thể dùng file cấp phép không kèm hồ sơ công ty.
