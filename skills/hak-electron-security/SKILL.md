---
name: hak-electron-security
description: Rà soát bảo mật ứng dụng Electron offline của HAK (HAK_LUONG_OFFLINE, HAK_KHO_OFFLINE, DGVC…). Dùng khi review main/preload/IPC, trước khi phát hành bản cài, hoặc khi thêm tính năng đọc/ghi file, mạng, mật khẩu.
---

# HAK Electron Security

## Mục đích
Ngăn rò rỉ dữ liệu lương/kho và chặn mã độc chạy qua giao diện.

## Khi dùng
Trước mỗi bản phát hành, khi sửa `main.js`/`preload.js`/IPC, khi thêm thư viện mới.

## Đầu vào
Mã nguồn app, phiên bản Electron, danh sách IPC channel.

## Quy trình
1. Chạy `hak-quality` — rule `electron-insecure-webpreferences` và `hardcoded-secret` phải sạch.
2. Kiểm tra `BrowserWindow`: `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`, không `webSecurity: false`.
3. Rà toàn bộ IPC: chỉ expose hàm cụ thể qua `contextBridge`; kiểm tra quyền và kiểu tham số trước khi đọc/ghi.
4. Kiểm tra lưu mật khẩu (hash, không plaintext), backup, nhật ký không chứa bí mật.
5. Kiểm tra HTML động (không `innerHTML` với dữ liệu người dùng), CSP, phiên bản Electron còn được hỗ trợ.
6. Đề xuất test khai thác an toàn và bản vá tối thiểu.

## Đầu ra
Bảng rủi ro (mức, vị trí, cách khai thác, bản vá), kết luận có/không phát hành.

## Kiểm thử
Mỗi bản vá có test hoặc bước tái hiện thủ công được ghi lại.

## Ràng buộc
- Không ghi log bí mật.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
