---
name: hak-ui-ux-pro-max
description: "Sử dụng UI UX Pro Max cho AI Agent để lập design system, tối ưu typography, bảng dữ liệu và trải nghiệm các ứng dụng HAK, kết hợp kiểm thử UI và accessibility."
---
# HAK UI/UX Pro Max adapter

## Nguồn & giấy phép
- Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Version được đọc trong skill.json: 2.15.0, revision `6ec2bb58334ca3014573c4cbd4834ee3a40afd9d`.
- GitHub xác nhận MIT. Không sao chép nguyên bộ công cụ vào HAK_AI_SKILLS; giữ nguồn và attribution khi sử dụng thành phần của bên thứ ba.
- Đây là hướng dẫn tích hợp cho HAK; **chưa phải chứng nhận đã cài CLI hay chạy design engine**.

## Kích hoạt
- Thiết kế mới, tái thiết kế và review UI/UX, hệ thống design token, typography, bảng dữ liệu và dashboard.
- Ưu tiên trong các ứng dụng LUONG_HAK, HAK_KHO_OFFLINE, HAK_AI_AGENT_CONTROL_CENTER và những WebApp nội bộ.

## Quy trình AI Agent
1. Đọc README, README.vi.md, skill.json và skill chính thức của UI UX Pro Max tại revision pin.
2. Đọc HAK Enterprise Design System trước; coi token, theme dark/light, quy chuẩn bảng dữ liệu và quy tắc nghiệp vụ là ràng buộc có ưu tiên.
3. Tạo design brief từ vai trò người dùng, tác vụ thường gặp, loại màn hình, mật độ bảng, accessibility, responsive và trạng thái lỗi.
4. Dùng UI UX Pro Max làm nguồn gợi ý design system, lựa chọn bố cục, màu sắc, cỡ chữ và pattern; không áp đặt mẫu landing page lên phần mềm nghiệp vụ.
5. So sánh phương án với hak-unslop-design, hak-vercel-web-design, hak-ui-designer; giải thích rõ lựa chọn và tradeoff.
6. Agent UI lập wireframe/token delta; agent coder sửa giao diện trong phạm vi file được giao; agent QA chạy kiểm thử keyboard, contrast, browser screenshot và regression.
7. Trình PR với hình trước/sau, phát hiện UI có mức độ, accessibility, kết quả test và giới hạn tương thích; chỉ merge khi CI xanh.

## Cài đặt tùy chọn ở môi trường được phép
Upstream công bố CLI `npx ui-ux-pro-max-cli init --ai {{platform}}`. Không tự động chạy lệnh cài từ Internet trong CI hoặc trên máy chứa dữ liệu nhạy cảm. Khóa phiên bản gói, kiểm tra source/scripts trước khi chạy, và chỉ cài sau khi chủ hệ thống chấp thuận.

## Kiểm soát HAK
- Không sửa công thức lương, tồn kho, thanh toán hoặc schema dữ liệu khi chỉ làm UI.
- Không truy cập hoặc gửi CCCD, STK, dữ liệu lương thật, secrets sang công cụ AI bên ngoài.
- Ưu tiên readability, phân cấp thông tin, thao tác nhanh và trạng thái rõ ràng; không dùng hiệu ứng gây nhiễu.
- Mỗi agent có branch và acceptance criteria; Ruflo/Control Center chỉ điều phối nếu adapter thực tế đã được kiểm chứng.
