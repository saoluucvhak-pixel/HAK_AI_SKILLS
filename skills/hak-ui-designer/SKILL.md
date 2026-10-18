---
name: hak-ui-designer
description: Thiết kế, sửa và rà soát giao diện ứng dụng HAK (Electron offline, webapp Apps Script, HAK Portal) theo HAK-Enterprise-Design-System, dùng UI UX Pro Max để kiểm tra chất lượng UX và khả năng truy cập. Dùng khi dựng màn hình mới, làm đẹp giao diện, sửa layout/màu/chữ, thêm bảng, form, drawer, biểu đồ, hoặc khi được hỏi giao diện đã ổn chưa.
---

# HAK UI Designer

## Mục đích
Giao diện mọi ứng dụng HAK nhìn thống nhất, sang, dễ dùng cho kế toán và thủ kho — trên màn hình văn phòng 1366×768 trở lên.

## Khi dùng
Dựng màn hình mới, chỉnh giao diện, review trước phát hành, hoặc khi người dùng muốn "đẹp hơn, sang hơn".

## Đầu vào
App và màn hình cần làm, nền tảng (Electron / Apps Script HTML / web), ảnh chụp hiện trạng nếu có.

## Thứ tự ưu tiên (quan trọng)
1. **`HAK-Enterprise-Design-System` quyết định nhận diện**: màu, chữ, bo góc, đổ bóng, bố cục master–detail, sidebar, drawer, 4 chủ đề `luxe` (mặc định) / `classic` / `neutral` / `champagne`, mỗi chủ đề sáng/tối.
2. **`ui-ux-pro-max` quyết định chất lượng UX**: tương phản, bàn phím, focus, form, thông báo lỗi, trạng thái rỗng/đang tải, biểu đồ, hiệu năng hiển thị.
3. Khi hai bên mâu thuẫn về nhận diện → theo Design System. Khi Design System chưa có quy định → theo UI UX Pro Max rồi đề xuất bổ sung vào Design System.

**Không** dùng `search.py --design-system` của UI UX Pro Max để chọn bảng màu/phong cách cho app HAK — nó đề xuất phong cách mới (thường kiểu landing page), phá vỡ sự thống nhất. Chỉ dùng `--domain` và `--stack`.

## Quy trình
1. Đọc Design System: `tokens/luxe.css`, `css/hak-enterprise-components.css`, `design-system/hak-workspace-layout.css`, `design-system/V10.4-LAYOUT.md`, `docs/UX_RULES.md`.
2. Dựng/sửa bằng **biến CSS** của Design System (`var(--brand)`, `var(--card)`, `var(--mut-aa)`…). Không viết mã màu hex trực tiếp trong component.
3. Tra cứu UX đúng vấn đề, mỗi lần một ý, 2–5 từ khóa:
   ```bash
   python <HAK_AI_SKILLS>/skills/ui-ux-pro-max/scripts/search.py "data table keyboard navigation" --domain ux
   python <HAK_AI_SKILLS>/skills/ui-ux-pro-max/scripts/search.py "form error summary" --domain ux
   python <HAK_AI_SKILLS>/skills/ui-ux-pro-max/scripts/search.py "bar chart accessible colors" --domain chart
   python <HAK_AI_SKILLS>/skills/ui-ux-pro-max/scripts/search.py "electron desktop" --stack html-tailwind
   ```
   Kiểm tra kết quả có đúng nền tảng desktop/văn phòng không trước khi áp dụng.
4. Áp dụng các quy tắc riêng của HAK (mục dưới).
5. Kiểm tra theo **Danh sách trước khi giao**.
6. Chụp ảnh trước/sau ở 1366×768 và 1920×1080, chủ đề luxe sáng và tối. Với Electron: chụp từ app thật.

## Quy tắc riêng HAK
- **Số liệu**: căn phải, chữ số cùng độ rộng (`font-variant-numeric: tabular-nums`), phân cách hàng nghìn kiểu VN (`12.500.000`), ngày `dd/MM/yyyy` — định dạng qua `HAK_ACCOUNTING_REPORT_STANDARD`, không tự viết hàm format.
- **Bảng dữ liệu**: tiêu đề cố định khi cuộn, bảng lớn cuộn trong vùng của nó (không tràn trang), có trạng thái rỗng / đang tải / lỗi, lọc bằng `HAK_SMART_FILTER`.
- **Master–detail**: danh sách trái, hồ sơ phải; sửa bằng Side Drawer; kỳ đã chốt hiển thị chỉ đọc.
- **Không trang trí giả**: không thêm nút, số liệu, biểu đồ, thông báo không có chức năng thật.
- **Mật độ**: ưu tiên mật độ vừa-cao cho màn hình nhập liệu; vùng bấm tối thiểu 32px trên desktop, 44px nếu có dùng cảm ứng/điện thoại.
- **Tiếng Việt**: font hiển thị đủ dấu (kiểm tra chữ "Ặ, Ữ, Ỵ"), nhãn rõ nghĩa, không viết tắt khó hiểu.
- **Đổi chủ đề không bao giờ làm thay đổi dữ liệu nghiệp vụ.**

## Danh sách trước khi giao
- [ ] Không có mã màu hex trong component; chỉ dùng biến Design System.
- [ ] Chữ thường đạt tương phản ≥ 4,5:1 ở cả sáng và tối (chạy `npm test` của Design System nếu sửa token).
- [ ] Đi hết màn hình bằng bàn phím được; viền focus nhìn thấy; Esc đóng drawer/modal và trả focus về chỗ cũ.
- [ ] Nút chỉ có biểu tượng thì có `aria-label`/tooltip; không dùng emoji làm biểu tượng.
- [ ] Lỗi form hiện ngay cạnh ô sai, kèm tổng hợp lỗi khi bấm Lưu.
- [ ] Có trạng thái rỗng, đang tải, lỗi cho mọi bảng/danh sách.
- [ ] Không tràn ngang ở 1366×768; bảng rộng cuộn trong vùng.
- [ ] Tôn trọng `prefers-reduced-motion`; hiệu ứng ≤ 200ms, không animate width/height.
- [ ] Biểu đồ không chỉ dựa vào màu; có chú giải và tooltip.
- [ ] Báo cáo in/xuất: A4 dọc cho bảng hẹp, A4 ngang hoặc A3 ngang cho bảng rộng; lặp tiêu đề bảng mỗi trang; khối tổng và chữ ký không bị cắt, không đè chân trang (chi tiết trong `hak-accounting-report-standard`).
- [ ] Màn hình, Excel, PDF dùng cùng một snapshot lọc (`HAK_SMART_FILTER` `createSnapshot`) — cùng số dòng, cùng tổng.
- [ ] Chạy `hak-quality` trên thư mục giao diện không có lỗi mức error.

## Đầu ra
Code giao diện, ảnh chụp trước/sau (2 độ phân giải × sáng/tối), danh sách kiểm tra đã tick, các đề xuất bổ sung Design System nếu có.

## Kiểm thử
Ảnh chụp là bằng chứng bắt buộc; ghi rõ máy và độ phân giải. Không dùng bản HTML dựng riêng thay cho ảnh từ app Electron thật.

## Ràng buộc
- Không chỉnh logic nghiệp vụ, công thức lương, quan hệ lưu trữ khi sửa giao diện.
- Không đổi giá trị token gốc của chủ đề luxe; thêm token mới thì ghi vào Design System.
- Không đưa dữ liệu nhân sự, lương, chứng từ thật vào ảnh chụp đưa lên GitHub — dùng dữ liệu giả.
- Không tuyên bố "đã kiểm tra giao diện" khi chưa có ảnh chụp thật.
