---
name: hak-code-auditor
description: Kiểm toán chất lượng mã nguồn, kiến trúc và lỗi hồi quy của ứng dụng HAK (Electron, Apps Script, Node). Dùng khi được yêu cầu review code, rà lỗi, đánh giá chất lượng, kiểm tra trước khi phát hành, hoặc trước khi báo một thay đổi là đã xong.
---

# HAK Code Auditor

## Mục đích
Phân tích chất lượng mã nguồn, kiến trúc, hiệu năng và lỗi hồi quy; đưa ra phát hiện có bằng chứng và mức ưu tiên.

## Khi dùng
Review code/PR, rà soát trước phát hành, sau khi sửa lỗi lớn, hoặc khi người dùng hỏi "code này ổn chưa". Bắt buộc chạy bước 2 trước khi báo một thay đổi là hoàn thành.

## Đầu vào
Đường dẫn repo hoặc thư mục, nhánh/commit cần xem, phạm vi (toàn bộ hay một tính năng).

## Quy trình
1. Xác định stack, entry points, test scripts và ranh giới module (`package.json`, `appsscript.json`, `main.js`/`preload.js`).
2. Chạy công cụ chung `HAK_CODE_QUALITY_TEST`:
   `node <HAK_CODE_QUALITY_TEST>/bin/hak-quality.js <repo> --out reports`
   Đọc `reports/quality-report.json`; mọi phát hiện mức **error** phải được xử lý hoặc giải thích.
3. Chạy test và lint sẵn có bằng cổng chất lượng để có bằng chứng thật:
   `node <HAK_CODE_QUALITY_TEST>/bin/hak-quality.js gate --config hak-gate.json --out reports/hak-quality-results.json`
   Chưa có `hak-gate.json` thì tạo (lệnh dạng mảng argv, vd `["npm","test"]`). Chỉ báo "đạt" khi `verified: true`.
   Sửa module dùng chung thì thêm `--changed <file>` khi quét để biết file nào bị ảnh hưởng.
4. Phân tích luồng dữ liệu, cache, vòng đời sự kiện, xử lý lỗi, tính tiền (phải dùng số thập phân chính xác theo `HAK_ACCOUNTING_REPORT_STANDARD`).
5. Phân loại P0 (mất/sai dữ liệu, bảo mật) / P1 (sai chức năng) / P2 (chất lượng, bảo trì); ghi file, dòng, cách tái hiện, đề xuất sửa.
6. Sau khi sửa: chạy lại bước 2–3 và so sánh với lần đầu (`hak-quality history` cho trang so sánh).
7. Trong CI: ghi kết quả vào bộ nhớ chất lượng (`hak-quality memory …`); khi có đề xuất skill (lỗi lặp ở ≥ 3 commit), chuyển cho `hak-task-observer` soạn.

## Đầu ra
Bảng phát hiện (mức, file:dòng, mô tả, cách tái hiện, đề xuất), kết quả `hak-quality` trước/sau, kết quả test.

## Kiểm thử
Báo cáo phải có ít nhất một lệnh test đã chạy kèm kết quả; không có thì ghi rõ "chưa chạy được" và lý do.

## Ràng buộc
- Không tự sửa nhánh production; đề xuất bản vá tối thiểu.
- Không đưa dữ liệu nhân sự, CCCD, tài khoản ngân hàng, mật khẩu, chứng từ hoặc lương thật lên GitHub.
- Không tuyên bố "đã kiểm thử" khi chưa thực sự chạy test; báo kèm lệnh và kết quả.
