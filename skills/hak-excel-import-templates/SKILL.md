---
name: hak-excel-import-templates
description: "Chuẩn thiết kế và nghiệm thu tính năng Cấu hình Mẫu nhập Excel tùy biến (Excel Import Templates): CRUD mẫu, ghép cột linh hoạt, đọc thử đối chiếu (Dry-run Probe), nhập hàng loạt theo snapshot, và tự động sinh file .xlsx mẫu."
---

# HAK Excel Import Templates Standard

Tiêu chuẩn xây dựng và hoàn thiện tính năng **"Cấu hình Mẫu nhập Excel tùy biến"** cho các ứng dụng HAK (trạm cân, xuất hàng, vận chuyển, kế toán, nhập kho) khi đối tác/nhà cung cấp đổi mẫu phiếu hoặc bảng kê.

---

## 1. Quản lý danh mục mẫu nhập Excel (CRUD & Trạng thái)
- **Thao tác CRUD:** Tạo mới, Chỉnh sửa, Sao chép (Duplicate), Xóa và Đặt một mẫu làm mặc định.
- **Hiển thị mặc định & Auto-detect:** Luôn hiển thị rõ mẫu nào đang được chọn làm mặc định trên giao diện; hỗ trợ tùy chọn **"Tự nhận diện" (Auto-detect)** song song với các mẫu cấu hình.
- **Đọc file mẫu thực tế:** Khi tạo/sửa, cho phép mở file Excel mẫu thực tế từ máy, chọn **sheet làm việc** và chọn **dòng chứa tiêu đề cột** (dòng 1, 2, 3,... hoặc bảng có tiêu đề gộp / nhiều dòng).
- **Bảo mật & hiệu năng:** Chỉ lưu cấu hình mẫu (Tên mẫu, sheet, số dòng tiêu đề, mapping tên cột, chỉ số cột, đơn vị tính dự phòng). **Tuyệt đối không** lưu hoặc upload file Excel mẫu của người dùng lên server — xử lý hoàn toàn phía client/browser/Electron local.

---

## 2. Ghép cột linh hoạt & Đọc thử đối chiếu (Data Mapping & Dry-run Probe)
- **11 trường nghiệp vụ cốt lõi:**
  1. `Số phiếu` (text, giữ nguyên số 0 đầu)
  2. `Biển số xe` (bắt buộc)
  3. `Ngày giờ cân` (hoặc tách `Ngày cân` + `Giờ cân`; `Ngày cân` bắt buộc)
  4. `Khối lượng hàng (net)` (bắt buộc nếu không có đủ Cân lần 1 & Cân lần 2)
  5. `Cân lần 1 (xe không / tare)`
  6. `Cân lần 2 (có hàng / gross)`
  7. `Đơn vị tính` (hoặc đơn vị dự phòng của mẫu)
  8. `Kho nhận / xuất`
  9. `Ghi chú`
  10. `Tài xế`
  11. `Đơn vị vận chuyển (ĐVVC)`
- **Auto-match & chỉnh tay:** Tự động gợi ý ghép cột dựa trên tên cột của file mẫu; cho phép chỉnh lại qua dropdown chọn cột hoặc nhập tên tiêu đề tương ứng.
- **Ràng buộc bắt buộc:** Phải có `Biển số xe`, `Ngày cân`, và `Khối lượng hàng (net)` *(hoặc đủ cả `Cân lần 1` và `Cân lần 2` để tự trừ)*.
- **Chuẩn hóa dữ liệu:**
  - Quy đổi toàn bộ khối lượng về đơn vị chuẩn (**kg**; ví dụ tấn × 1.000).
  - Giữ nguyên số `0` ở đầu của `Số phiếu` dưới dạng chuỗi text (ví dụ `"0101"`, `"00456"`).
  - Bỏ qua các dòng chữ ký hoặc ngày ký ở cuối bảng (không báo lỗi giả).
