/* English Learning Academy — Professional English, C. Data and Technology (5–7). */
ELA.add('lessons', [
{
  "id": "pro-c5", "st": "PRO", "m": "pro-c", "type": "speaking",
  "title": "Explaining technical issues",
  "sub": "Menjelaskan masalah teknis",
  "obj": ["Report incidents clearly: what, impact, cause, fix, prevention", "Explain technical problems to non-technical audiences using analogies", "Use incident vocabulary: outage, root cause, workaround, hotfix, post-mortem", "Write a blameless post-mortem summary"],
  "exp": [
    {"h": "Incident structure", "p": "What happened → Impact (who/what was affected, how long) → Cause (immediate and root cause) → Fix (what we did) → Prevention (what we'll change). Example: “From 06:10 to 08:40, the sales dashboard showed yesterday's data. The cause was a failed overnight job after the CRM changed a column name. We re-ran the job at 08:30. To prevent this, we've added a schema check.”", "id": "Struktur insiden: apa, dampak, penyebab, perbaikan, pencegahan."},
    {"h": "Explaining to non-technical people", "p": "Remove jargon, focus on impact and next steps, use an analogy: “The pipeline is like a conveyor belt: one machine changed the size of the boxes overnight, so the belt stopped. We've adjusted it and added a sensor that warns us when box sizes change.” Check understanding: Does that make sense?", "id": "Gunakan analogi dan fokus pada dampak untuk audiens non-teknis."},
    {"h": "Blameless language", "p": "Focus on systems and processes, not individuals: “The deployment process didn't include a schema check” rather than “Budi forgot to check the schema.” This encourages honest reporting and better fixes.", "id": "Bahasa tanpa menyalahkan: fokus pada sistem, bukan orang."}
  ],
  "dlg": {"title": "Explaining a data incident to a sales director", "lines": [
    ["Director", "Why did the dashboard show yesterday's numbers this morning? I nearly sent the wrong figures to the CEO.", "Kenapa dasbor menampilkan angka kemarin pagi ini? Saya hampir mengirim angka yang salah ke CEO."],
    ["Engineer", "I'm sorry about that—let me explain briefly. Between 6:10 and 8:40, the dashboard wasn't updated.", "Mohon maaf—saya jelaskan singkat. Antara pukul 6.10 dan 8.40, dasbor tidak diperbarui."],
    ["Engineer", "The overnight job that loads sales data failed, because the CRM team renamed one of the columns yesterday evening.", "Tugas malam yang memuat data penjualan gagal, karena tim CRM mengganti nama salah satu kolom kemarin sore."],
    ["Director", "In plain English?", "Dalam bahasa sederhana?"],
    ["Engineer", "Think of it like a delivery address: the label changed, so our system didn't know where to put the data. We fixed the label and re-ran the job at 8:30, so the numbers are correct now.", "Bayangkan seperti alamat pengiriman: labelnya berubah, jadi sistem kami tidak tahu ke mana harus menaruh datanya. Kami memperbaiki label dan menjalankan ulang tugas pukul 8.30, jadi angkanya sekarang benar."],
    ["Director", "How do I know it won't happen again?", "Bagaimana saya tahu ini tidak terulang?"],
    ["Engineer", "We've added an automatic check that stops the job and alerts us if a column changes, and we've agreed with the CRM team to give us 48 hours' notice. We'll also show a “last updated” time on the dashboard.", "Kami menambahkan pemeriksaan otomatis yang menghentikan tugas dan memberi peringatan jika kolom berubah, dan kami sepakat dengan tim CRM untuk memberi pemberitahuan 48 jam. Kami juga akan menampilkan waktu “terakhir diperbarui” di dasbor."],
    ["Director", "The timestamp is a great idea. Thanks for the clear explanation.", "Stempel waktu itu ide bagus. Terima kasih atas penjelasan yang jelas."]
  ]},
  "expr": [
    ["Between … and …, … was affected.", "describing impact and duration"],
    ["The immediate cause was…; the root cause was…", "explaining causes"],
    ["Think of it like…", "analogy"],
    ["In plain English, …", "simplifying"],
    ["We've applied a workaround / hotfix.", "temporary or quick fix"],
    ["To prevent this from happening again, we've…", "prevention"],
    ["Does that make sense?", "checking understanding"],
    ["The process didn't include… (blameless)", "system-focused explanation"]
  ],
  "voc": [
    ["outage", "/ˈaʊ.tɪdʒ/", "noun", "gangguan layanan", "a period when a system is not working", "The outage lasted two hours.", "coll: partial/full outage"],
    ["root cause", "/ruːt kɔːz/", "noun", "akar masalah", "the fundamental reason for a problem", "The root cause was a missing schema check.", "coll: root cause analysis (RCA)"],
    ["hotfix", "/ˈhɒt.fɪks/", "noun", "perbaikan cepat", "an urgent fix applied quickly", "We deployed a hotfix at 9 a.m.", "tech"],
    ["post-mortem", "/ˌpəʊstˈmɔː.təm/", "noun", "tinjauan pasca-insiden", "a review after an incident", "We'll hold a blameless post-mortem.", "syn: incident review"],
    ["blameless", "/ˈbleɪm.ləs/", "adjective", "tanpa menyalahkan", "focused on systems, not individuals", "Our post-mortems are blameless.", "culture"],
    ["degrade", "/dɪˈɡreɪd/", "verb", "menurun (kinerja)", "to become worse in quality or speed", "Performance degraded during peak hours.", "noun: degradation"],
    ["timestamp", "/ˈtaɪm.stæmp/", "noun", "stempel waktu", "a record of date and time", "Show a 'last updated' timestamp.", "tech"],
    ["intermittent", "/ˌɪn.təˈmɪt.ənt/", "adjective", "sesekali, putus-sambung", "happening sometimes, not continuously", "Users report intermittent errors.", "coll: intermittent issue"]
  ],
  "ex": [
    ["Between 6:10 and 8:40, the sales dashboard showed yesterday's data.", "Antara pukul 6.10 dan 8.40, dasbor penjualan menampilkan data kemarin."],
    ["The outage affected about 300 sellers for two hours.", "Gangguan memengaruhi sekitar 300 penjual selama dua jam."],
    ["The immediate cause was a failed job; the root cause was a missing schema check.", "Penyebab langsungnya tugas gagal; akar masalahnya tidak ada pemeriksaan skema."],
    ["Think of it like a conveyor belt that stops when the box size changes.", "Bayangkan seperti ban berjalan yang berhenti saat ukuran kotak berubah."],
    ["We've applied a workaround while we develop a permanent fix.", "Kami menerapkan solusi sementara sambil mengembangkan perbaikan permanen."],
    ["We deployed a hotfix at 9:15, and the error rate returned to normal.", "Kami menerapkan perbaikan cepat pukul 9.15, dan tingkat kesalahan kembali normal."],
    ["Performance degraded during the 12.12 sale.", "Kinerja menurun selama promo 12.12."],
    ["Users are reporting intermittent login errors.", "Pengguna melaporkan kesalahan login yang putus-sambung."],
    ["The deployment process didn't include a load test.", "Proses penerapan tidak mencakup uji beban."],
    ["To prevent this from happening again, we've added automatic alerts.", "Untuk mencegah terulang, kami menambahkan peringatan otomatis."]
  ],
  "mis": [
    ["The DAG failed because the upstream schema had a breaking change in the CRM extract. (to a sales director)", "The overnight data job failed because another system changed a label.", "Sederhanakan untuk audiens non-teknis."],
    ["Budi broke the system.", "The release process didn't include a schema check.", "Bahasa tanpa menyalahkan."],
    ["It's fixed. (tanpa pencegahan)", "It's fixed, and we've added a check to prevent it happening again.", "Selalu sebut pencegahan."],
    ["There was a problem. (tanpa waktu/dampak)", "From 6:10 to 8:40, the dashboard showed outdated data for all regions.", "Sebutkan durasi dan dampak."]
  ],
  "prac": [
    ["match", [["What happened", "The dashboard showed old data."], ["Impact", "All regions, 6:10–8:40."], ["Cause", "A column name changed in the CRM."], ["Fix", "We re-ran the job at 8:30."], ["Prevention", "We added a schema check."]], "Incident structure."],
    ["mc", "Which is blameless?", ["Andi forgot the test.", "The process didn't include a test step.", "It's Andi's fault.", "Someone was lazy."], 1, "System-focused."],
    ["fill", "The ___ lasted two hours. (gangguan)", "outage", "outage."],
    ["fill", "Think of it ___ a conveyor belt.", "like", "Think of it like…"],
    ["fix", "We have deploy a hotfix this morning.", "We deployed a hotfix this morning.|We have deployed a hotfix.", "Correct verb form."],
    ["order", "To prevent this from happening again, we added alerts.", "Prevention."]
  ],
  "quiz": [
    ["mc", "A hotfix is:", ["a slow redesign", "an urgent quick fix", "a holiday", "a type of server"], 1, "Hotfix."],
    ["fill", "We'll hold a blameless post-___. (tinjauan pasca-insiden)", "mortem", "post-mortem."],
    ["fix", "Users report intermittently errors.", "Users report intermittent errors.", "Adjective before noun."],
    ["mc", "For a non-technical audience you should:", ["use maximum jargon", "focus on impact and use an analogy", "show the code", "say nothing"], 1, "Simplify."],
    ["order", "The root cause was a missing schema check.", "Root cause."]
  ],
  "test": [
    ["mc", "“Performance degraded” means:", ["it improved", "it got worse", "it stopped forever", "it was deleted"], 1, "Degrade."],
    ["fill", "Show a 'last updated' ___ on the dashboard. (stempel waktu)", "timestamp", "timestamp."],
    ["fix", "The outage was affect 300 sellers.", "The outage affected 300 sellers.", "Past simple active."],
    ["mc", "Which part is often forgotten in incident updates?", ["the date", "prevention", "the word 'incident'", "greetings"], 1, "Prevention."],
    ["order", "Does that make sense so far?", "Checking understanding."]
  ],
  "speak": {"task": "Explain a real or invented technical incident twice: (1) to an engineering team with precise terms, (2) to a non-technical director in under one minute with an analogy, impact and prevention.", "role": "Partner A is an impatient director: “In plain English?” “Will it happen again?”",
    "pron": [["outage /ˈaʊ.tɪdʒ/", "OW-tij"], ["intermittent", "in-ter-MIT-ent"], ["post-mortem", "post-MOR-tem"]]},
  "write": {"task": "Write a blameless post-mortem summary (150–180 words): summary, impact, timeline (3–4 entries), root cause, what went well, action items with owners.", "model": "Post-mortem: Sales dashboard showed stale data (12 Nov). Summary: The overnight sales load failed, so the dashboard showed 11 Nov data until 08:40. Impact: all regional managers; one draft CEO report used stale figures but was corrected before sending. Timeline: 01:05 load job failed (column 'cust_id' not found); 06:10 dashboard refresh used stale table; 07:55 sales director reported the issue; 08:30 job re-run after mapping fix; 08:40 data correct. Root cause: the CRM team renamed a column without notice, and our pipeline had no schema validation or failure alert to the on-call engineer. What went well: the fix took 35 minutes once detected. Action items: (1) add schema checks with a hard stop and Slack alert – Andi, 15 Nov; (2) show 'last updated' timestamp on dashboards – Sari, 18 Nov; (3) agree a 48-hour change-notice process with CRM – Dimas, 22 Nov.", "check": ["Blameless language", "Clear impact, timeline and root cause", "Action items with owners and dates"]},
  "sum": ["Incident structure: what, impact, cause (immediate and root), fix, prevention.", "For non-technical audiences: plain English, impact first, analogy, check understanding.", "Blameless language: processes and systems, not people.", "Vocabulary: outage, root cause, workaround, hotfix, degrade, post-mortem."]
},
{
  "id": "pro-c6", "st": "PRO", "m": "pro-c", "type": "speaking",
  "title": "Presenting data insights",
  "sub": "Mempresentasikan wawasan data",
  "obj": ["Turn analysis into a clear story: insight → evidence → implication → recommendation", "Describe trends and comparisons precisely", "Present uncertainty and limitations honestly", "Handle challenging questions about data"],
  "exp": [
    {"h": "From data to insight", "p": "An insight is not a number; it is a meaningful finding with a “so what”: “Sellers who book their first pickup within 3 days of signing up are twice as likely to stay active after 90 days. So, onboarding should focus on getting the first pickup booked quickly.”", "id": "Wawasan = temuan bermakna + implikasi."},
    {"h": "Trend language", "p": "Rose/increased/grew steadily; jumped/surged (fast up); declined/fell/dropped; plunged (fast down); peaked at; bottomed out at; remained stable/flat; fluctuated between… and…; outperformed/underperformed. Comparisons: twice as likely, 30% higher than, compared with, in contrast.", "id": "Bahasa tren dan perbandingan yang presisi."},
    {"h": "Uncertainty and limitations", "p": "Be honest: “This is a correlation, not proof of causation.” / “The sample is small, so treat this as directional.” / “We're about 80% confident that…” / “We excluded … because …” This builds trust and protects decisions.", "id": "Sampaikan ketidakpastian dan keterbatasan dengan jujur."}
  ],
  "dlg": {"title": "Presenting an onboarding insight to leadership", "lines": [
    ["Analyst", "Here's the key insight: sellers who book their first pickup within three days of signing up are twice as likely to still be active after 90 days.", "Ini wawasan utamanya: penjual yang memesan penjemputan pertama dalam tiga hari setelah mendaftar dua kali lebih mungkin tetap aktif setelah 90 hari."],
    ["Analyst", "As you can see, 90-day retention is 62% for fast starters, compared with 31% for everyone else.", "Seperti terlihat, retensi 90 hari adalah 62% untuk yang cepat memulai, dibandingkan 31% untuk yang lain."],
    ["COO", "Is that cause and effect, or are those just more motivated sellers?", "Apakah itu sebab-akibat, atau mereka memang penjual yang lebih termotivasi?"],
    ["Analyst", "Great question. It's a correlation, so motivation may play a role. That's why we'd recommend testing it: an A/B test where half of new sellers get a guided first-pickup flow.", "Pertanyaan bagus. Ini korelasi, jadi motivasi mungkin berperan. Karena itu kami sarankan mengujinya: uji A/B di mana separuh penjual baru mendapat alur penjemputan pertama yang dipandu."],
    ["CFO", "What would it be worth if it worked?", "Berapa nilainya jika berhasil?"],
    ["Analyst", "If we moved just 10% of new sellers into the fast-start group, we estimate about Rp 1.4 billion in additional annual revenue. That's a rough estimate, with a fairly wide range.", "Jika kita memindahkan 10% penjual baru saja ke kelompok cepat memulai, kami perkirakan tambahan pendapatan sekitar Rp 1,4 miliar per tahun. Itu perkiraan kasar, dengan rentang yang cukup lebar."],
    ["COO", "OK. What do you need?", "Baik. Apa yang kamu butuhkan?"],
    ["Analyst", "Two developers for one sprint to build the guided flow, and approval to run the test for six weeks.", "Dua pengembang selama satu sprint untuk membangun alur yang dipandu, dan persetujuan menjalankan uji selama enam minggu."]
  ]},
  "expr": [
    ["Here's the key insight: …", "leading with the insight"],
    ["As you can see, … compared with …", "showing evidence"],
    ["… are twice as likely to …", "relative comparison"],
    ["So what does this mean for us? …", "implication"],
    ["It's a correlation, so…", "acknowledging limitations"],
    ["Treat this as directional.", "uncertainty"],
    ["We'd recommend testing it by…", "recommendation"],
    ["That's a rough estimate, with a wide range.", "honest estimates"]
  ],
  "voc": [
    ["insight", "/ˈɪn.saɪt/", "noun", "wawasan", "a meaningful understanding from data", "The key insight is about first pickups.", "coll: actionable insight"],
    ["retention", "/rɪˈten.ʃən/", "noun", "retensi", "keeping customers over time", "90-day retention is 62%.", "ant: churn"],
    ["directional", "/daɪˈrek.ʃən.əl/", "adjective", "bersifat indikatif", "showing a likely direction, not precise", "Treat these results as directional.", "analytics"],
    ["peak", "/piːk/", "verb/noun", "mencapai puncak; puncak", "to reach the highest point", "Orders peaked at 48,000 on 12 December.", "coll: peak season"],
    ["outperform", "/ˌaʊt.pəˈfɔːm/", "verb", "berkinerja lebih baik", "to do better than", "Surabaya outperformed Jakarta in Q3.", "ant: underperform"],
    ["actionable", "/ˈæk.ʃən.ə.bəl/", "adjective", "dapat ditindaklanjuti", "useful for making decisions", "Give actionable recommendations.", "coll: actionable insight"],
    ["caveat", "/ˈkæv.i.æt/", "noun", "catatan peringatan", "a warning or limitation", "One caveat: the sample is small.", "coll: with the caveat that"],
    ["uplift", "/ˈʌp.lɪft/", "noun", "kenaikan", "an increase caused by an action", "The test showed a 12% uplift.", "analytics"]
  ],
  "ex": [
    ["Here's the key insight: fast starters are twice as likely to stay active.", "Ini wawasan utamanya: penjual yang cepat memulai dua kali lebih mungkin tetap aktif."],
    ["Retention is 62% for fast starters, compared with 31% for others.", "Retensi 62% untuk yang cepat memulai, dibandingkan 31% untuk lainnya."],
    ["Orders peaked at 48,000 on 12 December and then fell steadily.", "Pesanan memuncak di 48.000 pada 12 Desember lalu turun bertahap."],
    ["Surabaya outperformed Jakarta on on-time delivery for the third month.", "Surabaya mengungguli Jakarta dalam ketepatan pengiriman untuk bulan ketiga."],
    ["So what does this mean for us? Onboarding should focus on the first pickup.", "Lalu apa artinya bagi kita? Orientasi harus fokus pada penjemputan pertama."],
    ["One caveat: this is a correlation, not proof of causation.", "Satu catatan: ini korelasi, bukan bukti sebab-akibat."],
    ["The sample is small, so please treat this as directional.", "Sampelnya kecil, jadi anggaplah ini indikatif."],
    ["We'd recommend testing it with a six-week A/B test.", "Kami sarankan mengujinya dengan uji A/B enam minggu."],
    ["The test showed a 12% uplift in bookings.", "Uji menunjukkan kenaikan pemesanan 12%."],
    ["That's a rough estimate, with a range of Rp 0.9 to 2.0 billion.", "Itu perkiraan kasar, dengan rentang Rp 0,9 hingga 2,0 miliar."]
  ],
  "mis": [
    ["Starting with 20 charts and no conclusion.", "Start with the key insight, then show evidence.", "Mulai dengan wawasan."],
    ["Fast starters stay because of the first pickup. (tanpa bukti kausal)", "Fast starters are more likely to stay; we recommend testing whether the first pickup causes this.", "Hati-hati klaim kausal."],
    ["Revenue will be exactly Rp 1,437,250,000.", "We estimate about Rp 1.4 billion, with a wide range.", "Jangan memberi presisi palsu."],
    ["The numbers are very good.", "Retention rose from 31% to 62% for this group.", "Gunakan angka spesifik."]
  ],
  "prac": [
    ["match", [["Insight", "Fast starters are twice as likely to stay."], ["Evidence", "62% vs 31% retention."], ["Implication", "Onboarding should target the first pickup."], ["Recommendation", "Run a six-week A/B test."]], "Insight story structure."],
    ["fill", "Orders ___ at 48,000 on 12 December. (memuncak)", "peaked", "peak at."],
    ["fill", "One ___: the sample is small. (catatan peringatan)", "caveat", "caveat."],
    ["mc", "Which is an insight, not just a number?", ["Retention is 62%.", "Fast starters are twice as likely to stay, so onboarding should push the first pickup.", "We have data.", "Chart 4."], 1, "Finding + so what."],
    ["fix", "Surabaya outperform Jakarta last quarter.", "Surabaya outperformed Jakarta last quarter.", "Past simple."],
    ["order", "Please treat these results as directional.", "Uncertainty."]
  ],
  "quiz": [
    ["mc", "“Twice as likely” means:", ["half as likely", "two times the probability", "two percent more", "the same"], 1, "Relative comparison."],
    ["fill", "The test showed a 12% ___ in bookings. (kenaikan)", "uplift|increase", "uplift."],
    ["fix", "Retention is 62% for fast starters, compare with 31%.", "Retention is 62% for fast starters, compared with 31%.", "compared with."],
    ["mc", "What builds trust when presenting data?", ["hiding limitations", "stating caveats and uncertainty honestly", "using more decimals", "speaking fast"], 1, "Honesty."],
    ["order", "So what does this mean for us?", "Signposting the implication."]
  ],
  "test": [
    ["mc", "“Actionable insight” means:", ["an insight you can act on", "a long report", "a secret", "a chart"], 0, "Actionable."],
    ["fill", "Treat these early results as ___. (indikatif)", "directional", "directional."],
    ["fix", "Orders peak at 48,000 last December.", "Orders peaked at 48,000 last December.", "Past simple."],
    ["mc", "How should you present an uncertain revenue estimate?", ["to the exact rupiah", "as a rounded figure with a range", "not at all", "as a guarantee"], 1, "Rounded + range."],
    ["order", "Here is the key insight from the analysis.", "Leading with the insight."]
  ],
  "speak": {"task": "Present one data insight in 3 minutes to leadership: insight, evidence (two numbers), implication, caveat, recommendation and resources needed. Handle two challenging questions.", "role": "COO asks about causation; CFO asks about value and confidence.",
    "pron": [["TWICE as likely", "stress the comparison"], ["caveat /ˈkæv.i.æt/", "KAV-ee-at"], ["Pause after the insight", "let it land"]]},
  "write": {"task": "Write a one-page insight brief (150–180 words): headline insight, evidence, implication, caveats, recommendation and next steps.", "model": "Insight brief: The first pickup drives seller retention. Headline: Sellers who book their first pickup within three days of sign-up are twice as likely to be active after 90 days (62% vs 31%). Evidence: analysis of 12,480 sellers who signed up between January and June; the pattern holds across all regions and seller sizes. Implication: our onboarding currently focuses on profile completion; shifting the focus to the first pickup could reduce early churn significantly. Caveats: this is a correlation, and more motivated sellers may naturally book earlier; seasonality was not fully controlled. Value: if 10% more new sellers became fast starters, we estimate about Rp 1.4 billion in additional annual revenue (range Rp 0.9–2.0 billion). Recommendation: build a guided first-pickup flow and run a six-week A/B test with 50% of new sellers. Next steps: approval of two developers for one sprint; test start on 2 December; results by mid-January.", "check": ["Insight first with evidence", "Caveats and ranges stated", "Clear recommendation and resources"]},
  "sum": ["Insight = finding + so what; lead with it.", "Use precise trend and comparison language (peaked, outperformed, twice as likely).", "State caveats: correlation vs causation, sample size, directional results, ranges.", "End with a recommendation and what you need."]
},
{
  "id": "pro-c7", "st": "PRO", "m": "pro-c", "type": "speaking",
  "title": "Discussing system architecture",
  "sub": "Membahas arsitektur sistem",
  "obj": ["Describe system components and data flows in English", "Discuss non-functional requirements: scalability, availability, latency, cost, security", "Compare architectural options and explain trade-offs", "Participate in design reviews and document decisions (ADR)"],
  "exp": [
    {"h": "Describing architecture", "p": "Walk through the flow: “Orders come in through the API gateway, are written to the orders service, which publishes an event to a message queue. A consumer loads the events into the warehouse every five minutes, and the dashboard reads from a curated mart.” Use: upstream/downstream, synchronous/asynchronous, decoupled, single point of failure.", "id": "Jelaskan alur dari hulu ke hilir dengan istilah yang tepat."},
    {"h": "Quality attributes", "p": "Scalability (handle growth), availability (uptime, e.g. 99.9%), latency (response time), throughput (requests per second), durability, security, maintainability, cost. Architecture is about trade-offs: “Streaming gives lower latency, but it's more complex and costly to operate than micro-batches.”", "id": "Atribut kualitas dan trade-off arsitektur."},
    {"h": "Design reviews and ADRs", "p": "In reviews: What happens if this component fails? How does it scale to 10× volume? What's the cost at peak? An Architecture Decision Record captures: context, decision, alternatives considered, consequences. Language: We decided to… because… We considered… but rejected it because…", "id": "Tinjauan desain dan Architecture Decision Record."}
  ],
  "dlg": {"title": "A design review: streaming vs micro-batch", "lines": [
    ["Lead", "The question today is how we deliver near-real-time tracking data to the customer dashboard.", "Pertanyaan hari ini adalah bagaimana kita mengirim data pelacakan hampir real-time ke dasbor pelanggan."],
    ["Eng A", "I'd propose full streaming: carrier events go into a message queue, a stream processor enriches them, and we write directly to a serving database. Latency would be under ten seconds.", "Saya usulkan streaming penuh: event pengangkut masuk ke antrean pesan, pemroses aliran memperkaya data, dan kita tulis langsung ke basis data penyaji. Latensi di bawah sepuluh detik."],
    ["Eng B", "That works, but what's the actual requirement? Customers told us five-minute freshness is fine.", "Itu bisa, tapi apa kebutuhan sebenarnya? Pelanggan bilang kesegaran lima menit sudah cukup."],
    ["Lead", "Right, the SLA is five minutes.", "Benar, SLA-nya lima menit."],
    ["Eng B", "Then micro-batches every two minutes would meet the SLA at a fraction of the operational cost. We already run Airflow and BigQuery; streaming would add a new platform to maintain.", "Kalau begitu micro-batch setiap dua menit memenuhi SLA dengan biaya operasional jauh lebih kecil. Kita sudah memakai Airflow dan BigQuery; streaming menambah platform baru untuk dipelihara."],
    ["Eng A", "Fair point. My concern is scalability during 12.12, when events go up ten times.", "Poin yang wajar. Kekhawatiran saya adalah skalabilitas saat 12.12, ketika event naik sepuluh kali lipat."],
    ["Eng B", "We could load-test micro-batches at 10× volume. If they can't keep up, we revisit streaming.", "Kita bisa uji beban micro-batch pada volume 10×. Jika tidak sanggup, kita tinjau ulang streaming."],
    ["Lead", "Good. So, decision: micro-batch every two minutes, with a 10× load test before 1 December. Alternative considered: streaming, rejected for now due to operational cost. I'll write it up as an ADR.", "Bagus. Jadi keputusannya: micro-batch tiap dua menit, dengan uji beban 10× sebelum 1 Desember. Alternatif yang dipertimbangkan: streaming, ditolak untuk saat ini karena biaya operasional. Saya akan menuliskannya sebagai ADR."]
  ]},
  "expr": [
    ["Data flows from … to … via …", "describing flow"],
    ["Upstream / downstream of…", "position in the flow"],
    ["What happens if … fails?", "resilience question"],
    ["How does this scale to 10× volume?", "scalability question"],
    ["The trade-off is … versus …", "trade-offs"],
    ["That would meet the SLA at a fraction of the cost.", "cost argument"],
    ["We considered …, but rejected it because…", "documenting alternatives"],
    ["Let's write it up as an ADR.", "decision record"]
  ],
  "voc": [
    ["scalability", "/ˌskeɪ.ləˈbɪl.ə.ti/", "noun", "skalabilitas", "the ability to handle growth", "How is the scalability at 10× volume?", "adj: scalable"],
    ["availability", "/əˌveɪ.ləˈbɪl.ə.ti/", "noun", "ketersediaan", "the share of time a system is working", "We target 99.9% availability.", "coll: high availability"],
    ["throughput", "/ˈθruː.pʊt/", "noun", "throughput, laju proses", "the amount processed per unit of time", "Throughput is 5,000 events per second.", "vs latency"],
    ["message queue", "/ˈmes.ɪdʒ kjuː/", "noun", "antrean pesan", "a system that holds messages between services", "Events go into a message queue.", "e.g. Pub/Sub, Kafka"],
    ["decoupled", "/diːˈkʌp.əld/", "adjective", "terpisah (tidak saling bergantung)", "able to change or fail independently", "The services are decoupled by the queue.", "noun: decoupling"],
    ["upstream", "/ʌpˈstriːm/", "adjective/adverb", "hulu", "earlier in the data flow", "An upstream change broke our job.", "ant: downstream"],
    ["ADR", "/ˌeɪ.diːˈɑːr/", "noun", "catatan keputusan arsitektur", "Architecture Decision Record", "Let's document this in an ADR.", "documentation"],
    ["serving layer", "/ˈsɜː.vɪŋ ˌleɪ.ər/", "noun", "lapisan penyaji", "the part that provides data to applications", "The dashboard reads from the serving layer.", "data architecture"]
  ],
  "ex": [
    ["Orders come in through the API gateway and are written to the orders service.", "Pesanan masuk melalui API gateway dan ditulis ke layanan pesanan."],
    ["The service publishes an event to a message queue.", "Layanan menerbitkan event ke antrean pesan."],
    ["The dashboard reads from a curated mart in the serving layer.", "Dasbor membaca dari data mart terkurasi di lapisan penyaji."],
    ["An upstream schema change broke two downstream jobs.", "Perubahan skema di hulu merusak dua tugas di hilir."],
    ["We target 99.9% availability, which allows about 43 minutes of downtime a month.", "Kami menargetkan ketersediaan 99,9%, yang memungkinkan sekitar 43 menit gangguan per bulan."],
    ["What happens if the queue goes down?", "Apa yang terjadi jika antrean mati?"],
    ["How does this scale to ten times the current volume?", "Bagaimana ini berskala ke sepuluh kali volume saat ini?"],
    ["The trade-off is lower latency versus higher operational cost.", "Trade-off-nya adalah latensi lebih rendah versus biaya operasional lebih tinggi."],
    ["Micro-batches would meet the SLA at a fraction of the cost.", "Micro-batch akan memenuhi SLA dengan biaya jauh lebih kecil."],
    ["We considered streaming but rejected it for now because of operational complexity.", "Kami mempertimbangkan streaming tetapi menolaknya untuk saat ini karena kompleksitas operasional."]
  ],
  "mis": [
    ["Choosing the most advanced technology without checking the requirement.", "What's the actual latency requirement? Five minutes may be enough.", "Mulai dari kebutuhan, bukan teknologi."],
    ["The system is scalable. (tanpa angka)", "It handles 10× current volume in our load test.", "Kuantifikasi klaim."],
    ["We chose BigQuery. (tanpa alasan dan alternatif)", "We chose BigQuery because…; we considered … but rejected it because…", "Dokumentasikan alasan dan alternatif."],
    ["Downstream changed and broke the source. (arah terbalik)", "An upstream change broke the downstream job.", "Hulu memengaruhi hilir."]
  ],
  "prac": [
    ["match", [["Latency", "response or delivery delay"], ["Throughput", "volume processed per second"], ["Availability", "share of time the system works"], ["Scalability", "ability to handle growth"], ["Durability", "data is not lost"]], "Quality attributes."],
    ["fill", "The services are ___ by a message queue. (terpisah)", "decoupled", "decoupled."],
    ["fill", "An ___ schema change broke our job. (hulu)", "upstream", "upstream."],
    ["mc", "Which question tests resilience?", ["What colour is the UI?", "What happens if this component fails?", "Who designed the logo?", "When is lunch?"], 1, "Failure question."],
    ["fix", "We considered streaming but reject it.", "We considered streaming but rejected it.", "Parallel past forms."],
    ["order", "The trade-off is lower latency versus higher cost.", "Stating a trade-off."]
  ],
  "quiz": [
    ["mc", "99.9% availability allows roughly how much downtime per month?", ["43 minutes", "4 hours", "1 day", "0 minutes"], 0, "≈43 minutes."],
    ["fill", "Let's document the decision in an ___. (catatan keputusan arsitektur, abbr.)", "ADR", "ADR."],
    ["fix", "How do this scale to 10× volume?", "How does this scale to 10× volume?", "does + this."],
    ["mc", "Micro-batching compared with streaming is usually:", ["more complex", "simpler and cheaper, with higher latency", "always faster", "impossible in BigQuery"], 1, "Trade-off."],
    ["order", "The dashboard reads from the serving layer.", "Describing flow."]
  ],
  "test": [
    ["mc", "An ADR records:", ["employee holidays", "context, decision, alternatives and consequences", "server passwords", "sales targets"], 1, "ADR contents."],
    ["fill", "Throughput is 5,000 events per ___.", "second", "per second."],
    ["fix", "Events goes into a message queue.", "Events go into a message queue.", "Plural verb."],
    ["mc", "The best first question in a design review is often:", ["Which tool is newest?", "What is the actual requirement (e.g. SLA)?", "Who is paying?", "Can we use AI?"], 1, "Requirements first."],
    ["order", "We considered streaming but rejected it because of cost.", "Documenting alternatives."]
  ],
  "speak": {"task": "Draw and explain (3 minutes) the architecture of a system you know—components, data flow, quality attributes, one weakness. Then discuss two options for an improvement and agree on a decision with a trade-off.", "role": "Design review: an architect asks failure, scalability and cost questions; a product manager asks about user impact.",
    "pron": [["throughput /ˈθruː.pʊt/", "THROO-put"], ["availability", "a-vay-la-BIL-i-ty"], ["queue /kjuː/", "same as Q"]]},
  "write": {"task": "Write an Architecture Decision Record (150–180 words): title, status, context, decision, alternatives considered, consequences (positive and negative).", "model": "ADR-014: Micro-batch ingestion for customer tracking data. Status: Accepted (20 Nov). Context: Customers need tracking updates on the dashboard within 5 minutes (SLA). Event volume averages 300 per second and can reach 3,000 per second during 12.12. The team already operates Airflow and BigQuery; no one has production experience with stream processors. Decision: Ingest carrier events with micro-batches every 2 minutes from Pub/Sub into a partitioned BigQuery table, with an idempotent MERGE into the serving mart. Alternatives considered: (1) Full streaming with a stream processor and a serving database—rejected for now: lower latency than required, higher operating cost and a new platform to maintain. (2) Hourly batch—rejected: does not meet the SLA. Consequences: + Meets SLA at an estimated 70% lower cost; + uses existing skills. − Latency of 2–4 minutes; − must be load-tested at 10× volume before 1 Dec; we will revisit streaming if the test fails.", "check": ["Context with requirements and constraints", "Decision with reasons", "Alternatives and consequences"]},
  "sum": ["Describe architecture as a flow: upstream → downstream, sync/async, decoupled components.", "Discuss quality attributes: scalability, availability, latency, throughput, cost, security.", "Start from requirements, then compare options and trade-offs.", "Record decisions in ADRs: context, decision, alternatives, consequences."]
}
]);
