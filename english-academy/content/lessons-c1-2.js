/* English Learning Academy — C1 Advanced, lessons 5–8. */
ELA.add('lessons', [
{
  "id": "c1-05", "st": "C1", "m": "c1-m2", "type": "skills",
  "title": "Academic English",
  "sub": "Bahasa Inggris akademik",
  "obj": ["Recognise the features of academic style: objectivity, hedging, nominalisation, precision", "Use the Academic Word List vocabulary in context", "Paraphrase and cite sources correctly to avoid plagiarism", "Write academic sentences and paragraphs with a clear topic sentence"],
  "exp": [
    {"h": "Academic style", "p": "Academic writing is objective (avoids I feel, you), precise (exact figures, defined terms), cautious (hedging: suggests, appears, may), and dense (nominalisation: the implementation of, an increase in). It avoids contractions, phrasal verbs where a single verb exists, and rhetorical questions.", "id": "Gaya akademik: objektif, presisi, berhati-hati, padat."},
    {"h": "Hedging in research", "p": "Researchers rarely claim absolute truth. Use verbs (suggest, indicate, appear), modals (may, might, could), adverbs (possibly, arguably, largely), and phrases (to some extent, in most cases): The results suggest that route optimisation may reduce emissions by up to 12%.", "id": "Hedging menunjukkan kehati-hatian ilmiah."},
    {"h": "Paraphrasing and citation", "p": "Paraphrase by changing structure and vocabulary while keeping the meaning, then cite: Original: “Last-mile delivery represents the most expensive part of the supply chain.” Paraphrase: According to Rahman (2023), the final stage of delivery accounts for the highest share of supply-chain costs. Copying without quotation marks and citation is plagiarism, even if you change a few words.", "id": "Parafrasa = ubah struktur dan kosakata, tetap cantumkan sumber."},
    {"h": "Paragraph structure", "p": "Topic sentence (main claim) → supporting sentences (evidence, explanation, examples with citations) → concluding/linking sentence. One paragraph = one main idea.", "id": "Satu paragraf satu gagasan utama dengan kalimat topik yang jelas."}
  ],
  "voc": [
    ["hypothesis", "/haɪˈpɒθ.ə.sɪs/", "noun", "hipotesis", "a proposed explanation to be tested", "The hypothesis was supported by the data.", "plural: hypotheses"],
    ["methodology", "/ˌmeθ.əˈdɒl.ə.dʒi/", "noun", "metodologi", "the methods used in research", "The methodology section describes the survey design.", "adj: methodological"],
    ["empirical", "/ɪmˈpɪr.ɪ.kəl/", "adjective", "empiris", "based on observation or experiment", "There is limited empirical evidence.", "coll: empirical study/data"],
    ["significant", "/sɪɡˈnɪf.ɪ.kənt/", "adjective", "signifikan", "large or important; statistically meaningful", "The difference was statistically significant.", "careful: “significant” has a statistical meaning in research"],
    ["correlation", "/ˌkɒr.əˈleɪ.ʃən/", "noun", "korelasi", "a relationship between two variables", "There is a strong correlation between delays and complaints.", "note: correlation ≠ causation"],
    ["paraphrase", "/ˈpær.ə.freɪz/", "verb/noun", "memparafrasakan; parafrasa", "to express the same meaning in different words", "Paraphrase the source and cite it.", "vs quote (exact words)"],
    ["plagiarism", "/ˈpleɪ.dʒər.ɪ.zəm/", "noun", "plagiarisme", "using others' work without credit", "Plagiarism is a serious academic offence.", "verb: plagiarise"],
    ["limitation", "/ˌlɪm.ɪˈteɪ.ʃən/", "noun", "keterbatasan", "a weakness that restricts conclusions", "One limitation of the study is the small sample.", "coll: acknowledge limitations"],
    ["framework", "/ˈfreɪm.wɜːk/", "noun", "kerangka", "a structure of ideas", "We used the SCOR framework.", "coll: theoretical/conceptual framework"],
    ["respondent", "/rɪˈspɒn.dənt/", "noun", "responden", "a person who answers a survey", "Most respondents were warehouse staff.", "syn: participant"]
  ],
  "ex": [
    ["This study examines the impact of route optimisation on delivery times.", "Studi ini meneliti dampak optimasi rute terhadap waktu pengiriman."],
    ["The results suggest that automation may reduce picking errors.", "Hasil menunjukkan bahwa otomatisasi dapat mengurangi kesalahan pengambilan barang."],
    ["A significant correlation was found between driver fatigue and accidents.", "Ditemukan korelasi signifikan antara kelelahan sopir dan kecelakaan."],
    ["However, correlation does not necessarily imply causation.", "Namun, korelasi tidak selalu berarti sebab-akibat."],
    ["According to Rahman (2023), last-mile delivery accounts for the largest share of logistics costs.", "Menurut Rahman (2023), pengiriman jarak akhir menyumbang porsi biaya logistik terbesar."],
    ["Data were collected through a survey of 312 respondents.", "Data dikumpulkan melalui survei terhadap 312 responden."],
    ["One limitation of this study is that it focuses only on Java.", "Salah satu keterbatasan studi ini adalah hanya berfokus pada Jawa."],
    ["Further research is needed to confirm these findings.", "Penelitian lebih lanjut diperlukan untuk mengonfirmasi temuan ini."],
    ["The implementation of the system led to a 15% increase in productivity.", "Penerapan sistem menyebabkan peningkatan produktivitas 15%."],
    ["These findings are largely consistent with previous studies.", "Temuan ini sebagian besar konsisten dengan penelitian sebelumnya."]
  ],
  "mis": [
    ["I think this research is very good and proves everything.", "These findings suggest that the approach is effective.", "Hindari opini pribadi dan klaim absolut."],
    ["The data shows that… (dalam gaya akademik ketat)", "The data show that…", "Dalam gaya akademik formal, data sering diperlakukan jamak (meski data is juga diterima)."],
    ["Changing three words of a source and not citing it.", "Paraphrase fully and cite the source (Author, Year).", "Itu tetap plagiarisme."],
    ["Can't, won't, a lot of, get…", "cannot, will not, a considerable number of, obtain…", "Hindari bentuk informal dalam tulisan akademik."]
  ],
  "prac": [
    ["match", [["hypothesis", "a proposed explanation to test"], ["methodology", "how research was done"], ["limitation", "a weakness of a study"], ["correlation", "a relationship between variables"], ["respondent", "a person who answers a survey"]], "Academic vocabulary."],
    ["mc", "Which sentence is most academic?", ["I feel delays are bad.", "Delays are, like, a huge problem.", "Delays appear to have a significant effect on customer retention.", "You know delays are bad, right?"], 2, "Objective and hedged."],
    ["fill", "The results ___ that the policy may be effective. (menunjukkan, hedged)", "suggest|indicate", "Hedging verb."],
    ["fix", "This research proves that drones are always cheaper.", "This research suggests that drones may be cheaper.|This research suggests that drones are often cheaper.", "Hedge absolute claims."],
    ["mc", "Correlation means:", ["one thing definitely causes another", "two variables are related", "the data are wrong", "the study is finished"], 1, "Relationship, not necessarily cause."],
    ["order", "Further research is needed to confirm these findings.", "Typical academic conclusion."]
  ],
  "quiz": [
    ["mc", "Which is a correct paraphrase of “Last-mile delivery is the most expensive part of the supply chain” (Rahman, 2023)?", ["Last-mile delivery is the most expensive part of the supply chain.", "According to Rahman (2023), the final delivery stage accounts for the highest supply-chain costs.", "Last-mile is expensive.", "The supply chain is the most expensive part of last-mile delivery."], 1, "Changed structure and words, meaning kept, source cited."],
    ["fill", "One ___ of this study is the small sample size. (keterbatasan)", "limitation", "Acknowledging limitations."],
    ["fix", "The datas were collected in 2024.", "The data were collected in 2024.", "data has no -s plural."],
    ["mc", "Which is nominalisation?", ["We implemented the system.", "The implementation of the system…", "Implement it!", "Implementing"], 1, "Verb → noun phrase."],
    ["order", "These findings are largely consistent with previous studies.", "Hedged comparison with literature."]
  ],
  "test": [
    ["mc", "Plagiarism includes:", ["citing every source", "copying text with only minor changes and no citation", "using quotation marks", "paraphrasing and citing"], 1, "Even with small changes."],
    ["fill", "There is limited ___ evidence for this claim. (empiris)", "empirical", "empirical evidence."],
    ["fix", "This prove that our hypothesis is right.", "This suggests that our hypothesis is correct.|This indicates that our hypothesis is correct.", "Hedge + subject–verb agreement."],
    ["mc", "A topic sentence:", ["ends the essay", "states the main idea of a paragraph", "lists references", "is always a question"], 1, "Main idea."],
    ["order", "Data were collected through an online survey.", "Academic passive."]
  ],
  "speak": {"task": "Give a 2-minute summary of a research article or report in your field (or a published logistics study) using academic language: aim, method, key findings (hedged), limitations and implications.", "role": "Partner A presents; Partner B asks typical seminar questions: What was the sample? Is that correlation or causation? What are the limitations?",
    "pron": [["hypothesis /haɪˈpɒθ.ə.sɪs/", "hy-POTH-e-sis"], ["methodology", "meth-o-DOL-o-gy"], ["empirical", "em-PIR-i-cal"]]},
  "write": {"task": "Write an academic paragraph (150–180 words) on a logistics or business topic with a topic sentence, two cited sources (real ones you have read, or clearly labelled placeholders such as [Author, Year]), hedging and a concluding sentence.", "model": "Last-mile delivery is widely regarded as the least efficient stage of urban logistics [Author, Year]. Several studies suggest that it may account for between 40% and 50% of total delivery costs, largely because of failed delivery attempts, congestion and low drop density [Author, Year]. In the Indonesian context, these problems appear to be intensified by the rapid growth of e-commerce and limited addressing systems. Parcel lockers and pick-up points have been proposed as a partial solution; early evidence indicates that they can reduce failed deliveries considerably. However, most existing research has been conducted in European cities, and its findings may not transfer directly to Indonesian urban areas. Further empirical research in cities such as Jakarta and Surabaya is therefore needed to assess the cost-effectiveness of these alternatives.", "check": ["Clear topic sentence", "Citations for all claims from sources", "Hedging and no informal language"]},
  "sum": ["Academic style: objective, precise, hedged, nominalised; no contractions.", "Hedge claims: suggest, indicate, may, appear, largely.", "Paraphrase fully and always cite; copying is plagiarism.", "Paragraph: topic sentence → evidence → concluding/linking sentence."]
},
{
  "id": "c1-06", "st": "C1", "m": "c1-m2", "type": "skills",
  "title": "Critical reading",
  "sub": "Membaca kritis",
  "obj": ["Identify a writer's purpose, stance and intended audience", "Distinguish facts, opinions, assumptions and inferences", "Evaluate evidence and spot logical fallacies", "Read efficiently: skim, scan and read closely when needed"],
  "exp": [
    {"h": "Purpose, stance, audience", "p": "Ask: Why was this written (inform, persuade, sell)? What is the writer's position (look at reporting verbs, adjectives, what is emphasised or omitted)? Who is it for (experts, customers, investors)? A vendor's white paper and an independent study on the same tool may report very different results.", "id": "Tanyakan tujuan, sikap, dan sasaran pembaca sebuah teks."},
    {"h": "Fact, opinion, assumption, inference", "p": "Fact: can be verified (Revenue rose 8% in 2024). Opinion: a judgement (This is the best strategy). Assumption: an unstated belief the argument depends on (customers will accept higher prices). Inference: a conclusion you draw from evidence (the company is preparing to expand).", "id": "Bedakan fakta, opini, asumsi, dan inferensi."},
    {"h": "Evaluating evidence", "p": "Check the source (who, when, funded by whom), the sample (size, representativeness), the method, and whether conclusions go beyond the data. Common fallacies: correlation as causation, cherry-picking, hasty generalisation, appeal to authority, false dilemma (only two options), and slippery slope.", "id": "Periksa sumber, sampel, metode; waspadai kesalahan logika."},
    {"h": "Reading strategies", "p": "Skim for gist (title, headings, first sentences); scan for specific information (numbers, names); read closely for argument and detail. For reports, read the executive summary and conclusion first, then the sections you need.", "id": "Skim untuk gambaran umum, scan untuk informasi spesifik, baca teliti untuk argumen."}
  ],
  "dlg": {"title": "Discussing a vendor report", "lines": [
    ["Analyst", "The vendor's report says their software cut delivery times by 35%.", "Laporan vendor mengatakan perangkat lunaknya memangkas waktu pengiriman 35%."],
    ["Manager", "Who carried out the study?", "Siapa yang melakukan studinya?"],
    ["Analyst", "The vendor itself, with three of its own clients.", "Vendor itu sendiri, dengan tiga kliennya."],
    ["Manager", "So the sample is small and not independent. Were those clients similar to us?", "Jadi sampelnya kecil dan tidak independen. Apakah klien-klien itu mirip dengan kita?"],
    ["Analyst", "Not really. They're all urban same-day couriers in Singapore.", "Tidak juga. Semuanya kurir same-day di perkotaan Singapura."],
    ["Manager", "And did anything else change during the trial—new staff, new routes?", "Apakah ada perubahan lain selama uji coba—staf baru, rute baru?"],
    ["Analyst", "The report doesn't say. It also assumes that drivers follow the suggested routes 100% of the time.", "Laporannya tidak menyebutkan. Laporan itu juga berasumsi sopir mengikuti rute yang disarankan 100%."],
    ["Manager", "Then we can't infer that we'd get 35%. Let's ask for independent case studies and run our own pilot.", "Kalau begitu kita tidak bisa menyimpulkan kita akan mendapat 35%. Mari minta studi kasus independen dan jalankan uji coba sendiri."]
  ]},
  "voc": [
    ["stance", "/stæns/", "noun", "sikap, posisi", "a writer's attitude or position", "The author's stance is clearly pro-automation.", "syn: position"],
    ["bias", "/ˈbaɪ.əs/", "noun", "bias", "unfair preference for one side", "The study may be biased because the vendor funded it.", "adj: biased"],
    ["inference", "/ˈɪn.fər.əns/", "noun", "inferensi, kesimpulan", "a conclusion from evidence", "We can draw an inference from the trend.", "verb: infer"],
    ["cherry-pick", "/ˈtʃer.i.pɪk/", "verb", "memilih data yang menguntungkan", "to choose only data that support your view", "The report cherry-picks the best months.", "fallacy"],
    ["representative", "/ˌrep.rɪˈzen.tə.tɪv/", "adjective", "representatif", "typical of a larger group", "Is the sample representative?", "noun: representative = wakil"],
    ["fallacy", "/ˈfæl.ə.si/", "noun", "kesesatan logika", "a mistaken argument", "That's the fallacy of false dilemma.", "coll: logical fallacy"],
    ["skim", "/skɪm/", "verb", "membaca sekilas", "to read quickly for the main idea", "Skim the report before the meeting.", "vs scan (look for specific info)"],
    ["underlying", "/ˌʌn.dəˈlaɪ.ɪŋ/", "adjective", "mendasari", "real but not obvious", "What is the underlying assumption?", "coll: underlying cause/assumption"]
  ],
  "ex": [
    ["The writer's purpose is to persuade investors, not to inform the public.", "Tujuan penulis adalah membujuk investor, bukan memberi informasi publik."],
    ["The report omits the cost of training, which suggests a positive bias.", "Laporan menghilangkan biaya pelatihan, yang menunjukkan bias positif."],
    ["“Revenue rose 8% in 2024” is a fact; “This is an excellent result” is an opinion.", "“Pendapatan naik 8% pada 2024” adalah fakta; “Ini hasil yang sangat baik” adalah opini."],
    ["The argument assumes that customers will accept higher prices.", "Argumen itu berasumsi pelanggan akan menerima harga lebih tinggi."],
    ["From the hiring data, we can infer that the company is preparing to expand.", "Dari data rekrutmen, kita dapat menyimpulkan perusahaan bersiap ekspansi."],
    ["The sample of three clients is too small to be representative.", "Sampel tiga klien terlalu kecil untuk representatif."],
    ["The author cherry-picks the two best quarters.", "Penulis hanya memilih dua kuartal terbaik."],
    ["“Either we automate now or we go bankrupt” is a false dilemma.", "“Otomatisasi sekarang atau bangkrut” adalah dilema palsu."],
    ["Skim the executive summary first, then read the methodology closely.", "Baca sekilas ringkasan eksekutif dulu, lalu baca metodologinya dengan teliti."],
    ["What is the underlying assumption behind this forecast?", "Apa asumsi yang mendasari prakiraan ini?"]
  ],
  "mis": [
    ["Believing every statistic in a vendor brochure.", "Check who produced the data and how.", "Sumber yang berkepentingan bisa bias."],
    ["Sales rose after the ad campaign, so the campaign caused the rise.", "Sales rose after the campaign; other factors may also explain the rise.", "Korelasi bukan kausalitas."],
    ["Reading every word of a 60-page report from page 1.", "Skim the summary and conclusions, then read relevant sections closely.", "Baca secara strategis."],
    ["The author infers that… (maksud: menyiratkan)", "The author implies that…", "Penulis imply; pembaca infer."]
  ],
  "prac": [
    ["match", [["Fact", "The port handled 7 million TEU in 2024."], ["Opinion", "The port is badly managed."], ["Assumption", "Demand will keep growing."], ["Inference", "Congestion will probably increase."]], "Types of statements."],
    ["mc", "Which is a false dilemma?", ["We could use rail or road, or both.", "Either we cut 30% of staff or the company dies.", "Sales rose by 5%.", "Several options exist."], 1, "Only two extreme options presented."],
    ["fill", "Reading quickly for the main idea is called ___.", "skimming|skim", "skim."],
    ["fix", "The writer infers that the CEO will resign.", "The writer implies that the CEO will resign.", "Writer implies; reader infers."],
    ["mc", "A study funded by the product's seller may be:", ["biased", "representative", "empirical", "comprehensive"], 0, "Potential bias."],
    ["order", "What is the underlying assumption of this argument?", "Critical question."]
  ],
  "quiz": [
    ["mc", "Choosing only favourable data is:", ["skimming", "cherry-picking", "paraphrasing", "hedging"], 1, "cherry-picking."],
    ["fill", "Is the sample ___ of all our customers? (representatif)", "representative", "representative sample."],
    ["fix", "Ice cream sales and accidents both rise in summer, so ice cream causes accidents.", "Ice cream sales and accidents both rise in summer, but ice cream does not cause accidents.", "Correlation ≠ causation (a third factor: summer)."],
    ["mc", "Looking quickly for a specific number is:", ["skimming", "scanning", "inferring", "summarising"], 1, "scan."],
    ["order", "The report omits several important costs.", "Noticing omissions."]
  ],
  "test": [
    ["mc", "“This is the best logistics strategy in Asia” is:", ["a fact", "an opinion", "a statistic", "a citation"], 1, "Judgement."],
    ["fill", "From the data, we can ___ that demand is seasonal. (menyimpulkan)", "infer|conclude", "Reader infers."],
    ["fix", "The study use only three clients, so it is very representative.", "The study used only three clients, so it is not very representative.", "Small sample → not representative."],
    ["mc", "The first thing to read in a long report is usually:", ["the appendix", "the executive summary", "page 30", "the references"], 1, "Executive summary."],
    ["order", "The author's stance is clearly in favour of automation.", "Identifying stance."]
  ],
  "speak": {"task": "Choose a news article, company report or advertisement. In two minutes, explain its purpose, stance, audience, two facts, two opinions, one hidden assumption, and one weakness in the evidence.", "role": "Partner A defends the text; Partner B challenges it with critical questions (Who funded this? Is the sample representative? What's missing?).",
    "pron": [["fallacy /ˈfæl.ə.si/", "FAL-a-see"], ["inference", "IN-fer-ence"], ["bias /ˈbaɪ.əs/", "BY-us"]]},
  "write": {"task": "Write a critical review (150–180 words) of a short report or article: summarise its claim, evaluate the evidence, identify one assumption and one fallacy or limitation, and give a balanced conclusion.", "model": "The vendor's white paper claims that its routing software reduces delivery times by 35%. The claim is based on trials with three clients over two months. While the results are encouraging, the evidence has several weaknesses. First, the study was conducted and funded by the vendor, which raises the possibility of bias. Second, the sample is small and not representative: all three clients are urban same-day couriers in Singapore, whereas our network includes long-distance routes across Java. Third, the paper assumes full driver compliance with the suggested routes, an assumption it does not test. Finally, it attributes the entire improvement to the software, ignoring other changes, such as new hubs, that occurred during the trial. In conclusion, the software may well improve our performance, but the 35% figure should be treated with caution until an independent pilot has been completed.", "check": ["Accurate summary of the claim", "Evaluation of source, sample and method", "Balanced, hedged conclusion"]},
  "sum": ["Identify purpose, stance and audience.", "Separate facts, opinions, assumptions and inferences.", "Evaluate evidence: source, sample, method, fallacies (correlation ≠ causation, cherry-picking, false dilemma).", "Read strategically: skim, scan, then read closely."]
},
{
  "id": "c1-07", "st": "C1", "m": "c1-m2", "type": "skills",
  "title": "Analytical writing",
  "sub": "Menulis analitis",
  "obj": ["Plan an analytical report or essay with a clear thesis", "Analyse causes, effects and trade-offs rather than just describing", "Integrate data and evidence into arguments", "Write strong introductions, conclusions and recommendations"],
  "exp": [
    {"h": "Description vs analysis", "p": "Description says what happened (On-time delivery fell to 88%). Analysis explains why it matters, why it happened and what follows (The fall to 88% coincided with the switch to a new carrier, which suggests that onboarding, rather than demand, drove the decline; if unaddressed, it is likely to affect contract renewals in Q1).", "id": "Deskripsi = apa yang terjadi; analisis = mengapa, apa artinya, dan apa selanjutnya."},
    {"h": "Thesis and structure", "p": "A thesis is your central argument in one or two sentences. Typical structure: introduction (context + thesis) → analysis sections (one key point each, with evidence) → counter-arguments/trade-offs → conclusion (answer the question) → recommendations (specific, prioritised).", "id": "Tesis = argumen utama; struktur: pendahuluan → analisis → trade-off → kesimpulan → rekomendasi."},
    {"h": "Using data", "p": "Introduce, present and interpret: “As Figure 2 shows, returns rose by 18% in Q3. This increase was concentrated in fashion items, which points to sizing issues rather than product quality.” Always interpret numbers; never leave them unexplained.", "id": "Selalu tafsirkan data, jangan hanya menampilkannya."},
    {"h": "Analytical language", "p": "Cause: stems from, is attributable to, is driven by. Effect: results in, contributes to, has implications for. Comparison: in contrast, by comparison, similarly. Evaluation: this suggests, a key limitation is, on balance, the evidence points to.", "id": "Bahasa analitis untuk sebab, akibat, perbandingan, dan evaluasi."}
  ],
  "voc": [
    ["thesis", "/ˈθiː.sɪs/", "noun", "tesis, argumen utama", "the central argument of a text", "State your thesis in the introduction.", "plural: theses"],
    ["trade-off", "/ˈtreɪd.ɒf/", "noun", "kompromi, timbal balik", "a balance between two competing factors", "There is a trade-off between speed and cost.", "coll: make a trade-off"],
    ["attributable to", "/əˈtrɪb.jə.tə.bəl tuː/", "adjective", "disebabkan oleh", "caused by", "Most delays are attributable to customs checks.", "formal"],
    ["implication", "/ˌɪm.plɪˈkeɪ.ʃən/", "noun", "implikasi", "a likely consequence", "This has serious implications for our pricing.", "coll: have implications for"],
    ["on balance", "/ɒn ˈbæl.əns/", "phrase", "secara keseluruhan", "after considering all factors", "On balance, option B is preferable.", "evaluation"],
    ["underpin", "/ˌʌn.dəˈpɪn/", "verb", "mendasari", "to support or form the basis of", "Reliable data underpin good decisions.", "formal"],
    ["mitigate", "/ˈmɪt.ɪ.ɡeɪt/", "verb", "memitigasi, mengurangi", "to make less severe", "We can mitigate the risk with a backup supplier.", "noun: mitigation"],
    ["discrepancy", "/dɪˈskrep.ən.si/", "noun", "selisih, ketidaksesuaian", "a difference between things that should match", "There is a discrepancy between the two reports.", "coll: explain a discrepancy"]
  ],
  "ex": [
    ["On-time delivery fell to 88% in Q3, the lowest level in two years.", "Ketepatan pengiriman turun ke 88% di Q3, level terendah dalam dua tahun."],
    ["This decline appears to be attributable to the change of carrier in July.", "Penurunan ini tampaknya disebabkan oleh pergantian pengangkut pada Juli."],
    ["In contrast, demand remained stable, which rules out volume as the main cause.", "Sebaliknya, permintaan tetap stabil, sehingga volume bukan penyebab utama."],
    ["As Figure 2 shows, returns rose by 18%, mainly in fashion items.", "Seperti terlihat pada Gambar 2, retur naik 18%, terutama produk fesyen."],
    ["This points to sizing issues rather than product quality.", "Ini mengarah pada masalah ukuran, bukan kualitas produk."],
    ["There is a clear trade-off between delivery speed and cost.", "Ada trade-off yang jelas antara kecepatan pengiriman dan biaya."],
    ["If unaddressed, the issue has implications for contract renewals.", "Jika tidak ditangani, masalah ini berimplikasi pada perpanjangan kontrak."],
    ["On balance, a phased rollout is the most prudent option.", "Secara keseluruhan, peluncuran bertahap adalah opsi paling bijaksana."],
    ["A dual-carrier strategy would mitigate the risk of disruption.", "Strategi dua pengangkut akan memitigasi risiko gangguan."],
    ["We recommend, first, retraining the new carrier's dispatchers and, second, reviewing the SLA monthly.", "Kami merekomendasikan, pertama, melatih ulang dispatcher pengangkut baru dan, kedua, meninjau SLA setiap bulan."]
  ],
  "mis": [
    ["Sales were 10, 12, 15, 9, 11. (tanpa interpretasi)", "Sales peaked at 15 in March before falling sharply, which suggests a seasonal pattern.", "Tafsirkan data."],
    ["In conclusion, there are many factors. (tidak menjawab pertanyaan)", "In conclusion, the evidence indicates that carrier onboarding, not demand, caused the decline.", "Kesimpulan harus menjawab pertanyaan/tesis."],
    ["We recommend improving things.", "We recommend introducing weekly carrier performance reviews from January.", "Rekomendasi harus spesifik dan dapat ditindaklanjuti."],
    ["Introducing new arguments in the conclusion.", "Summarise and answer; put new points in the analysis sections.", "Kesimpulan bukan tempat argumen baru."]
  ],
  "prac": [
    ["mc", "Which sentence is analysis rather than description?", ["Costs rose by 6%.", "Costs rose by 6%, largely driven by fuel, which suggests that route optimisation should be the priority.", "The chart is blue.", "There were costs."], 1, "Explains cause and implication."],
    ["fill", "Most delays are ___ to customs inspections. (disebabkan oleh)", "attributable", "attributable to."],
    ["fill", "There is a trade-___ between cost and speed.", "off", "trade-off."],
    ["mc", "A thesis statement should:", ["list all data", "state your central argument", "thank the reader", "ask a question only"], 1, "Central argument."],
    ["fix", "We recommend to introduce weekly carrier reviews.", "We recommend introducing weekly carrier reviews.|We recommend that we introduce weekly carrier reviews.", "recommend + -ing (or that + clause), never recommend to."],
    ["order", "On balance, a phased rollout is the most prudent option.", "Evaluative conclusion."]
  ],
  "quiz": [
    ["mc", "Which word means “make a risk less severe”?", ["mitigate", "underpin", "attribute", "skim"], 0, "mitigate."],
    ["fill", "There is a ___ between the stock count and the system figure. (selisih)", "discrepancy", "discrepancy."],
    ["fix", "As Figure 2 show, returns increased.", "As Figure 2 shows, returns increased.", "Figure 2 = singular."],
    ["mc", "The conclusion should:", ["introduce new data", "answer the question and summarise the argument", "repeat the introduction word for word", "be the longest section"], 1, "Answer the question."],
    ["order", "This has serious implications for our pricing strategy.", "have implications for."]
  ],
  "test": [
    ["mc", "Which recommendation is most actionable?", ["Improve quality.", "Do better next year.", "Introduce a second label check at packing from 1 March, owned by the QA lead.", "Think about labels."], 2, "Specific, owned, dated."],
    ["fill", "Reliable data ___ every good decision. (mendasari)", "underpin|underpins", "underpin."],
    ["fix", "On balance option B are better.", "On balance, option B is better.", "Comma + singular verb."],
    ["mc", "“In contrast” signals:", ["addition", "comparison showing difference", "result", "example"], 1, "Contrast."],
    ["order", "The decline appears to be attributable to the new carrier.", "Hedged causal analysis."]
  ],
  "speak": {"task": "Present a 2-minute analytical briefing on a trend in your workplace, studies or industry: data → interpretation → cause → implication → recommendation. Avoid pure description.", "role": "Partner A presents; Partner B pushes for analysis: So what? Why? What does that imply? What exactly do you recommend?",
    "pron": [["implication", "im-pli-CAY-tion"], ["discrepancy /dɪˈskrep.ən.si/", "dis-CREP-an-see"], ["Pause before 'which suggests…'", "highlights interpretation"]]},
  "write": {"task": "Write a short analytical report section (180–220 words) with a heading, a thesis sentence, data interpretation, one trade-off, a conclusion and two specific recommendations.", "model": "3. Analysis of Q3 Delivery Performance. On-time delivery fell from 95% in Q2 to 88% in Q3, and the evidence indicates that this decline stems from the change of line-haul carrier in July rather than from higher volumes. Volumes rose by only 2% over the period, while late deliveries were concentrated on the three routes transferred to the new carrier (Figure 3). On these routes, average transit time increased by 9 hours, largely attributable to missed cut-off times at the Cikarang hub. By comparison, routes operated by existing carriers maintained a 96% on-time rate. Switching back entirely would restore performance but would eliminate the 11% cost saving that motivated the change, so the company faces a clear trade-off between cost and service. On balance, the savings appear worth preserving if onboarding issues can be resolved quickly. We therefore recommend (1) a joint cut-off-time review with the new carrier by 15 October, owned by the Hub Manager, and (2) weekly route-level performance reports until on-time delivery returns above 94%.", "check": ["Thesis stated early", "Data interpreted, not just listed", "Trade-off, conclusion and specific recommendations"]},
  "sum": ["Analyse (why, so what, what next), don't just describe.", "Clear thesis; one main point per section; address trade-offs.", "Introduce, present and interpret every number.", "Conclusions answer the question; recommendations are specific, owned and dated."]
},
{
  "id": "c1-08", "st": "C1", "m": "c1-m2", "type": "skills",
  "title": "Advanced listening comprehension",
  "sub": "Pemahaman menyimak tingkat lanjut",
  "obj": ["Follow fast, natural speech with connected-speech features", "Identify speakers' attitudes and implied meaning", "Take effective notes during talks, calls and meetings", "Handle different accents in international settings"],
  "exp": [
    {"h": "Connected speech", "p": "Native speakers link, reduce and drop sounds: linking (turn_it_off), elision (nex(t) week, las(t) year), assimilation (would you → /wʊdʒu/, did you → /dɪdʒu/), weak forms (to /tə/, and /ən/, for /fə/). Recognising these patterns is the biggest step from B2 to C1 listening.", "id": "Bunyi saling bersambung, hilang, dan berubah dalam bicara cepat."},
    {"h": "Attitude and implied meaning", "p": "Listen for tone, stress and hedging. “Well, it's an interesting idea…” often means doubt. “I'm not saying it's a bad plan, but…” signals disagreement. Stress changes meaning: “I didn't say HE took it” vs “I didn't SAY he took it.”", "id": "Makna tersirat sering muncul lewat nada dan penekanan."},
    {"h": "Signposts in talks", "p": "Speakers guide you with signposts: The key point here is… / Let me turn now to… / To put it another way… / The bottom line is… / What I'm getting at is… Notice them to understand structure and identify the main points.", "id": "Penanda wacana membantu memahami struktur pembicaraan."},
    {"h": "Note-taking and accents", "p": "Use abbreviations and symbols (↑ increase, ↓ decrease, → leads to, ≠, w/, b/c), write key words not sentences, and organise by topic. International English includes many accents (Indian, Singaporean, Australian, American, British, Nigerian); expose yourself to several and focus on stress and key words.", "id": "Catat kata kunci dan simbol; biasakan mendengar berbagai aksen."}
  ],
  "dlg": {"title": "Implied meaning in a project call", "lines": [
    ["Client", "So, about the go-live date. You said the fifteenth, right?", "Jadi, tentang tanggal go-live. Kamu bilang tanggal lima belas, kan?"],
    ["PM", "Well, the fifteenth is still the target… it's just that integration testing is taking a bit longer than we'd hoped.", "Ya, tanggal lima belas masih target… hanya saja uji integrasi memakan waktu sedikit lebih lama dari yang kami harapkan."],
    ["Client", "When you say “a bit longer”, what are we talking about?", "Kalau kamu bilang “sedikit lebih lama”, maksudnya berapa lama?"],
    ["PM", "Realistically? I'd say we're looking at the twenty-second, possibly the twenty-ninth.", "Realistisnya? Saya kira tanggal dua puluh dua, mungkin dua puluh sembilan."],
    ["Client", "I see. I'm not saying that's a disaster, but my director won't be thrilled.", "Begitu. Saya tidak bilang itu bencana, tetapi direktur saya tidak akan senang."],
    ["PM", "Understood. What I'm getting at is that we'd rather move the date than go live with known bugs.", "Saya paham. Maksud saya, kami lebih memilih mundur daripada go-live dengan bug yang sudah diketahui."],
    ["Client", "Fair enough. Can you put that in writing with the reasons, so I can take it upstairs?", "Masuk akal. Bisa tuliskan beserta alasannya, supaya saya bisa sampaikan ke atasan?"],
    ["PM", "Absolutely. You'll have it by end of day.", "Tentu. Anda akan menerimanya hari ini."]
  ]},
  "voc": [
    ["gist", "/dʒɪst/", "noun", "inti", "the general meaning", "I got the gist, but not the details.", "coll: get the gist"],
    ["signpost", "/ˈsaɪn.pəʊst/", "noun/verb", "penanda; memberi penanda", "a phrase that shows the structure of a talk", "Good speakers signpost their main points.", "noun: signposting"],
    ["connected speech", "/kəˈnek.tɪd spiːtʃ/", "noun", "ujaran bersambung", "how sounds change in natural fast speech", "Connected speech makes listening harder.", "linking, elision, assimilation"],
    ["implied", "/ɪmˈplaɪd/", "adjective", "tersirat", "suggested but not stated", "The implied message was “no”.", "verb: imply"],
    ["take something upstairs", "/teɪk ˈʌp.steəz/", "idiom", "membawa ke atasan", "to escalate to senior management", "I'll take this upstairs.", "informal business"],
    ["fair enough", "/feər ɪˈnʌf/", "phrase", "masuk akal", "I accept that", "Fair enough, let's do that.", "informal"],
    ["accent", "/ˈæk.sənt/", "noun", "logat, aksen", "a way of pronouncing a language", "She has a slight Australian accent.", "coll: strong/slight accent"],
    ["paraphrase back", "/ˈpær.ə.freɪz bæk/", "phrase", "mengulang dengan kata sendiri", "to repeat what you heard in your own words to check", "Paraphrase back key points to check understanding.", "active listening"]
  ],
  "ex": [
    ["“Wouldja like a coffee?” = Would you like a coffee?", "Mau kopi?"],
    ["“We'll nex' week” = We'll (see you) next week—the t disappears.", "Bunyi t hilang dalam ‘next week’."],
    ["“Well, it's an interesting idea…” often signals doubt.", "“Yah, idenya menarik…” sering menandakan keraguan."],
    ["“I'm not saying it's wrong, but…” introduces disagreement.", "“Saya tidak bilang itu salah, tetapi…” mengawali ketidaksetujuan."],
    ["“The key point here is…” tells you the main idea is coming.", "“Poin kuncinya…” menandakan gagasan utama akan muncul."],
    ["“To put it another way…” means the speaker will rephrase.", "“Dengan kata lain…” berarti pembicara akan merumuskan ulang."],
    ["I got the gist, but could you repeat the figures?", "Saya menangkap intinya, tetapi bisa ulangi angkanya?"],
    ["Notes: Q3 rev ↑ 8% b/c new clients; costs ↑ 12% → margin ↓", "Catatan: pendapatan Q3 naik 8% karena klien baru; biaya naik 12% → margin turun."],
    ["So, if I've understood correctly, the launch is moving to the 22nd?", "Jadi, kalau saya tidak salah paham, peluncurannya diundur ke tanggal 22?"],
    ["Her Singaporean accent was easy to follow once I focused on stress.", "Aksen Singapuranya mudah diikuti setelah saya fokus pada penekanan."]
  ],
  "mis": [
    ["Trying to understand every single word.", "Focus on stressed key words and signposts.", "Kata penting biasanya ditekankan."],
    ["Taking notes in full sentences.", "Write key words, numbers and symbols (↑ ↓ →).", "Catatan harus cepat dan ringkas."],
    ["Taking “That's an interesting idea” as strong approval.", "Listen to tone: it may signal polite doubt.", "Makna tersirat."],
    ["Pretending to understand on a call.", "So, if I've understood correctly, …?", "Konfirmasi dengan parafrasa."]
  ],
  "prac": [
    ["match", [["Linking", "turn_it_off"], ["Elision", "nex(t) week"], ["Assimilation", "did you → /dɪdʒu/"], ["Weak form", "to → /tə/"]], "Connected speech features."],
    ["mc", "“I'm not saying it's a bad plan, but…” usually means:", ["full agreement", "polite disagreement coming", "the plan is perfect", "the speaker is confused"], 1, "Signal of disagreement."],
    ["fill", "I got the ___, but I missed the details. (inti)", "gist", "get the gist."],
    ["mc", "Which is a signpost?", ["Let me turn now to costs.", "Costs rose.", "I like costs.", "Costs?"], 0, "Signals structure."],
    ["fix", "So if I understood correct, the date is moving?", "So if I understood correctly, the date is moving?|So, if I've understood correctly, the date is moving?", "Adverb: correctly."],
    ["order", "What I'm getting at is that we need more time.", "Clarifying the main point."]
  ],
  "quiz": [
    ["mc", "In notes, “→” usually means:", ["decrease", "leads to / results in", "not equal", "with"], 1, "Arrow = leads to."],
    ["fill", "Good speakers ___ their main points with phrases like “The key point is…”. (memberi penanda)", "signpost", "signpost."],
    ["mc", "“Fair enough” means:", ["that's unfair", "I accept that", "I'm angry", "it's enough money"], 1, "Acceptance."],
    ["fix", "I didn't catch, can you repeat?", "Sorry, I didn't catch that. Could you repeat it?|I didn't catch that. Could you repeat it?", "Object needed: catch that."],
    ["order", "To put it another way, we need to cut costs.", "Rephrasing signpost."]
  ],
  "test": [
    ["mc", "“Wouldja” in fast speech is:", ["What do you", "Would you", "Where do you", "Would they"], 1, "Assimilation."],
    ["fill", "I'll take this ___ to the director. (ke atasan)", "upstairs", "take something upstairs."],
    ["mc", "Which is the best note for “Revenue increased by 8% because of new clients”?", ["Revenue increased by eight percent because of new clients", "rev ↑ 8% b/c new clients", "money", "8"], 1, "Concise note."],
    ["fix", "When you say a bit long, what you mean?", "When you say a bit longer, what do you mean?", "Comparative + question form."],
    ["order", "Could you put that in writing for me?", "Request for written confirmation."]
  ],
  "speak": {"task": "Listen to a 3–5 minute talk, podcast or news item in English (any accent). Take notes with symbols, then give a 1-minute summary: main point, three supporting points, the speaker's attitude, and one implied message.", "role": "Partner A speaks quickly about a work topic using signposts and hedges; Partner B paraphrases back and identifies the implied meaning.",
    "pron": [["Practise shadowing", "repeat a recording a split second after the speaker"], ["Weak forms", "/tə/, /ən/, /fə/, /əv/"], ["Stress = meaning", "I didn't SAY he took it."]]},
  "write": {"task": "Write meeting notes (symbols and key words) from a call you listen to or imagine, then turn them into a clear 100–130-word summary email that includes what was said and what was implied.", "model": "Notes: go-live 15th → prob 22nd/29th; integ. testing slow; PM: rather delay than bugs; client: dir. unhappy; ACTION PM: written reasons EOD. / Summary: Hi team, quick summary of today's call with the client. The go-live date of the 15th is unlikely to hold: integration testing is taking longer than planned, and the realistic date is now the 22nd, possibly the 29th. The client accepted our reasoning but made it clear that their director will be disappointed, so we should expect some pressure on the new date. I've promised a written explanation by end of day, including the remaining defects and our test plan. Please send me your updates by 3 p.m. Thanks, Arif", "check": ["Notes use key words and symbols", "Summary includes main points and implied attitude", "Clear action and deadline"]},
  "sum": ["Learn connected speech: linking, elision, assimilation, weak forms.", "Listen for attitude and implied meaning in tone, stress and hedges.", "Use signposts to follow structure; take notes with symbols and key words.", "Expose yourself to many accents; paraphrase back to confirm understanding."]
}
]);
