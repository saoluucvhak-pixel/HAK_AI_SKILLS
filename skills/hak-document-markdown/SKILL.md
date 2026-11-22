---
name: hak-document-markdown
description: "Đọc DOCX XLSX PPTX và file văn phòng nội bộ HAK thành Markdown cục bộ, bảo toàn cấu trúc và kiểm soát rủi ro trước khi gửi AI Agent."
---
# HAK Document Markdown (Microsoft MarkItDown)

## Nguồn và hiện trạng
- Upstream: https://github.com/microsoft/markitdown (MIT).
- Revision tham khảo: `ed178952a6672abdfd35b5f9e76a80b6cefc086e`.
- **Đã có** adapter thực tế trong `HAK_OCR_ENGINE/hak_ocr/office.py`, với `convert_office`, SHA256, kiểm tra định dạng, giới hạn 50 MB, không bật plugin, không cho URL.
- Skill này hướng dẫn cách **dùng lại** module đã có; không viết một engine chuyển đổi thứ hai.

## Khi nào dùng
- Tài liệu có lớp chữ thật (DOCX, XLSX, XLS, PPTX, HTML, CSV) cần phân tích bằng AI Agent.
- Với ảnh/PDF scan, chuyển sang HAK OCR Engine, không lấy Markdown text là bằng chứng OCR thành công.

## Quy trình
1. Phân loại và giới hạn file; chỉ xử lý tài liệu nội bộ được phép đọc trong sandbox cục bộ.
2. Gọi `hak_ocr.office.convert_office(local_path)`, ghi lại hash, loại file, provenance và phiên bản converter.
3. Kiểm tra số dòng, ô bảng, công thức, các sheet/tables và ký tự tiếng Việt trước khi chấp nhận; Markdown **không** thay thế được bản gốc cho tác vụ kế toán cần đối chiếu chính xác.
4. Nếu người dùng cần trích trường từ ảnh, bảng cong hoặc scan, yêu cầu engine OCR/Review Studio tương ứng.
5. Không gửi dữ liệu sang OmniRoute hoặc provider bên ngoài nếu chưa có chính sách và sự cho phép rõ ràng.

## Bảo mật / giới hạn
- MarkItDown thực hiện I/O với quyền của tiến trình gọi. Giới hạn đường dẫn và quyền thư mục trước khi chạy.
- Không bật plugin thứ ba hoặc Azure, captioning, transcription, remote LLM mặc định; tính năng như vậy có thể đưa tài liệu lên dịch vụ đám mây.
- Không chạy parser trên file không tin cậy bằng quyền hệ thống; xem xét zip bombs, formula injection và giới hạn kích thước.
- Kết quả cần người duyệt trước khi ghi sổ, nhập lương, phê duyệt thanh toán hoặc hợp đồng.

## Kiểm thử
- File office hợp lệ/lỗi, chữ Việt, nhiều sheet, bảng với ô trống, số có dấu, hash và tệp chứa dữ liệu nhạy cảm giả lập.
- Đối chiếu Markdown với nội dung nguồn; đánh dấu thông tin không thể bảo toàn một cách đầy đủ.
