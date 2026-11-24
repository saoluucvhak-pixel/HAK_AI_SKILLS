---
name: hak-data-integrity
description: "Kiểm tra và bảo vệ toàn vẹn dữ liệu ứng dụng HAK: khóa, quan hệ, dữ liệu trùng, an toàn lưu trữ SQLite/JSON và đóng gói đầy đủ phụ kho (subcontract/)."
---

# HAK Data Integrity Standard

## 1. Mục đích
Bảo vệ tính toàn vẹn, tính nhất quán (ACID), khả năng sao lưu phục hồi 100% và ngăn ngừa mất mát dữ liệu của các ứng dụng HAK (Desktop, Backend, SQLite, JSON).

## 2. Quy tắc Toàn vẹn Dữ liệu Bắt buộc
1. **Toàn vẹn Sao lưu Phụ kho (Auxiliary Store Backup Rule):**
   - Khi thực hiện `backup()`, ngoài tệp cơ sở dữ liệu chính (`dgvc.db` hoặc `manifest.json`), **bắt buộc phải quét và đóng gói toàn bộ các thư mục phụ trợ** (như `subcontract/`, `files/*.json`, `machine-state.json`).
   - Tệp sao lưu `.zip` phải chứa đường dẫn tương đối nguyên vẹn `subcontract/...`.
2. **Khôi phục Nguyên vẹn (Atomic Restore Rule):**
   - Quá trình `restore()` / `restoreFile()` phải giải nén và phục hồi chính xác cả kho chính lẫn các phụ kho `subcontract/`.
   - Có cơ chế sao lưu tạm thời trước khi ghi đè để rollback khi gặp lỗi.
3. **Kiểm tra Khóa & Ràng buộc (Key & Relation Constraints):**
   - Khóa chính, khóa ngoại phải có chỉ mục (index) thích hợp.
   - Không để tồn tại các bản ghi mồ côi (orphan records) giữa đợt nạp và chi tiết phiếu cân / dầu.
4. **Kiểm thử Bắt buộc:**
   - Mọi thay đổi tầng lưu trữ phải có test tự động nạp dữ liệu mẫu -> sao lưu -> xóa dữ liệu -> khôi phục -> xác minh dữ liệu đọc lại đầy đủ 100%.

## 3. Ràng buộc An toàn
- Tuyệt đối không xóa/sửa dữ liệu thật khi chưa qua kiểm thử độc lập.
- Mọi bản ghi sự kiện phải có mã băm SHA-256 để chống can thiệp trung gian.
