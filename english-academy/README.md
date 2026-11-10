# English Learning Academy

A self-paced English learning platform inside the ITL Trisakti Academic Digital Hub. It takes learners from **A1 Beginner** to **C1 Advanced** and **Professional English**, following the CEFR, and runs entirely in the browser on GitHub Pages (no backend, no login).

**Live:** `https://irwanraditya.github.io/ITL-Trisakti/english-learning-academy.html`

---

## 1. Purpose

- Give students and staff a structured path from zero English to professional, workplace-ready English.
- Explain grammar for Indonesian speakers (Indonesian notes, common Indonesian mistakes, English–Indonesian examples).
- Combine lessons with practice that sticks: spaced-repetition vocabulary, a daily study plan, listening, speaking, writing, assessments and business simulations.
- Keep everything maintainable by one person: content is plain data files, the app is one HTML page, and a validator plus an end-to-end test suite guard quality.

## 2. What is included

| Area | Content |
| --- | --- |
| Stages and modules | 6 stages (A1, A2, B1, B2, C1, Professional), 24 modules |
| Lessons | 99 lessons: A1 14, A2 12, B1 14, B2 14, C1 12, Professional 33 (A. Business Communication 7, B. Product Management 8, C. Data & Technology 7, D. Leadership 6, E. Career Development 5) |
| Lesson structure | 11 parts in every lesson: objectives, explanation, vocabulary, EN/ID examples, common Indonesian mistakes, practice, quiz, speaking, writing, summary, completion assessment |
| Practice items | 1,589 lesson items (multiple choice, fill in the blank, sentence correction, sentence construction, matching), each with an explanation |
| Examples | 1,042 English sentences with Indonesian translations |
| Vocabulary | 850 vocabulary entries (≈800 unique words) with IPA, part of speech, Indonesian meaning, English definition, example, and collocation/synonym/antonym/register notes |
| Listening and reading | 30 texts (18 listening with transcript and dictation, 12 reading with glossary and writing follow-up), 5 per stage |
| Simulations | 10 professional simulations, each with scenario, role, objective, vocabulary, expressions, sample conversation, assignment and a 1–4 rubric |
| Assessments | Placement test (36 objective items across grammar, vocabulary, reading, listening + writing + speaking self-assessment); 6 stage assessments (129 items, each linked to a lesson for revision suggestions); final assessment (20 auto-scored items + 4 rubric-scored performance tasks) |

## 3. Architecture

```text
english-learning-academy.html      ← built app shell (HTML + CSS + JS inline); loads the content packs below
english-academy/
├── content/                       ← all learning content as data (one JSON literal per file)
│   ├── curriculum.js              ← config, stages, modules, lesson order, CEFR notes, 24-week roadmap
│   ├── lessons-a1-1.js … lessons-pro-e2.js   ← 99 lessons, 3–5 per file
│   ├── texts-1.js, texts-2.js     ← listening and reading texts
│   ├── assessments.js             ← placement, stage and final assessments
│   └── simulations.js             ← 10 professional simulations
├── src/                           ← source of the app shell
│   ├── app.css                    ← design tokens (hub palette, light/dark), layout, components
│   ├── core.js                    ← storage, progress/unlock rules, SRS, planner, TTS, quiz engine
│   ├── views.js                   ← 13 sections + lesson, text, simulation and assessment pages, router
│   └── build.py                   ← assembles english-learning-academy.html
└── tools/
    ├── validate.js                ← content validator (schema, minimums, answer-key sanity)
    └── e2e.js                     ← Playwright end-to-end suite (41 checks)
```

**Design decisions**

- **No backend.** GitHub Pages only serves static files, so progress lives in `localStorage` (key `ela-v1`) with JSON export/import for backups and device changes.
- **Content as data, not code.** Each content file calls `ELA.add(kind, data)` with a pure JSON literal. Files load with `<script src>`, which works both on GitHub Pages and when the HTML is opened from disk (`file://`), unlike `fetch()`.
- **One built page.** CSS and app logic are inlined at build time so the shell has no extra requests; content packs are cached by the browser and versioned with `?v=<VERSION>`.
- **Honest audio.** There are no recorded audio files. Listening and pronunciation use the browser's `speechSynthesis`; every text always has a transcript, and the app shows a notice when speech is unavailable. Speaking practice uses `MediaRecorder` (record and replay locally) and, where the browser supports it, speech recognition to compare what you said with the target sentence.
- **Hash routing.** Routes such as `#/lesson/b1-05/test` work without server configuration.

