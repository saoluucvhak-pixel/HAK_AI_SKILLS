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
