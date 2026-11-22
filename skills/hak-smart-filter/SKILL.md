---
name: hak-smart-filter
description: "Rà soát, tích hợp và kiểm thử bộ lọc dữ liệu chung HAK_SMART_FILTER (tìm không dấu, lọc nhiều giá trị, khoảng ngày, preset, trạng thái rỗng). Dùng khi người dùng làm việc với thanh lọc/bộ lọc nâng cao hoặc cần thống nhất kết quả lọc với xuất/in."
---

# HAK Smart Filter

## Mục đích
Rà soát, tích hợp và kiểm thử bộ lọc dữ liệu chung HAK.

## Nguồn
`HAK_SMART_FILTER` gồm `core/smart-filter.js`, `ui/filter-popover.js`, `ui/smart-filter.js`.

## Quy trình
1. Kiểm kê bộ lọc hiện tại, API và adapter của ứng dụng đích.
2. Kiểm tra tìm kiếm không dấu, lọc nhiều giá trị, khoảng ngày, preset và trạng thái rỗng.
3. Kiểm tra kết quả màn hình trùng kết quả xuất/in theo cùng điều kiện.
4. Kiểm tra bàn phím, responsive và khả năng khôi phục focus.
5. Viết test hồi quy, chỉ thay thế khi test đạt.

## Ràng buộc
Không thay đổi dữ liệu nguồn, kỳ lương hoặc công thức tính lương. Không tự động sửa nhánh production.

## API chuẩn và kiểm soát phiên bản
- Nguồn chính thức: https://github.com/saoluucvhak-pixel/HAK_SMART_FILTER
- Core headless: createFilter(config, options?) với getState, setState, reset, setField, removeCondition, filter, describe, conditions, subscribe.
- Matcher: core.inSet, core.hay, matchQ, matchDate; các field hỗ trợ multi, enum, bool.
- Preset: savePreset, loadPreset, listPresets với storage adapter. Kho preset hỏng không tự ghi đè; sao lưu trước khi dùng discardCorrupt().
- Mặc định strict: điều kiện unsupported phải chặn hoặc hiển thị cảnh báo, không lặng lẽ bỏ lọc.
- Với 50k–100k dòng, đo hiệu suất, debounce và virtualize UI; không suy diễn rằng core tự phân trang.
- Pin commit/tag thư viện, chạy npm ci, npm run check, npm test và xác minh CI trước khi tích hợp; không sao chép code core.
- UI adapter kế thừa LUONG_HAK chưa phải React/Vue package độc lập.
- Dùng dữ liệu giả lập, không đưa CCCD/STK/bảng lương thật vào test.
