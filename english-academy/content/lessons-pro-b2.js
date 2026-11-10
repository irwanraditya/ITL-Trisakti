/* English Learning Academy — Professional English, B. Product Management (5–8). */
ELA.add('lessons', [
{
  "id": "pro-b5", "st": "PRO", "m": "pro-b", "type": "speaking",
  "title": "Sprint planning and agile ceremonies",
  "sub": "Perencanaan sprint dan ritual agile",
  "obj": ["Use Scrum vocabulary: sprint, sprint goal, backlog, story points, velocity", "Participate in sprint planning, stand-ups, reviews and retrospectives", "Negotiate scope and capacity in planning", "Give constructive input in retrospectives"],
  "exp": [
    {"h": "The Scrum cycle", "p": "Sprint planning (agree the sprint goal and select backlog items) → daily stand-up (progress and blockers) → sprint review (demo to stakeholders) → retrospective (improve the way of working). A sprint is usually one to four weeks.", "id": "Siklus Scrum: perencanaan, stand-up, review, retrospektif."},
    {"h": "Planning language", "p": "Goal: The sprint goal is to let sellers book shipments without calling support. Capacity: We have about 40 story points of capacity, as two people are on leave. Commitment: I'm confident we can commit to stories 1 to 6; story 7 is a stretch. Scope negotiation: If we take on the API work, we'll need to drop the export feature.", "id": "Bahasa perencanaan: tujuan, kapasitas, komitmen, negosiasi lingkup."},
    {"h": "Retrospectives", "p": "Common formats: What went well / What didn't go well / What we'll try next. Be specific and blame-free: “Code reviews took two days on average, which delayed testing. Could we try a same-day review rule?” not “QA is always slow.”", "id": "Retrospektif: spesifik dan tanpa menyalahkan."}
  ],
  "dlg": {"title": "A sprint planning discussion", "lines": [
    ["PO", "The sprint goal I'm proposing is: sellers can book a pickup without calling support.", "Tujuan sprint yang saya usulkan: penjual bisa memesan penjemputan tanpa menelepon layanan."],
    ["SM", "Great. Capacity-wise, we have about 34 points—Andi's on leave next week.", "Bagus. Dari sisi kapasitas, kita punya sekitar 34 poin—Andi cuti minggu depan."],
    ["Dev 1", "Stories 1 to 4 are well defined. Together they're about 26 points.", "Story 1 sampai 4 sudah jelas. Totalnya sekitar 26 poin."],
    ["PO", "Could we also take the pickup-time selector? It's 8 points.", "Bisakah kita juga mengambil pemilih waktu penjemputan? Itu 8 poin."],
    ["Dev 2", "We could, but it depends on the carrier API, which isn't stable yet. I'd treat it as a stretch goal.", "Bisa, tetapi bergantung pada API pengangkut yang belum stabil. Saya anggap sebagai target tambahan."],
    ["PO", "Fair enough. Without the selector, can sellers still book a pickup?", "Wajar. Tanpa pemilih itu, apakah penjual tetap bisa memesan penjemputan?"],
    ["Dev 1", "Yes, with a default time window. It still meets the sprint goal.", "Bisa, dengan jendela waktu bawaan. Tetap memenuhi tujuan sprint."],
    ["SM", "So we commit to stories 1 to 4, with the selector as a stretch. Any concerns? … OK, let's lock it in.", "Jadi kita berkomitmen pada story 1 sampai 4, dengan pemilih sebagai target tambahan. Ada kekhawatiran? … Baik, kita kunci."]
  ]},
  "expr": [
    ["The sprint goal is to…", "stating the goal"],
    ["Capacity-wise, we have about … points.", "capacity"],
    ["I'm confident we can commit to…", "commitment"],
    ["I'd treat it as a stretch goal.", "optional scope"],
    ["It depends on…, which isn't ready yet.", "dependency"],
    ["If we take on X, we'll need to drop Y.", "scope trade-off"],
    ["What went well / What could we improve?", "retrospective"],
    ["Could we try… next sprint?", "improvement proposal"]
  ],
  "voc": [
    ["sprint", "/sprɪnt/", "noun", "sprint", "a short, fixed period of work in Scrum", "This sprint lasts two weeks.", "agile"],
    ["sprint goal", "/sprɪnt ɡəʊl/", "noun", "tujuan sprint", "the main objective of a sprint", "The sprint goal is self-service pickup booking.", "Scrum"],
    ["story points", "/ˈstɔː.ri pɔɪnts/", "noun", "poin story", "a relative estimate of effort", "This story is 5 points.", "estimation"],
    ["velocity", "/vəˈlɒs.ə.ti/", "noun", "kecepatan tim", "story points completed per sprint", "Our average velocity is 38 points.", "agile metric"],
    ["capacity", "/kəˈpæs.ə.ti/", "noun", "kapasitas", "how much work a team can do", "Our capacity is lower because of leave.", "coll: team capacity"],
    ["stretch goal", "/stretʃ ɡəʊl/", "noun", "target tambahan", "an optional, ambitious goal", "The selector is a stretch goal.", "planning"],
    ["retrospective", "/ˌret.rəˈspek.tɪv/", "noun", "retrospektif", "a meeting to improve how the team works", "Let's discuss it in the retrospective.", "short: retro"],
    ["definition of done", "/ˌdef.ɪˈnɪʃ.ən əv dʌn/", "noun", "definisi selesai", "the criteria for a story to count as finished", "Tested and documented is in our definition of done.", "abbr: DoD"]
  ],
  "ex": [
    ["The sprint goal is to let sellers book a pickup without calling support.", "Tujuan sprint adalah memungkinkan penjual memesan penjemputan tanpa menelepon layanan."],
    ["Capacity-wise, we have about 34 points this sprint.", "Dari sisi kapasitas, kita punya sekitar 34 poin sprint ini."],
    ["Our average velocity over the last three sprints is 38 points.", "Rata-rata kecepatan tim tiga sprint terakhir adalah 38 poin."],
    ["I'm confident we can commit to stories 1 to 4.", "Saya yakin kita bisa berkomitmen pada story 1 sampai 4."],
    ["I'd treat the selector as a stretch goal.", "Saya anggap pemilih itu sebagai target tambahan."],
    ["If we take on the API work, we'll need to drop the export feature.", "Jika kita mengambil pekerjaan API, kita harus menghapus fitur ekspor."],
    ["It's not done until it's tested and documented.", "Belum selesai sampai diuji dan didokumentasikan."],
    ["Code reviews took two days on average, which delayed testing.", "Tinjauan kode rata-rata dua hari, yang menunda pengujian."],
    ["Could we try a same-day review rule next sprint?", "Bisakah kita mencoba aturan tinjauan di hari yang sama sprint depan?"],
    ["What went well this sprint?", "Apa yang berjalan baik sprint ini?"]
  ],
  "mis": [
    ["Let's commit to everything in the backlog.", "Let's commit to what fits our capacity and treat the rest as stretch.", "Komitmen sesuai kapasitas."],
    ["QA is always slow. (retro)", "Reviews averaged two days; could we try a same-day rule?", "Spesifik dan tanpa menyalahkan."],
    ["The story is done but not tested.", "The story isn't done until it meets the definition of done.", "Gunakan definition of done."],
    ["Story points are hours.", "Story points are a relative estimate of effort, not hours.", "Poin bukan jam."]
  ],
  "prac": [
    ["match", [["Sprint planning", "agree the goal and select work"], ["Daily stand-up", "progress and blockers"], ["Sprint review", "demo to stakeholders"], ["Retrospective", "improve the way of working"]], "Scrum ceremonies."],
    ["fill", "I'd treat it as a ___ goal. (target tambahan)", "stretch", "stretch goal."],
    ["fill", "Our average ___ is 38 points per sprint.", "velocity", "velocity."],
    ["mc", "Which retro comment is constructive?", ["Devs are lazy.", "Reviews took two days; could we try same-day reviews?", "Everything was bad.", "No comment."], 1, "Specific + suggestion."],
    ["fix", "If we take on the API, we need drop the export.", "If we take on the API, we need to drop the export.|If we take on the API, we'll need to drop the export.", "need + to."],
    ["order", "I am confident we can commit to these stories.", "Commitment."]
  ],
  "quiz": [
    ["mc", "Story points measure:", ["exact hours", "relative effort", "salary", "bugs"], 1, "Relative effort."],
    ["fill", "Tested and documented is part of our definition of ___.", "done", "DoD."],
    ["fix", "Our capacity are lower this sprint.", "Our capacity is lower this sprint.", "Singular."],
    ["mc", "The sprint review is mainly for:", ["blaming people", "demonstrating work to stakeholders", "estimating salaries", "hiring"], 1, "Demo."],
    ["order", "Capacity-wise, we have about thirty points.", "Capacity."]
  ],
  "test": [
    ["mc", "A stretch goal is:", ["mandatory", "optional and ambitious", "cancelled", "already done"], 1, "Optional."],
    ["fill", "Let's discuss process issues in the ___. (retro)", "retrospective|retro", "retrospective."],
    ["fix", "The sprint goal is let sellers book online.", "The sprint goal is to let sellers book online.", "is + to + verb."],
    ["mc", "If capacity is lower, the team should:", ["commit to more", "commit to less or move items to stretch", "cancel the sprint", "work weekends always"], 1, "Match commitment to capacity."],
    ["order", "Could we try a same-day review rule next sprint?", "Improvement proposal."]
  ],
  "speak": {"task": "Run a 6-minute sprint planning with a partner or group: propose a sprint goal, state capacity, select stories, negotiate one stretch goal and one scope trade-off. Then hold a 3-minute retro with one positive point, one problem and one experiment.", "role": "Product owner, scrum master, two developers.",
    "pron": [["velocity /vəˈlɒs.ə.ti/", "ve-LOS-i-ty"], ["retrospective", "ret-ro-SPEC-tive"], ["stretch goal", "STRETCH goal"]]},
  "write": {"task": "Write a sprint planning summary (100–130 words) for the team channel: sprint goal, capacity, committed stories, stretch goal, dependencies and one retro action from the last sprint.", "model": "Sprint 14 plan (18 Nov – 29 Nov). Sprint goal: sellers can book a pickup without calling support. Capacity: ~34 points (Andi on leave 18–22 Nov). Committed: #201 pickup form (8), #202 address validation (5), #203 booking confirmation email (5), #204 support dashboard flag (8). Stretch: #205 pickup-time selector (8)—depends on the carrier API being stable by 22 Nov. Retro action from Sprint 13: same-day code reviews; we'll check review time at the next retro. Demo: Friday 29 Nov, 2 p.m. Questions or concerns → reply here by Monday noon.", "check": ["Goal, capacity and commitments clear", "Stretch and dependency stated", "Retro action included"]},
  "sum": ["Scrum cycle: planning → stand-ups → review → retrospective.", "Plan with a sprint goal, capacity and realistic commitment; use stretch goals.", "Negotiate scope: If we take on X, we'll drop Y.", "Retros are specific and blame-free with one experiment to try."]
},
{
  "id": "pro-b6", "st": "PRO", "m": "pro-b", "type": "skills",
  "title": "Backlog prioritisation",
  "sub": "Prioritisasi backlog",
  "obj": ["Use prioritisation frameworks: RICE, MoSCoW, value vs effort, Kano", "Explain and defend priority decisions with data", "Discuss trade-offs and opportunity cost", "Write a short prioritisation rationale"],
  "exp": [
    {"h": "Frameworks", "p": "RICE = Reach × Impact × Confidence ÷ Effort. Value vs effort: quick wins (high value, low effort) first, big bets planned carefully, avoid money pits (low value, high effort). MoSCoW for release scope. Kano: basic expectations, performance features, delighters.", "id": "Kerangka prioritas: RICE, nilai vs usaha, MoSCoW, Kano."},
    {"h": "Defending priorities", "p": "Use evidence: “Payment delays affect 40% of active sellers (reach), cause most churn (impact), and we have strong data (confidence). Effort is about three sprints.” Mention opportunity cost: “Building analytics now would mean delaying payouts by a month.”", "id": "Pertahankan prioritas dengan data dan sebutkan biaya peluang."},
    {"h": "Language", "p": "This ranks higher because… / This scores lower on reach. / It's a quick win. / It's a big bet. / The opportunity cost is… / We're parking this for now. / Let's revisit it when… / On balance, we should prioritise…", "id": "Bahasa untuk menjelaskan peringkat prioritas."}
  ],
  "voc": [
    ["backlog", "/ˈbæk.lɒɡ/", "noun", "daftar pekerjaan", "a prioritised list of work", "Let's groom the backlog.", "coll: product backlog"],
    ["RICE", "/raɪs/", "noun", "RICE (kerangka prioritas)", "Reach, Impact, Confidence, Effort", "This item has the highest RICE score.", "framework"],
    ["quick win", "/kwɪk wɪn/", "noun", "kemenangan cepat", "high value, low effort", "The reference field is a quick win.", "value vs effort"],
    ["big bet", "/bɪɡ bet/", "noun", "taruhan besar", "high value but high effort or risk", "The new app is a big bet.", "value vs effort"],
    ["opportunity cost", "/ˌɒp.əˈtjuː.nə.ti kɒst/", "noun", "biaya peluang", "what you give up by choosing one option", "The opportunity cost is delaying payouts.", "economics"],
    ["refine", "/rɪˈfaɪn/", "verb", "menyempurnakan", "to improve detail and clarity", "We need to refine these stories before planning.", "noun: backlog refinement"],
    ["park", "/pɑːk/", "verb", "menunda (sementara)", "to put aside for later", "Let's park this idea for now.", "informal business"],
    ["delighter", "/dɪˈlaɪ.tər/", "noun", "fitur pemikat", "an unexpected feature that delights users (Kano)", "Free packaging tips are a delighter.", "Kano model"]
  ],
  "ex": [
    ["Instant payouts rank higher because they affect 40% of active sellers.", "Pencairan instan peringkatnya lebih tinggi karena memengaruhi 40% penjual aktif."],
    ["The dark-mode request scores low on reach and impact.", "Permintaan mode gelap skornya rendah dalam jangkauan dan dampak."],
    ["Adding a reference field is a quick win: one day of work for a key client.", "Menambah kolom referensi adalah kemenangan cepat: satu hari kerja untuk klien utama."],
    ["The mobile app is a big bet; we should validate demand first.", "Aplikasi seluler adalah taruhan besar; kita perlu memvalidasi permintaan dulu."],
    ["The opportunity cost of building analytics now is a one-month delay to payouts.", "Biaya peluang membangun analitik sekarang adalah penundaan pencairan sebulan."],
    ["Let's park the loyalty programme and revisit it in Q3.", "Mari tunda program loyalitas dan tinjau lagi di Q3."],
    ["We need to refine these stories before sprint planning.", "Kita perlu menyempurnakan story ini sebelum perencanaan sprint."],
    ["On balance, we should prioritise payouts over analytics.", "Secara keseluruhan, kita sebaiknya memprioritaskan pencairan daripada analitik."]
  ],
  "mis": [
    ["The CEO said so, so it's top priority. (tanpa data)", "This ranks highest on reach and impact; the CEO's request aligns with that.", "Gunakan data, bukan hanya jabatan."],
    ["Everything is priority one.", "We've ranked the backlog; only the top three are committed.", "Jika semua prioritas, tidak ada prioritas."],
    ["We'll do it later. (tanpa kapan meninjau)", "Let's park it and revisit it at the Q3 planning.", "Tentukan kapan ditinjau ulang."]
  ],
  "prac": [
    ["match", [["Quick win", "high value, low effort"], ["Big bet", "high value, high effort"], ["Money pit", "low value, high effort"], ["Fill-in", "low value, low effort"]], "Value vs effort."],
    ["mc", "In RICE, C stands for:", ["Cost", "Confidence", "Customer", "Complexity"], 1, "Confidence."],
    ["fill", "Let's ___ this idea and revisit it in Q3. (tunda)", "park", "park."],
    ["fill", "The ___ cost is a one-month delay. (peluang)", "opportunity", "opportunity cost."],
    ["fix", "This feature rank higher because of reach.", "This feature ranks higher because of reach.", "Third person -s."],
    ["order", "On balance, we should prioritise payouts over analytics.", "Concluding a priority decision."]
  ],
  "quiz": [
    ["mc", "In the Kano model, a delighter is:", ["a basic expectation", "an unexpected feature that pleases users", "a bug", "a price"], 1, "Delighter."],
    ["fill", "We need to ___ the stories before planning. (menyempurnakan)", "refine", "refine."],
    ["fix", "Every items is priority one.", "Every item is priority one.", "every + singular."],
    ["mc", "RICE score = ", ["Reach + Impact + Confidence + Effort", "Reach × Impact × Confidence ÷ Effort", "Revenue − Cost", "Impact ÷ Reach"], 1, "Formula."],
    ["order", "This item scores lower on reach.", "Explaining a score."]
  ],
  "test": [
    ["mc", "Which should usually be done first?", ["money pits", "quick wins", "fill-ins", "random items"], 1, "Quick wins."],
    ["fill", "The new mobile app is a big ___. (taruhan)", "bet", "big bet."],
    ["fix", "We should prioritise analytics than payouts.", "We should prioritise analytics over payouts.", "prioritise X over Y."],
    ["mc", "The best defence of a priority decision uses:", ["job titles", "data on reach, impact and effort", "feelings", "rumours"], 1, "Evidence."],
    ["order", "Let's revisit it at the Q3 planning.", "Revisit later."]
  ],
  "speak": {"task": "Prioritise five backlog items for a real or imagined product using RICE or value vs effort. Present your top three in 2 minutes with data and opportunity cost, and park the rest with a revisit date.", "role": "Partner A is a stakeholder whose request was parked; Partner B explains the ranking calmly with data.",
    "pron": [["RICE", "like the food: /raɪs/"], ["opportunity cost", "op-por-TU-ni-ty cost"], ["ranks HIGHER because…", "stress the comparison"]]},
  "write": {"task": "Write a prioritisation rationale (120–150 words) for your top three backlog items and one parked item, using RICE or value vs effort, opportunity cost and a revisit date.", "model": "Q2 prioritisation rationale. 1. Instant payouts (RICE 840): affects ~40% of active sellers and is linked to 30% of churn; high confidence from churn interviews; ~3 sprints. 2. Address validation (RICE 610): reduces failed deliveries by an estimated 15%; quick win at 1 sprint. 3. Bulk booking for sellers with 100+ orders (RICE 420): smaller reach but high revenue per seller. Parked: seller analytics module (RICE 180). It scores lower on reach and confidence, and building it now would delay payouts by about a month—an opportunity cost we can't justify. We'll revisit analytics at Q3 planning using new survey data.", "check": ["Scores or value/effort with evidence", "Opportunity cost explained", "Parked item with revisit date"]},
  "sum": ["Frameworks: RICE, value vs effort, MoSCoW, Kano.", "Defend priorities with reach, impact, confidence and effort data.", "Name the opportunity cost of each choice.", "Park items explicitly with a revisit date."]
},
{
  "id": "pro-b7", "st": "PRO", "m": "pro-b", "type": "skills",
  "title": "Feature releases and launches",
  "sub": "Rilis fitur dan peluncuran",
  "obj": ["Use release vocabulary: beta, phased rollout, feature flag, rollback, release notes", "Write clear, user-focused release notes", "Coordinate a launch checklist with different teams", "Communicate release issues and rollbacks"],
  "exp": [
    {"h": "Release strategies", "p": "Internal testing → closed beta (selected users) → phased rollout (5% → 25% → 100%) using feature flags so the team can switch features on/off without a new deployment. If metrics drop or errors spike, roll back.", "id": "Strategi rilis: beta tertutup, rilis bertahap, feature flag, rollback."},
    {"h": "Release notes", "p": "Write for users, not developers: what's new, why it helps, how to use it. “New: Book a pickup from your dashboard. You no longer need to call us—choose a time window and we'll confirm in minutes.” Group into New, Improved, Fixed.", "id": "Catatan rilis untuk pengguna: apa yang baru, manfaatnya, cara pakai."},
    {"h": "Launch coordination", "p": "A launch checklist covers engineering (monitoring, rollback plan), support (FAQs, scripts), sales/marketing (messaging, timing), legal (terms, privacy) and data (tracking events, success metrics). Language: Go/no-go decision, launch readiness, smoke test, on-call.", "id": "Koordinasi peluncuran lintas tim."}
  ],
  "voc": [
    ["beta", "/ˈbiː.tə/", "noun", "beta", "a test version for selected users", "We're running a closed beta with 50 sellers.", "coll: closed/open beta"],
    ["phased rollout", "/feɪzd ˈrəʊl.aʊt/", "noun", "peluncuran bertahap", "releasing to a growing share of users", "We'll do a phased rollout: 5%, 25%, 100%.", "syn: staged rollout"],
    ["feature flag", "/ˈfiː.tʃə flæɡ/", "noun", "saklar fitur", "a setting to turn a feature on or off", "The feature is behind a flag.", "also: feature toggle"],
    ["roll back", "/rəʊl bæk/", "phrasal verb", "mengembalikan ke versi sebelumnya", "to return to a previous version", "We rolled back the release after errors spiked.", "noun: rollback"],
    ["release notes", "/rɪˈliːs nəʊts/", "noun", "catatan rilis", "a summary of changes in a release", "The release notes are on the help centre.", "always plural"],
    ["go/no-go", "/ˌɡəʊ ˈnəʊ ɡəʊ/", "noun", "keputusan lanjut/batal", "a decision whether to launch", "The go/no-go meeting is at 4 p.m.", "launch term"],
    ["smoke test", "/ˈsməʊk test/", "noun", "uji asap", "a quick test that basic functions work", "Run a smoke test after deployment.", "QA"],
    ["on-call", "/ˌɒnˈkɔːl/", "adjective", "siaga", "available to respond to incidents", "Who's on-call during the launch?", "noun: on-call rota"]
  ],
  "ex": [
    ["We're running a closed beta with 50 sellers in Surabaya.", "Kami menjalankan beta tertutup dengan 50 penjual di Surabaya."],
    ["We'll do a phased rollout: 5% this week, 25% next week, then everyone.", "Kami akan meluncur bertahap: 5% minggu ini, 25% minggu depan, lalu semua."],
    ["The new checkout is behind a feature flag.", "Checkout baru berada di balik saklar fitur."],
    ["Errors spiked to 4%, so we rolled back the release.", "Kesalahan melonjak ke 4%, jadi kami mengembalikan rilis."],
    ["New: book a pickup directly from your dashboard.", "Baru: pesan penjemputan langsung dari dasbor Anda."],
    ["Fixed: invoices now show the correct tax amount.", "Diperbaiki: faktur kini menampilkan jumlah pajak yang benar."],
    ["The go/no-go meeting is at 4 p.m. tomorrow.", "Rapat keputusan lanjut/batal pukul 16.00 besok."],
    ["Support has updated the FAQs and call scripts.", "Tim layanan telah memperbarui FAQ dan naskah panggilan."]
  ],
  "mis": [
    ["Release notes: Refactored PickupService and migrated DB schema v12.", "New: Book a pickup from your dashboard—no phone call needed.", "Tulis untuk pengguna, bukan pengembang."],
    ["Launching to 100% of users on day one without monitoring.", "Phased rollout with monitoring and a rollback plan.", "Kurangi risiko peluncuran."],
    ["We rollbacked the release.", "We rolled back the release.", "Phrasal verb: roll back → rolled back."]
  ],
  "prac": [
    ["match", [["Closed beta", "selected users test early"], ["Phased rollout", "5% → 25% → 100%"], ["Feature flag", "switch a feature on or off"], ["Rollback", "return to the previous version"]], "Release terms."],
    ["mc", "Which is user-focused release-note wording?", ["Migrated schema v12.", "New: Track all your parcels in one place.", "Refactored API.", "Bug 4471 closed."], 1, "User benefit."],
    ["fill", "We rolled ___ the release after errors spiked.", "back", "roll back."],
    ["fill", "Run a ___ test after deployment. (uji asap)", "smoke", "smoke test."],
    ["fix", "The feature is behind a feature flags.", "The feature is behind a feature flag.", "a + singular."],
    ["order", "We will do a phased rollout over three weeks.", "Release plan."]
  ],
  "quiz": [
    ["mc", "A go/no-go meeting decides:", ["salaries", "whether to launch", "office location", "team lunch"], 1, "Launch decision."],
    ["fill", "Who's ___-call during the launch weekend? (siaga)", "on", "on-call."],
    ["fix", "We rollbacked the update.", "We rolled back the update.", "Correct past form."],
    ["mc", "Release notes are usually grouped into:", ["New, Improved, Fixed", "Red, Amber, Green", "Must, Should, Could", "Now, Next, Later"], 0, "Standard groups."],
    ["order", "The new checkout is behind a feature flag.", "Feature flag."]
  ],
  "test": [
    ["mc", "Why use a phased rollout?", ["to confuse users", "to limit risk and monitor metrics", "to save paper", "it's required by law"], 1, "Risk control."],
    ["fill", "The release ___ are published on the help centre. (catatan)", "notes", "release notes."],
    ["fix", "Fixed: invoice now shows correct tax.", "Fixed: invoices now show the correct tax.", "Plural + article."],
    ["mc", "Which team prepares FAQs and call scripts?", ["Engineering", "Support", "Legal", "Finance"], 1, "Support."],
    ["order", "Errors spiked, so we rolled back the release.", "Rollback communication."]
  ],
  "speak": {"task": "Lead a 5-minute go/no-go meeting for a feature launch: check readiness with engineering, support, marketing and legal, agree the rollout phases and the rollback trigger, and make the decision.", "role": "Product manager, engineering lead, support lead, marketing lead.",
    "pron": [["go/no-go", "GO no-GO"], ["rollback (noun) vs roll back (verb)", "ROLL-back / roll BACK"], ["beta", "UK BEE-ta, US BAY-ta"]]},
  "write": {"task": "Write (1) user-facing release notes (80–100 words) with New/Improved/Fixed, and (2) a 60–80-word internal message announcing a rollback.", "model": "(1) Release 3.4 – 20 November. New: Book a pickup from your dashboard. Choose a time window and we'll confirm within minutes—no phone call needed. Improved: Tracking pages now load twice as fast on mobile. Fixed: Invoices now show the correct VAT for sellers outside Java. (2) Heads-up: we've rolled back the pickup-booking feature for all users as of 15:20. Error rates rose to 4% after the 25% rollout, mainly on Android 9. The feature remains behind a flag; engineering is investigating and we'll share an update by 10:00 tomorrow. Support: please use the standard phone process until further notice.", "check": ["User-focused benefits in release notes", "Rollback: what, why, impact, next update", "Clear instructions to other teams"]},
  "sum": ["Release safely: beta → phased rollout → full launch, with feature flags and rollback plans.", "Release notes for users: New, Improved, Fixed—benefits first.", "Coordinate launches across engineering, support, marketing, legal and data.", "Communicate rollbacks quickly: what, why, impact, next update."]
},
{
  "id": "pro-b8", "st": "PRO", "m": "pro-b", "type": "vocab",
  "title": "Risk management",
  "sub": "Manajemen risiko",
  "obj": ["Use risk vocabulary: likelihood, impact, mitigation, contingency, risk owner", "Describe risks with cause → event → consequence", "Discuss risk appetite and trade-offs", "Maintain and present a risk register"],
  "exp": [
    {"h": "Describing a risk", "p": "Use cause → event → consequence: “Because the carrier API is new (cause), it may fail during peak traffic (event), which would stop pickup bookings for up to a day (consequence).” Then rate likelihood and impact (e.g. 1–5) and assign an owner.", "id": "Gambarkan risiko: penyebab → kejadian → akibat."},
    {"h": "Responses", "p": "Avoid (change the plan so the risk disappears), Reduce/mitigate (lower likelihood or impact), Transfer (insurance, contracts), Accept (with a contingency plan). Contingency = what we will do if it happens; mitigation = what we do now to prevent it.", "id": "Respons risiko: hindari, kurangi, alihkan, terima."},
    {"h": "Issues vs risks", "p": "A risk might happen; an issue is happening now. Language: There's a risk that… / This could lead to… / The likelihood is low, but the impact would be severe. / We're mitigating this by… / If it materialises, our contingency is…", "id": "Risiko = mungkin terjadi; isu = sedang terjadi."}
  ],
  "voc": [
    ["likelihood", "/ˈlaɪ.kli.hʊd/", "noun", "kemungkinan", "how probable something is", "The likelihood is low.", "syn: probability"],
    ["impact", "/ˈɪm.pækt/", "noun", "dampak", "the effect if something happens", "The impact would be severe.", "coll: high/low impact"],
    ["mitigation", "/ˌmɪt.ɪˈɡeɪ.ʃən/", "noun", "mitigasi", "action to reduce a risk", "Our mitigation is a backup carrier.", "verb: mitigate"],
    ["contingency plan", "/kənˈtɪn.dʒən.si plæn/", "noun", "rencana kontinjensi", "what you will do if a risk happens", "Our contingency plan is manual booking.", "coll: have a contingency plan"],
    ["risk register", "/rɪsk ˈredʒ.ɪ.stər/", "noun", "daftar risiko", "a document listing risks, ratings and owners", "Please update the risk register.", "project management"],
    ["risk owner", "/rɪsk ˈəʊ.nər/", "noun", "pemilik risiko", "the person responsible for managing a risk", "Who is the risk owner?", "one person per risk"],
    ["materialise", "/məˈtɪə.ri.ə.laɪz/", "verb", "terjadi (menjadi nyata)", "to happen (of a risk)", "If the risk materialises, we switch carriers.", "US: materialize"],
    ["risk appetite", "/rɪsk ˈæp.ɪ.taɪt/", "noun", "selera risiko", "how much risk an organisation will accept", "Our risk appetite for data issues is very low.", "governance"],
    ["single point of failure", "/ˈsɪŋ.ɡəl pɔɪnt əv ˈfeɪ.ljər/", "noun", "titik kegagalan tunggal", "one part whose failure stops everything", "One supplier is a single point of failure.", "abbr: SPOF"],
    ["issue", "/ˈɪʃ.uː/", "noun", "isu, masalah aktif", "a problem that is happening now", "This is no longer a risk—it's an issue.", "vs risk (possible)"]
  ],
  "ex": [
    ["Because the carrier API is new, it may fail during peak traffic, which would stop bookings.", "Karena API pengangkut masih baru, bisa gagal saat lalu lintas puncak, yang akan menghentikan pemesanan."],
    ["The likelihood is low, but the impact would be severe.", "Kemungkinannya rendah, tetapi dampaknya akan berat."],
    ["We're mitigating this by testing at three times normal load.", "Kami memitigasinya dengan menguji pada tiga kali beban normal."],
    ["If it materialises, our contingency is manual booking through support.", "Jika terjadi, rencana kontinjensi kami adalah pemesanan manual lewat layanan pelanggan."],
    ["Who is the risk owner for the data migration?", "Siapa pemilik risiko untuk migrasi data?"],
    ["Relying on one supplier is a single point of failure.", "Bergantung pada satu pemasok adalah titik kegagalan tunggal."],
    ["Our risk appetite for customer-data breaches is very low.", "Selera risiko kami terhadap kebocoran data pelanggan sangat rendah."],
    ["The delay is no longer a risk; it's an issue.", "Keterlambatan ini bukan lagi risiko; sudah menjadi isu."]
  ],
  "mis": [
    ["Risk: the API.", "Risk: Because the API is new, it may fail at peak, which would stop bookings.", "Gunakan penyebab → kejadian → akibat."],
    ["Mitigation and contingency are the same.", "Mitigation acts now; contingency is the plan if the risk happens.", "Bedakan keduanya."],
    ["The team owns the risk.", "Rina owns the risk.", "Satu pemilik per risiko."]
  ],
  "prac": [
    ["match", [["Avoid", "change the plan to remove the risk"], ["Mitigate", "reduce likelihood or impact"], ["Transfer", "shift it via insurance or contract"], ["Accept", "live with it, with a contingency"]], "Risk responses."],
    ["fill", "If the risk ___, we switch to the backup carrier. (terjadi)", "materialises|materializes", "materialise."],
    ["fill", "One supplier is a single point of ___.", "failure", "SPOF."],
    ["mc", "Which is an issue, not a risk?", ["The server may crash.", "The server is down now.", "Prices could rise.", "Staff might leave."], 1, "Happening now."],
    ["fix", "The likelihood are low.", "The likelihood is low.", "Singular."],
    ["order", "We are mitigating this by adding a backup carrier.", "Mitigation statement."]
  ],
  "quiz": [
    ["mc", "A contingency plan is:", ["what we do now to prevent a risk", "what we will do if the risk happens", "a budget", "a meeting"], 1, "If it happens."],
    ["fill", "Please update the risk ___. (daftar risiko)", "register", "risk register."],
    ["fix", "Who own this risk?", "Who owns this risk?|Who is the risk owner?", "Third person -s."],
    ["mc", "“Risk appetite” means:", ["hunger", "how much risk an organisation accepts", "number of risks", "risk cost"], 1, "Risk appetite."],
    ["order", "The likelihood is low, but the impact would be severe.", "Rating a risk."]
  ],
  "test": [
    ["mc", "Buying insurance is an example of:", ["avoiding", "transferring", "accepting", "ignoring"], 1, "Transfer."],
    ["fill", "Our ___ is daily backups and load testing. (mitigasi)", "mitigation", "mitigation."],
    ["fix", "If the risk will materialise, we use manual booking.", "If the risk materialises, we use manual booking.|If the risk materialises, we will use manual booking.", "No will after if."],
    ["mc", "The best risk description includes:", ["only a title", "cause, event and consequence", "the owner's hobby", "colours"], 1, "Cause–event–consequence."],
    ["order", "This is no longer a risk; it is an issue.", "Risk vs issue."]
  ],
  "speak": {"task": "Present the top three risks of a project in 2 minutes using cause → event → consequence, likelihood and impact ratings, mitigation, contingency and owners.", "role": "Partner A is a steering-committee member who challenges ratings: Why only “medium”? What's the contingency? Who owns it?",
    "pron": [["likelihood /ˈlaɪ.kli.hʊd/", "LIKE-lee-hood"], ["mitigation", "mit-i-GAY-tion"], ["contingency", "con-TIN-gen-cy"]]},
  "write": {"task": "Write three entries for a risk register (each 40–60 words): risk description (cause–event–consequence), likelihood/impact (1–5), mitigation, contingency, owner.", "model": "R1. Because the new carrier API has not been tested at peak volume, it may fail during the 12.12 sale, which would stop pickup bookings for up to 24 hours. Likelihood 3 / Impact 5. Mitigation: load test at 3× normal volume by 30 Nov. Contingency: manual booking via support with pre-written scripts. Owner: Andi (Engineering Lead). R2. Because we buy all packaging from one supplier (a single point of failure), a stoppage at their factory could leave us without cartons, which would halt dispatch within three days. Likelihood 2 / Impact 4. Mitigation: qualify a second supplier by January. Contingency: two weeks of buffer stock. Owner: Rina (Procurement).", "check": ["Cause–event–consequence", "Separate mitigation and contingency", "One named owner"]},
  "sum": ["Describe risks as cause → event → consequence; rate likelihood and impact.", "Responses: avoid, mitigate, transfer, accept (with contingency).", "Mitigation acts now; contingency applies if the risk materialises.", "Every risk needs one owner; issues are risks that are already happening."]
}
]);
