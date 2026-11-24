---
name: hak-ocr-agent
description: "Điều phối OCR offline HAK cho phiếu cân, bảng chấm công, hợp đồng, hóa đơn và chứng từ; kiểm tra dữ liệu trích xuất trước khi nhập hệ thống nghiệp vụ."
---
# HAK OCR Agent

## Nguồn chính thức
- https://github.com/saoluucvhak-pixel/HAK_OCR_ENGINE
- Repo có Python OCR (Tesseract, PyMuPDF, OpenCV, SQLite), adapter Office/MarkItDown, JavaScript Tesseract.js, tùy chọn PaddleOCR, Docling và Unlimited-OCR.
- Không tự tuyên bố các engine nâng cao đã cài model, đạt chất lượng tiếng Việt hoặc chạy thành công trên Windows. Kiểm tra CLI và test theo README nguồn trước khi tích hợp.
- Mặc định offline, dữ liệu không rời thiết bị. Chỉ sử dụng engine/model đã được quản trị viên duyệt.

## Tác vụ AI Agent
1. Nhận task có loại chứng từ, nguồn file cục bộ, schema đầu ra, quyền truy cập và tiêu chí nghiệm thu.
2. Phân loại file: PDF text, PDF scan, ảnh, bảng hoặc Office; xác minh MIME, dung lượng, số trang và checksum; giữ bản gốc bất biến.
3. Gọi HAK_OCR_ENGINE qua adapter phiên bản hóa (không gọi shell trực tiếp từ request web).
4. Trả dữ liệu theo từng field/cell với value, confidence (nếu engine cung cấp), source_page, bbox (nếu có), engine, warnings và provenance.
5. Đối chiếu quy tắc nghiệp vụ: phiếu cân (số phiếu, ngày, KL), hóa đơn (số hóa đơn, MST, số tiền), bảng công (ngày công), hợp đồng (số hợp đồng và bên liên quan).
6. Trường thiếu, mâu thuẫn hoặc độ tin cậy thấp chuyển trạng thái NEEDS_REVIEW. Không tự ghi vào lương, thanh toán, kho hoặc ngân hàng.
7. Người có quyền duyệt chỉnh sửa, xác nhận dữ liệu, lưu audit (ai, khi nào, phiên bản model, hash nguồn và thay đổi).
8. Chỉ khi APPROVED mới cho phép adapter nghiệp vụ nhận dữ liệu theo hợp đồng API, kiểm tra idempotency và chống nhập trùng.

## Hợp đồng task (thiết kế)
Input: task_id, document_type, local_file_ref, schema_version, requested_fields, actor, policy.
Output: task_id, document_hash, engine_version, extracted_fields, tables, warnings, review_status, evidence_refs.
Các trạng thái: QUEUED, RUNNING, NEEDS_REVIEW, APPROVED, REJECTED, FAILED.
Đây là hợp đồng thiết kế, chưa khẳng định Control Center đã có endpoint OCR.

## Kiểm thử nghiệm thu
- Ảnh mờ/nghiêng/xoay, bảng cong/phối cảnh, bảng nhiều cột, chữ viết tay, PDF có text và scan.
- Bảng chấm công: đối chiếu từng ô và tổng công, không tự sửa bảng lương.
- Phiếu cân: không nhầm kg/tấn, dấu thập phân, số phiếu, ngày, đại lý.
- Test duplicate hash, offline, restart/retry, quyền duyệt, thiếu model, tài liệu hỏng và PII redaction.
- Đo precision/recall theo field trên bộ chứng từ đã ẩn dữ liệu, công bố tỉ lệ lỗi; không tự gán độ chính xác 100%.

## Phân công đa agent
- OCR Intake Agent: nhập, xác minh, phân loại file.
- OCR Extraction Agent: gọi engine và giữ provenance.
- Document Validation Agent: kiểm tra schema và đối chiếu nghiệp vụ.
- Human Review Agent: chuẩn bị giao diện kiểm duyệt, không tự phê duyệt.
- Observer: ghi trạng thái và lỗi; Code Quality: test, security, PR.
