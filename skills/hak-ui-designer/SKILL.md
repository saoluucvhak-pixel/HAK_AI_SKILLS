---
name: hak-ui-designer
description: "Chuẩn hóa giao diện ứng dụng HAK theo HAK-Enterprise-Design-System (token, bố cục workspace, tương phản AA). Dùng khi người dùng thiết kế, đồng bộ hoặc rà soát giao diện, màu sắc, bố cục của ứng dụng HAK."
---

# HAK UI Designer

## Mục đích
Chuẩn hóa giao diện ứng dụng HAK theo `HAK-Enterprise-Design-System`.

## Quy trình
1. Đọc `docs/DESIGN_SYSTEM_V10_4.md` và CSS chuẩn.
2. Đối chiếu màu, typography, spacing, sidebar, dashboard, toolbar, modal và master–detail.
3. Kiểm tra màn hình nhỏ, bàn phím, focus, nhãn truy cập và reduced motion.
4. Chụp ảnh kiểm thử trực quan trước/sau khi sửa.
5. Giữ theme luxe navy/champagne/ivory làm mặc định nếu ứng dụng quy định.

## Ràng buộc
Không chỉnh logic nghiệp vụ hoặc công thức tính lương khi sửa giao diện.

## Kết hợp Unslop và Multi-Agent
- Dùng [hak-unslop-design](../hak-unslop-design/SKILL.md) để rà bố cục, trạng thái UI và visual regression.
- Dùng [hak-ruflo-multi-agent](../hak-ruflo-multi-agent/SKILL.md) để phân công agent UI, logic và kiểm thử không chồng file.
- Chỉ dùng API/CLI Unslop hoặc Ruflo sau khi đã xác minh; không thay đổi logic nghiệp vụ khi chỉnh UI.

## Bổ sung UI UX Pro Max & Vercel
- [HAK UI UX Pro Max](../hak-ui-ux-pro-max/SKILL.md) đề xuất design system cho ứng dụng nghiệp vụ HAK; cần kiểm tra version/upstream trước khi sử dụng công cụ.
- [Vercel Web Design](../hak-vercel-web-design/SKILL.md) rà soát usability, accessibility, responsive, keyboard và biểu mẫu.
- Nếu design recommendation mâu thuẫn, ưu tiên nghiệp vụ, HAK Design System và khả năng sử dụng; chỉ áp dụng thay đổi có bằng chứng và test hồi quy.
