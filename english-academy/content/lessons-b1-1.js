/* English Learning Academy — B1 Intermediate, lessons 1–4. */
ELA.add('lessons', [
{
  "id": "b1-01", "st": "B1", "m": "b1-m1", "type": "grammar",
  "title": "Present perfect",
  "sub": "Present perfect: pengalaman, hasil, dan durasi",
  "obj": ["Form the present perfect with have/has + past participle", "Use it for life experience, recent results and unfinished periods", "Use ever, never, already, yet, just, for and since", "Report project status with the present perfect"],
  "exp": [
    {"h": "Form", "p": "have/has + past participle (V3). Regular V3 = -ed (worked, finished). Irregular V3 must be learned: be → been, do → done, go → gone, see → seen, write → written, send → sent, make → made, take → taken. Negative: haven't/hasn't + V3. Question: Have/Has + subject + V3?", "id": "Bentuk V3 (past participle) wajib dihafal untuk kata kerja tak beraturan."},
    {"h": "Three main uses", "p": "1) Life experience, time not mentioned: I've worked in two countries. Have you ever used SAP? 2) A past action with a present result: I've lost my ID card (I don't have it now). The client has approved the budget. 3) A situation that started in the past and continues now: We've known each other for ten years. She has worked here since 2021.", "id": "Present perfect menghubungkan masa lalu dengan sekarang; tidak dipakai dengan waktu lampau yang spesifik (yesterday, in 2020)."},
    {"h": "Time words", "p": "just (baru saja): I've just sent it. already (sudah) in positive sentences: We've already finished. yet (belum/sudah?) in negatives and questions, at the end: I haven't checked it yet. Have you called them yet? ever/never for experience. for + period / since + starting point for duration.", "id": "already = sudah; yet = belum (negatif) / sudah? (pertanyaan); just = baru saja."},
    {"h": "been vs gone", "p": "She has gone to Surabaya = she is there now. She has been to Surabaya = she visited and came back (experience).", "id": "gone = belum kembali; been = pernah ke sana dan sudah kembali."}
  ],
  "struct": ["subject + have/has + V3", "subject + haven't/hasn't + V3 + (yet)", "Have/Has + subject + (ever) + V3?", "have/has + V3 + for/since"],
  "forms": {"pos": ["We've completed the first phase.", "She has visited the site three times.", "I've just received your email."], "neg": ["I haven't finished the report yet.", "He has never worked night shifts.", "They haven't paid the invoice."], "q": ["Have you ever been to Singapore?", "Has the shipment arrived yet?", "How long have you worked here?"]},
  "exc": ["Do not use the present perfect with finished-time expressions: yesterday, last week, in 2019, ago, when I was a child.", "American English often uses the past simple with just/already/yet: Did you eat yet? British English prefers the present perfect.", "This is the first time I've… (not I… / I'm…): This is the first time I've given a presentation in English."],
  "voc": [
    ["already", "/ɔːlˈred.i/", "adverb", "sudah", "before now or earlier than expected", "We've already sent the samples.", "position: between have and V3"],
    ["yet", "/jet/", "adverb", "belum; sudah?", "until now (negatives/questions)", "Has the client replied yet?", "position: end of the sentence"],
    ["just", "/dʒʌst/", "adverb", "baru saja", "a very short time ago", "The truck has just left.", "position: between have and V3"],
    ["approve", "/əˈpruːv/", "verb", "menyetujui", "to officially accept a plan or request", "Finance has approved the budget.", "noun: approval"],
    ["complete", "/kəmˈpliːt/", "verb", "menyelesaikan", "to finish doing something", "We've completed 80% of the work.", "noun: completion"],
    ["recently", "/ˈriː.sənt.li/", "adverb", "baru-baru ini", "not long ago", "Have you seen the new dashboard recently?", "syn: lately"],
    ["so far", "/səʊ ˈfɑːr/", "phrase", "sejauh ini", "until now", "So far, we've received 120 applications.", "common in status updates"],
    ["achievement", "/əˈtʃiːv.mənt/", "noun", "pencapaian", "something good that you have done", "What has been your biggest achievement?", "verb: achieve"]
  ],
  "ex": [
    ["I've worked in logistics for eight years.", "Saya sudah bekerja di logistik selama delapan tahun."],
    ["Have you ever used a warehouse management system?", "Pernahkah Anda memakai sistem manajemen gudang?"],
    ["We've just received the purchase order.", "Kami baru saja menerima pesanan pembelian."],
    ["The client has already approved the design.", "Klien sudah menyetujui desainnya."],
    ["I haven't checked the figures yet.", "Saya belum memeriksa angkanya."],
    ["Has the container arrived yet?", "Apakah kontainernya sudah tiba?"],
    ["She's been to Japan twice for training.", "Dia sudah dua kali ke Jepang untuk pelatihan."],
    ["He's gone to the port; he'll be back at three.", "Dia pergi ke pelabuhan; dia kembali pukul tiga."],
    ["So far we've delivered 95% of orders on time.", "Sejauh ini kami mengirim 95% pesanan tepat waktu."],
    ["This is the first time I've led a project.", "Ini pertama kalinya saya memimpin proyek."],
    ["We've had three system failures since January.", "Kami mengalami tiga gangguan sistem sejak Januari."],
    ["I've lost my access card. Can I get a new one?", "Kartu akses saya hilang. Bisa minta yang baru?"]
  ],
  "mis": [
    ["I have finished it yesterday.", "I finished it yesterday.", "Waktu lampau spesifik → past simple."],
    ["I work here since 2020.", "I've worked here since 2020.", "Situasi yang berlanjut sampai sekarang → present perfect."],
    ["Have you already finished? (maksud: sudah atau belum)", "Have you finished yet?", "Dalam pertanyaan netral gunakan yet."],
    ["This is the first time I come here.", "This is the first time I've come here.", "the first time + present perfect."]
  ],
  "prac": [
    ["fill", "We ___ (complete) the training. (just)", "have just completed|'ve just completed", "have + just + V3."],
    ["fill", "She ___ (never / work) in sales.", "has never worked|'s never worked", "has + never + V3."],
    ["fill", "Have you sent the invoice ___? (belum/sudah?)", "yet", "yet at the end of questions."],
    ["mc", "She isn't here. She has ___ to the bank.", ["been", "gone", "went", "go"], 1, "Still there → gone."],
    ["fix", "I have seen him last week.", "I saw him last week.", "last week = finished time."],
    ["match", [["go", "gone"], ["write", "written"], ["take", "taken"], ["send", "sent"], ["be", "been"]], "Irregular past participles."]
  ],
  "quiz": [
    ["mc", "How long ___ in this company?", ["do you work", "have you worked", "are you working", "did you work"], 1, "Duration until now."],
    ["fill", "I've known her ___ 2015. (for/since)", "since", "Starting point."],
    ["fix", "I didn't finish the report yet.", "I haven't finished the report yet.", "yet + present perfect (UK)."],
    ["mc", "Which sentence talks about life experience?", ["I've been to Korea three times.", "I went to Korea last May.", "I'm going to Korea.", "I was in Korea in 2019."], 0, "Present perfect, no time."],
    ["order", "Has the client approved the budget yet?", "Has + subject + V3 + yet?"]
  ],
  "test": [
    ["fill", "They ___ (already / pay) the deposit.", "have already paid|'ve already paid", "have + already + V3."],
    ["mc", "This is the first time I ___ a presentation in English.", ["give", "gave", "'ve given", "am giving"], 2, "the first time + present perfect."],
    ["fix", "We have met in 2019 at a conference.", "We met in 2019 at a conference.", "in 2019 = finished time."],
    ["mc", "He's ___ to Bali. He came back yesterday with a tan.", ["gone", "been", "went", "go"], 1, "Visited and returned → been."],
    ["order", "So far we have hired twelve new drivers.", "So far + present perfect."]
  ],
  "speak": {"task": "Give a 1-minute professional profile using the present perfect: how long you've worked/studied, three experiences you've had, and one achievement. Then ask a partner five Have you ever…? questions.", "role": "Weekly stand-up: Partner A is the team lead asking Have you…yet?; Partner B reports what they have/haven't done.",
    "pron": [["I've /aɪv/, she's /ʃiːz/, we've /wiːv/", "use contractions in speech"], ["haven't /ˈhæv.ənt/", "clear negative"], ["been /biːn/ (UK) /bɪn/ (US)", "both are fine"]]},
  "write": {"task": "Write a project status email (90–120 words) using already, yet, just, so far and for/since.", "model": "Subject: Warehouse system upgrade – status. Hi team, Here is a quick update. We have already installed the new scanners in Warehouse A, and the IT team has just finished the user training. So far, 18 of 25 staff have passed the system test. We haven't migrated the old stock data yet because the vendor has found some duplicate codes. We have worked on this issue since Monday and expect to fix it by Thursday. Please let me know if you have any questions. Best, Dimas", "check": ["have/has + V3", "No finished-time expressions with present perfect", "already/just in the middle, yet at the end"]},
  "sum": ["have/has + V3 for experience, present results and unfinished periods.", "just/already (middle), yet (end), ever/never for experience.", "for + period, since + starting point.", "Never with yesterday, last week, in 2020, ago → use past simple."]
},
{
  "id": "b1-02", "st": "B1", "m": "b1-m1", "type": "grammar",
  "title": "Past continuous",
  "sub": "Past continuous: kegiatan yang sedang berlangsung di masa lalu",
  "obj": ["Form the past continuous with was/were + -ing", "Describe background actions in the past", "Combine past continuous and past simple with when and while", "Set the scene in stories and incident reports"],
  "exp": [
    {"h": "Form and meaning", "p": "was/were + verb-ing. It describes an action in progress at a specific time in the past: At 9 a.m. yesterday I was driving to the port. What were you doing at 8 last night?", "id": "Mirip “sedang” tetapi untuk masa lalu: “Saya sedang menyetir (kemarin pukul 9).”"},
    {"h": "Interrupted actions", "p": "Use the past continuous for the longer background action and the past simple for the shorter action that interrupts it: I was checking the stock when the alarm went off. While we were unloading, it started to rain.", "id": "Aksi panjang (latar) = past continuous; aksi pendek (pemotong) = past simple."},
    {"h": "when vs while", "p": "while + past continuous (the long action): While I was waiting, I read the report. when + past simple (the short action): The phone rang when I was in the meeting. Two parallel long actions: While I was cooking, my brother was cleaning.", "id": "while biasanya dengan aksi panjang, when dengan aksi pendek."},
    {"h": "Scene setting and reports", "p": "In stories and incident reports, the past continuous sets the background: It was raining and the forklift was moving slowly. Then a box fell from the top shelf.", "id": "Dalam laporan insiden, past continuous menjelaskan kondisi saat kejadian."}
  ],
  "struct": ["subject + was/were + verb-ing", "subject + wasn't/weren't + verb-ing", "Was/Were + subject + verb-ing?", "past continuous + when + past simple / while + past continuous, past simple"],
  "forms": {"pos": ["I was working late when you called.", "They were loading the truck at 6 a.m.", "It was raining all morning."], "neg": ["She wasn't listening during the briefing.", "We weren't using the system at that time.", "The machine wasn't working properly."], "q": ["What were you doing at 10 o'clock?", "Was he driving when the accident happened?", "Were they waiting long?"]},
  "exc": ["State verbs are not normally used in the past continuous: I knew (not I was knowing).", "For repeated past actions use used to or the past simple, not the past continuous.", "was/were going to = a plan that didn't happen: I was going to call you, but I forgot."],
  "voc": [
    ["incident", "/ˈɪn.sɪ.dənt/", "noun", "insiden, kejadian", "an event, often something unusual or bad", "Please write an incident report.", "coll: incident report"],
    ["alarm", "/əˈlɑːm/", "noun", "alarm", "a loud warning sound", "The fire alarm went off at 3 p.m.", "go off = start ringing"],
    ["unload", "/ʌnˈləʊd/", "verb", "membongkar muatan", "to remove goods from a vehicle", "We were unloading the container.", "ant: load"],
    ["slip", "/slɪp/", "verb", "terpeleset", "to slide and fall by accident", "He slipped on the wet floor.", "past: slipped"],
    ["notice", "/ˈnəʊ.tɪs/", "verb", "memperhatikan, menyadari", "to see or become aware of something", "I noticed a crack in the pallet.", "noun: notice (pemberitahuan)"],
    ["happen", "/ˈhæp.ən/", "verb", "terjadi", "to take place", "What happened while I was away?", "no passive: it happened"],
    ["power cut", "/ˈpaʊə kʌt/", "noun", "pemadaman listrik", "a period when electricity stops", "There was a power cut while we were printing.", "US: power outage"],
    ["witness", "/ˈwɪt.nəs/", "noun", "saksi", "a person who sees an event happen", "Were there any witnesses?", "verb: to witness"]
  ],
  "ex": [
    ["At 7 a.m. I was driving to the warehouse.", "Pukul 7 pagi saya sedang menyetir ke gudang."],
    ["We were unloading the truck when it started to rain.", "Kami sedang membongkar truk ketika hujan mulai turun."],
    ["While I was waiting for the client, I checked my emails.", "Sambil menunggu klien, saya memeriksa email."],
    ["The phone rang while she was giving her presentation.", "Telepon berdering saat dia sedang presentasi."],
    ["What were you doing when the power cut happened?", "Kamu sedang apa saat listrik padam?"],
    ["He slipped while he was carrying a heavy box.", "Dia terpeleset saat sedang membawa kotak berat."],
    ["I wasn't paying attention, so I missed the instructions.", "Saya tidak memperhatikan, jadi saya melewatkan instruksinya."],
    ["While I was preparing the slides, my colleague was booking the room.", "Saat saya menyiapkan slide, rekan saya memesan ruangan."],
    ["It was getting dark and the drivers were feeling tired.", "Hari mulai gelap dan para sopir merasa lelah."],
    ["Were you working from home last Friday?", "Apakah Jumat lalu kamu bekerja dari rumah?"],
    ["I was going to call you, but my battery died.", "Tadinya saya mau menelepon, tetapi baterai saya habis."],
    ["When I arrived, the team was discussing the new budget.", "Ketika saya tiba, tim sedang membahas anggaran baru."]
  ],
  "mis": [
    ["When I was arriving, they were starting the meeting.", "When I arrived, they were starting the meeting.", "Aksi pendek → past simple."],
    ["I was knowing the answer.", "I knew the answer.", "know adalah kata kerja keadaan."],
    ["While I cooked, the phone was ringing.", "While I was cooking, the phone rang.", "Aksi panjang = past continuous; aksi pendek = past simple."],
    ["They was working.", "They were working.", "they → were."]
  ],
  "prac": [
    ["fill", "I ___ (sleep) when the alarm went off.", "was sleeping", "Long background action."],
    ["fill", "While we ___ (wait), we had coffee.", "were waiting", "while + past continuous."],
    ["fill", "The fire alarm ___ (ring) during the meeting.", "rang", "Short action → past simple."],
    ["mc", "What ___ at 9 p.m. last night?", ["did you do", "were you doing", "you were doing", "have you done"], 1, "In progress at a time."],
    ["fix", "He was slipping while he carried the box.", "He slipped while he was carrying the box.", "Short action: slipped; long action: was carrying."],
    ["order", "I was checking the stock when the lights went out.", "past continuous + when + past simple."]
  ],
  "quiz": [
    ["mc", "She was typing a report ___ her computer crashed.", ["while", "when", "during", "as soon"], 1, "Short interrupting action → when."],
    ["fill", "They ___ (not / listen) when I explained the rules.", "weren't listening|were not listening", "weren't + -ing."],
    ["fix", "I was having a car when I was young.", "I had a car when I was young.", "have (possess) = state verb."],
    ["mc", "Choose the best scene-setting sentence:", ["It rained and people waited.", "It was raining and people were waiting for the bus.", "It is raining.", "It has rained."], 1, "Background → past continuous."],
    ["order", "While I was driving, my manager called me.", "While + past continuous, past simple."]
  ],
  "test": [
    ["fill", "The workers ___ (repair) the gate when the truck arrived.", "were repairing", "Background action."],
    ["mc", "I ___ going to send it, but I forgot.", ["was", "were", "am", "did"], 0, "was going to = unfulfilled plan."],
    ["fix", "When the power cut was happening, we were printing.", "When the power cut happened, we were printing.", "Short event → past simple."],
    ["mc", "Which is correct?", ["While I was walking to work, I met an old friend.", "While I walked to work, I was meeting an old friend.", "While I was walking to work, I was meet an old friend.", "When I walking to work, I met an old friend."], 0, "Long = continuous, short = simple."],
    ["order", "What were you doing when the accident happened?", "What + were + subject + -ing + when + past simple?"]
  ],
  "speak": {"task": "Describe exactly what you were doing yesterday at 7 a.m., 10 a.m., 1 p.m., 4 p.m. and 9 p.m. Then tell a short story about an interruption (I was … when …).", "role": "Partner A is a safety officer investigating a small accident; Partner B is a witness: What were you doing? What was the driver doing? What happened next?",
    "pron": [["was /wəz/ (weak) vs /wɒz/ (strong)", "weak in sentences, strong in short answers: Yes, I was."], ["were /wə/ vs /wɜːr/", "same pattern"], ["-ing endings", "keep them light"]]},
  "write": {"task": "Write a short incident report (90–120 words) describing the background, what happened, and the action taken.", "model": "Incident report – 14 March, 15:20, Warehouse B. Description: It was raining heavily and water was coming in through the loading door. Two staff members were moving pallets near Dock 3. While Budi was reversing the forklift, one wheel slipped on the wet floor and a pallet fell. Nobody was standing near the pallet, so no one was injured. Action taken: We stopped all forklift work, cleaned the floor and put warning signs at the door. Recommendation: Install a drainage mat at Dock 3. Reported by: Sinta Dewi, Shift Supervisor.", "check": ["Past continuous for background", "Past simple for main events", "when/while used correctly"]},
  "sum": ["was/were + -ing = action in progress at a past moment.", "Long background = past continuous; short interruption = past simple.", "while + long action; when + short action.", "Use it to set the scene in stories and incident reports."]
},
{
  "id": "b1-03", "st": "B1", "m": "b1-m1", "type": "grammar",
  "title": "Present perfect vs past simple",
  "sub": "Membedakan present perfect dan past simple",
  "obj": ["Choose between present perfect and past simple correctly", "Recognise finished vs unfinished time expressions", "Move from present perfect (news) to past simple (details)", "Use both tenses in CVs, interviews and status reports"],
  "exp": [
    {"h": "The key question: is the time finished?", "p": "Past simple = a finished time that is stated or clear (yesterday, last year, in 2022, when I was at university, two hours ago). Present perfect = time not stated, or a period that includes now (today, this week, this year, so far, recently, ever, since…).", "id": "Waktu sudah selesai → past simple. Waktu belum selesai atau tidak disebut → present perfect."},
    {"h": "News then details", "p": "We often introduce news with the present perfect and then give details in the past simple: We've signed a new client! — Really? When did you sign the contract? — We signed it on Tuesday. The CEO came to the ceremony.", "id": "Berita baru dengan present perfect, rinciannya dengan past simple."},
    {"h": "People and situations", "p": "If the person is no longer alive or the situation has ended, use the past simple: My grandfather worked at the port for 30 years (he is retired). I've worked at the port for 3 years (I still work there).", "id": "Jika situasinya sudah berakhir, gunakan past simple."},
    {"h": "Time expressions that can go both ways", "p": "this morning: I've had three coffees this morning (it's still morning) vs I had three coffees this morning (it's now afternoon). Also today, this week, this month depend on whether the period has finished.", "id": "“this morning” bisa dua-duanya tergantung apakah pagi sudah lewat."}
  ],
  "struct": ["present perfect + unfinished time / no time: I've visited 12 clients this month.", "past simple + finished time: I visited 5 clients last week.", "Have you ever…? → Yes, I have. → When did you…?"],
  "forms": {"pos": ["I've worked here since 2021.", "I worked at PT Maju from 2018 to 2021.", "We've had a great quarter so far."], "neg": ["I haven't seen the report yet.", "I didn't see the report yesterday.", "We haven't had any accidents this year."], "q": ["Have you ever managed a team?", "When did you start your current job?", "How many orders have we shipped this week?"]},
  "exc": ["Questions with When…? and What time…? normally take the past simple: When did it happen? (not When has it happened?)", "Recently / lately usually take the present perfect.", "In CVs, use the past simple for previous jobs and the present simple/perfect for the current job."],
  "voc": [
    ["previous", "/ˈpriː.vi.əs/", "adjective", "sebelumnya", "happening or existing before", "In my previous job, I managed a team of five.", "syn: former"],
    ["current", "/ˈkʌr.ənt/", "adjective", "saat ini", "happening or existing now", "My current role is data analyst.", "adv: currently"],
    ["sign", "/saɪn/", "verb", "menandatangani", "to write your name to agree officially", "We've signed the contract.", "coll: sign a contract/deal"],
    ["quarter", "/ˈkwɔː.tər/", "noun", "kuartal", "a period of three months", "Sales have grown this quarter.", "Q1, Q2, Q3, Q4"],
    ["lately", "/ˈleɪt.li/", "adverb", "akhir-akhir ini", "recently", "Have you been busy lately?", "with present perfect"],
    ["retire", "/rɪˈtaɪər/", "verb", "pensiun", "to stop working because of age", "He retired in 2020.", "noun: retirement"],
    ["graduate", "/ˈɡrædʒ.u.eɪt/", "verb", "lulus", "to complete a university degree", "I graduated in 2022.", "noun: graduate /-ət/"],
    ["promote", "/prəˈməʊt/", "verb", "mempromosikan (jabatan)", "to give someone a higher position", "She has just been promoted.", "noun: promotion"]
  ],
  "ex": [
    ["I've worked at this company for three years.", "Saya sudah bekerja di perusahaan ini selama tiga tahun."],
    ["Before that, I worked at a bank for two years.", "Sebelumnya, saya bekerja di bank selama dua tahun."],
    ["We've signed a new client! — When did you sign? — Last Friday.", "Kami dapat klien baru! — Kapan tanda tangan? — Jumat lalu."],
    ["Have you ever been to China? — Yes, I went there in 2019.", "Pernah ke Tiongkok? — Ya, tahun 2019."],
    ["Sales have increased by 12% this quarter.", "Penjualan naik 12% kuartal ini."],
    ["Sales increased by 8% last quarter.", "Penjualan naik 8% kuartal lalu."],
    ["I graduated in 2022 and have worked in logistics since then.", "Saya lulus tahun 2022 dan bekerja di logistik sejak itu."],
    ["My grandfather worked as a sailor for 40 years.", "Kakek saya bekerja sebagai pelaut selama 40 tahun."],
    ["When did the problem start?", "Kapan masalahnya mulai?"],
    ["Have you been busy lately?", "Akhir-akhir ini sibuk?"],
    ["I've had three meetings today, and it's only 11 a.m.", "Saya sudah rapat tiga kali hari ini, padahal baru pukul 11."],
    ["She was promoted last month and has already made big changes.", "Dia dipromosikan bulan lalu dan sudah membuat perubahan besar."]
  ],
  "mis": [
    ["I have graduated in 2022.", "I graduated in 2022.", "Tahun spesifik → past simple."],
    ["When have you started?", "When did you start?", "When…? → past simple."],
    ["I work here for five years.", "I've worked here for five years.", "Masih berlanjut → present perfect."],
    ["Did you ever go to Bali? (pengalaman hidup)", "Have you ever been to Bali?", "Pengalaman tanpa waktu → present perfect."]
  ],
  "prac": [
    ["mc", "I ___ him at a conference in 2023.", ["have met", "met", "meet", "have meet"], 1, "in 2023 → past simple."],
    ["mc", "We ___ 40 orders so far this week.", ["shipped", "have shipped", "ship", "were shipping"], 1, "so far / this week → present perfect."],
    ["fill", "When ___ you join the company? (did/have)", "did", "When → past simple."],
    ["fill", "My father ___ (retire) two years ago.", "retired", "ago → past simple."],
    ["fix", "I have visited Medan last month.", "I visited Medan last month.", "last month → past simple."],
    ["match", [["When did you start?", "In 2021."], ["How long have you worked here?", "For three years."], ["Have you ever been to Korea?", "Yes, once, in 2019."], ["What did you do last weekend?", "I visited my parents."], ["Have you finished yet?", "Not yet, sorry."]], "Past simple questions ask about finished time; present perfect questions ask about duration, experience or results up to now."]
  ],
  "quiz": [
    ["mc", "“Have you finished the report?” — “Yes, I ___ it an hour ago.”", ["have finished", "finished", "finish", "was finishing"], 1, "an hour ago → past simple."],
    ["fill", "I ___ (never / use) Power BI, but I'd like to learn.", "have never used|'ve never used", "Experience → present perfect."],
    ["fix", "How long do you know your manager?", "How long have you known your manager?", "Duration until now."],
    ["mc", "It's 4 p.m. “I ___ two coffees this morning.”", ["have had", "had", "have", "was having"], 1, "The morning is finished."],
    ["order", "She has worked here since she graduated.", "present perfect + since + past simple."]
  ],
  "test": [
    ["mc", "Leonardo da Vinci ___ many inventions.", ["has designed", "designed", "has been designing", "designs"], 1, "He is no longer alive."],
    ["fill", "Have you ever ___ (manage) a project?", "managed", "Experience question: have + ever + V3."],
    ["fix", "I have started my current job in March.", "I started my current job in March.", "in March → past simple."],
    ["mc", "Which is correct for a CV (previous job)?", ["Have managed a team of six (2019–2022)", "Managed a team of six (2019–2022)", "Manage a team of six (2019–2022)", "Managing a team six"], 1, "Finished job → past simple."],
    ["order", "We have launched the new app. We launched it on Monday.", "News (present perfect) then details (past simple)."]
  ],
  "speak": {"task": "Have a job-interview conversation: the interviewer asks Have you ever…? and the candidate answers, then gives details in the past simple (When? Where? What happened?). Do six questions.", "role": "Interviewer and candidate; then swap and use your real CV.",
    "pron": [["I've worked /aɪv wɜːkt/", "don't drop the ’ve"], ["When did you…? /wen dɪdʒu/", "connected speech: “didja”"], ["graduated /ˈɡrædʒ.u.eɪ.tɪd/", "-ed after t = /ɪd/"]]},
  "write": {"task": "Write the “Experience” section of your CV or LinkedIn summary (100–130 words) using the present perfect for your current situation and the past simple for previous roles.", "model": "I have worked as a logistics coordinator at PT Samudra Jaya since 2022. In this role, I have reduced late deliveries by 15% and have trained eight new dispatchers. Before that, I worked as an admin staff member at a freight forwarding company from 2020 to 2022, where I prepared shipping documents and handled customer calls. I graduated from Trisakti Institute of Transportation and Logistics in 2020. Recently, I have completed a Power BI certification, and I have started to build dashboards for our weekly reports.", "check": ["Present perfect for the current job and achievements", "Past simple for previous jobs and dates", "No present perfect with finished time"]},
  "sum": ["Finished time (stated or clear) → past simple.", "Unfinished time, no time, experience, results now → present perfect.", "Introduce news with present perfect, give details with past simple.", "When…? questions → past simple."]
},
{
  "id": "b1-04", "st": "B1", "m": "b1-m1", "type": "grammar",
  "title": "Future forms: continuous, perfect and formal future",
  "sub": "Bentuk masa depan lanjutan",
  "obj": ["Review will, going to and present continuous for the future", "Use the future continuous (will be doing) for actions in progress", "Use the future perfect (will have done) for completion by a deadline", "Use be about to, be due to and be likely to"],
  "exp": [
    {"h": "Future continuous", "p": "will be + verb-ing = an action in progress at a future time: This time tomorrow I'll be flying to Makassar. It is also a polite way to ask about plans: Will you be using the meeting room this afternoon?", "id": "will be + -ing = sedang (di masa depan). Juga dipakai untuk bertanya sopan tentang rencana."},
    {"h": "Future perfect", "p": "will have + V3 = completed before a future time, often with by: By Friday we'll have delivered all the orders. By the end of the year, she will have worked here for ten years.", "id": "will have + V3 = sudah selesai sebelum waktu tertentu di masa depan."},
    {"h": "Formal and near-future expressions", "p": "be about to = very soon: The meeting is about to start. be due to = scheduled: The shipment is due to arrive on Monday. be likely/unlikely to = probability: Costs are likely to rise. be set to (news style): The company is set to open five new branches.", "id": "be about to = sebentar lagi; be due to = dijadwalkan; be likely to = kemungkinan besar."},
    {"h": "Choosing a form", "p": "Plan → going to. Arrangement → present continuous. Decision/offer → will. In progress at a future point → future continuous. Completed before a deadline → future perfect. Schedule → present simple or be due to.", "id": "Pilih bentuk sesuai maksud: rencana, janji, jadwal, sedang, atau sudah selesai."}
  ],
  "struct": ["will be + verb-ing", "will have + V3 (+ by + time)", "be about to + base verb", "be due to / be likely to + base verb"],
  "forms": {"pos": ["I'll be working from the Surabaya office next week.", "By March we'll have finished the migration.", "The train is about to leave."], "neg": ["I won't be attending the training.", "We won't have finished by Friday.", "Prices are unlikely to fall."], "q": ["Will you be using the car tomorrow?", "Will they have completed the audit by June?", "When is the report due?"]},
  "exc": ["After time words (when, by the time, as soon as) use present tenses: By the time you arrive, we'll have started.", "Future perfect continuous (will have been working) emphasises duration: By December I'll have been working here for five years.", "be to + verb is formal for official plans: The minister is to visit the port next week."],
  "voc": [
    ["migration", "/maɪˈɡreɪ.ʃən/", "noun", "migrasi", "moving data or systems from one place to another", "The data migration will take two weeks.", "verb: migrate"],
    ["due", "/djuː/", "adjective", "dijadwalkan; jatuh tempo", "expected or scheduled", "The payment is due on 30 June.", "coll: due date, be due to"],
    ["likely", "/ˈlaɪ.kli/", "adjective", "kemungkinan besar", "probable", "Demand is likely to increase in December.", "ant: unlikely"],
    ["by the time", "/baɪ ðə taɪm/", "conjunction", "pada saat", "before or when something happens", "By the time we arrive, the shop will have closed.", "+ present simple"],
    ["forecast", "/ˈfɔː.kɑːst/", "noun/verb", "prakiraan; memprakirakan", "a statement about what will happen", "The sales forecast looks positive.", "coll: weather/sales forecast"],
    ["milestone", "/ˈmaɪl.stəʊn/", "noun", "tonggak, capaian penting", "an important stage in a project", "We'll have reached the first milestone by May.", "project management"],
    ["on schedule", "/ɒn ˈʃedʒ.uːl/", "phrase", "sesuai jadwal", "at the planned time", "The project is on schedule.", "ant: behind schedule"],
    ["expect", "/ɪkˈspekt/", "verb", "mengharapkan, memperkirakan", "to think something will happen", "We expect to finish by Friday.", "noun: expectation"]
  ],
  "ex": [
    ["This time next week I'll be attending a conference in Singapore.", "Minggu depan pada jam ini saya sedang menghadiri konferensi di Singapura."],
    ["Will you be using the projector this afternoon?", "Apakah Anda akan memakai proyektor siang ini?"],
    ["By Friday we'll have shipped all the December orders.", "Paling lambat Jumat kami sudah mengirim semua pesanan Desember."],
    ["By the end of the year, I'll have worked here for five years.", "Pada akhir tahun saya sudah bekerja di sini lima tahun."],
    ["The meeting is about to start. Please switch off your phones.", "Rapat akan segera dimulai. Mohon matikan ponsel."],
    ["The vessel is due to arrive at Tanjung Perak on Monday.", "Kapal dijadwalkan tiba di Tanjung Perak hari Senin."],
    ["Fuel prices are likely to rise next quarter.", "Harga BBM kemungkinan besar naik kuartal depan."],
    ["We won't have finished the audit by June.", "Kami belum akan menyelesaikan audit pada Juni."],
    ["By the time you get here, we'll have started the presentation.", "Saat kamu tiba, presentasi sudah dimulai."],
    ["Don't call at 3; I'll be interviewing candidates.", "Jangan telepon pukul 3; saya sedang mewawancarai kandidat."],
    ["The company is set to open three new hubs.", "Perusahaan akan membuka tiga hub baru."],
    ["The project is on schedule and we'll have reached the first milestone by May.", "Proyek sesuai jadwal dan tonggak pertama akan tercapai pada Mei."]
  ],
  "mis": [
    ["By Friday we will finish all orders. (maksud: sudah selesai)", "By Friday we will have finished all the orders.", "by + waktu → future perfect untuk penyelesaian."],
    ["When you will arrive, call me.", "When you arrive, call me.", "Setelah when → present simple."],
    ["The meeting is about to starting.", "The meeting is about to start.", "about to + bentuk dasar."],
    ["Will you use the room? (terlalu langsung)", "Will you be using the room?", "Future continuous lebih sopan untuk menanyakan rencana."]
  ],
  "prac": [
    ["fill", "At 10 tomorrow I ___ (fly) to Bali.", "will be flying|'ll be flying", "In progress at a future time."],
    ["fill", "By June they ___ (complete) the warehouse.", "will have completed|'ll have completed", "Completed before a deadline."],
    ["fill", "Hurry! The train is ___ to leave.", "about", "be about to."],
    ["mc", "The invoice is ___ on 15 May.", ["due", "about", "likely", "set"], 0, "due = scheduled/payable."],
    ["fix", "By the time we will get there, the shop will have closed.", "By the time we get there, the shop will have closed.", "Present simple after by the time."],
    ["mc", "Which is the most polite question about plans?", ["Will you use the car?", "Will you be using the car later?", "Do you use the car?", "Are you use the car?"], 1, "Future continuous = polite."]
  ],
  "quiz": [
    ["mc", "By 2030 the city ___ a new airport.", ["will build", "will have built", "builds", "is building"], 1, "by + future time → future perfect."],
    ["fill", "Costs are ___ to increase. (kemungkinan besar)", "likely", "be likely to."],
    ["fix", "Don't call me at 8. I will have a meeting with the director. (in progress)", "Don't call me at 8. I'll be having a meeting with the director.", "In progress → future continuous."],
    ["mc", "The ship is ___ to dock at 6 a.m. (scheduled)", ["about", "due", "set up", "going"], 1, "due to = scheduled."],
    ["order", "We will have finished the migration by March.", "will have + V3 + by + time."]
  ],
  "test": [
    ["fill", "This time next month I ___ (work) in our Medan office.", "will be working|'ll be working", "Future continuous."],
    ["mc", "By the end of this year, she ___ 200 drivers.", ["will train", "will have trained", "trains", "has trained"], 1, "Completion by a time."],
    ["fix", "Please wait. The CEO is about to arriving.", "Please wait. The CEO is about to arrive.", "about to + base verb."],
    ["mc", "Demand is ___ to fall after the holiday season.", ["likely", "due", "about", "set to be"], 0, "Probability → likely."],
    ["order", "By the time you read this, I will have left.", "By the time + present, future perfect."]
  ],
  "speak": {"task": "Present a 1-minute project timeline: what will be happening next week, what you will have completed by key dates, and what is due or likely to happen.", "role": "Partner A is a client asking Will you have finished…by…? Will you be working on…? Partner B is the project coordinator.",
    "pron": [["I'll be /aɪl bi/", "contraction"], ["will have → “will’ve” /ˈwɪl.əv/", "in speech"], ["due /djuː/ (UK), /duː/ (US)", "both are fine"]]},
  "write": {"task": "Write a project timeline email (100–130 words) to a client using the future perfect, future continuous, due to and likely to.", "model": "Dear Ms Wong, Here is our timeline for the cold-storage project. The refrigeration units are due to arrive on 3 May. During the week of 6 May, our engineers will be installing the units, so the loading dock will be closed. By 17 May we will have completed the installation and the first temperature tests. If the tests are successful, the facility is likely to be ready for operation on 1 June. We will be sending you weekly progress reports every Friday. Please let me know if you have any questions. Kind regards, Andre Wijaya, Project Coordinator", "check": ["will be + -ing for in-progress", "will have + V3 + by", "Present simple after time words"]},
  "sum": ["will be + -ing = in progress at a future time; also polite questions about plans.", "will have + V3 = completed before a future time (often with by).", "be about to (very soon), be due to (scheduled), be likely to (probable).", "Present tenses after when, by the time, as soon as."]
}
]);
