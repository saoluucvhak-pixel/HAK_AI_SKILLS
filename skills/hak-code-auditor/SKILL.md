---
name: hak-code-auditor
description: "Rà soát chất lượng mã nguồn, kiến trúc, an toàn bộ nhớ, zero-dependency, tương thích đa nền tảng và kiểm toán SHA-256 các repo HAK."
---

# HAK Code Auditor Standard

## 1. Mục đích
Rà soát chất lượng mã nguồn, phát hiện lỗi tiềm ẩn, bảo vệ kiến trúc, loại bỏ phụ thuộc rác và đảm bảo tính tương thích đa nền tảng (Windows, Linux, macOS).

## 2. Tiêu chuẩn Mã nguồn HAK Bắt buộc
1. **Chính sách Không phụ thuộc thứ 3 (Zero Runtime Dependencies):**
   - Các gói core, service và module tính toán tài chính phải ưu tiên tối đa việc sử dụng API chuẩn của nền tảng (Node.js built-in modules: `node:crypto`, `node:http`, `node:fs`, `node:child_process`).
   - Không đưa thư viện ngoài vào `package.json` trừ khi có quyết định bằng văn bản của Hội đồng Kiến trúc.
2. **Tương thích Đa nền tảng (Cross-Platform Rule):**
   - Không gọi cứng lệnh hệ thống chỉ có trên một hệ điều hành (ví dụ: cấm gọi cứng `python3` vì Windows mặc định là `python` hoặc `py`).
   - Phải luôn có hàm fallback nhận diện lệnh khả dụng (`resolvePythonCmd`).
   - Chuẩn hóa đường dẫn tệp dùng `path.join()` hoặc `path.resolve()`, không dùng chuỗi nối `/` hoặc `\` thủ công.
3. **Cơ chế Đóng kín khi Lỗi (Fail-Closed):**
   - Mọi kiểm định, quyền hạn, mã hash SHA-256 nếu có sai lệch dù là 1 byte đều phải dừng ngay lập tức (throw error fail-closed), không được âm thầm bỏ qua.
4. **Phân loại Lỗi & Bằng chứng:**
   - Phân loại rõ ràng: P0 (Nghiêm trọng - mất an toàn), P1 (Nghiêm trọng - mất dữ liệu), P2 (Báo cáo sai lệch), P3 (Môi trường/Tài liệu).
   - Đưa ra vị trí tệp, dòng code, cách tái hiện và bản vá đề xuất.

## 3. Ràng buộc An toàn
- Không kết luận "đã kiểm thử" nếu chưa chạy test thực tế trên ít nhất một môi trường cô lập.
- Không đưa mật khẩu, token, private key vào mã nguồn hoặc log.
