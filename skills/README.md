# HAK Skills dùng chung

- [HAK Smart Filter](hak-smart-filter/SKILL.md): lọc nhiều điều kiện, tìm không dấu, khoảng ngày, preset, adapter và kiểm thử.
- [HAK Accounting Report](hak-accounting-report/SKILL.md): chuẩn định dạng số tiền, khối lượng, độ ẩm, độ khô, ngày và schema báo cáo.

Đây là skill hướng dẫn AI thực hiện tích hợp và kiểm thử, không phải thư viện runtime. Ứng dụng phải sử dụng nguồn thư viện riêng và pin phiên bản đã kiểm thử.

- [HAK Unslop Design](hak-unslop-design/SKILL.md): review giao diện, chống thiết kế rập khuôn và kiểm thử trực quan.
- [HAK Ruflo Multi-Agent](hak-ruflo-multi-agent/SKILL.md): điều phối 1 orchestrator và 4–8 agent, phân quyền file, CI gate, review và merge.


## Vercel Agent Skills — HAK adapters

Nguồn: https://github.com/vercel-labs/agent-skills, pinned commit `5a37a6329fbad3666c3207392a6a7c0110e92efb`. Các adapter này là tài liệu hướng dẫn HAK tự biên soạn, không phải bản sao toàn bộ Vercel rules/scripts.

- [React performance](hak-vercel-react-performance/SKILL.md): hiệu suất React/Next.js, waterfall, bundle và rendering.
- [Web design](hak-vercel-web-design/SKILL.md): accessibility, UX, focus và forms.
- [React composition](hak-vercel-composition/SKILL.md): component API, state ownership và reuse.
- [Writing](hak-vercel-writing/SKILL.md): README, PR và hướng dẫn sử dụng.
- [React Native](hak-vercel-react-native/SKILL.md): chỉ dùng cho React Native/Expo.
- [React view transitions](hak-vercel-view-transitions/SKILL.md): chuyển cảnh khi hỗ trợ và có ích.

## UI UX Pro Max — HAK adapter

- [UI UX Pro Max](hak-ui-ux-pro-max/SKILL.md): lập design system, bảng dữ liệu, typography và kiểm thử trực quan, phối hợp Unslop, HAK UI Designer và Vercel Web Design.
- Nguồn: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill, pinned commit `6ec2bb58334ca3014573c4cbd4834ee3a40afd9d`, MIT; không tự động chạy upstream CLI.

## Document and architecture agent skills

- [HAK Document Markdown](hak-document-markdown/SKILL.md): tận dụng MarkItDown đã có trong HAK_OCR_ENGINE để chuyển Office thành Markdown cục bộ, có hash và đối chiếu.
- [HAK Archify Architecture](hak-archify-architecture/SKILL.md): hướng dẫn sinh sơ đồ kiến trúc tương tác từ bằng chứng mã nguồn và review qua PR. Chưa tự động cài/chạy Archify.

## Vercel Ecosystem Skills

Nguồn các skill mở rộng từ hệ sinh thái Vercel Labs:

- [Agent Browser](agent-browser/SKILL.md): CLI điều khiển browser thông qua Chrome CDP với accessibility-tree snapshot và `@eN` element refs cho AI agent (tự động hóa web, testing, forms, screenshots). Nguồn: https://github.com/vercel-labs/agent-browser, commit `0a923358ea989d7602f0d06507ad3447c62ffe9b`, Apache-2.0.
- [Find Skills](find-skills/SKILL.md): Tìm kiếm và cài đặt agent skills từ hệ sinh thái open agent skills (Skills CLI / skills.sh). Nguồn: https://github.com/vercel-labs/skills, commit `57217cf86ba38148a57af9e90d14a4c049558330`, MIT.
- [Web Interface Guidelines](web-interface-guidelines/SKILL.md): Bộ quy tắc kiểm toán UI code theo Vercel Web Interface Guidelines (accessibility, focus states, forms, performance, typography, copy). Nguồn: https://github.com/vercel-labs/web-interface-guidelines, commit `434b7f91364665f2f733b310ec54809bf8f37937`, MIT.