**Key rules (from `curriculum.js` → `config`)**

| Setting | Default | Meaning |
| --- | --- | --- |
| `lessonPass` | 70 | Completion-assessment score that marks a lesson done |
| `stagePass` | 70 | Stage-assessment score that unlocks the next stage |
| `finalPass` | 70 | Final score needed (50% auto-scored + 50% rubric) |
| `placementLevelThreshold` | 60 | % correct per level needed for placement to skip that level |
| `srsIntervals` | 1, 3, 7, 14, 30 | Spaced-repetition review intervals in days |
| `dailyPlan` | 15/10/10/15/10 | Minutes: vocabulary, grammar, listening, speaking, reading & writing (learners can change it) |
| `vocabTarget` | 10 | New words per day |

**Unlock logic.** A1 is open. A stage unlocks when the previous stage assessment is passed, or when the placement test places the learner above it. Lessons inside an open stage are all available (learners may revise freely). Assessments can be retaken any time; a pass is never removed by a later lower score.

**Spaced repetition.** A correct review moves a word up one box (max 5) and schedules it after 1, 3, 7, 14 or 30 days; a wrong review sends it back to box 1 (due tomorrow). Box ≥ 2 counts as learned; box 5 as mastered.

**Grading.** Multiple choice and matching compare with the key. Typed answers are normalised (case, spacing, curly apostrophes, final punctuation) and contractions are treated as their full forms (`doesn't` = `does not`, `I'm` = `I am`, `won't` = `will not`, `can't` = `cannot`). Alternative correct answers are listed with `|`.

## 4. Content schema

### Lesson (`lessons-*.js`)

```js
{
  "id": "b1-05", "st": "B1", "m": "b1-m2",
  "type": "grammar",                  // grammar | vocab | speaking | skills
  "title": "…", "sub": "Indonesian subtitle",
  "obj":  ["≥3 objectives"],
  "exp":  [{ "h": "heading", "p": "explanation", "id": "optional Indonesian note" }],   // ≥2
  "forms": { "pos": [], "neg": [], "q": [] },      // grammar lessons: positive / negative / question forms
  "struct": ["sentence patterns"],                  // grammar lessons
  "exc":  ["exceptions"],                           // optional
  "voc":  [["word", "/IPA/", "part of speech", "Indonesian meaning", "English definition", "example", "coll: …; syn: …; ant: …"]],
  "ex":   [["English example", "Indonesian translation"]],          // ≥10 grammar, ≥8 others
  "mis":  [["wrong", "correct", "why (Indonesian)"]],               // ≥3
  "dlg":  { "title": "…", "lines": [["Speaker", "English", "Indonesian"]] },   // required for speaking lessons
  "expr": [["expression", "use"]],                                   // required for speaking lessons
  "prac": [items], "quiz": [items], "test": [items],                 // ≥6, ≥5, ≥5
  "speak": { "task": "…", "role": "…", "pron": [["text", "note"]] },
  "write": { "task": "…", "model": "…", "check": ["…"] },
  "sum":  ["≥3 summary points"]
}
```

### Items

| Type | Format | Notes |
| --- | --- | --- |
| Multiple choice | `["mc", question, [options], correctIndex, explanation]` | ≥3 options, no duplicates |
| Fill in the blank | `["fill", "text with one ___", "answer\|alternative", explanation]` | exactly one blank |
| Sentence correction | `["fix", wrongSentence, "correct\|alternative", explanation]` | must be a small edit (no open rewrites) |
| Sentence construction | `["order", "Exact target sentence.", explanation]` | tokens are split on spaces and shuffled |
| Matching | `[ "match", [[left, right], …], explanation]` | right-hand values must be unique |

Assessment items add a lesson id at the end (e.g. `["mc", …, "a1-04"]`) so the results page can suggest revision lessons.

### Other packs

