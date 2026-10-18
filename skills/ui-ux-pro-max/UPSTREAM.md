# Nguồn gốc

Thư mục này là bản sao nguyên trạng skill **UI UX Pro Max** từ
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (commit `56ea9cf`, giấy phép MIT — xem `LICENSE`).

Thay đổi so với bản gốc:
- Bỏ thư mục `scripts/tests` (test của tác giả gốc, cần dữ liệu mẫu riêng).
- Đổi đường dẫn `${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max/scripts/search.py` trong `SKILL.md`
  thành `<thư-mục-skill-này>/scripts/search.py` cho đúng vị trí trong repo này.

**Với ứng dụng HAK, luôn dùng qua skill `hak-ui-designer`.** Chế độ `--design-system` của bản gốc
sẽ đề xuất bảng màu/phong cách mới (thường là kiểu landing page) — điều đó KHÔNG áp dụng cho HAK,
vì HAK đã có `HAK-Enterprise-Design-System` (chủ đề luxe navy/champagne).

Cập nhật bản mới: chép lại `.claude/skills/ui-ux-pro-max/` từ repo gốc, làm lại 2 thay đổi trên, ghi commit mới vào file này.
