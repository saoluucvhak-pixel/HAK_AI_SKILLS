---
name: hak-archify-architecture
description: "Dùng Archify để tạo sơ đồ kiến trúc và luồng AI Agent HAK có bằng chứng từ repository, trực quan tương tác và được kiểm chứng với mã nguồn."
---
# HAK Archify Architecture

## Nguồn và giấy phép
- Repository: https://github.com/tt-a1i/archify
- Revision tham khảo: `8509a3d63e763b4d454ea9aafa1f939545fcb1ea`.
- GitHub phân loại Apache-2.0; upstream còn có LICENSE-MIT, NOTICE và THIRD_PARTY_NOTICES. Khi sử dụng hoặc phân phối phải kiểm tra thông báo và tệp liên quan.
- Skill này là adapter hướng dẫn HAK, **chưa cài** Archify CLI hoặc sao chép upstream.

## Khi nào dùng
- Chief of Staff cần trình bày sơ đồ chương trình HAK, luồng nghiệp vụ, quan hệ các repo, thiết kế DB, luồng duyệt và chuỗi CI/PR.
- Architecture Agent cần giải thích sự phụ thuộc giữa Ruflo, OmniRoute, Claude-Mem, OCR, Task Observer và HAK Code Quality.

## Quy trình
1. Đọc `archify/SKILL.md` và hướng dẫn đã được kiểm tra ở commit pin; xác thực môi trường và scripts trước khi sử dụng.
2. Lấy bằng chứng kiến trúc từ tệp nguồn thực tế (đường dẫn, commit, API, schema), phân biệt hiện trạng với tính năng dự kiến.
3. Tạo bản nháp bằng sơ đồ văn bản/JSON không chứa bí mật rồi mới render HTML tương tác bằng bản Archify đã phê duyệt.
4. Rà node/edge với mã nguồn, không tự vẽ module, quan hệ gọi hoặc trạng thái CI không tồn tại.
5. Chạy kiểm thử sơ đồ, xuất HTML/ảnh nếu cần và đính kèm minh chứng vào PR; dùng dark/light HAK Design System.
6. Chief of Staff dùng sơ đồ để giải thích quyết định nhưng không lấy sơ đồ thay thế kiểm thử thực tế.

## Kiểm soát dữ liệu
- Không đưa CCCD, STK, lương, khóa API, URL nội bộ hoặc tài liệu chứa dữ liệu nhạy cảm vào sơ đồ công khai.
- Bản HTML tương tác và link nguồn có thể chứa thông tin dự án: kiểm tra nội dung, đường dẫn, scripts và outbound links trước khi chia sẻ.
- Không chạy lệnh cài đặt thu thập từ README trên máy doanh nghiệp mà chưa kiểm tra mã nguồn và dependencies.

## Kiểm thử nghiệm thu
- Kiểm tra liên kết node-to-source, sơ đồ không bịa, mở tệp offline, tương thích và quyền riêng tư của thông tin nguồn.
- Đo sơ đồ có thể hiểu được với hệ thống 4–8 agent, tránh lưu trữ tương tác nhúng mã tùy ý.