- **Text:** `{ id, kind: "listening"|"reading", st, title, context, body: [paragraph | [speaker, line]], q: [items ≥4], dict?: [sentences], gloss?: [[word, meaning]], write?: "task" }`
- **Simulation:** `{ id, title, level, scenario, role, objective, vocab: [[w, m]] ≥6, expr: [[x, use]] ≥6, convo: [[speaker, line]] ≥8, task, rubric: [[criterion, "4 = …", "1 = …"]] ≥4 }`
- **Assessments:** `{ placement: { intro, sections: [{ id, title, intro, passage?, audio?, items: [[level, item]] }], writing: { prompt, levels }, speaking: [[level, statement]] }, stages: { A1…PRO: { title, intro, items } }, final: { title, intro, items, tasks: [{ title, prompt, rubric }] } }`

## 5. Maintaining the academy

### Edit or add a lesson

1. Edit the lesson object in the right `english-academy/content/lessons-*.js` file (new lesson ids must also be added to a module in `curriculum.js`).
2. Validate: `node english-academy/tools/validate.js .` → must report `ERRORS 0`.
3. If you changed `src/` or added a content file, rebuild: `python3 english-academy/src/build.py .` (bump `VERSION` in `build.py` so browsers reload content).
4. Optional full check: `node english-academy/tools/e2e.js .` (needs Playwright + Chromium).
5. Commit and push to `main`; GitHub Pages redeploys automatically.

### Change configuration

Edit `config` in `curriculum.js` (pass marks, SRS intervals, default daily plan). No rebuild is needed for content-only changes, but bump `VERSION` and rebuild if you want returning visitors to get the new file immediately.

## 6. Testing

- **Validator** (`tools/validate.js`): checks every lesson's structure and minimum counts, item formats, answer indexes, duplicate options, single blanks, that corrections are real edits, lesson references in assessments, texts and simulations.
- **End-to-end** (`tools/e2e.js`, 41 checks): serves the repo over HTTP like Pages, then verifies locking on a fresh start, stage unlocking, placement, all 99 lessons (render 11 sections; quiz and completion test score 100% with the answer key; lessons marked done), contraction-tolerant grading, all stage and final assessments, all 30 texts and dictations, all 10 simulations, SRS intervals with a fake clock, vocabulary search, every route, persistence after reload, export → reset → import, invalid-import rejection, dark mode, no horizontal overflow at 390 px, the hub index card, and zero console or page errors.

## 7. Dependencies

- Runtime: none (plain HTML/CSS/JS). Fonts load from Google Fonts (IBM Plex Sans/Mono, Newsreader) and fall back to system fonts if blocked.
- Browser features: `localStorage`; optional `speechSynthesis`, `SpeechRecognition`, `MediaRecorder`.
- Development: Python 3 (build), Node.js (validator), Playwright with Chromium (end-to-end tests).

## 8. Privacy

- Progress, writing drafts and settings stay in the learner's browser. Nothing is sent to a server.
- Voice recordings are kept in memory for replay only and are never uploaded or saved.
- Speech recognition, where available, is provided by the browser vendor; the app uses it only when the learner presses the button.

## 9. Limitations

- Progress does not sync between devices automatically; use **Settings → Export / Import**.
- Clearing browser data deletes progress unless a backup was exported.
- Audio quality and available voices depend on the browser and operating system; some browsers (and most in-app browsers) have no speech engine, so only transcripts are shown.
- Speaking and writing are self-assessed against rubrics and model answers; there is no automatic essay or pronunciation scoring beyond the speech-recognition similarity check.
- The final assessment's rubric half is self-assessed; for a formal result, a lecturer or colleague should score the four tasks with the same rubrics.
- CEFR study-hour estimates are approximate guidance, not a certification.

## 10. Future improvements

- Optional sign-in and cloud sync (e.g. via the hub's Apps Script back end) so lecturers can see class progress.
- Lazy-loading lesson packs per stage to reduce the first load on slow connections (currently ≈1.2 MB of content, served compressed).
- Recorded native-speaker audio for listening texts to complement the speech engine.
- Lecturer-scored assignments and feedback for speaking and writing.
- More texts and simulations per stage, and an item bank for randomised stage assessments.
