"""Assemble english-learning-academy.html from src/app.css, src/core.js and src/views.js.
Content packs stay as separate files in english-academy/content/ (loaded with <script src>).
Usage (from the repo root): python3 english-academy/src/build.py .
"""
import os
import sys

SRC = os.path.dirname(os.path.abspath(__file__))
ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(SRC, '..', '..')
css = open(os.path.join(SRC, 'app.css'), encoding='utf-8').read()
core = open(os.path.join(SRC, 'core.js'), encoding='utf-8').read()
views = open(os.path.join(SRC, 'views.js'), encoding='utf-8').read()

CONTENT = os.path.join(ROOT, 'english-academy', 'content')
_lessons = sorted(f[:-3] for f in os.listdir(CONTENT) if f.startswith('lessons-') and f.endswith('.js'))
def _glob(prefix):
    return sorted(f[:-3] for f in os.listdir(CONTENT) if f.startswith(prefix) and f.endswith('.js'))
PACKS = ['curriculum'] + _lessons + _glob('texts') + _glob('assessments') + _glob('simulations')
VERSION = '1.0.0'

html = f'''<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<title>English Learning Academy — A1 to Professional English</title>
<meta name="description" content="Self-paced English learning platform from A1 beginner to C1 and professional English, following the CEFR: lessons, vocabulary with spaced repetition, assessments and business simulations.">
<meta name="academic-category" content="Learning">
<meta name="academic-type" content="Learning Platform">
<meta name="academic-description" content="Self-paced English course from A1 to Professional English (CEFR): 99 lessons, vocabulary builder with spaced repetition, placement and stage assessments, listening, speaking and business simulations.">
<meta name="academic-icon" content="En">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link media="all" onerror="this.remove()" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet">
<style>
{css}
</style>
</head>
<body>
<noscript><div style="padding:2em;font-family:sans-serif">The English Learning Academy needs JavaScript. Please enable it in your browser.</div></noscript>
<div class="app" id="app"><main class="content" id="view"><p>Loading the English Learning Academy…</p></main></div>
<script>
/* Content registry: content packs call ELA.add(kind, data). */
window.ELA = {{ lessons: [], texts: [], simulations: [], curriculum: null, assessments: null, loaded: [],
  add: function (kind, data) {{
    if (Array.isArray(this[kind]) && Array.isArray(data)) Array.prototype.push.apply(this[kind], data);
    else this[kind] = data;
    this.loaded.push(kind);
  }} }};
</script>
''' + '\n'.join(f'<script src="english-academy/content/{p}.js?v={VERSION}"></script>' for p in PACKS) + f'''
<script>
{core}
</script>
<script>
{views}
</script>
<script>
(function () {{
  try {{ APP.start(); }}
  catch (e) {{
    var v = document.getElementById('view');
    if (v) v.innerHTML = '<p style="padding:2em">The academy could not start: ' + String(e && e.message).replace(/</g, '&lt;') + '</p>';
    if (window.console) console.error(e);
  }}
}})();
</script>
</body>
</html>
'''
out = os.path.join(ROOT, 'english-learning-academy.html')
open(out, 'w', encoding='utf-8').write(html)
print(out, len(html), 'bytes')
