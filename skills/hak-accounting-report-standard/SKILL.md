---
name: hak-accounting-report-standard
description: Áp chuẩn hiển thị số liệu kế toán Việt Nam và bố cục báo cáo Excel/PDF/in cho ứng dụng HAK (lương, kho, quỹ, công nợ, báo cáo nhanh). Dùng khi làm hoặc sửa màn hình có số tiền, khối lượng, ngày; khi xuất Excel/PDF; khi bản in bị cắt chữ, lệch tổng, sai định dạng số; hoặc khi chốt kỳ và sửa dữ liệu của kỳ đã chốt.
---

# HAK Accounting & Report Standard

## Mục đích
Mọi màn hình, file Excel, PDF và bản in của HAK hiển thị số liệu đúng chuẩn kế toán Việt Nam, cùng một tập dòng, cùng tổng — và không ai sửa nhầm dữ liệu của kỳ đã chốt.

## Khi dùng
Dựng/sửa bảng có tiền, khối lượng (tấn, BDMT), độ ẩm, ngày; viết chức năng xuất Excel/PDF/in; xử lý báo lỗi "in bị cắt", "tổng lệch", "số hiện sai"; viết chức năng sửa dữ liệu có thể chạm kỳ đã chốt.

## Đầu vào
Danh sách cột của báo cáo (tên, kiểu, đơn vị), mẫu báo cáo giấy nếu có, kỳ đang mở/đã chốt, quyền của người xem.

## Quy trình
1. **Khai báo cột có kiểu** bằng `validateColumns` của `HAK_ACCOUNTING_REPORT_STANDARD`: `key, label, type, align, minWidth, maxWidth, precision, unit, totalMode, sensitive`. Kiểu: text, code, integer, decimal, money, percent, date, datetime, boolean. Không đoán "code" từ chuỗi trông như số.
2. **Định dạng bằng thư viện chung**, không tự viết: `formatNumber` / `formatVND` / `formatExact` (số > 2^53 dùng chuỗi thập phân) / `formatDateISO`.
   - vi-VN: phân cách nghìn ".", thập phân ","; tiền VND 0 chữ số lẻ; khối lượng tối đa 2 chữ số lẻ (cấu hình được).
   - Số căn phải, chữ căn trái, ngày căn giữa. Mã số thuế, CCCD, tài khoản, số chứng từ, điện thoại là **chuỗi**, không phải số.
   - Ngày hiển thị `dd/MM/yyyy`, lưu Date hoặc `yyyy-MM-dd`; từ chối ngày sai lịch; tránh lệch ngày do múi giờ.
   - Số âm `-1.250,50` (hoặc ngoặc kế toán, nhưng thống nhất trong một báo cáo). Ô trống ≠ 0.
3. **Tính tiền bằng số thập phân chính xác** (đơn vị nhỏ nhất hoặc chuỗi thập phân), không cộng dồn số thực IEEE 754. Tổng tính từ giá trị **chưa làm tròn**, định dạng một lần — trừ khi quy định yêu cầu làm tròn từng dòng.
4. **Một tập dòng cho mọi nơi**: lấy `createSnapshot` của `HAK_SMART_FILTER`; màn hình, tổng, Excel, PDF, in đều đọc snapshot đó. Kiểm bằng `sameAsSnapshot`.
5. **Bố cục báo cáo**:
   - Đầu báo cáo: pháp nhân, tên báo cáo, kỳ, đơn vị tính, thời điểm lập, phạm vi lọc (`scopeText`).
   - Cỡ chữ: tiêu đề 14–18pt, bảng 9–11pt, ghi chú 8–9pt; font đủ dấu tiếng Việt.
   - Cột mã/ngày/số rộng cố định; cột diễn giải co giãn có giới hạn, tràn thì xuống dòng — không thu nhỏ toàn bảng tùy tiện.
   - Lặp tiêu đề bảng mỗi trang in; khối tổng và chữ ký giữ nguyên khối, không đè chân trang.
   - A4 dọc cho bảng hẹp; A4 ngang hoặc A3 ngang cho bảng rộng. Thêm trang tốt hơn chữ không đọc được.
6. **Excel**: ô số/ngày là kiểu số/ngày thật có number format (không phải chữ đã định dạng); cố định dòng tiêu đề; print area, print titles, khổ giấy, độ rộng cột rõ ràng. Chặn chèn công thức: văn bản bắt đầu bằng `= + - @` phải được thoát. Giữ số 0 đứng đầu.
7. **PDF**: nhúng font tiếng Việt, ngắt dòng an toàn, đo độ rộng cột, ngắt trang có tính toán — không phụ thuộc CSS in mặc định của trình duyệt.
8. **Kỳ đã chốt** — dùng `periodLock` của `HAK_ACCOUNTING_REPORT_STANDARD`:
   - Chứng từ phát sinh trong kỳ đã chốt → `locked`: chặn sửa/xóa, phải mở chốt.
   - Dữ liệu có hiệu lực (đơn giá, danh mục, hợp đồng) chồng kỳ đã chốt → `retro`: cho lưu, cảnh báo, ghi nhật ký (`changedFields`); số đã chốt không tự đổi.
   - Luôn kiểm cả trạng thái **trước và sau** khi sửa (`classifyChange`).

## Đầu ra
Cấu hình cột có kiểu, code định dạng dùng thư viện chung, file Excel/PDF mẫu, biên bản kiểm tra theo mục Kiểm thử.

## Kiểm thử
- Số: 0, âm, 999,995, số rất lớn, trống, không phải số, làm tròn 2 chữ số, chính sách độ chính xác.
- Ngày: năm nhuận, 31/02, ranh giới múi giờ, ngày trống/sai.
- Bố cục: chữ tiếng Việt dài, 30+ cột, 1 / 100 / 10.000 dòng, nhiều trang, lặp tiêu đề, tổng và chữ ký.
- Màn hình 1366×768, 1600×900, 1920×1080; giấy A4 dọc/ngang, A3 ngang.
- Excel/PDF tự động: kiểu ô số, định dạng, an toàn công thức, không cắt chữ, số trang, **cùng ID và tổng với màn hình**.
- Kỳ chốt: sửa chứng từ kỳ chốt bị chặn; sửa đơn giá hồi tố có cảnh báo và nhật ký; dời ngày ra khỏi kỳ chốt vẫn bị bắt.

## Ràng buộc
- Định dạng chỉ để hiển thị — không bao giờ dùng chuỗi đã định dạng làm đầu vào tính toán; không âm thầm làm tròn dữ liệu gốc.
- Dữ liệu nguồn bất biến khi lọc, định dạng, xuất.
- Không xuất dữ liệu vượt quyền người dùng; ghi phiên bản báo cáo, thời điểm xuất, phạm vi, số dòng.
- Không đưa số liệu lương, công nợ, CCCD, tài khoản thật vào ví dụ hay ảnh chụp trên GitHub — dùng dữ liệu giả.
- Không tuyên bố "đã kiểm tra bố cục / số liệu" khi chưa chạy kiểm thử tương ứng.

Nguồn: hợp nhất `HAK_AI_SKILLS/accounting-report-standard/SKILL.md` trong LUONG_HAK (nhánh `feature/hak-dashboard-auto-json-v3-2`) với thư viện `HAK_ACCOUNTING_REPORT_STANDARD` v1.1 và `HAK_SMART_FILTER` v1.1.
