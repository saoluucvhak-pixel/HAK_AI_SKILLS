---
name: hak-business-regression
description: Kiểm thử hồi quy nghiệp vụ cho phần mềm HAK — lương, phiếu cân, thanh toán/đề nghị thanh toán, kế toán, tồn kho dăm gỗ (tấn, BDMT, độ ẩm). Dùng khi sửa công thức hoặc luồng nghiệp vụ, trước khi phát hành, khi số liệu phần mềm lệch file Excel đối chiếu, hoặc khi viết bộ dữ liệu mẫu để test.
---

# HAK Business Regression

## Mục đích
Mỗi lần sửa phần mềm, các con số nghiệp vụ đã đúng vẫn đúng: lương, tiền mua gỗ, thanh toán, tồn kho, bút toán.

## Khi dùng
Sau khi sửa công thức, luồng nhập/chốt kỳ, bộ lọc, xuất báo cáo; trước mỗi bản phát hành; khi người dùng báo "số trên phần mềm khác Excel".

## Đầu vào
Quy tắc nghiệp vụ đang áp dụng (văn bản hoặc file Excel đối chiếu đã được xác nhận), bộ dữ liệu giả, kết quả kỳ vọng.

## Quy trình
1. **Dựng bộ dữ liệu giả** — không dùng mã nhân viên, CCCD, tài khoản, tên thật. Mỗi ca có kết quả kỳ vọng tính tay hoặc lấy từ file Excel đã được duyệt.
2. **Lương**: tổng thu nhập/thực lĩnh, thuế TNCN, giảm trừ, phụ cấp, tăng ca, bảo hiểm, làm tròn; dòng dữ liệu nguồn không bị đổi sau khi tính. Dùng `hak-payroll-validator` cho chi tiết.
3. **Phiếu cân & thanh toán**: quan hệ cha–con đúng (DNTT → DNTT_CT), không trùng phiếu cân giữa các đề nghị, chốt thanh toán idempotent (chạy lại không nhân đôi), kiểm quyền, tổng cha = tổng con.
4. **Tồn kho**: tấn, BDMT, độ ẩm, độ khô là đơn vị có kiểu; độ chính xác hiển thị không làm đổi tồn kho; test cho mượn/trả, chuyển kho.
5. **Kế toán**: số thập phân chính xác, số âm, 0 và trống, ngày, xuất Excel/PDF cùng tập dòng và tổng với màn hình (`HAK_SMART_FILTER` `sameAsSnapshot`).
6. **Kỳ đã chốt**: nhập/sửa chứng từ kỳ chốt bị chặn; sửa dữ liệu có hiệu lực hồi tố có cảnh báo (`periodLock`); nhập file dùng `planImport` của `HAK_SHEETS_CORE` báo đúng `locked`.
7. **Mỗi lỗi tìm được**: ca thất bại tái hiện được → nguyên nhân gốc → bản sửa → khẳng định hồi quy giữ lại vĩnh viễn → bằng chứng đã chạy.
8. Đưa các ca vào `hak-gate.json` để `hak-quality gate` chạy trong CI.

## Đầu ra
Bộ dữ liệu giả + kết quả kỳ vọng, test tự động, bảng kết quả (ca, kỳ vọng, thực tế, đạt/không), danh sách lỗi kèm nguyên nhân.

## Kiểm thử
Bộ hồi quy chạy được bằng một lệnh, trong CI, cho cùng kết quả ở múi giờ Asia/Ho_Chi_Minh và UTC. Báo cáo ghi rõ commit, lệnh, số ca đạt/không đạt.

## Ràng buộc
- Không đổi công thức hay quy tắc nghiệp vụ để test "đạt" — test phản ánh quy tắc đã được chủ sở hữu xác nhận.
- Không đưa dữ liệu lương, nhân sự, tài khoản, chứng từ thật lên GitHub; dữ liệu thật chỉ dùng trong môi trường riêng.
- Không tuyên bố "đã hồi quy" khi chưa chạy bộ test.

Nguồn: `HAK_CODE_QUALITY_TEST/skills/business-regression/SKILL.md` trong LUONG_HAK (nhánh `feature/hak-dashboard-auto-json-v3-2`), viết lại theo chuẩn skill HAK.
