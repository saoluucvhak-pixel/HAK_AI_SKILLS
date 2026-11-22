---
name: hak-vercel-writing
description: "Chuẩn hóa README, hướng dẫn sử dụng, báo cáo PR và tài liệu kỹ thuật của HAK."
---
# hak-vercel-writing

## Nguồn được pin
- https://github.com/vercel-labs/agent-skills/blob/5a37a6329fbad3666c3207392a6a7c0110e92efb/skills/writing-guidelines/SKILL.md
- Commit nguồn: `5a37a6329fbad3666c3207392a6a7c0110e92efb` (2026-11-20).
- Repository gốc công bố MIT trong README, nhưng trước khi phân phối mã nguồn phải kiểm tra giấy phép từng thành phần.
- Skill này là hướng dẫn tích hợp HAK tự biên soạn, **không sao chép** toàn bộ Vercel rules/scripts. Khi áp dụng, AI cần đọc tài liệu nguồn và các tệp references/rules được dẫn chiếu tại phiên bản pin.

## Kích hoạt
Tài liệu onboarding, changelog, cài đặt, review tài liệu và đặc tả.

## Quy trình
1. Đọc SKILL.md và hướng dẫn nguồn đã được kiểm tra; xác định đối tượng; kiểm tra cấu trúc, ví dụ, liên kết, lệnh và thuật ngữ; review.
2. Xác định tệp và task agent sở hữu; tạo branch riêng, không sửa trực tiếp main.
3. Cung cấp trước/sau, acceptance criteria, lệnh kiểm thử và báo cáo lỗi rõ ràng.
4. Chạy HAK_CODE_QUALITY_TEST, CI và review độc lập trước khi cân nhắc merge.

## Giới hạn
Không đưa dữ liệu khách hàng hoặc nội bộ vào tài liệu công khai.
Không ghi secrets, CCCD, STK, dữ liệu lương thật hoặc thông tin nhạy cảm vào logs và PR.

## Tích hợp hệ thống
- HAK_AI_AGENT_CONTROL_CENTER điều phối task; chỉ coi đây là quy trình thiết kế cho đến khi adapter runtime được kiểm thử.
- Dùng cùng HAK_SMART_FILTER, HAK_ACCOUNTING_REPORT_STANDARD và Unslop/Ruflo tùy ngữ cảnh.
