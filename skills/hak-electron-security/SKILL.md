---
name: hak-electron-security
description: "Rà soát bảo mật ứng dụng Electron offline của HAK (contextIsolation, sandbox, CSP, kênh IPC, đường dẫn tệp, sao lưu/khôi phục). Dùng khi người dùng yêu cầu kiểm tra bảo mật, hardening hoặc review preload/main của ứng dụng Electron."
---

# HAK Electron Security

## Mục đích
Rà soát bảo mật ứng dụng Electron offline.

## Quy trình
1. Kiểm tra contextIsolation, nodeIntegration, sandbox và preload.
2. Rà soát toàn bộ IPC, xác thực/ủy quyền trước khi đọc hoặc ghi dữ liệu.
3. Kiểm tra bảo vệ dữ liệu, lưu mật khẩu, backup và nhật ký.
4. Kiểm tra nội dung HTML động, CSP và phụ thuộc.
5. Đưa ra test khai thác an toàn và bản vá tối thiểu.

## Ràng buộc
Không ghi log bí mật; không công bố dữ liệu nhân sự.
