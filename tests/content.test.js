import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {themes,questions} from '../src/data.js';

test('Enam tema, 72 kosakata bergambar, tautan ilustrasi lokal valid',()=>{
  assert.equal(themes.length,6);
  assert.equal(new Set(themes.map(t=>t.id)).size,6);
  assert.equal(themes.flatMap(t=>t.words).length,72);
  for(const theme of themes){
    assert.equal(theme.words.length,12);
    assert.equal(new Set(theme.words.map(w=>w[2])).size,12);
    for(const word of theme.words){
      assert.equal(word.length,4);
      assert.ok(word[0]&&word[1]&&word[2]);
      assert.match(word[3],/^\/src\/images\/vocabulary\/[a-z0-9-]+\.svg$/);
      assert.ok(existsSync(new URL('..'+word[3],import.meta.url)),`Ilustrasi hilang: ${word[3]}`);
    }
  }
});

test('36 giliran percakapan menyediakan dua contoh balasan, input siswa tidak dipaksa memilih',()=>{
  for(const t of themes){
    assert.equal(t.dialog.length,6);
    for(const d of t.dialog){
      assert.ok(d[0]&&d[1]);
      assert.equal(d[2].length,2);
      for(const r of d[2])assert.ok(r[0]&&r[1]);
    }
  }
});

test('Kuis 12 soal per tema memiliki empat pilihan unik dan satu jawaban',()=>{
  for(const t of themes){
    const qs=questions(t);
    assert.equal(qs.length,12);
    for(const q of qs){
      assert.equal(q.options.length,4);
      assert.equal(new Set(q.options).size,4);
      assert.ok(q.options.includes(q.answer));
    }
  }
});

test('Tiap tema punya ilustrasi latar percakapan lokal',()=>{
  for(const t of themes){
    assert.match(t.scene,/^\/src\/images\/scenes\/[a-z0-9-]+\.svg$/);
    assert.ok(existsSync(new URL('..'+t.scene,import.meta.url)),`Scene hilang: ${t.scene}`);
  }
});
