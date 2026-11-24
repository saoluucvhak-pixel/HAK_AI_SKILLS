# HAK AI Skills

Kho hướng dẫn kỹ năng AI dùng chung để phát triển, vận hành và kiểm thử phần mềm hệ sinh thái HAK.

## Tổng quan

Repository này chứa các bộ kỹ năng (`SKILL.md`) chuẩn hóa dành cho AI Coding Agents (Cursor, Claude Code, Antigravity, Control Center). Mỗi skill cung cấp quy trình tác vụ, đầu vào/đầu ra, tiêu chuẩn an toàn và kiểm thử tự động.

Chi tiết hướng dẫn tích hợp và phân loại cụ thể xem tại [**skills/README.md**](skills/README.md).

## Phân nhóm Kỹ năng (26 Skills)

### 1. Kỹ năng Nghiệp vụ & Hệ thống HAK
- [`hak-accounting-report`](skills/hak-accounting-report/SKILL.md): Chuẩn định dạng báo cáo kế toán, số tiền, khối lượng, độ ẩm/khô và quy tắc đơn vị tính động.
- [`hak-code-auditor`](skills/hak-code-auditor/SKILL.md): Kiểm toán mã nguồn bảo mật (P0–P3), zero runtime dependencies, phân tích tĩnh.
- [`hak-data-integrity`](skills/hak-data-integrity/SKILL.md): Toàn vẹn dữ liệu, kiểm toán giao dịch, sao lưu phụ kho và phục hồi nguyên tử.
- [`hak-electron-security`](skills/hak-electron-security/SKILL.md): An toàn cho Electron runtime (contextIsolation, sandbox, CSP).
- [`hak-migration-manager`](skills/hak-migration-manager/SKILL.md): Quản lý di chuyển schema và dữ liệu SQLite an toàn.
- [`hak-parent-child-data-model`](skills/hak-parent-child-data-model/SKILL.md): Thiết kế mô hình dữ liệu quan hệ cha-con.
- [`hak-payroll-validator`](skills/hak-payroll-validator/SKILL.md): Xác minh tính toán bảng lương và công thợ.
- [`hak-release-builder`](skills/hak-release-builder/SKILL.md): Quy trình đóng gói và phát hành ứng dụng Windows/Electron.
- [`hak-smart-filter`](skills/hak-smart-filter/SKILL.md): Bộ lọc thông minh đa điều kiện, tìm kiếm không dấu, preset và adapter.

### 2. Thiết kế Giao diện & Đa Agent
- [`hak-ui-designer`](skills/hak-ui-designer/SKILL.md): Tiêu chuẩn thiết kế giao diện HAK Desktop & Web.
- [`hak-unslop-design`](skills/hak-unslop-design/SKILL.md): Đánh giá UI, chống thiết kế rập khuôn (unslop), kiểm thử trực quan.
- [`hak-ui-ux-pro-max`](skills/hak-ui-ux-pro-max/SKILL.md): Design system, bảng dữ liệu, typography chuyên nghiệp.
- [`hak-ruflo-multi-agent`](skills/hak-ruflo-multi-agent/SKILL.md): Điều phối đa agent (1 orchestrator, 4–8 subagents), phân quyền và merge gates.

### 3. Xử lý Tài liệu & Kiến trúc
- [`hak-document-markdown`](skills/hak-document-markdown/SKILL.md): Chuyển đổi tài liệu Office sang Markdown cục bộ có hash đối chiếu.
- [`hak-ocr-agent`](skills/hak-ocr-agent/SKILL.md): Điều phối OCR offline chứng từ (phiếu cân, bảng công, hóa đơn) với human review gate.
- [`hak-archify-architecture`](skills/hak-archify-architecture/SKILL.md): Hướng dẫn sinh sơ đồ kiến trúc tương tác từ bằng chứng mã nguồn.
- [`archify`](skills/archify/SKILL.md): Engine Archify sinh biểu đồ tương tác HTML độc lập.

### 4. Vercel Agent Adapters
- [`hak-vercel-composition`](skills/hak-vercel-composition/SKILL.md): Component API, phân tách state và tái sử dụng.
- [`hak-vercel-react-native`](skills/hak-vercel-react-native/SKILL.md): Tối ưu React Native / Expo.
- [`hak-vercel-react-performance`](skills/hak-vercel-react-performance/SKILL.md): Hiệu suất React/Next.js, rendering và bundle size.
- [`hak-vercel-view-transitions`](skills/hak-vercel-view-transitions/SKILL.md): Chuyển cảnh View Transitions API.
- [`hak-vercel-web-design`](skills/hak-vercel-web-design/SKILL.md): Accessibility, tương tác phím, UX và biểu mẫu.
- [`hak-vercel-writing`](skills/hak-vercel-writing/SKILL.md): Hướng dẫn soạn thảo tài liệu, PR và README kỹ thuật.

### 5. Hệ sinh thái Mở rộng (Vercel Ecosystem)
- [`agent-browser`](skills/agent-browser/SKILL.md): CLI điều khiển Chromium CDP với accessibility snapshot và element refs `@eN`.
- [`find-skills`](skills/find-skills/SKILL.md): Công cụ tìm kiếm và cài đặt agent skill qua Skills CLI và skills.sh.
- [`web-interface-guidelines`](skills/web-interface-guidelines/SKILL.md): Bộ quy tắc kiểm toán UI code theo Vercel Web Interface Guidelines.

## Tiêu chuẩn & Kiểm thử
Mọi skill trong thư mục `skills/` đều bắt buộc:
- Có file `SKILL.md` với khối frontmatter YAML chuẩn (`name`, `description`).
- `name` phải khớp chính xác tên thư mục.
- `description` có độ dài từ 40 đến 1024 ký tự nêu rõ phạm vi và thời điểm kích hoạt.
- Tự động kiểm tra qua CI Workflow (`.github/workflows/skills.yml`):
  ```bash
  node --test tests/*.test.js
  ```
