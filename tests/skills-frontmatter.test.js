'use strict';
// Mỗi skill phải có SKILL.md với frontmatter YAML hợp lệ: name trùng tên thư mục, description đủ rõ (khi nào dùng).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..', 'skills');
const dirs = fs.readdirSync(ROOT, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1').trim();
  }
  return out;
}

test('có ít nhất một skill', () => assert.ok(dirs.length > 0));
for (const d of dirs) {
  test(`skill ${d}: SKILL.md có frontmatter name/description hợp lệ`, () => {
    const file = path.join(ROOT, d, 'SKILL.md');
    assert.ok(fs.existsSync(file), 'thiếu SKILL.md');
    const fm = frontmatter(fs.readFileSync(file, 'utf8'));
    assert.ok(fm, 'thiếu khối frontmatter --- ... ---');
    assert.equal(fm.name, d, 'name phải trùng tên thư mục');
    assert.ok(fm.description && fm.description.length >= 40, 'description quá ngắn (nêu rõ khi nào dùng)');
    assert.ok(fm.description.length <= 1024, 'description quá dài (>1024 ký tự)');
  });
}
