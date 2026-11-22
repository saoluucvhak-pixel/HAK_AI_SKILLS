---
name: hak-ruflo-multi-agent
description: Tổ chức một agent điều phối và nhiều agent chuyên trách thiết kế, sửa code, test và review thông qua Ruflo có kiểm soát.
---
# HAK Ruflo Multi-Agent Orchestration

## Nguồn và phạm vi
- Adapter HAK đang phát triển tại https://github.com/saoluucvhak-pixel/HAK_CODE_QUALITY_TEST (PR #1 Ruflo V11 chưa được xác nhận tương thích phiên bản hiện hành).
- Ruflo là lớp điều phối tùy chọn, không thay thế GitHub, CI hoặc quyền phê duyệt của người dùng.
- Trước khi thực thi phải xác minh phiên bản CLI/API, giấy phép, nguồn chính thức và cách sandbox. Không giả định lệnh Ruflo hay khả năng tự động của adapter khi chưa kiểm thử.

## Mô hình điều phối
- 1 Orchestrator: phân rã yêu cầu, phân tích dependency, phân công, quản lý tiến độ và tổng hợp kết quả.
- 4–8 worker khi đủ tài nguyên: Architecture, UI/Unslop Review, Backend/Logic, Data & Migration, Security, Unit Test, E2E Playwright, Documentation/Release.
- Reviewer độc lập không duyệt code do chính mình viết; Orchestrator không được tự bỏ qua gate.
- Giới hạn đồng thời theo tài nguyên và xung đột file, mặc định bắt đầu 2–3 worker rồi mở rộng sau khi đo.

## Hợp đồng công việc mỗi agent
- Input: taskId, mục tiêu, repo, base SHA, phạm vi file, acceptance criteria, dependency, giới hạn quyền và dữ liệu.
- Output: commit/branch, changed files, test command + kết quả, risks, evidence, blockers và trạng thái DONE/BLOCKED/FAILED.
- Một agent sở hữu một tập file trong mỗi vòng; thay đổi chung phải tuần tự hoặc qua integration branch.
- Mỗi task có branch riêng từ main mới nhất, không push trực tiếp main.

## Quy trình
1. Orchestrator đọc repo và các skill liên quan: hak-unslop-design, hak-smart-filter, hak-accounting-report, code auditor.
2. Lập dependency DAG, giao task không chồng chéo và đặt checkpoint.
3. Worker viết test trước hoặc cùng lúc với sửa code; chỉ dùng fixture giả lập.
4. Reviewer rà security, API, business invariants, migration và hiệu suất; trả lại worker nếu chưa đạt.
5. Integration agent tạo PR; chạy lint, typecheck, unit, integration, Semgrep, CodeQL, Playwright và contract test tương ứng với phạm vi.
6. Nếu CI đỏ hoặc merge conflict: phân công agent sửa trên nhánh, chạy lại toàn bộ gate bị ảnh hưởng.
7. Chỉ merge khi CI xanh, không có conflict, review đủ và được chủ repo cho phép; bảo vệ branch main.
8. Ghi audit trail: SHA, phiên bản model/tool, input phạm vi, người duyệt, kết quả và thời điểm.

## An toàn
- Không cho agent truy cập secrets, production DB, CCCD, STK, bảng lương thực.
- Không tự chạy script chưa tin cậy trên máy chủ; sandbox và quyền tối thiểu.
- Không tự triển khai production, không tắt CI hoặc bỏ qua cảnh báo bảo mật để đạt PASS.
- Nếu Ruflo không có hoặc không tương thích, dùng cùng hợp đồng công việc qua GitHub PR thủ công; ghi rõ fallback.
