#!/usr/bin/env python3
"""Ubah dataset Nusantara Kargo (Excel) menjadi paket data kolom untuk BI Lite.

Pakai:  python3 bi-lite/tools/build_data.py <repo-root>
Masuk:  materi/ab/dataset-project-ab-2026.xlsx (sheet Kiriman, Pelanggan, Armada, Gudang, Terminal, Kamus Data)
Keluar: bi-lite/data-nusantara-kargo.js  (window.BI_DATA = {...})

Format kolom:
  cat  -> {"t":"cat","dict":[...],"v":[indeks...]}    (null = -1)
  num  -> {"t":"num","v":[angka...]}                  (null = null)
  date -> {"t":"date","v":[hari sejak 1970-01-01]}    (null = null)
  seq  -> {"t":"seq","prefix":"NK25-","width":6}       (No_Resi berurutan, dibangkitkan di browser)
Kolom Pelanggan (Segmen, Jenis_Tarif, Diskon) digabung ke Kiriman lewat Kode_Pelanggan.
"""
import datetime, json, sys, os
import openpyxl

root = sys.argv[1] if len(sys.argv) > 1 else '.'
src = os.path.join(root, 'materi/ab/dataset-project-ab-2026.xlsx')
out = os.path.join(root, 'bi-lite/data-nusantara-kargo.js')
wb = openpyxl.load_workbook(src, read_only=True, data_only=True)
EPOCH = datetime.datetime(1970, 1, 1)

def sheet(name):
    rows = [r for r in wb[name].iter_rows(values_only=True)]
    head = [h for h in rows[0] if h is not None]
    body = [r[:len(head)] for r in rows[1:] if any(v is not None for v in r[:len(head)])]
    return head, body

def encode(values, force=None):
    nn = [v for v in values if v is not None]
    if force == 'cat' or (nn and all(isinstance(v, str) for v in nn)):
        d = sorted(set(nn), key=lambda s: str(s))
        ix = {s: i for i, s in enumerate(d)}
        return {'t': 'cat', 'dict': d, 'v': [ix[v] if v is not None else -1 for v in values]}
    if nn and all(isinstance(v, datetime.datetime) for v in nn):
        return {'t': 'date', 'v': [(v - EPOCH).days if v is not None else None for v in values]}
    def num(v):
        if v is None: return None
        f = float(v)
        return int(f) if f.is_integer() else round(f, 4)
    return {'t': 'num', 'v': [num(v) for v in values]}

desc = {}
h, body = sheet('Kamus Data')
for r in body:
    if r[0] and r[1]:
        desc.setdefault(r[0], {})[r[1]] = {'arti': r[2] or '', 'satuan': r[3] or ''}

tables = {}
# Pelanggan (untuk digabung)
ph, pb = sheet('Pelanggan')
plg = {r[0]: dict(zip(ph, r)) for r in pb}

for name in ['Kiriman', 'Pelanggan', 'Armada', 'Gudang', 'Terminal']:
    head, body = sheet(name)
    cols = {}
    for i, c in enumerate(head):
        vals = [r[i] for r in body]
        if name == 'Kiriman' and c == 'No_Resi' and all(v == f'NK25-{k+1:06d}' for k, v in enumerate(vals)):
            cols[c] = {'t': 'seq', 'prefix': 'NK25-', 'width': 6}
        elif c in ('SLA_hari', 'Tahun_Pembuatan'):
            cols[c] = encode([str(v) if v is not None else None for v in vals], 'cat')
        else:
            cols[c] = encode(vals)
    order = list(head)
    if name == 'Kiriman':
        kp = [r[head.index('Kode_Pelanggan')] for r in body]
        for src_col, new in [('Segmen', 'Segmen_Pelanggan'), ('Jenis_Tarif', 'Jenis_Tarif'), ('Diskon', 'Diskon_Pelanggan')]:
            cols[new] = encode([plg.get(k, {}).get(src_col) for k in kp])
            order.append(new)
            d = desc.get('Pelanggan', {}).get(src_col, {'arti': src_col, 'satuan': ''})
            desc.setdefault('Kiriman', {})[new] = {'arti': d['arti'] + ' (dari tabel Pelanggan)', 'satuan': d['satuan']}
    tables[name] = {'rows': len(body), 'order': order, 'cols': cols, 'desc': desc.get(name, {})}

data = {
    'name': 'Nusantara Kargo 2025',
    'source': 'Dataset Project Analitika Bisnis 2026 (fiktif) · materi/ab/dataset-project-ab-2026.xlsx',
    'generated': datetime.date.today().isoformat(),
    'relations': [{'from': 'Kiriman.Kode_Pelanggan', 'to': 'Pelanggan.Kode_Pelanggan', 'note': 'Segmen, Jenis_Tarif, dan Diskon sudah digabung ke Kiriman'}],
    'tables': tables,
}
js = 'window.BI_DATA=' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n'
open(out, 'w', encoding='utf-8').write('/* Dibangkitkan oleh bi-lite/tools/build_data.py dari dataset fiktif Nusantara Kargo. Jangan diedit manual. */\n' + js)
print(out, len(js.encode()), {k: v['rows'] for k, v in tables.items()})
