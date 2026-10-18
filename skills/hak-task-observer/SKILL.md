---
name: hak-task-observer
description: Theo dõi các việc lặp lại trong công việc kế toán, đối chiếu và phát triển phần mềm HAK để đề xuất tạo skill mới hoặc nâng cấp skill có sẵn. Dùng khi người dùng hỏi việc nào nên tự động hóa, muốn biến một quy trình thành skill, hoặc khi cùng một quy trình nhiều bước đã lặp lại từ 3 lần trở lên.
---

# HAK Task Observer

## Mục đích
Phát hiện quy trình lặp lại đáng đóng gói thành skill, để lần sau Claude làm đúng ngay từ đầu mà không cần giải thích lại.

## Khi dùng
- Người dùng hỏi "việc nào nên làm thành skill", "tự động hóa giúp tôi".
- Cùng một chuỗi bước (vd. tải PDF phiếu cân → OCR → đối chiếu phiếu chi → xuất Excel) lặp lại ≥ 3 lần.
- Một skill có sẵn bị người dùng sửa cùng một kiểu nhiều lần (dấu hiệu skill thiếu hoặc sai).

## Đầu vào
Lịch sử các lần làm việc gần đây (cuộc trò chuyện trước, commit, báo cáo đã xuất), danh sách skill đang có trong `HAK_AI_SKILLS` và skill cá nhân của người dùng.

## Quy trình
1. **Gom quan sát**: liệt kê các lần làm việc gần đây theo dạng *đầu vào → các bước → đầu ra → chỗ người dùng phải sửa*.
2. **Nhóm việc giống nhau**: cùng loại đầu vào, cùng loại đầu ra, ≥ 70% bước trùng.
3. **Chấm điểm** mỗi nhóm (0–3 mỗi tiêu chí):
   - Tần suất (bao lâu lặp một lần)
   - Số bước (càng nhiều bước càng dễ sai)
   - Chi phí sai (sai số tiền, thuế, lương = 3)
   - Mức ổn định của quy trình (quy tắc rõ, ít thay đổi)
   Chỉ đề xuất nhóm có tổng ≥ 8.
4. **Kiểm tra trùng**: so với skill đang có. Nếu đã có skill gần giống → đề xuất **nâng cấp** skill đó thay vì tạo mới.
5. **Viết bản nháp** theo mẫu chung (frontmatter `name`, `description`; mục Mục đích, Khi dùng, Đầu vào, Quy trình, Đầu ra, Kiểm thử, Ràng buộc). `description` phải nêu rõ *khi nào dùng*, kể cả cách người dùng hay nói.
6. **Trình người dùng duyệt**: đưa bảng đề xuất (tên, lý do, điểm, tạo mới hay nâng cấp) và bản nháp. Chỉ ghi vào repo khi người dùng đồng ý.
7. **Kiểm tra skill mới**: chạy `hak-quality` (rule `skill-*`) trên thư mục skill; thử skill trên một ca thật đã làm trước đó và so kết quả.

## Đầu ra
Bảng đề xuất có điểm, bản nháp `SKILL.md` cho từng đề xuất được chọn, kết quả chạy thử.

## Kiểm thử
Mỗi skill mới phải chạy lại được ít nhất một ca cũ và cho kết quả khớp kết quả đã được người dùng xác nhận.

## Ràng buộc
- Không tự ghi skill vào repo khi người dùng chưa duyệt.
- Không ghi vào skill: tên người cụ thể, số tài khoản, CCCD, số tiền thật của khách hàng/nhà cung cấp, mật khẩu — chỉ ghi quy tắc và cấu trúc.
- Không suy diễn quy tắc nghiệp vụ mà người dùng chưa xác nhận; ghi rõ phần nào là giả định.
- Không đề xuất skill cho việc chỉ làm một lần.
