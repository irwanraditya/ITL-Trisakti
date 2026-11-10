/* English Learning Academy — A1 Beginner, lessons 6–10. */
ELA.add('lessons', [
{
  "id": "a1-06", "st": "A1", "m": "a1-m2", "type": "grammar",
  "title": "Articles: a, an, the",
  "sub": "Artikel a, an, dan the",
  "obj": ["Choose a or an by the first sound of the next word", "Use “the” for specific or already known things", "Know when to use no article", "Use a/an for jobs: “She is a nurse.”"],
  "exp": [
    {"h": "a / an = one, not specific", "p": "Use a or an with a singular countable noun when you mention it for the first time or it is not specific: “I have a car.” “She is an engineer.”", "id": "a/an berarti “sebuah/seorang” dan dipakai untuk benda tunggal yang belum spesifik."},
    {"h": "a or an? Listen to the sound", "p": "Use “an” before a vowel SOUND and “a” before a consonant SOUND. It is about sound, not spelling: an apple, an hour (h is silent), a university (/juː/ sounds like “you”), a European country, an MBA (/em/).", "id": "Pilihan a/an ditentukan bunyi awal, bukan huruf: “an hour”, “a university”."},
    {"h": "the = specific or known", "p": "Use “the” when the listener knows which thing you mean: because you mentioned it before (I bought a laptop. The laptop is fast.), because there is only one (the sun, the internet), or because the situation makes it clear (Close the door, please.).", "id": "“the” untuk sesuatu yang sudah jelas, sudah disebut sebelumnya, atau hanya ada satu."},
    {"h": "No article", "p": "Use no article with plural or uncountable nouns in general: “Cats are cute.” “I like coffee.” “Information is important.” Also with most names of people, cities and countries: Jakarta, Indonesia, Mr Hadi (but: the Netherlands, the United States, the Philippines).", "id": "Tidak memakai artikel untuk benda jamak atau tak terhitung secara umum, dan untuk nama orang/kota/negara."}
  ],
  "struct": ["a + consonant sound: a book, a uniform, a one-way ticket", "an + vowel sound: an email, an hour, an MBA", "the + specific noun: the report on your desk"],
  "forms": {"pos": ["I need a pen.", "She is an accountant.", "The meeting starts at ten."], "neg": ["I don't have a car.", "He isn't an engineer.", "The shop isn't open."], "q": ["Do you have a minute?", "Is she an employee here?", "Where is the station?"]},
  "exc": ["Jobs need a/an: “I am a teacher” (not “I am teacher”).", "Some places in fixed phrases have no article: go to work, go to school, at home, in bed, by bus.", "Instruments and unique things take “the”: play the guitar, the sun, the sky."],
  "voc": [
    ["engineer", "/ˌen.dʒɪˈnɪər/", "noun", "insinyur", "a person who designs or builds machines, roads, systems", "My brother is an engineer.", "coll: software engineer, civil engineer"],
    ["accountant", "/əˈkaʊn.tənt/", "noun", "akuntan", "a person who keeps financial records", "She is an accountant at a bank.", "coll: chartered accountant"],
    ["umbrella", "/ʌmˈbrel.ə/", "noun", "payung", "a thing you hold over your head in the rain", "Take an umbrella. It's raining.", "note: an umbrella (vowel sound)"],
    ["hour", "/aʊər/", "noun", "jam (durasi)", "sixty minutes", "The trip takes an hour.", "note: silent h → an hour"],
    ["university", "/ˌjuː.nɪˈvɜː.sə.ti/", "noun", "universitas", "a place for higher education", "It is a good university.", "note: /juː/ sound → a university"],
    ["station", "/ˈsteɪ.ʃən/", "noun", "stasiun", "a place where trains or buses stop", "The station is near the hotel.", "coll: train station, bus station"],
    ["door", "/dɔːr/", "noun", "pintu", "a thing you open to go into a room or building", "Please close the door.", "coll: open/close/lock the door"]
  ],
  "ex": [
    ["I have a meeting at nine.", "Saya ada rapat pukul sembilan."],
    ["She is an HR manager.", "Dia seorang manajer HR."],
    ["We need an hour to finish.", "Kami butuh satu jam untuk menyelesaikan."],
    ["He studies at a university in Depok.", "Dia kuliah di sebuah universitas di Depok."],
    ["I bought a scanner. The scanner works well.", "Saya membeli pemindai. Pemindai itu bekerja dengan baik."],
    ["Can you open the window, please?", "Bisa tolong buka jendelanya?"],
    ["The sun is very hot today.", "Matahari sangat panas hari ini."],
    ["I like tea, but I don't like coffee.", "Saya suka teh, tetapi tidak suka kopi."],
    ["Trucks are expensive.", "Truk itu (secara umum) mahal."],
    ["She works in Indonesia, but she lives in the Philippines.", "Dia bekerja di Indonesia, tetapi tinggal di Filipina."],
    ["It's an old building with a new lift.", "Ini gedung tua dengan lift baru."],
    ["I go to work by bus.", "Saya pergi kerja naik bus."]
  ],
  "mis": [
    ["She is nurse.", "She is a nurse.", "Profesi memakai a/an."],
    ["a hour / an university", "an hour / a university", "Ikuti bunyi: hour diawali bunyi vokal, university diawali bunyi /j/."],
    ["The life is beautiful.", "Life is beautiful.", "Kata benda umum yang tak terhitung tidak memakai “the”."],
    ["I go to the work by the bus.", "I go to work by bus.", "Frasa tetap: go to work, by bus."]
  ],
  "prac": [
    ["fill", "I'm ___ student. (a/an)", "a", "student begins with a consonant sound."],
    ["fill", "It takes ___ hour. (a/an)", "an", "The h in hour is silent."],
    ["fill", "She works at ___ university in Bandung. (a/an)", "a", "university begins with /juː/."],
    ["mc", "I have a cat and a dog. ___ cat is black.", ["A", "An", "The", "—"], 2, "Second mention → the."],
    ["mc", "___ information is useful.", ["The", "An", "A", "— (no article)"], 3, "Uncountable noun in general: no article."],
    ["fix", "My father is driver.", "My father is a driver.", "Jobs need a/an."]
  ],
  "quiz": [
    ["mc", "Choose the correct phrase.", ["an European city", "a European city", "the European city of", "European a city"], 1, "European starts with /j/ → a."],
    ["fill", "Please close ___ door. (the room has one door)", "the", "Specific thing in the situation → the."],
    ["mc", "Which sentence is correct?", ["I like the music.", "I like music.", "I like a music.", "I like an music."], 1, "General meaning → no article."],
    ["fill", "He has ___ MBA. (a/an)", "an", "MBA starts with /em/ → an."],
    ["fix", "Moon is beautiful tonight.", "The moon is beautiful tonight.", "Only one moon → the."]
  ],
  "test": [
    ["fill", "Take ___ umbrella. (a/an)", "an", "umbrella starts with a vowel sound."],
    ["mc", "She is ___ engineer.", ["a", "an", "the", "—"], 1, "Job + vowel sound → an."],
    ["fix", "I go to the school by the bus.", "I go to school by bus.", "Fixed phrases without articles."],
    ["mc", "I saw a film yesterday. ___ film was boring.", ["A", "The", "An", "—"], 1, "Second mention → the."],
    ["order", "There is a bank near the station.", "a = first mention; the = known place."]
  ],
  "speak": {"task": "Describe your bag or desk: say six things in it with a/an, then say one detail about each with “the” (I have a notebook. The notebook is blue.).", "role": "Partner A names a job; Partner B makes a sentence with a/an (She is an architect.).",
    "pron": [["a /ə/", "weak, short sound: a book"], ["an /ən/", "link to the next word: an_apple"], ["the /ðə/ vs /ði/", "/ðə/ before consonants, /ði/ before vowel sounds: the end"]]},
  "write": {"task": "Write 8 sentences about your room or office. Use a, an and the at least twice each, and include one sentence with no article.", "model": "My office has a big window. The window faces the street. There is an old printer in the corner. The printer is very slow. I have a desk and a chair. The chair is comfortable. I drink coffee every morning.", "check": ["a/an only with singular countable nouns", "the for things already mentioned", "no article for general plural/uncountable"]},
  "sum": ["a/an = one, not specific; choose by the first sound: a university, an hour.", "the = specific, already mentioned or unique.", "No article for general plural/uncountable nouns and most names.", "Jobs need a/an: She is a doctor."]
},
{
  "id": "a1-07", "st": "A1", "m": "a1-m2", "type": "grammar",
  "title": "Singular and plural nouns",
  "sub": "Kata benda tunggal dan jamak",
  "obj": ["Form regular plurals with -s and -es", "Use common irregular plurals (people, children, men, women)", "Use plural nouns after numbers", "Pronounce the plural endings /s/, /z/, /ɪz/"],
  "exp": [
    {"h": "Regular plurals", "p": "Add -s to most nouns: book → books, truck → trucks. Add -es after s, ss, sh, ch, x, z: bus → buses, box → boxes, watch → watches. For consonant + y, change y to -ies: city → cities, company → companies. For vowel + y, just add -s: day → days, key → keys.", "id": "Bahasa Indonesia mengulang kata (buku-buku) atau tidak menandai jamak. Bahasa Inggris wajib menambahkan -s/-es."},
    {"h": "After numbers", "p": "Indonesian says “tiga buku” (no change), but English needs the plural after any number above one: three books, ten trucks, 2 hours.", "id": "Setelah angka lebih dari satu, kata benda wajib jamak: three books."},
    {"h": "Irregular plurals", "p": "Some common nouns change form: man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice. Some nouns with -f/-fe change to -ves: knife → knives, life → lives, shelf → shelves.", "id": "Beberapa kata jamaknya tidak beraturan, misalnya person → people, child → children."},
    {"h": "Pronouncing -s", "p": "The ending sounds /s/ after p, t, k, f (books, cups), /z/ after most voiced sounds (cars, days), and /ɪz/ after s, z, sh, ch, x (buses, boxes, watches).", "id": "Akhiran -s bisa berbunyi /s/, /z/, atau /ɪz/."}
  ],
  "struct": ["number (2+) + plural noun: five boxes", "these/those + plural noun: these documents", "plural subject + are/verb without -s: The trucks are new."],
  "forms": {"pos": ["We have three warehouses.", "The children are at school.", "These boxes are heavy."], "neg": ["We don't have many trucks.", "The people aren't here yet.", "Those shelves aren't full."], "q": ["How many employees are there?", "Are these your keys?", "Do the women work here?"]},
  "exc": ["Some nouns have the same singular and plural form: sheep, fish, series.", "Some nouns are always plural: trousers, jeans, glasses, scissors.", "“People” is plural: People are friendly here (not “People is”)."],
  "voc": [
    ["box", "/bɒks/", "noun", "kotak, kardus", "a container with flat sides", "Put the boxes on the shelf.", "plural: boxes"],
    ["shelf", "/ʃelf/", "noun", "rak", "a flat board on a wall or in a cupboard to put things on", "The shelves are full.", "plural: shelves"],
    ["employee", "/ɪmˈplɔɪ.iː/", "noun", "karyawan", "a person who works for a company", "The company has 200 employees.", "syn: staff member, worker"],
    ["child", "/tʃaɪld/", "noun", "anak", "a young person", "She has two children.", "plural: children"],
    ["person", "/ˈpɜː.sən/", "noun", "orang", "a human being", "One person is absent; three people are here.", "plural: people"],
    ["city", "/ˈsɪt.i/", "noun", "kota", "a large town", "Jakarta and Surabaya are big cities.", "plural: cities"],
    ["key", "/kiː/", "noun", "kunci", "a metal object used to open a lock", "Where are my keys?", "plural: keys"]
  ],
  "ex": [
    ["I have two brothers and one sister.", "Saya punya dua saudara laki-laki dan satu saudara perempuan."],
    ["We deliver to five cities.", "Kami mengirim ke lima kota."],
    ["The boxes are in the warehouse.", "Kotak-kotak itu di gudang."],
    ["There are thirty people in the meeting.", "Ada tiga puluh orang di rapat."],
    ["Her children go to the same school.", "Anak-anaknya bersekolah di sekolah yang sama."],
    ["These watches are expensive.", "Jam tangan ini mahal."],
    ["The company has 120 employees.", "Perusahaan itu punya 120 karyawan."],
    ["Two women and three men work in this team.", "Dua perempuan dan tiga laki-laki bekerja di tim ini."],
    ["Please put the files on the shelves.", "Tolong taruh berkas di rak."],
    ["My feet hurt after the long walk.", "Kaki saya sakit setelah jalan jauh."],
    ["Those buses go to the airport.", "Bus-bus itu pergi ke bandara."],
    ["I need new glasses.", "Saya butuh kacamata baru."]
  ],
  "mis": [
    ["I have three book.", "I have three books.", "Setelah angka > 1, kata benda jamak."],
    ["There are many peoples.", "There are many people.", "“People” sudah jamak."],
    ["The childs are playing.", "The children are playing.", "Jamak tak beraturan: children."],
    ["Two citys", "Two cities", "Konsonan + y → -ies."]
  ],
  "prac": [
    ["fill", "one box → two ___", "boxes", "Add -es after x."],
    ["fill", "one city → three ___", "cities", "Consonant + y → -ies."],
    ["fill", "one child → two ___", "children", "Irregular plural."],
    ["fill", "one shelf → four ___", "shelves", "-f → -ves."],
    ["mc", "Choose the correct sentence.", ["There are 50 employee.", "There are 50 employees.", "There is 50 employees.", "There are 50 employeess."], 1, "Number + plural, there are."],
    ["match", [["man", "men"], ["woman", "women"], ["person", "people"], ["foot", "feet"], ["tooth", "teeth"]], "Common irregular plurals."]
  ],
  "quiz": [
    ["fill", "one day → five ___", "days", "Vowel + y → just add -s."],
    ["mc", "“People ___ friendly in Yogyakarta.”", ["is", "are", "am", "be"], 1, "People is plural → are."],
    ["fix", "We have two truck and ten driver.", "We have two trucks and ten drivers.", "Plurals after numbers."],
    ["mc", "Which ending is pronounced /ɪz/?", ["cars", "books", "boxes", "days"], 2, "After x → /ɪz/."],
    ["fill", "one knife → two ___", "knives", "-fe → -ves."]
  ],
  "test": [
    ["fill", "one bus → two ___", "buses", "Add -es after s."],
    ["fix", "My two child are students.", "My two children are students.", "child → children."],
    ["mc", "Which is always plural?", ["shirt", "trousers", "jacket", "hat"], 1, "trousers = always plural."],
    ["fill", "one company → many ___", "companies", "Consonant + y → -ies."],
    ["order", "There are twelve people in my team.", "Number + plural noun."]
  ],
  "speak": {"task": "Count and describe things around you: “There are four chairs, two windows and one door.” Use at least eight nouns with numbers.", "role": "Partner A is a warehouse manager asking “How many … are there?”. Partner B answers with numbers and plurals.",
    "pron": [["books, cups, desks", "/s/"], ["cars, days, phones", "/z/"], ["boxes, buses, watches", "/ɪz/: an extra syllable"], ["women", "/ˈwɪm.ɪn/: sounds like “WIM-in”"]]},
  "write": {"task": "Write an inventory note (6–8 sentences) for a small shop or warehouse, using numbers and plural nouns, including two irregular plurals.", "model": "Inventory, Monday: We have 24 boxes of rice and 15 boxes of noodles. There are 6 shelves in Room A. Two shelves are empty. We have 3 knives and 12 scissors for packing. Five people work in the morning shift. Two children's bicycles are in the store room.", "check": ["Plural after numbers", "-es / -ies / -ves spelled correctly", "There are + plural"]},
  "sum": ["Add -s to most nouns; -es after s, sh, ch, x; consonant + y → -ies.", "Use plurals after numbers above one: three books.", "Learn irregular plurals: men, women, children, people, feet, teeth.", "The -s ending sounds /s/, /z/ or /ɪz/."]
},
{
  "id": "a1-08", "st": "A1", "m": "a1-m2", "type": "vocab",
  "title": "Basic adjectives: describing people and things",
  "sub": "Kata sifat dasar",
  "obj": ["Use 20 common adjectives with their opposites", "Put adjectives before nouns and after be", "Use very and quite to make adjectives stronger or softer", "Describe people, places and objects simply"],
  "exp": [
    {"h": "Where adjectives go", "p": "Adjectives describe nouns. They go before the noun (a big room) or after be (The room is big). Adjectives never take -s: two big rooms (not bigs).", "id": "Kata sifat tidak berubah bentuk untuk jamak: “two big rooms”."},
    {"h": "Opposites help memory", "p": "Learn adjectives in pairs: big/small, long/short, old/new, old/young, cheap/expensive, easy/difficult, hot/cold, fast/slow, clean/dirty, busy/quiet, happy/sad, early/late.", "id": "Belajar kata sifat berpasangan (lawan kata) membantu mengingat."},
    {"h": "Very, quite, really", "p": "Very and really make an adjective stronger: very busy. Quite is softer (cukup): quite good. Do not use very with “extreme” adjectives such as excellent or terrible.", "id": "very/really = sangat; quite = cukup."},
    {"h": "Polite descriptions of people", "p": "For people's appearance, neutral words are best: tall, short, slim, young, elderly. Avoid “fat” and “old” about people; say “a bit overweight” only if necessary and “older” or “elderly”.", "id": "Untuk orang, pilih kata yang sopan: “elderly” lebih sopan daripada “old”."}
  ],
  "voc": [
    ["big", "/bɪɡ/", "adjective", "besar", "large in size", "We have a big warehouse.", "ant: small, little; syn: large"],
    ["cheap", "/tʃiːp/", "adjective", "murah", "not costing much money", "This hotel is cheap and clean.", "ant: expensive; reg: “affordable” is more polite/formal"],
    ["difficult", "/ˈdɪf.ɪ.kəlt/", "adjective", "sulit", "not easy", "English grammar is sometimes difficult.", "ant: easy; syn: hard"],
    ["busy", "/ˈbɪz.i/", "adjective", "sibuk, ramai", "with a lot to do; full of people or traffic", "The road is busy in the morning.", "ant: quiet, free"],
    ["quiet", "/ˈkwaɪ.ət/", "adjective", "tenang, sepi", "with little noise or activity", "The library is quiet.", "ant: noisy, busy; note: not “quite”"],
    ["friendly", "/ˈfrend.li/", "adjective", "ramah", "kind and pleasant to others", "The staff are very friendly.", "ant: unfriendly"],
    ["fast", "/fɑːst/", "adjective", "cepat", "moving or happening quickly", "The new train is very fast.", "ant: slow; syn: quick"],
    ["clean", "/kliːn/", "adjective", "bersih", "not dirty", "Keep the work area clean.", "ant: dirty"],
    ["young", "/jʌŋ/", "adjective", "muda", "not old (for people and animals)", "Our manager is young.", "ant: old, elderly (polite)"],
    ["tall", "/tɔːl/", "adjective", "tinggi (orang, gedung)", "having a big height", "My brother is very tall.", "ant: short; note: “high” for mountains, prices"],
    ["happy", "/ˈhæp.i/", "adjective", "senang", "feeling pleased", "I'm happy with my new job.", "ant: sad, unhappy"],
    ["heavy", "/ˈhev.i/", "adjective", "berat", "weighing a lot", "These boxes are heavy.", "ant: light"]
  ],
  "ex": [
    ["The office is small but very clean.", "Kantornya kecil tetapi sangat bersih."],
    ["It's a cheap phone with a big screen.", "Ini ponsel murah dengan layar besar."],
    ["The test is quite difficult.", "Tesnya cukup sulit."],
    ["Our neighbours are friendly.", "Tetangga kami ramah."],
    ["The roads are busy at 7 a.m.", "Jalanan ramai pukul 7 pagi."],
    ["My grandmother is elderly but very active.", "Nenek saya sudah lanjut usia tetapi sangat aktif."],
    ["These are heavy boxes. Be careful.", "Ini kotak-kotak berat. Hati-hati."],
    ["The new system is really fast.", "Sistem barunya sangat cepat."],
    ["Is the hotel quiet at night?", "Apakah hotelnya tenang di malam hari?"],
    ["He is tall and he has short hair.", "Dia tinggi dan rambutnya pendek."]
  ],
  "mis": [
    ["She has a car red.", "She has a red car.", "Kata sifat sebelum kata benda."],
    ["They are goods students.", "They are good students.", "Kata sifat tidak memakai -s."],
    ["The room is quite. (meaning sepi)", "The room is quiet.", "quiet = sepi; quite = cukup."],
    ["The price is very cheap and very excellent.", "The price is very cheap and the quality is excellent.", "Jangan pakai “very” dengan kata sifat ekstrem seperti excellent."]
  ],
  "prac": [
    ["match", [["big", "small"], ["cheap", "expensive"], ["easy", "difficult"], ["fast", "slow"], ["heavy", "light"]], "Learn adjectives with their opposites."],
    ["order", "We have a very busy week.", "a + very + adjective + noun."],
    ["fill", "The library is ___. Please don't talk. (sepi/tenang)", "quiet", "quiet = with little noise."],
    ["mc", "Which is the most polite?", ["My boss is old.", "My boss is elderly.", "My boss is very old man.", "My boss old."], 1, "Elderly is more polite for people."],
    ["fix", "These are news cars.", "These are new cars.", "Adjectives never take -s."],
    ["mc", "“The test was ___ easy” means it was fairly easy.", ["very", "quite", "too", "really"], 1, "quite = fairly, cukup."]
  ],
  "quiz": [
    ["mc", "The opposite of “clean” is:", ["dirty", "quiet", "cheap", "young"], 0, "clean ↔ dirty."],
    ["fill", "This bag is very ___. I can't lift it. (berat)", "heavy", "heavy = berat."],
    ["fix", "I have a phone new.", "I have a new phone.", "Adjective before noun."],
    ["mc", "Which word describes a person's height?", ["high", "tall", "long", "big"], 1, "Use tall for people and buildings."],
    ["order", "The staff are very friendly.", "Subject + be + very + adjective."]
  ],
  "test": [
    ["mc", "The opposite of “expensive” is:", ["cheap", "busy", "easy", "short"], 0, "expensive ↔ cheap."],
    ["fill", "The road is ___ in the morning. There are many cars. (ramai)", "busy", "busy road = a lot of traffic."],
    ["fix", "They are friendlys people.", "They are friendly people.", "No -s on adjectives."],
    ["mc", "Choose the natural sentence.", ["It is a very excellent idea.", "It is an excellent idea.", "It is excellent idea.", "It is idea excellent."], 1, "Do not use very with excellent; use an."],
    ["order", "She has a small but clean office.", "a + adjective + but + adjective + noun."]
  ],
  "speak": {"task": "Describe three things: your home, your campus or workplace, and a person you admire. Use at least two adjectives for each, and one opposite pair.", "role": "Partner A describes a famous place in Indonesia with three adjectives; Partner B guesses the place.",
    "pron": [["quiet /ˈkwaɪ.ət/ vs quite /kwaɪt/", "two syllables vs one"], ["difficult", "DIF-i-cult: stress on the first syllable"], ["friendly", "FREND-lee"]]},
  "write": {"task": "Write a short description (60–80 words) of your city for a foreign visitor, using at least eight adjectives.", "model": "Bandung is a cool and friendly city in West Java. The weather is cold in the morning and warm in the afternoon. The streets are busy at the weekend because many visitors come from Jakarta. The food is cheap and delicious. There are beautiful green hills and quiet cafés. It is a great city for a short holiday.", "check": ["Adjective before noun or after be", "No -s on adjectives", "At least one very/quite"]},
  "sum": ["Adjectives go before nouns or after be: a big room / The room is big.", "Adjectives never take -s.", "Learn adjectives in opposite pairs.", "very/really = stronger; quite = softer; be polite when describing people."]
},
{
  "id": "a1-09", "st": "A1", "m": "a1-m3", "type": "grammar",
  "title": "Present simple: routines and facts",
  "sub": "Present simple untuk kebiasaan dan fakta",
  "obj": ["Use the present simple for habits, routines and facts", "Add -s/-es to the verb with he, she, it", "Make negatives with don't and doesn't", "Ask questions with do and does"],
  "exp": [
    {"h": "When to use it", "p": "Use the present simple for things that are generally true or happen regularly: routines (I start work at 8), facts (Water boils at 100°C), schedules (The train leaves at 6:15) and permanent situations (She lives in Medan).", "id": "Present simple dipakai untuk kebiasaan, fakta, jadwal, dan keadaan tetap."},
    {"h": "The third-person -s", "p": "With he, she, it (or one person/thing), add -s: work → works, live → lives. Add -es after o, s, sh, ch, x: go → goes, watch → watches. Consonant + y → -ies: study → studies. Irregular: have → has.", "id": "Untuk he/she/it, kata kerja wajib ditambah -s/-es. Ini kesalahan paling umum pelajar Indonesia."},
    {"h": "Negatives", "p": "Use don't (do not) with I, you, we, they; doesn't (does not) with he, she, it. After don't/doesn't, the verb has NO -s: She doesn't work on Sundays.", "id": "Setelah doesn't, kata kerja kembali ke bentuk dasar (tanpa -s)."},
    {"h": "Questions", "p": "Do + I/you/we/they + verb? Does + he/she/it + verb? Short answers: Yes, I do. / No, she doesn't. Again, no -s after does: Does he live here?", "id": "Pertanyaan memakai do/does, dan kata kerja tetap bentuk dasar."}
  ],
  "struct": ["I/you/we/they + verb: They work in Cikarang.", "he/she/it + verb-s: She works in Cikarang.", "don't/doesn't + base verb", "Do/Does + subject + base verb?"],
  "forms": {"pos": ["I start work at eight.", "He checks the stock every day.", "The shop opens at nine."], "neg": ["I don't drink coffee.", "She doesn't eat meat.", "It doesn't work."], "q": ["Do you live near here?", "Does he speak English?", "What time does the meeting start?"]},
  "exc": ["have → has (He has a car).", "Verbs ending in vowel + y just add -s: play → plays, pay → pays.", "Be is different: use am/is/are, not do/does (She is tired, not She does tired)."],
  "voc": [
    ["start", "/stɑːt/", "verb", "mulai", "to begin", "I start work at 8 a.m.", "syn: begin; ant: finish"],
    ["finish", "/ˈfɪn.ɪʃ/", "verb", "selesai", "to end", "We finish at 5 p.m.", "he finishes"],
    ["check", "/tʃek/", "verb", "memeriksa", "to look at something to make sure it is correct", "She checks the invoices every morning.", "coll: check stock, check emails"],
    ["live", "/lɪv/", "verb", "tinggal", "to have your home somewhere", "They live in Tangerang.", "he lives"],
    ["usually", "/ˈjuː.ʒu.ə.li/", "adverb", "biasanya", "in most situations", "I usually take the train.", "position: before the main verb"],
    ["leave", "/liːv/", "verb", "berangkat, meninggalkan", "to go away from a place", "The bus leaves at 6:15.", "he leaves; past: left"],
    ["study", "/ˈstʌd.i/", "verb", "belajar, kuliah", "to learn about a subject", "She studies logistics.", "he studies"],
    ["schedule", "/ˈʃedʒ.uːl/", "noun", "jadwal", "a plan of times when things happen", "The train schedule is online.", "US /ˈskedʒ.uːl/"]
  ],
  "ex": [
    ["I get up at 5 a.m. on weekdays.", "Saya bangun pukul 5 pagi pada hari kerja."],
    ["My father works at the port.", "Ayah saya bekerja di pelabuhan."],
    ["She studies English every evening.", "Dia belajar bahasa Inggris setiap sore."],
    ["The warehouse opens at seven.", "Gudang buka pukul tujuh."],
    ["We don't work on Sundays.", "Kami tidak bekerja hari Minggu."],
    ["He doesn't like spicy food.", "Dia tidak suka makanan pedas."],
    ["Do you drive to work? — No, I don't. I take the bus.", "Anda mengemudi ke kantor? — Tidak. Saya naik bus."],
    ["Does your company deliver on Saturday? — Yes, it does.", "Apakah perusahaan Anda mengirim hari Sabtu? — Ya."],
    ["The train leaves at 6:15.", "Kereta berangkat pukul 6.15."],
    ["Water boils at 100 degrees Celsius.", "Air mendidih pada 100 derajat Celsius."],
    ["My manager has two meetings every Monday.", "Manajer saya punya dua rapat setiap Senin."],
    ["What time do you finish work?", "Jam berapa Anda selesai bekerja?"]
  ],
  "mis": [
    ["She work in a bank.", "She works in a bank.", "he/she/it + -s."],
    ["He doesn't works on Friday.", "He doesn't work on Friday.", "Setelah doesn't, tanpa -s."],
    ["Does she likes tea?", "Does she like tea?", "Setelah does, tanpa -s."],
    ["I am work in Jakarta.", "I work in Jakarta.", "Jangan gabungkan am/is/are dengan kata kerja biasa."]
  ],
  "prac": [
    ["fill", "She ___ (live) in Bekasi.", "lives", "she + verb-s."],
    ["fill", "My brother ___ (watch) football every weekend.", "watches", "watch → watches."],
    ["fill", "They ___ (not / work) at night.", "don't work|do not work", "they + don't + base verb."],
    ["fill", "___ he speak Japanese?", "Does", "Question with he → does."],
    ["fix", "My mother don't drink coffee.", "My mother doesn't drink coffee.|My mother does not drink coffee.", "she → doesn't."],
    ["mc", "Which sentence is correct?", ["He haves a car.", "He has a car.", "He have a car.", "He is have a car."], 1, "have → has."],
    ["order", "What time does the shop open?", "Wh- + does + subject + base verb?"]
  ],
  "quiz": [
    ["fill", "The bus ___ (go) to the airport.", "goes", "go → goes."],
    ["mc", "Does your sister work here? — No, she ___.", ["don't", "doesn't", "isn't", "not"], 1, "Short answer: No, she doesn't."],
    ["fix", "I am live in Depok.", "I live in Depok.", "Don't use am with live."],
    ["fill", "He ___ (study) at night.", "studies", "consonant + y → -ies."],
    ["mc", "Choose the question.", ["You do like rice?", "Do you like rice?", "Like you rice?", "Does you like rice?"], 1, "Do + you + base verb?"]
  ],
  "test": [
    ["fill", "Our office ___ (close) at 6 p.m.", "closes", "it + -s (es after s)."],
    ["fix", "She doesn't speaks Chinese.", "She doesn't speak Chinese.|She does not speak Chinese.", "No -s after doesn't."],
    ["mc", "Water ___ at 100°C.", ["boil", "boils", "is boil", "boiling"], 1, "A fact: it + boils."],
    ["fill", "___ you usually have breakfast?", "Do", "you → do."],
    ["order", "My manager checks the reports every Friday.", "Subject + verb-s + object + time."]
  ],
  "speak": {"task": "Describe your weekday routine from morning to night in eight sentences (I get up…, I leave home…). Then describe the routine of one family member (he/she + -s).", "role": "Interview a partner about their routine: What time do you get up? Do you have breakfast? How do you go to work? Report one fact to the class: “She gets up at five.”",
    "pron": [["works /s/, lives /z/, watches /ɪz/", "three sounds of -s"], ["doesn't /ˈdʌz.ənt/", "short and clear"], ["Do you…? /dʒə/", "in fast speech “do you” sounds like “d'you”"]]},
  "write": {"task": "Write about a typical working day of a person you know (80 words), using he or she. Include two negatives and one question.", "model": "My uncle is a truck driver. He gets up at 4 a.m. and leaves home at 4:30. He drives from Cikampek to Semarang three times a week. He doesn't drive at night because it is dangerous. He eats lunch at small restaurants on the road. He doesn't drink coffee; he drinks tea. He comes home on Saturday. Does he like his job? Yes, he does!", "check": ["-s with he/she", "doesn't + base verb", "Does + subject + base verb?"]},
  "sum": ["Present simple = routines, facts, schedules, permanent situations.", "he/she/it + verb-s/-es; have → has.", "Negative: don't/doesn't + base verb.", "Question: Do/Does + subject + base verb?"]
},
{
  "id": "a1-10", "st": "A1", "m": "a1-m3", "type": "grammar",
  "title": "Basic questions: yes/no and wh- questions",
  "sub": "Kalimat tanya dasar",
  "obj": ["Form yes/no questions with be and do/does", "Use question words: what, where, when, who, why, how, which, whose", "Ask about quantity and price: how many, how much", "Answer questions with short answers"],
  "exp": [
    {"h": "Yes/no questions", "p": "With be, move be before the subject: You are ready → Are you ready? With other verbs, use do/does: You like tea → Do you like tea? Answer with short answers: Yes, I am. No, I don't.", "id": "Dalam bahasa Indonesia, intonasi saja sudah cukup (Kamu siap?). Bahasa Inggris perlu mengubah susunan kata."},
    {"h": "Wh- questions", "p": "Put the question word first: Where do you live? What time is it? Who is your manager? Why are you late? How do you go to work? Which bus goes to Blok M? Whose bag is this?", "id": "Kata tanya di depan, lalu do/does atau be, lalu subjek."},
    {"h": "How many / how much", "p": "How many + plural countable nouns: How many people work here? How much + uncountable nouns or price: How much water do you need? How much is this shirt?", "id": "How many untuk benda terhitung, how much untuk benda tak terhitung dan harga."},
    {"h": "Subject questions", "p": "When the question word is the subject, do not use do/does: Who works here? (not Who does work here?) What happened?", "id": "Jika kata tanya menjadi subjek, tidak memakai do/does."}
  ],
  "struct": ["Be + subject + …?  →  Is it far?", "Do/Does + subject + base verb?  →  Does she drive?", "Wh- + do/does + subject + verb?  →  Where do you work?", "Wh- + be + subject?  →  Where is the station?"],
  "forms": {"pos": ["I live in Bogor.", "She is the team leader.", "The ticket costs 50,000 rupiah."], "neg": ["I don't live in Jakarta.", "She isn't the manager.", "The ticket doesn't cost much."], "q": ["Where do you live?", "Who is the team leader?", "How much does the ticket cost?"]},
  "exc": ["“How are you?” asks about feelings; “What are you like?” asks about personality; “What do you look like?” asks about appearance.", "In polite requests use could: Could you help me?", "Question tags (It's hot, isn't it?) are covered later."],
  "voc": [
    ["where", "/weər/", "question word", "di mana", "asks about place", "Where is the meeting room?", "ans: in/at/on + place"],
    ["when", "/wen/", "question word", "kapan", "asks about time", "When does the shipment arrive?", "ans: on Monday, at 5, in May"],
    ["why", "/waɪ/", "question word", "mengapa", "asks about reason", "Why is the truck late?", "ans: because …"],
    ["how", "/haʊ/", "question word", "bagaimana", "asks about manner or way", "How do you get to work?", "ans: by bus, on foot"],
    ["which", "/wɪtʃ/", "question word", "yang mana", "asks to choose from a limited group", "Which platform is it?", "vs what: open choice"],
    ["whose", "/huːz/", "question word", "milik siapa", "asks who owns something", "Whose laptop is this?", "note: not “who's” (who is)"],
    ["how much", "/haʊ ˈmʌtʃ/", "phrase", "berapa (harga/jumlah tak terhitung)", "asks about price or uncountable amount", "How much is the ticket?", "with uncountable nouns"],
    ["how many", "/haʊ ˈmen.i/", "phrase", "berapa banyak", "asks about number of countable things", "How many trucks do you have?", "+ plural noun"]
  ],
  "ex": [
    ["Are you a new student? — Yes, I am.", "Kamu mahasiswa baru? — Ya."],
    ["Do you work on Saturdays? — No, I don't.", "Kamu kerja hari Sabtu? — Tidak."],
    ["Where do you live?", "Kamu tinggal di mana?"],
    ["What time does the store open?", "Jam berapa tokonya buka?"],
    ["Who is your supervisor?", "Siapa supervisormu?"],
    ["Why are you late? — Because of the traffic.", "Kenapa kamu terlambat? — Karena macet."],
    ["How do you get to the office? — By train.", "Bagaimana kamu ke kantor? — Naik kereta."],
    ["How many people work in your team?", "Berapa orang yang bekerja di timmu?"],
    ["How much is this bag?", "Berapa harga tas ini?"],
    ["Which bus goes to the airport?", "Bus mana yang ke bandara?"],
    ["Whose phone is this?", "Ini ponsel siapa?"],
    ["Who works in the finance department?", "Siapa yang bekerja di bagian keuangan?"]
  ],
  "mis": [
    ["You are ready?", "Are you ready?", "Bahasa Inggris tulis tidak cukup dengan intonasi; balik susunan be + subjek."],
    ["Where you live?", "Where do you live?", "Perlu do/does."],
    ["How much people are there?", "How many people are there?", "people terhitung → how many."],
    ["Who does work here?", "Who works here?", "Jika “who” subjek, tanpa do/does."]
  ],
  "prac": [
    ["order", "Where do you work?", "Wh- + do + subject + verb?"],
    ["fill", "___ is this umbrella? — It's Rina's.", "Whose", "Whose asks about the owner."],
    ["fill", "How ___ trucks does the company have?", "many", "trucks = countable."],
    ["mc", "___ is the ticket? — 75,000 rupiah.", ["How many", "How much", "What many", "How cost"], 1, "Price → how much."],
    ["fix", "Where she works?", "Where does she work?", "Add does; no -s on the verb."],
    ["match", [["Where", "in Surabaya"], ["When", "next Monday"], ["Why", "because it's raining"], ["How", "by motorbike"], ["Who", "my manager"]], "Question words and typical answers."]
  ],
  "quiz": [
    ["mc", "Choose the correct question.", ["What time the meeting starts?", "What time does the meeting start?", "What time does the meeting starts?", "What time do the meeting start?"], 1, "Wh- + does + subject + base verb."],
    ["fill", "___ do you study English? — Because I need it for my job.", "Why", "Reason → why."],
    ["fix", "You like spicy food?", "Do you like spicy food?", "Add do."],
    ["mc", "___ bag is yours, the black one or the brown one?", ["What", "Which", "Who", "Whose"], 1, "Choice from a limited group → which."],
    ["fill", "How ___ water do you drink every day?", "much", "water = uncountable."]
  ],
  "test": [
    ["order", "How many employees does your company have?", "How many + plural noun + does + subject + have?"],
    ["fix", "Why you are sad?", "Why are you sad?", "Wh- + be + subject."],
    ["mc", "___ teaches you English? — Mr Andi.", ["Who", "Whose", "Which", "What"], 0, "Subject question with who: no do/does."],
    ["fill", "___ do you go to work? — By bus.", "How", "Way/manner → how."],
    ["mc", "Is the canteen open now? — No, ___.", ["it isn't", "it doesn't", "isn't it", "not"], 0, "Short answer with be."]
  ],
  "speak": {"task": "Prepare ten questions (at least six different question words) to interview a new classmate or colleague, then ask and answer them aloud.", "role": "Partner A is a customer at a ticket counter; Partner B is the staff. A asks: Which train…? What time…? How much…? Where…?",
    "pron": [["Are you ready? ↗", "yes/no questions usually rise"], ["Where do you live? ↘", "wh- questions usually fall"], ["whose /huːz/", "same sound as who's"]]},
  "write": {"task": "Write a short questionnaire (8 questions) for a customer satisfaction survey of a delivery company, using different question forms.", "model": "1. How often do you use our service? 2. Which city do you send packages to? 3. How long does delivery usually take? 4. Are our drivers polite? 5. Do you track your packages online? 6. How much do you pay per package? 7. What do you like about our service? 8. Why do you choose us?", "check": ["Question word first", "do/does or be before the subject", "Question mark at the end"]},
  "sum": ["Yes/no: Be + subject …? / Do/Does + subject + verb?", "Wh- question: question word + do/does or be + subject + …?", "How many + countable plural; how much + uncountable/price.", "Who/What as subject: no do/does (Who works here?)."]
}
]);