- **Đọc thử (Dry-run Probe) trước khi lưu:**
  - Trạng thái hợp lệ / danh sách lỗi thiếu hoặc trùng cột.
  - Thống kê số dòng / số phiếu đọc được và tổng khối lượng quy đổi (**tấn** & **kg**).
  - Bảng xem trước (preview) vài dòng dữ liệu đầu tiên đã chuẩn hóa.
  - Cảnh báo chi tiết dòng sai định dạng kèm **số dòng Excel cụ thể**.
  - Nếu phần đầu file có ghi số liệu công bố (vd: *Tổng số xe công bố*, *Tổng khối lượng công bố*), tự trích xuất và hiển thị **chênh lệch đối chiếu**.

---

## 3. Áp dụng mẫu khi nhập dữ liệu thực tế (Batch Import & Fallback)
- Tự động áp dụng mẫu mặc định khi kéo thả file mới; nhận diện và ghép theo **TÊN TIÊU ĐỀ** đã lưu để nhập đúng 100% ngay cả khi đối tác chèn thêm cột hoặc đổi thứ tự cột.
- **Xử lý sự cố thông minh:** Nếu thiếu cột bắt buộc, trùng tiêu đề hoặc không xác định được đơn vị tính, hiển thị cảnh báo chi tiết và cho phép:
  - Chọn áp dụng mẫu khác.
  - Chỉnh sửa nhanh cách ghép cột cho riêng đợt đó.
  - Chuyển nhanh sang chế độ **"Tự nhận diện" (Auto-detect)**.
  - **Giữ nguyên đợt dữ liệu hiện tại**, không làm mất dữ liệu đang nhập dở của người dùng.
- **Snapshot theo đợt dữ liệu:** Lưu snapshot cấu hình đọc đi cùng từng đợt. Khi mở lại đợt cũ, dùng đúng cấu hình của đợt đó ngay cả khi mẫu mặc định của hệ thống đã bị đổi sau này.

---

## 4. Tự động sinh và tải file Excel mẫu (`.xlsx`) theo cấu hình
- Cung cấp file Excel mẫu mặc định chuyên nghiệp (bảng cân có công thức tự động tính, danh sách xe/tài xế, danh mục và hướng dẫn chi tiết).
- **Nút `"📥 Tải file mẫu này"` cho mọi mẫu cấu hình:**
  - Tự động dựng và xuất trực tiếp file `.xlsx` chuẩn theo đúng cấu hình: đúng tên sheet, dòng tiêu đề đặt đúng số dòng đã chọn, các cột đặt đúng vị trí đã ghép.
  - Điền sẵn **3 dòng dữ liệu mẫu chuẩn** (biển số, ngày giờ, số phiếu có số 0 đầu, số kg/tấn hợp lệ) theo đúng đơn vị cấu hình để gửi ngay cho đối tác/trạm cân điền.
  - Đính kèm **Sheet danh sách xe/tài xế** và **Sheet hướng dẫn** tóm tắt quy tắc nhập liệu.

---

## 5. Giao diện Wizard & Bộ kiểm thử bắt buộc
- **Giao diện Settings (Wizard 5 bước gọn gàng):** `Chọn file mẫu` → `Ghép cột` → `Đọc thử` → `Lưu mẫu` → `Tải file mẫu`.
- **8 ca kiểm thử bắt buộc (Unit + E2E):**
  1. Tiêu đề 2 dòng (dòng 1 nhóm/bảng, dòng 2 tên cột).
  2. Đổi thứ tự cột (hoặc chèn thêm cột) trong file Excel.
  3. Thiếu hoặc trùng tiêu đề cột bắt buộc.
  4. Đổi cách ghi đơn vị giữa `kg` và `tấn`.
  5. Bỏ qua dòng chữ ký / ngày ký ở cuối bảng.
  6. Giữ nguyên số `0` ở đầu của mã phiếu (`"0101"`, `"00456"`).
  7. Tải lại app / khôi phục dữ liệu đợt cũ khi mẫu mặc định đã thay đổi.
  8. Tự động sinh và xuất file Excel mẫu (`.xlsx`) theo cấu hình.
- Tuân thủ linter, format, 100% tests pass và không gây hồi quy.
