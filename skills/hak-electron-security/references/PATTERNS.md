# Mẫu bảo mật Electron chuẩn của HAK

Lấy từ app `LuongHAK_Offline` (LUONG_HAK, nhánh `audit/luong-hak-offline-v10-3-quality`, commit `59fa2f5`) — app HAK có lớp bảo mật đầy đủ nhất hiện nay. Áp dụng cho mọi app Electron mới (kho, xuất hàng, vận chuyển, DGVC…).

## 1. Cửa sổ chính

```js
const win = new BrowserWindow({
  webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, preload: path.join(__dirname, "preload.js") },
});
Menu.setApplicationMenu(null);
win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));                                   // không mở cửa sổ lạ
win.webContents.on("will-navigate", (ev, url) => { if (!url.startsWith("file://")) ev.preventDefault(); }); // không rời app
```
`hak-quality` (rule `electron-insecure-webpreferences`) báo lỗi nếu thiếu.

## 2. IPC chỉ nhận từ đúng trang của app — `references/ipc-guard.js`

- Chỉ nhận lệnh từ **khung chính** và đúng `file://…/index.html` của app (bỏ `#hash`, `?query`) — iframe/trang lạ bị từ chối.
- **Tiến trình chính tự đăng nhập**: tự đọc tài khoản trên đĩa, tự so mật khẩu, tự tra vai trò → quyền. Renderer không được tự khai quyền.
- Mỗi lệnh nhạy cảm gọi `deny(event, "payroll.close")` → chuỗi rỗng nếu được phép, ngược lại thông báo tiếng Việt.
- Phiên hết hạn khi không thao tác (mặc định 30 phút); tài khoản bị khóa/đổi vai trò/xóa → thu hồi ngay ở lần kiểm tra sau.
- Sai mật khẩu 5 lần → khóa 30 giây. Danh sách quyền là danh sách trắng (`KNOWN`).
- Giới hạn đã ghi rõ: không chống được mã độc đã chạy *trong* chính cửa sổ app.

## 3. Kiểm quyền GHI theo từng bảng ở tiến trình chính — `write-policy.js`

Renderer gửi cả file dữ liệu, nhưng **main so với bản đang lưu**, tìm bảng nào thay đổi, và chỉ cho ghi khi phiên của main có quyền tương ứng:
- `dm_*` cần `dm.edit`; dữ liệu tháng cần `input.edit`; cấu hình hệ thống cần `system.admin`; chốt/mở kỳ cần `payroll.close`/`payroll.reopen`.
- Chưa đăng nhập chỉ được động tới bảng đăng nhập/khôi phục/nhật ký.
- Máy trạng thái (nháp → chờ duyệt → đã duyệt → hiệu lực) kiểm lại ở main: **không tin** người duyệt/trạng thái do renderer tự ghi.
- Nhật ký chỉ được ngắn đi khi đã rất dài (cắt đầu có sao lưu) — chặn xóa dấu vết.

## 4. Xuất file "đóng cửa khi lỗi" (fail-closed)

Khi tải xuống tệp có vẻ là bảng lương, main **tự tính lại từ dữ liệu trên đĩa** và chỉ cho tải nếu khớp; không xác định được kỳ / không đọc được dữ liệu / engine lỗi ⇒ **hủy tải**, báo lý do. Tệp lưu vào thư mục xuất, không ghi đè.

## 5. Sao lưu mã hóa — `references/backup-crypt.js`

- AES-256-GCM theo khối 1 MiB, khóa dẫn xuất **scrypt** (N=2^15, r=8, p=1 ≈ 32 MiB RAM).
- Mỗi khối có thẻ xác thực + AAD (tiêu đề, số thứ tự khối, cờ khối cuối) ⇒ phát hiện **sửa / đảo / cắt cụt**.
- Ghi qua `.tmp` rồi đổi tên — không bao giờ để lại file dở; sai mật khẩu trả mã `AUTH`, bị sửa `TAMPER`, cắt cụt `TRUNC`.
- Mật khẩu tối thiểu 10 ký tự, ≥ 2 loại ký tự. **Không lưu mật khẩu/khóa ở đâu cả** — mất mật khẩu là mất bản sao lưu (nói rõ cho người dùng).

## Còn thiếu (đã ghi trong tài liệu app)

- File dữ liệu đang chạy **chưa mã hóa trên đĩa**.
- Đặt lại Admin bằng mã khôi phục lúc chưa đăng nhập: bản v10.1 đã chuyển sang main xác minh, cần kiểm tra lại khi port sang app khác.
