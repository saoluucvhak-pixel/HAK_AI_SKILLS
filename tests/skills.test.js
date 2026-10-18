'use strict';
// Kiểm tra mọi skill có khai báo hợp lệ để Claude nhận ra, và skill HAK có đủ các mục bắt buộc.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const SKILLS = path.join(__dirname, '..', 'skills');
const REQUIRED_HAK = ['Mục đích', 'Khi dùng', 'Đầu vào', 'Quy trình', 'Đầu ra', 'Kiểm thử', 'Ràng buộc'];

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return out;
}

const dirs = fs.readdirSync(SKILLS).filter(d => fs.statSync(path.join(SKILLS, d)).isDirectory());

test('có ít nhất 10 skill', () => assert.ok(dirs.length >= 10, `chỉ có ${dirs.length}`));

for (const dir of dirs) {
  test(`${dir}: khai báo hợp lệ`, () => {
    const file = path.join(SKILLS, dir, 'SKILL.md');
    assert.ok(fs.existsSync(file), 'thiếu SKILL.md');
    const text = fs.readFileSync(file, 'utf8');
    const fm = frontmatter(text);
    assert.ok(fm, 'thiếu khối khai báo --- đầu file');
    assert.equal(fm.name, dir, 'name phải trùng tên thư mục');
    assert.match(fm.name, /^[a-z0-9-]{1,64}$/, 'name chỉ gồm chữ thường, số, gạch ngang');
    assert.ok(fm.description && fm.description.length >= 60, 'description quá ngắn — cần nêu rõ khi nào dùng');
    assert.ok(fm.description.length <= 1024, 'description dài hơn 1024 ký tự');
    assert.ok(!/[<>]/.test(fm.description), 'description không được chứa dấu < >');
  });

  if (dir.startsWith('hak-')) {
    test(`${dir}: đủ các mục bắt buộc`, () => {
      const text = fs.readFileSync(path.join(SKILLS, dir, 'SKILL.md'), 'utf8');
      for (const h of REQUIRED_HAK) assert.match(text, new RegExp(`^## ${h}`, 'm'), `thiếu mục "## ${h}"`);
      assert.match(text, /GitHub|repo/i, 'Ràng buộc phải nhắc quy tắc không đưa dữ liệu thật lên GitHub');
    });
  }
}

test('ui-ux-pro-max giữ giấy phép và ghi nguồn', () => {
  const d = path.join(SKILLS, 'ui-ux-pro-max');
  assert.match(fs.readFileSync(path.join(d, 'LICENSE'), 'utf8'), /MIT License/);
  assert.match(fs.readFileSync(path.join(d, 'UPSTREAM.md'), 'utf8'), /nextlevelbuilder\/ui-ux-pro-max-skill/);
  assert.ok(!fs.readFileSync(path.join(d, 'SKILL.md'), 'utf8').includes('CLAUDE_PLUGIN_ROOT'), 'đường dẫn script chưa sửa');
});
