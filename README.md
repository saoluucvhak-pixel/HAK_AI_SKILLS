# HAK AI Skills

Kho skill AI dùng chung để phát triển, kiểm thử và thiết kế phần mềm HAK.

## Danh mục

| Skill | Dùng khi |
|---|---|
| `hak-code-auditor` | Review code, rà lỗi, trước khi báo một thay đổi là xong (chạy `HAK_CODE_QUALITY_TEST`) |
| `hak-accounting-report-standard` | Màn hình/Excel/PDF có số tiền, khối lượng, ngày; bố cục in; sửa dữ liệu kỳ đã chốt |
| `hak-business-regression` | Hồi quy nghiệp vụ lương, phiếu cân, thanh toán, kho dăm, kế toán |
| `hak-ui-designer` | Dựng/sửa giao diện theo `HAK-Enterprise-Design-System` + kiểm tra UX bằng UI UX Pro Max |
| `ui-ux-pro-max` | Thư viện tra cứu UX (119 quy tắc, biểu đồ, bảng màu, font) — bản gốc MIT, dùng qua `hak-ui-designer` |
| `hak-task-observer` | Phát hiện việc lặp lại để đề xuất skill mới/nâng cấp skill |
| `hak-parent-child-data-model` | Thiết kế/kiểm toán dữ liệu cha–con (DNTT → DNTT_CT, phiếu kho → dòng kho) |
| `hak-data-integrity` | Rà khóa, trùng, mồ côi, tổng cha ≠ tổng con, backup |
| `hak-migration-manager` | Đổi cấu trúc dữ liệu an toàn, có rollback |
| `hak-payroll-validator` | Đối chiếu phần mềm lương với quy tắc và chấm công |
| `hak-electron-security` | Rà bảo mật app Electron offline — kèm mẫu chuẩn `ipc-guard.js`, `backup-crypt.js` từ LuongHAK_Offline |
| `hak-release-builder` | Kiểm thử và đóng gói bản phát hành |
| `hak-smart-filter` | Tích hợp bộ lọc chung `HAK_SMART_FILTER` |

## Cài vào Claude

- **Claude Code**: chép thư mục skill cần dùng vào `.claude/skills/` của dự án (hoặc `~/.claude/skills/` để dùng mọi dự án).
- **Claude app**: nén từng thư mục skill thành `.zip` rồi tải lên ở phần Skills trong cài đặt.

Skill `hak-ui-designer` cần kèm `ui-ux-pro-max` (và Python 3) để chạy được phần tra cứu UX.

## Quy chuẩn một skill

Mỗi skill là một thư mục có `SKILL.md`, bắt đầu bằng khối khai báo:

```markdown
---
name: ten-thu-muc
description: Làm gì, và KHI NÀO dùng (nêu cả cách người dùng hay nói).
---
```

Skill `hak-*` phải có đủ mục: Mục đích, Khi dùng, Đầu vào, Quy trình, Đầu ra, Kiểm thử, Ràng buộc.
`npm test` kiểm tra tự động các quy chuẩn này; `HAK_CODE_QUALITY_TEST` cũng có rule `skill-*` tương ứng.

## Quy tắc dữ liệu

Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hay lương thật vào skill hoặc ví dụ — chỉ ghi quy tắc và cấu trúc, dùng dữ liệu giả.

## Nguồn hợp nhất

Từ 1.1: các skill trong `LUONG_HAK` (thư mục `HAK_AI_SKILLS/` và `HAK_CODE_QUALITY_TEST/skills/` ở các nhánh `feature/hak-*`) đã gộp vào đây — repo này là bản chuẩn duy nhất.

## Bên thứ ba

- `skills/ui-ux-pro-max`: © Next Level Builder, MIT — xem `skills/ui-ux-pro-max/UPSTREAM.md`.
