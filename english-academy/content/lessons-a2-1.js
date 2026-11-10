/* English Learning Academy — A2 Elementary, lessons 1–4. */
ELA.add('lessons', [
{
  "id": "a2-01", "st": "A2", "m": "a2-m1", "type": "grammar",
  "title": "Past simple: finished actions",
  "sub": "Past simple untuk kejadian yang sudah selesai",
  "obj": ["Form the past simple of regular verbs (-ed) and common irregular verbs", "Make negatives and questions with did", "Use past time expressions: yesterday, last week, ago, in 2020", "Pronounce -ed endings correctly"],
  "exp": [
    {"h": "When to use it", "p": "Use the past simple for actions and situations that started and finished in the past, often with a time expression: I visited the client yesterday. We moved to Bekasi in 2019. She worked there for three years (she doesn't work there now).", "id": "Bahasa Indonesia memakai kata keterangan (kemarin, tadi). Bahasa Inggris wajib mengubah bentuk kata kerja."},
    {"h": "Regular and irregular verbs", "p": "Regular verbs add -ed: work → worked, stop → stopped (double the consonant), study → studied, arrive → arrived. Many common verbs are irregular and must be memorised: go → went, have → had, make → made, take → took, buy → bought, see → saw, send → sent, come → came, get → got, pay → paid.", "id": "Kata kerja tak beraturan harus dihafal; mulailah dari yang paling sering dipakai."},
    {"h": "Negatives and questions", "p": "Use did/didn't + base verb for all subjects: I didn't go. Did you send the email? — Yes, I did. After did/didn't, never use the past form: Did she call? (not Did she called?). The verb be uses was/were: I was tired. They weren't at home. Were you late?", "id": "Setelah did/didn't, kata kerja kembali ke bentuk dasar."},
    {"h": "Pronouncing -ed", "p": "/t/ after voiceless sounds (worked, stopped, watched), /d/ after voiced sounds (called, arrived, played), and /ɪd/ only after t or d (wanted, needed, started). Many learners wrongly add /ɪd/ to every verb: “work-ed”.", "id": "Akhiran -ed hanya dibaca /ɪd/ setelah bunyi t atau d."}
  ],
  "struct": ["subject + verb-ed / irregular past: We shipped the order.", "subject + didn't + base verb: We didn't ship it.", "Did + subject + base verb?: Did you ship it?", "was/were for be: The office was closed."],
  "forms": {"pos": ["I finished the report yesterday.", "She went to Makassar last week.", "They bought a new forklift."], "neg": ["I didn't finish the report.", "She didn't go to Makassar.", "They weren't happy with the price."], "q": ["Did you finish the report?", "Where did she go last week?", "Was the meeting long?"]},
  "exc": ["The past of can is could: I couldn't open the file.", "Some verbs have the same form: put → put, cut → cut, cost → cost, let → let.", "read → read but pronounced /red/ in the past."],
  "voc": [
    ["yesterday", "/ˈjes.tə.deɪ/", "adverb", "kemarin", "the day before today", "I called the supplier yesterday.", "coll: yesterday morning, the day before yesterday"],
    ["ago", "/əˈɡəʊ/", "adverb", "yang lalu", "before now (used after a time period)", "I joined the company two years ago.", "position: after the time: three days ago"],
    ["last", "/lɑːst/", "determiner", "lalu, terakhir", "the one before this", "We had a party last Friday.", "note: no preposition: last week (not in last week)"],
    ["arrive", "/əˈraɪv/", "verb", "tiba", "to reach a place", "The container arrived on Monday.", "arrive at (place) / in (city)"],
    ["send", "/send/", "verb", "mengirim", "to make something go to another place", "I sent the invoice this morning.", "past: sent"],
    ["buy", "/baɪ/", "verb", "membeli", "to get something by paying money", "We bought new laptops last month.", "past: bought /bɔːt/"],
    ["pay", "/peɪ/", "verb", "membayar", "to give money for something", "The client paid the invoice on time.", "past: paid"],
    ["meet", "/miːt/", "verb", "bertemu", "to see and talk to someone", "I met the new manager yesterday.", "past: met"]
  ],
  "ex": [
    ["I started this job in 2023.", "Saya mulai pekerjaan ini tahun 2023."],
    ["We visited the factory last Tuesday.", "Kami mengunjungi pabrik Selasa lalu."],
    ["She sent the quotation two days ago.", "Dia mengirim penawaran harga dua hari yang lalu."],
    ["The truck arrived late because of the rain.", "Truknya tiba terlambat karena hujan."],
    ["I didn't have time for lunch yesterday.", "Kemarin saya tidak sempat makan siang."],
    ["Did you pay the electricity bill? — Yes, I did.", "Sudah bayar tagihan listrik? — Sudah."],
    ["What did the customer say?", "Apa kata pelanggan itu?"],
    ["The meeting was very long.", "Rapatnya sangat lama."],
    ["We were in Bali for a conference last year.", "Tahun lalu kami di Bali untuk konferensi."],
    ["He stopped the machine and checked the belt.", "Dia menghentikan mesin dan memeriksa sabuknya."],
    ["I couldn't find the file, so I asked my supervisor.", "Saya tidak bisa menemukan berkasnya, jadi saya bertanya ke supervisor."],
    ["When did you graduate?", "Kapan kamu lulus?"]
  ],
  "mis": [
    ["Yesterday I go to the office.", "Yesterday I went to the office.", "Ada keterangan waktu lampau → kata kerja bentuk lampau."],
    ["Did you sent the email?", "Did you send the email?", "Setelah did, bentuk dasar."],
    ["I didn't went.", "I didn't go.", "Setelah didn't, bentuk dasar."],
    ["I was work there last year.", "I worked there last year.", "Jangan gabungkan was + kata kerja dasar."],
    ["in last week", "last week", "Tanpa preposisi sebelum last."]
  ],
  "prac": [
    ["fill", "We ___ (deliver) the goods yesterday.", "delivered", "Regular: + -ed."],
    ["fill", "She ___ (go) to Medan last month.", "went", "go → went."],
    ["fill", "I ___ (not / see) the message.", "didn't see|did not see", "didn't + base verb."],
    ["fill", "___ you meet the client yesterday?", "Did", "Past question → did."],
    ["fix", "He buyed a new phone.", "He bought a new phone.", "buy → bought (irregular)."],
    ["match", [["go", "went"], ["take", "took"], ["make", "made"], ["see", "saw"], ["get", "got"]], "Common irregular verbs."],
    ["mc", "Which -ed is pronounced /ɪd/?", ["worked", "called", "needed", "stopped"], 2, "After d → /ɪd/."]
  ],
  "quiz": [
    ["mc", "I ___ at home last night.", ["am", "was", "were", "did"], 1, "I + was."],
    ["fill", "They ___ (study) English last semester.", "studied", "consonant + y → -ied."],
    ["fix", "Did she called you?", "Did she call you?", "Base verb after did."],
    ["mc", "I joined the company three years ___.", ["last", "ago", "before", "past"], 1, "time period + ago."],
    ["order", "What time did the shipment arrive?", "Wh- + did + subject + base verb?"]
  ],
  "test": [
    ["fill", "We ___ (pay) the supplier last Friday.", "paid", "pay → paid."],
    ["fix", "I go to Surabaya last week.", "I went to Surabaya last week.", "Past time → past form."],
    ["mc", "___ you at the meeting yesterday?", ["Did", "Was", "Were", "Are"], 2, "you + were."],
    ["fill", "She ___ (not / come) to work on Monday.", "didn't come|did not come", "didn't + base verb."],
    ["order", "I sent the report two hours ago.", "Subject + past verb + object + time ago."]
  ],
  "speak": {"task": "Tell a partner about your last weekend or your last working day in eight sentences: what you did, where you went, who you met. Include one negative and answer two questions.", "role": "Partner A is a supervisor asking about yesterday's tasks: Did you call the supplier? When did the truck arrive? Partner B answers.",
    "pron": [["worked /wɜːkt/", "one syllable, not “work-ed”"], ["started /ˈstɑː.tɪd/", "two syllables"], ["bought /bɔːt/", "the gh is silent"]]},
  "write": {"task": "Write a short daily report (80–100 words) to your supervisor about what you did yesterday, using at least eight past simple verbs (four irregular).", "model": "Dear Mr Hendra, Yesterday I checked the stock in Warehouse B and found two damaged pallets. I took photos and sent them to the supplier. At 11 a.m. I met the new driver and showed him the loading area. In the afternoon the container from Surabaya arrived late, so we finished unloading at 6 p.m. I didn't have time to update the system, but I will do it this morning. Best regards, Sari", "check": ["Past forms for all finished actions", "didn't + base verb", "Time expressions: yesterday, at 11 a.m., in the afternoon"]},
  "sum": ["Past simple = finished actions at a past time.", "Regular -ed; learn common irregular verbs (went, had, made, sent, bought).", "did/didn't + base verb for questions and negatives.", "-ed sounds /t/, /d/ or /ɪd/ (only after t/d)."]
},
{
  "id": "a2-02", "st": "A2", "m": "a2-m1", "type": "grammar",
  "title": "Future expressions: will, be going to, present continuous",
  "sub": "Ungkapan masa depan",
  "obj": ["Use will for decisions at the moment, offers, promises and predictions", "Use be going to for plans and evidence-based predictions", "Use the present continuous for fixed arrangements", "Choose the right future form in workplace situations"],
  "exp": [
    {"h": "will", "p": "Use will (’ll) for decisions you make now (The phone's ringing. I'll answer it.), offers and promises (I'll send it today. I won't forget.) and general predictions (I think prices will go up). Negative: won't (will not).", "id": "Bahasa Indonesia memakai “akan” untuk semua; bahasa Inggris membedakan keputusan spontan, rencana, dan janji."},
    {"h": "be going to", "p": "Use am/is/are going to + base verb for plans decided before now (We're going to open a new branch next year.) and for predictions based on what you can see now (Look at those clouds. It's going to rain.).", "id": "be going to = sudah direncanakan sebelumnya, atau ada bukti sekarang."},
    {"h": "Present continuous for arrangements", "p": "For fixed arrangements with other people, often with a time and place, use the present continuous: I'm meeting the auditor on Thursday at 10. We're flying to Batam tomorrow.", "id": "Untuk janji/jadwal yang sudah diatur dengan orang lain, gunakan present continuous."},
    {"h": "Quick guide", "p": "Spontaneous → will. Plan/intention → going to. Arrangement in the calendar → present continuous. Timetables (trains, flights, classes) → present simple: The flight leaves at 6:40.", "id": "Ringkasan pilihan bentuk masa depan."}
  ],
  "struct": ["will + base verb: I'll call you back.", "am/is/are + going to + base verb: She's going to apply.", "am/is/are + verb-ing (+ future time): We're meeting at 3."],
  "forms": {"pos": ["I'll help you with the boxes.", "They're going to hire two new drivers.", "I'm visiting the client on Friday."], "neg": ["I won't be late.", "We aren't going to change the supplier.", "She isn't coming to the meeting tomorrow."], "q": ["Will you be at the office tomorrow?", "Are you going to take the course?", "What are you doing this weekend?"]},
  "exc": ["Shall I/we…? is used for offers and suggestions: Shall I open the window?", "After when, if, before, after, as soon as use the present simple, not will: I'll call you when I arrive.", "“I'm going to go” is correct but many speakers simply say “I'm going”."],
  "voc": [
    ["plan", "/plæn/", "noun/verb", "rencana; merencanakan", "something you intend to do", "What are your plans for next year?", "coll: make plans, plan to do"],
    ["arrange", "/əˈreɪndʒ/", "verb", "mengatur", "to plan and organise something with others", "I arranged a meeting with the vendor.", "noun: arrangement"],
    ["promise", "/ˈprɒm.ɪs/", "verb/noun", "berjanji; janji", "to say you will certainly do something", "I promise I'll finish it today.", "coll: keep/break a promise"],
    ["probably", "/ˈprɒb.ə.bli/", "adverb", "mungkin sekali", "very likely", "It will probably rain this afternoon.", "position: after will, before won't"],
    ["next", "/nekst/", "determiner", "berikutnya, depan", "the one after this", "We're launching the app next month.", "no preposition: next week"],
    ["launch", "/lɔːntʃ/", "verb", "meluncurkan", "to start or introduce something new", "They're going to launch a new product.", "coll: launch a product/campaign"],
    ["soon", "/suːn/", "adverb", "segera", "in a short time from now", "The results will be ready soon.", "coll: as soon as possible (ASAP)"],
    ["apply", "/əˈplaɪ/", "verb", "melamar, mendaftar", "to ask formally for a job, place or permit", "I'm going to apply for a scholarship.", "apply for + thing"]
  ],
  "ex": [
    ["The printer isn't working. — Don't worry, I'll fix it.", "Printernya tidak jalan. — Tenang, saya perbaiki."],
    ["I'll send you the file in five minutes.", "Saya kirim berkasnya dalam lima menit."],
    ["We're going to open a branch in Pekanbaru next year.", "Kami berencana membuka cabang di Pekanbaru tahun depan."],
    ["Look at the traffic. We're going to be late.", "Lihat macetnya. Kita bakal terlambat."],
    ["I'm meeting the HR manager at 2 p.m. tomorrow.", "Saya bertemu manajer HR besok pukul 2 siang."],
    ["She isn't coming to the training on Friday.", "Dia tidak ikut pelatihan hari Jumat."],
    ["I think the new system will save a lot of time.", "Saya pikir sistem baru akan menghemat banyak waktu."],
    ["I won't tell anyone. I promise.", "Saya tidak akan memberi tahu siapa pun. Janji."],
    ["Are you going to take the TOEIC test this year?", "Apakah kamu berencana ikut tes TOEIC tahun ini?"],
    ["The train to Yogyakarta leaves at 7:20.", "Kereta ke Yogyakarta berangkat pukul 7.20."],
    ["Shall I book the meeting room?", "Perlu saya pesan ruang rapat?"],
    ["I'll call you when I arrive at the port.", "Saya telepon kamu saat tiba di pelabuhan."]
  ],
  "mis": [
    ["I will to send it.", "I will send it.", "will + bentuk dasar, tanpa to."],
    ["I'll call you when I will arrive.", "I'll call you when I arrive.", "Setelah when/if/after → present simple."],
    ["Tomorrow I meet the client. (arrangement)", "Tomorrow I'm meeting the client.", "Janji temu yang sudah diatur → present continuous."],
    ["I going to apply.", "I'm going to apply.", "Jangan lupa am/is/are."]
  ],
  "prac": [
    ["mc", "“It's cold in here.” — “___ close the window.”", ["I'm going to", "I'll", "I'm closing", "I close"], 1, "Spontaneous offer → will."],
    ["mc", "We decided last month. We ___ hire a new accountant.", ["will", "are going to", "hire", "will to"], 1, "A plan made before now."],
    ["fill", "I ___ (meet) the supplier at 10 tomorrow. (arrangement)", "am meeting|'m meeting", "Fixed arrangement → present continuous."],
    ["fill", "I promise I ___ (not / be) late again.", "won't be|will not be", "Promise → will/won't."],
    ["fix", "I'll text you when I will get home.", "I'll text you when I get home.", "Present simple after when."],
    ["order", "Are you going to apply for the job?", "Are + subject + going to + base verb?"]
  ],
  "quiz": [
    ["mc", "Look at those dark clouds! It ___ rain.", ["will", "is going to", "rains", "is raining to"], 1, "Evidence now → going to."],
    ["fill", "The flight ___ (leave) at 6:40. (timetable)", "leaves", "Timetables → present simple."],
    ["fix", "She will to start next week.", "She will start next week.", "No to after will."],
    ["mc", "What ___ this weekend? (asking about arrangements)", ["do you do", "are you doing", "will you to do", "you are doing"], 1, "Arrangements → present continuous."],
    ["fill", "___ I help you with that bag? (offer)", "Shall", "Shall I…? for offers."]
  ],
  "test": [
    ["mc", "“We're out of paper.” — “OK, I ___ buy some.”", ["'ll", "'m going to", "buy", "'m buying"], 0, "Decision now → will."],
    ["fill", "They ___ (launch) the product next year. It's in the plan.", "are going to launch|'re going to launch", "Plan → going to."],
    ["fix", "If it will rain, we will cancel.", "If it rains, we will cancel.", "Present simple after if."],
    ["mc", "Which sentence shows a fixed arrangement?", ["I'll see the dentist.", "I'm seeing the dentist at 4 tomorrow.", "I see the dentist.", "I saw the dentist."], 1, "Present continuous + time."],
    ["order", "I think prices will go up next year.", "I think + will for predictions."]
  ],
  "speak": {"task": "Talk about your plans: one thing you're going to do this year, one arrangement in your calendar this week, and two promises to your team (I'll…).", "role": "Partner A suggests problems (The printer is broken. / We need snacks for the meeting.). Partner B offers with I'll… or Shall I…?",
    "pron": [["I'll /aɪl/, we'll /wiːl/, won't /wəʊnt/", "contractions are normal in speech"], ["going to → “gonna”", "in fast informal speech; write going to"], ["won't vs want", "/wəʊnt/ vs /wɒnt/"]]},
  "write": {"task": "Write an email (80–100 words) to a colleague about next week: two arrangements, one plan and one offer of help.", "model": "Hi Rudi, Here's my plan for next week. On Monday I'm visiting the new warehouse in Karawang with the operations team. On Wednesday afternoon I'm meeting the IT vendor about the scanners. We're going to test the new barcode system at the end of the month, so I'll prepare a short guide for the staff. If you need help with the stock report, I'll be in the office on Thursday and Friday. Cheers, Maya", "check": ["Present continuous for arrangements", "going to for the plan", "will for the offer"]},
  "sum": ["will: decisions now, offers, promises, predictions (I think…).", "be going to: plans and predictions from evidence.", "Present continuous: fixed arrangements (I'm meeting…).", "Present simple for timetables and after when/if."]
},
{
  "id": "a2-03", "st": "A2", "m": "a2-m1", "type": "grammar",
  "title": "Present continuous: actions happening now",
  "sub": "Present continuous untuk kegiatan yang sedang berlangsung",
  "obj": ["Form the present continuous (am/is/are + -ing)", "Use it for actions now and temporary situations", "Contrast present continuous with present simple", "Know state verbs that do not use -ing"],
  "exp": [
    {"h": "Form and use", "p": "am/is/are + verb-ing. Use it for actions happening at the moment of speaking (I'm checking the stock now.), around now (She's studying for her exam this month.) and temporary situations (We're working from home this week.).", "id": "Mirip “sedang” dalam bahasa Indonesia, tetapi bentuk be + -ing wajib."},
    {"h": "Spelling -ing", "p": "Most verbs add -ing: work → working. Drop silent -e: make → making. Double the final consonant after one short vowel: stop → stopping, run → running, plan → planning. -ie → -y: lie → lying.", "id": "Aturan ejaan -ing: drop -e, gandakan konsonan, ie → y."},
    {"h": "Present simple vs present continuous", "p": "Present simple = habits and permanent facts (I usually drive to work.). Present continuous = now or temporary (Today I'm taking the train because my car is in the garage.).", "id": "Kebiasaan → present simple; sekarang/sementara → present continuous."},
    {"h": "State verbs", "p": "Verbs for thoughts, feelings, senses and possession are normally not used with -ing: know, believe, understand, want, need, like, love, hate, prefer, own, belong, seem. Say I need help (not I'm needing help).", "id": "Kata kerja keadaan (know, want, need, like) tidak memakai -ing."}
  ],
  "struct": ["subject + am/is/are + verb-ing", "subject + am not / isn't / aren't + verb-ing", "Am/Is/Are + subject + verb-ing?"],
  "forms": {"pos": ["I'm writing the report now.", "The team is preparing the shipment.", "Prices are rising this year."], "neg": ["I'm not working today.", "He isn't answering his phone.", "They aren't using the new system yet."], "q": ["Are you listening?", "What is she doing?", "Is it raining outside?"]},
  "exc": ["Some state verbs change meaning with -ing: I think it's good (opinion) vs I'm thinking about the offer (process); I have a car (own) vs I'm having lunch (eat).", "With always, the present continuous can show annoyance: He's always coming late!", "be can be continuous for behaviour: You're being very helpful today."],
  "voc": [
    ["at the moment", "/ət ðə ˈməʊ.mənt/", "phrase", "saat ini", "now", "She's in a meeting at the moment.", "syn: right now, currently"],
    ["currently", "/ˈkʌr.ənt.li/", "adverb", "saat ini, sekarang", "at the present time", "We're currently hiring warehouse staff.", "reg: a little formal"],
    ["prepare", "/prɪˈpeər/", "verb", "menyiapkan", "to make something ready", "They're preparing the documents.", "coll: prepare for (an exam)"],
    ["rise", "/raɪz/", "verb", "naik", "to go up", "Fuel prices are rising.", "ant: fall; past: rose"],
    ["temporary", "/ˈtem.pər.ər.i/", "adjective", "sementara", "lasting only a short time", "It's a temporary office.", "ant: permanent"],
    ["queue", "/kjuː/", "noun/verb", "antrean; mengantre", "a line of people or vehicles waiting", "The trucks are queuing at the gate.", "US: line, wait in line"],
    ["wait", "/weɪt/", "verb", "menunggu", "to stay until something happens", "I'm waiting for the bus.", "wait for + someone/something"],
    ["fix", "/fɪks/", "verb", "memperbaiki", "to repair", "The technician is fixing the air conditioner.", "syn: repair"]
  ],
  "ex": [
    ["I'm checking the delivery schedule right now.", "Saya sedang memeriksa jadwal pengiriman sekarang."],
    ["The manager is talking to a customer at the moment.", "Manajer sedang berbicara dengan pelanggan."],
    ["We're working on a new project this month.", "Bulan ini kami sedang mengerjakan proyek baru."],
    ["Ten trucks are waiting at the gate.", "Sepuluh truk sedang menunggu di gerbang."],
    ["Shh! The baby is sleeping.", "Ssst! Bayinya sedang tidur."],
    ["She isn't answering her phone. She's probably driving.", "Dia tidak mengangkat telepon. Mungkin sedang menyetir."],
    ["Are you using this computer?", "Apakah kamu sedang memakai komputer ini?"],
    ["What are you doing? — I'm updating the inventory.", "Kamu sedang apa? — Saya sedang memperbarui inventaris."],
    ["I usually take the bus, but today I'm driving.", "Biasanya saya naik bus, tetapi hari ini saya menyetir."],
    ["The company is growing fast.", "Perusahaan itu sedang tumbuh pesat."],
    ["I need a break. (not I'm needing)", "Saya butuh istirahat."],
    ["Online shopping is becoming more popular.", "Belanja daring semakin populer."]
  ],
  "mis": [
    ["I working now.", "I'm working now.", "Wajib am/is/are."],
    ["I am knowing the answer.", "I know the answer.", "know adalah kata kerja keadaan."],
    ["She is study English every day.", "She studies English every day.", "Kebiasaan → present simple."],
    ["He is stoping the car.", "He is stopping the car.", "Gandakan p: stopping."]
  ],
  "prac": [
    ["fill", "They ___ (load) the truck now.", "are loading|'re loading", "are + -ing."],
    ["fill", "make → ___", "making", "Drop the silent e."],
    ["fill", "plan → ___", "planning", "Double the n."],
    ["mc", "Which is correct?", ["I'm wanting a coffee.", "I want a coffee.", "I wanting a coffee.", "I am want a coffee."], 1, "want is a state verb."],
    ["mc", "Listen! Somebody ___ at the door.", ["knocks", "is knocking", "knock", "knocked"], 1, "Happening now."],
    ["fix", "Look! It rains.", "Look! It's raining.", "Happening now → present continuous."]
  ],
  "quiz": [
    ["mc", "She ___ to work every day, but this week she ___ from home.", ["goes / is working", "is going / works", "go / working", "goes / works"], 0, "Habit vs temporary."],
    ["fill", "What ___ you doing?", "are", "are + you + -ing."],
    ["fix", "Do you listen to me? (now)", "Are you listening to me?", "Now → present continuous."],
    ["mc", "This bag ___ to me.", ["is belonging", "belongs", "belong", "are belonging"], 1, "belong is a state verb."],
    ["fill", "run → ___", "running", "Double the n."]
  ],
  "test": [
    ["fill", "The technician ___ (fix) the scanner right now.", "is fixing|'s fixing", "Now → is + -ing."],
    ["mc", "I ___ what you mean.", ["am understanding", "understand", "understanding", "am understand"], 1, "State verb."],
    ["fix", "He isn't work today.", "He isn't working today.", "isn't + -ing."],
    ["mc", "Prices ___ this year.", ["rise", "are rising", "rises", "rising"], 1, "A trend around now."],
    ["order", "Are you using the meeting room now?", "Are + subject + -ing?"]
  ],
  "speak": {"task": "Look around you (or at a busy photo) and describe what eight people or things are doing right now. Then say two things you are doing this month that are temporary.", "role": "Phone call: Partner A calls Partner B at work and asks “What are you doing?” “Is the shipment coming?” Partner B describes the situation now.",
    "pron": [["-ing /ɪŋ/", "do not add a /g/ sound at the end"], ["I'm /aɪm/, she's /ʃiːz/, they're /ðeər/", "contractions"], ["queuing /ˈkjuː.ɪŋ/", "“kyoo-ing”"]]},
  "write": {"task": "Write a short status update (60–80 words) for your team chat describing what is happening now in your workplace or class.", "model": "Quick update from the warehouse: Two forklifts are loading the Surabaya containers now and the third one is getting a service. Andi is checking the documents at the gate because five trucks are waiting. We're using the new scanners this week, so things are a bit slow. I'm preparing the delivery notes and I'll send them in 20 minutes.", "check": ["am/is/are + -ing", "No -ing with state verbs", "Correct -ing spelling"]},
  "sum": ["am/is/are + -ing for now, around now and temporary situations.", "Spelling: make → making, stop → stopping, lie → lying.", "Habits → present simple; now/temporary → present continuous.", "State verbs (know, want, need, like, belong) do not normally take -ing."]
},
{
  "id": "a2-04", "st": "A2", "m": "a2-m2", "type": "grammar",
  "title": "Countable and uncountable nouns",
  "sub": "Kata benda terhitung dan tak terhitung",
  "obj": ["Recognise countable and uncountable nouns", "Use some, any, much, many, a lot of, a few, a little", "Ask How much? and How many?", "Use units: a piece of, a bottle of, a kilo of"],
  "exp": [
    {"h": "Two kinds of nouns", "p": "Countable nouns can be counted and have a plural: a box, two boxes. Uncountable nouns cannot be counted directly and have no plural: water, rice, money, information, advice, equipment, furniture, luggage, traffic, news. Uncountable nouns take a singular verb: The information is correct.", "id": "Banyak kata yang terhitung dalam bahasa Indonesia (informasi, saran, perlengkapan) justru tak terhitung dalam bahasa Inggris."},
    {"h": "some / any", "p": "Use some in positive sentences and offers (We have some rice. Would you like some tea?). Use any in negatives and most questions (We don't have any trucks available. Is there any milk?). Both work with plural countable and uncountable nouns.", "id": "some untuk kalimat positif dan tawaran, any untuk negatif dan pertanyaan."},
    {"h": "much / many / a lot of", "p": "many + plural countable (many orders), much + uncountable (much time), mostly in questions and negatives. In positive sentences, a lot of / lots of is more natural for both: We have a lot of orders. There's a lot of traffic.", "id": "many untuk terhitung, much untuk tak terhitung; a lot of untuk keduanya."},
    {"h": "a few / a little and units", "p": "a few + countable (a few problems), a little + uncountable (a little time). To count uncountable things, use a unit: a piece of information/advice/furniture, a bottle of water, a bag of rice, a kilo of sugar, a cup of coffee, an item of luggage.", "id": "Gunakan satuan untuk menghitung benda tak terhitung: a piece of advice."}
  ],
  "struct": ["a/an + singular countable: a pallet", "plural countable: pallets, many pallets, a few pallets", "uncountable (no a/an, no -s): equipment, much equipment, a little equipment", "unit + of + uncountable: two pieces of equipment"],
  "forms": {"pos": ["We have some information about the order.", "There are a lot of trucks at the gate.", "I need a little help."], "neg": ["We don't have any equipment for that.", "There isn't much time.", "There aren't many people here."], "q": ["Is there any news from the supplier?", "How much money do we need?", "How many pallets are there?"]},
  "exc": ["Some nouns can be both: a coffee (a cup) vs coffee (the drink); a paper (newspaper/document) vs paper (material); a time (occasion) vs time.", "People/police are plural: The police are coming.", "News ends in -s but is uncountable: The news is good."],
  "voc": [
    ["information", "/ˌɪn.fəˈmeɪ.ʃən/", "noun (U)", "informasi", "facts about something", "Thanks for the information.", "note: no plural; a piece of information"],
    ["advice", "/ədˈvaɪs/", "noun (U)", "saran, nasihat", "an opinion about what someone should do", "Can you give me some advice?", "verb: advise /ədˈvaɪz/"],
    ["equipment", "/ɪˈkwɪp.mənt/", "noun (U)", "peralatan", "tools or machines needed for a job", "The safety equipment is new.", "coll: office/safety equipment"],
    ["luggage", "/ˈlʌɡ.ɪdʒ/", "noun (U)", "bagasi", "bags and suitcases for travel", "How much luggage do you have?", "syn: baggage"],
    ["furniture", "/ˈfɜː.nɪ.tʃər/", "noun (U)", "perabot", "tables, chairs, beds, etc.", "We bought some new office furniture.", "a piece of furniture"],
    ["traffic", "/ˈtræf.ɪk/", "noun (U)", "lalu lintas", "vehicles on a road", "There's a lot of traffic on the toll road.", "coll: heavy traffic, traffic jam"],
    ["pallet", "/ˈpæl.ət/", "noun (C)", "palet", "a flat wooden or plastic base for moving goods", "We need ten pallets for the order.", "logistics"],
    ["amount", "/əˈmaʊnt/", "noun", "jumlah (banyaknya)", "a quantity of something (often uncountable)", "a large amount of money", "vs number of + plural"]
  ],
  "ex": [
    ["We need some information about the delivery.", "Kami perlu informasi tentang pengirimannya."],
    ["Can you give me some advice?", "Bisakah kamu memberi saya saran?"],
    ["There isn't much time before the deadline.", "Tidak banyak waktu sebelum tenggat."],
    ["How many employees work in the warehouse?", "Berapa karyawan yang bekerja di gudang?"],
    ["How much luggage can I take on the plane?", "Berapa banyak bagasi yang boleh saya bawa?"],
    ["We have a lot of orders this week.", "Kami punya banyak pesanan minggu ini."],
    ["There's a lot of traffic in the morning.", "Pagi hari lalu lintasnya padat."],
    ["I only have a few questions.", "Saya hanya punya beberapa pertanyaan."],
    ["Could I have a little sugar in my tea?", "Boleh minta sedikit gula di teh saya?"],
    ["The news is very good.", "Beritanya sangat bagus."],
    ["We bought three pieces of equipment.", "Kami membeli tiga unit peralatan."],
    ["Is there any water in the fridge?", "Ada air di kulkas?"]
  ],
  "mis": [
    ["Thank you for the informations.", "Thank you for the information.", "information tak terhitung, tanpa -s."],
    ["She gave me many advices.", "She gave me a lot of advice.", "advice tak terhitung."],
    ["How many money do you have?", "How much money do you have?", "money tak terhitung → how much."],
    ["The news are bad.", "The news is bad.", "news tunggal walau berakhiran -s."]
  ],
  "prac": [
    ["mc", "Which noun is uncountable?", ["box", "equipment", "truck", "chair"], 1, "equipment has no plural."],
    ["fill", "How ___ pallets do you need?", "many", "pallets = countable."],
    ["fill", "How ___ time do we have?", "much", "time = uncountable here."],
    ["fill", "We don't have ___ milk. (some/any)", "any", "Negative → any."],
    ["fix", "We need some new furnitures.", "We need some new furniture.", "furniture = uncountable."],
    ["match", [["a bottle of", "water"], ["a piece of", "advice"], ["a bag of", "rice"], ["a cup of", "coffee"], ["a kilo of", "sugar"]], "Units for uncountable nouns."]
  ],
  "quiz": [
    ["mc", "There ___ a lot of traffic today.", ["are", "is", "were", "have"], 1, "traffic = uncountable → is."],
    ["fill", "Would you like ___ tea? (some/any)", "some", "Offers → some."],
    ["fix", "I have a few money.", "I have a little money.", "money → a little."],
    ["mc", "We received ___ complaints this month — only three.", ["a little", "a few", "much", "any"], 1, "Countable, small number → a few."],
    ["fill", "Thanks for the useful ___ (informasi).", "information", "No plural."]
  ],
  "test": [
    ["mc", "How ___ luggage do you have?", ["many", "much", "few", "lot"], 1, "luggage = uncountable."],
    ["fix", "There aren't much people here.", "There aren't many people here.", "people = countable plural."],
    ["fill", "Can I give you a piece of ___? (saran)", "advice", "a piece of advice."],
    ["mc", "Is there ___ news from the supplier?", ["some", "any", "many", "a few"], 1, "Question → any."],
    ["order", "We need a lot of new equipment.", "a lot of + uncountable."]
  ],
  "speak": {"task": "Plan a small office party or team lunch with a partner: decide what and how much you need (How many…? How much…? We need some… We don't need any…).", "role": "Partner A is a warehouse clerk; Partner B orders supplies by phone using units: two boxes of…, ten bottles of…",
    "pron": [["advice /ədˈvaɪs/ (noun) vs advise /ədˈvaɪz/ (verb)", "s vs z sound"], ["a lot of → “a lotta”", "connected speech"], ["equipment", "e-QUIP-ment"]]},
  "write": {"task": "Write a shopping or supply list with a short note (60–80 words) for a colleague, using some/any, much/many, a few/a little and units.", "model": "Hi Lina, For Friday's training we need some snacks and drinks for 25 people. Please buy three boxes of water, two bags of coffee and a few packets of biscuits. We don't need any plates; there are a lot in the kitchen. We only have a little paper for the printer, so please get five packs. There isn't much money in the budget, so keep the receipts. Thanks!", "check": ["No -s on uncountable nouns", "much/many and a few/a little matched correctly", "Units for uncountable nouns"]},
  "sum": ["Uncountable: information, advice, equipment, luggage, furniture, money, news (no a/an, no -s).", "some (positive/offers) / any (negative/questions).", "many + countable; much + uncountable; a lot of for both.", "a few + countable; a little + uncountable; units: a piece of, a bottle of."]
}
]);
