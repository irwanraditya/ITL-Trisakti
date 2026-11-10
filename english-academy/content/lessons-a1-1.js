/* English Learning Academy — A1 Beginner, lessons 1–5. JSON-style data; see english-academy/README.md for the schema. */
ELA.add('lessons', [
{
  "id": "a1-01", "st": "A1", "m": "a1-m1", "type": "speaking",
  "title": "The English alphabet and pronunciation",
  "sub": "Alfabet bahasa Inggris dan cara mengucapkannya",
  "obj": ["Say the 26 letters of the English alphabet correctly", "Spell your name, email and city aloud", "Recognise letters that sound different from Indonesian", "Understand the difference between letters and sounds"],
  "exp": [
    {"h": "Letters have names", "p": "English has 26 letters: 5 vowel letters (A, E, I, O, U) and 21 consonant letters. Each letter has a name. When you spell a word, you say the names of the letters: “cat” is C-A-T (see-ay-tee).", "id": "Huruf bahasa Inggris dibaca berbeda dari bahasa Indonesia. A dibaca /eɪ/ (ei), E dibaca /iː/ (ii), I dibaca /aɪ/ (ai). Ini penting saat mengeja nama atau alamat email."},
    {"h": "Letter groups that rhyme", "p": "It is easier to learn the letters in sound groups. The /eɪ/ group: A, H, J, K. The /iː/ group: B, C, D, E, G, P, T, V (and Z in American English). The /e/ group: F, L, M, N, S, X (and Z in British English, “zed”). The /aɪ/ group: I, Y. The /uː/ group: Q, U, W. Then O /əʊ/ and R /ɑː/.", "id": "Kelompokkan huruf berdasarkan bunyi akhirnya. Misalnya A, H, J, K semua berbunyi seperti “ei”."},
    {"h": "Letters are not sounds", "p": "English spelling does not always match pronunciation. The letter A sounds different in cat /æ/, name /eɪ/ and father /ɑː/. So learn new words with their pronunciation, and use the listen button.", "id": "Satu huruf bisa punya beberapa bunyi. Selalu dengarkan pengucapan kata baru, jangan menebak dari tulisannya."},
    {"h": "Spelling aloud", "p": "For double letters, say “double”: “Anna” is A, double N, A. For email addresses, say “at” for @ and “dot” for the full stop: irwan@mail.com is “irwan at mail dot com”. Say “underscore” for _ and “dash” or “hyphen” for -.", "id": "Huruf dobel diucapkan “double”, misalnya “double L”. Tanda @ dibaca “at”, titik dibaca “dot”."}
  ],
  "voc": [
    ["letter", "/ˈlet.ər/", "noun", "huruf", "a written sign that represents a sound", "There are 26 letters in the English alphabet.", "coll: capital letter, small letter"],
    ["vowel", "/ˈvaʊ.əl/", "noun", "huruf vokal", "the letters A, E, I, O and U", "The word “apple” starts with a vowel.", "ant: consonant"],
    ["consonant", "/ˈkɒn.sə.nənt/", "noun", "huruf konsonan", "a letter that is not a vowel, such as B, C or D", "“B” is a consonant.", "ant: vowel"],
    ["spell", "/spel/", "verb", "mengeja", "to say or write the letters of a word in order", "Can you spell your name, please?", "coll: spell a word, spell it out"],
    ["capital letter", "/ˈkæp.ɪ.təl ˈlet.ər/", "noun", "huruf kapital", "a big letter, such as A, B, C", "Names start with a capital letter.", "syn: upper case; ant: small letter, lower case"],
    ["double", "/ˈdʌb.əl/", "adjective", "dobel, ganda", "two of the same", "“Coffee” has a double F and a double E.", "use: double L, double S"],
    ["pronounce", "/prəˈnaʊns/", "verb", "mengucapkan", "to make the sound of a word", "How do you pronounce this word?", "noun: pronunciation"],
    ["at", "/æt/", "symbol", "tanda @", "the word we say for the @ symbol in an email address", "My email is ana at gmail dot com.", "also: dot (.), underscore (_), dash (-)"]
  ],
  "ex": [
    ["A, B, C, D, E, F, G.", "A, B, C, D, E, F, G (dibaca ei, bi, si, di, i, ef, ji)."],
    ["My name is Rina. R-I-N-A.", "Nama saya Rina. R-I-N-A."],
    ["How do you spell that?", "Bagaimana mengejanya?"],
    ["It's B for “book”, not P for “pen”.", "Huruf B seperti “book”, bukan P seperti “pen”."],
    ["Anna has a double N.", "Anna memakai dua huruf N."],
    ["My email is budi at mail dot com.", "Email saya budi@mail.com."],
    ["Can you spell your surname, please?", "Bisa eja nama belakang Anda?"],
    ["The letters G and J sound different: G is /dʒiː/, J is /dʒeɪ/.", "Huruf G dan J bunyinya berbeda."],
    ["Write your name in capital letters.", "Tulis nama Anda dengan huruf kapital."],
    ["Sorry, is that E or I?", "Maaf, itu huruf E atau I?"]
  ],
  "mis": [
    ["E is pronounced like Indonesian “e” /e/.", "E is pronounced /iː/ (like “ee”).", "Huruf E dibaca “ii”, bukan “e”. Huruf I dibaca “ai”."],
    ["G and J sound the same.", "G is /dʒiː/ and J is /dʒeɪ/.", "G berima dengan “bee”, J berima dengan “day”. Banyak pelajar tertukar."],
    ["Y is pronounced “ye”.", "Y is pronounced /waɪ/ (like “why”).", "Y dibaca “wai”. W dibaca “dabel-yu”."],
    ["My email is budi titik com.", "My email is budi dot com.", "Gunakan “dot” untuk titik dan “at” untuk @."]
  ],
  "dlg": {"title": "At the reception desk", "lines": [
    ["Receptionist", "Good morning. What's your name, please?", "Selamat pagi. Siapa nama Anda?"],
    ["Guest", "Good morning. My name is Dewi Lestari.", "Selamat pagi. Nama saya Dewi Lestari."],
    ["Receptionist", "How do you spell your surname?", "Bagaimana mengeja nama belakang Anda?"],
    ["Guest", "L-E-S-T-A-R-I.", "L-E-S-T-A-R-I."],
    ["Receptionist", "Thank you. And your email address?", "Terima kasih. Alamat email Anda?"],
    ["Guest", "It's dewi dot lestari at mail dot com.", "dewi.lestari@mail.com."],
    ["Receptionist", "Is that one L or double L?", "Satu L atau dua L?"],
    ["Guest", "One L.", "Satu L."]
  ]},
  "expr": [["How do you spell that?", "ask someone to spell a word"], ["Can you repeat that, please?", "ask someone to say it again"], ["Is that B or P?", "check a letter"], ["It's double S.", "explain two same letters"], ["at / dot / underscore", "@ / . / _ in emails"], ["Capital D", "say that a letter is big"]],
  "prac": [
    ["mc", "Which letter is pronounced /iː/ (like “ee”)?", ["E", "I", "A", "Y"], 0, "E is /iː/. I is /aɪ/, A is /eɪ/ and Y is /waɪ/."],
    ["mc", "Which letter rhymes with “day”?", ["G", "J", "E", "I"], 1, "J /dʒeɪ/ rhymes with “day”. G /dʒiː/ rhymes with “see”."],
    ["mc", "How do you say “@” in an email address?", ["at", "dot", "and", "a"], 0, "We say “at” for @, and “dot” for the full stop."],
    ["fill", "“Coffee” has a ___ F.", "double", "Two of the same letter = double."],
    ["mc", "Which group has the same final sound?", ["A, H, J, K", "A, E, I, O", "B, F, L, R", "Q, R, S, T"], 0, "A, H, J and K all end in the /eɪ/ sound."],
    ["match", [["I", "/aɪ/ like “my”"], ["E", "/iː/ like “see”"], ["A", "/eɪ/ like “day”"], ["Y", "/waɪ/ like “why”"]], "These four vowels and Y are the most confusing letters for Indonesian speakers."]
  ],
  "quiz": [
    ["mc", "How many letters are there in the English alphabet?", ["24", "26", "28", "21"], 1, "There are 26 letters: 5 vowel letters and 21 consonants."],
    ["mc", "Which letter is a vowel?", ["U", "W", "Y", "R"], 0, "The vowel letters are A, E, I, O and U."],
    ["mc", "“ana_putri@mail.com” — how do you say “_”?", ["dash", "underscore", "dot", "line"], 1, "_ is “underscore”. - is “dash” or “hyphen”."],
    ["fill", "Can you ___ your name, please? (say the letters)", "spell", "To spell = say the letters in order."],
    ["mc", "Which letter is pronounced /aɪ/ (like “eye”)?", ["E", "I", "A", "O"], 1, "I is /aɪ/, like the word “eye”."]
  ],
  "test": [
    ["mc", "Which word do you use for “.” in an email address?", ["point", "dot", "stop", "at"], 1, "In emails and websites, “.” is “dot”."],
    ["mc", "Which letter rhymes with “see”?", ["J", "G", "H", "K"], 1, "G /dʒiː/ rhymes with “see”."],
    ["fill", "Anna is A, ___ N, A.", "double", "Use “double” for two of the same letter."],
    ["mc", "What is the correct question?", ["How do you spell it?", "How you spell it?", "How spell it?", "How do spell you it?"], 0, "Question form: How + do + you + verb?"],
    ["order", "Can you spell your name, please?", "A polite request: Can you + verb + ..., please?"]
  ],
  "speak": {"task": "Introduce yourself and spell your full name, your city and your email address aloud. Record it and check every letter.", "role": "Partner A is a hotel receptionist; Partner B is a guest. A asks for the name, surname, email and phone number. B spells everything. Then swap.",
    "pron": [["A, H, J, K", "the /eɪ/ group"], ["B, C, D, E, G, P, T, V", "the /iː/ group"], ["F, L, M, N, S, X", "the /e/ group"], ["I, Y", "the /aɪ/ group"], ["Q, U, W", "the /uː/ group"], ["G or J? E or I?", "contrast the confusing pairs"]]},
  "write": {"task": "Write a short registration form for yourself: full name (in capital letters), city, email address, and one sentence: “My name is … . It is spelled …”.", "model": "FULL NAME: DEWI LESTARI\nCITY: BANDUNG\nEMAIL: dewi.lestari@mail.com\nMy name is Dewi Lestari. It is spelled D-E-W-I, L-E-S-T-A-R-I.", "check": ["Capital letters for the name", "Correct email symbols", "Full stop at the end of each sentence"]},
  "sum": ["English has 26 letters; each letter has a name.", "Learn letters in rhyming groups: A-H-J-K, B-C-D-E-G-P-T-V, F-L-M-N-S-X, I-Y, Q-U-W.", "Say “double” for two same letters, “at” for @, “dot” for a full stop.", "Spelling and sound are different in English: always listen to new words."]
},
{
  "id": "a1-02", "st": "A1", "m": "a1-m1", "type": "speaking",
  "title": "Greetings and introductions",
  "sub": "Menyapa dan memperkenalkan diri",
  "obj": ["Greet people at different times of the day", "Introduce yourself and another person", "Ask and answer “How are you?” naturally", "Say goodbye politely"],
  "exp": [
    {"h": "Greetings by time", "p": "Good morning (until 12:00), good afternoon (12:00 to about 18:00), good evening (after about 18:00, when you meet someone). “Good night” is only for saying goodbye at night or before sleeping. “Hi” and “Hello” work at any time; “Hi” is informal.", "id": "“Good night” bukan salam saat bertemu, tetapi saat berpisah malam hari atau sebelum tidur. Saat bertemu malam hari, gunakan “Good evening”."},
    {"h": "Introducing yourself", "p": "Use “My name is …” or “I'm …”. Add one fact: where you are from, your job, or where you work. In formal situations, shake hands and say “Nice to meet you.” The answer is “Nice to meet you, too.”", "id": "Jawaban untuk “Nice to meet you” adalah “Nice to meet you, too.”"},
    {"h": "Introducing another person", "p": "Say “This is …” (not “He is …”) when you introduce someone who is with you: “Rina, this is Budi. Budi is my colleague.”", "id": "Untuk memperkenalkan orang lain, gunakan “This is …”."},
    {"h": "How are you?", "p": "“How are you?” is a friendly greeting, not a real health question. Answer briefly and ask back: “I'm fine, thanks. And you?” or “Good, thanks. How about you?” Other natural answers: “Not bad”, “Pretty good”.", "id": "“How are you?” adalah basa-basi. Jawab singkat lalu tanyakan balik."}
  ],
  "voc": [
    ["greet", "/ɡriːt/", "verb", "menyapa", "to say hello to someone", "She greets her colleagues every morning.", "noun: greeting"],
    ["introduce", "/ˌɪn.trəˈdjuːs/", "verb", "memperkenalkan", "to tell someone another person's name for the first time", "Let me introduce my manager, Mr Hadi.", "coll: introduce yourself; noun: introduction"],
    ["colleague", "/ˈkɒl.iːɡ/", "noun", "rekan kerja", "a person you work with", "This is Andi, my colleague from the finance team.", "syn: co-worker; reg: neutral/formal"],
    ["nice to meet you", "/naɪs tə ˈmiːt juː/", "phrase", "senang bertemu Anda", "a polite phrase when you meet someone for the first time", "Hi, I'm Sari. — Nice to meet you, Sari.", "answer: Nice to meet you, too."],
    ["surname", "/ˈsɜː.neɪm/", "noun", "nama belakang", "your family name", "My first name is Budi and my surname is Santoso.", "syn: last name, family name"],
    ["from", "/frɒm/", "preposition", "dari", "used to say where someone was born or lives", "I'm from Surabaya.", "pattern: I'm from + city/country"],
    ["goodbye", "/ɡʊdˈbaɪ/", "exclamation", "selamat tinggal", "what you say when you leave", "Goodbye! See you tomorrow.", "informal: bye, see you, take care"],
    ["fine", "/faɪn/", "adjective", "baik", "well, healthy, OK", "I'm fine, thanks. And you?", "syn: good, well"]
  ],
  "ex": [
    ["Good morning! My name is Arif.", "Selamat pagi! Nama saya Arif."],
    ["Hi, I'm Lina. I'm from Medan.", "Hai, saya Lina. Saya dari Medan."],
    ["Nice to meet you. — Nice to meet you, too.", "Senang bertemu Anda. — Senang bertemu Anda juga."],
    ["This is Tono. He's my colleague.", "Ini Tono. Dia rekan kerja saya."],
    ["How are you today? — I'm fine, thanks. And you?", "Apa kabar hari ini? — Baik, terima kasih. Anda?"],
    ["I work at a logistics company.", "Saya bekerja di perusahaan logistik."],
    ["Good afternoon, everyone.", "Selamat siang/sore, semuanya."],
    ["Good evening, Mr Lim. Welcome.", "Selamat malam, Pak Lim. Selamat datang."],
    ["See you tomorrow. Have a nice evening!", "Sampai besok. Selamat menikmati malam!"],
    ["Good night. Sleep well.", "Selamat malam (tidur). Tidur yang nyenyak."]
  ],
  "mis": [
    ["Good night, Mr Lim! Nice to meet you. (when arriving)", "Good evening, Mr Lim! Nice to meet you.", "“Good night” hanya untuk berpamitan/tidur."],
    ["Introduce, my name Budi.", "Hello, my name is Budi.", "“Perkenalkan” tidak diterjemahkan menjadi “Introduce”. Langsung katakan “Hello, my name is …” atau “I'm …”."],
    ["He is Rina. (introducing someone next to you)", "This is Rina.", "Gunakan “This is …” untuk memperkenalkan orang lain."],
    ["Nice to meet you. — Nice to meet you.", "Nice to meet you. — Nice to meet you, too.", "Jawaban perlu “too”."]
  ],
  "dlg": {"title": "First day at work", "lines": [
    ["Mira", "Good morning! Are you the new analyst?", "Selamat pagi! Anda analis baru?"],
    ["Joko", "Yes, I am. Good morning. My name is Joko.", "Ya. Selamat pagi. Nama saya Joko."],
    ["Mira", "Nice to meet you, Joko. I'm Mira, from the sales team.", "Senang bertemu, Joko. Saya Mira dari tim penjualan."],
    ["Joko", "Nice to meet you, too. How are you?", "Senang bertemu juga. Apa kabar?"],
    ["Mira", "I'm fine, thanks. And you?", "Baik, terima kasih. Anda?"],
    ["Joko", "Good, thanks. A little nervous!", "Baik, terima kasih. Agak gugup!"],
    ["Mira", "Don't worry. Come and meet the team. Everyone, this is Joko.", "Tenang saja. Mari bertemu tim. Semuanya, ini Joko."],
    ["Team", "Hi, Joko! Welcome!", "Hai, Joko! Selamat datang!"]
  ]},
  "expr": [["Hi / Hello", "informal greeting, any time"], ["Good morning / afternoon / evening", "formal greeting"], ["My name is … / I'm …", "introduce yourself"], ["This is …", "introduce another person"], ["Nice to meet you.", "first meeting"], ["How are you? — Fine, thanks. And you?", "friendly small talk"], ["See you later. / Bye!", "informal goodbye"], ["Have a nice day.", "polite goodbye"]],
  "prac": [
    ["mc", "It's 19:30. You meet a client. What do you say?", ["Good night.", "Good evening.", "Good afternoon.", "Good morning."], 1, "“Good evening” is a greeting. “Good night” is a goodbye."],
    ["mc", "“Nice to meet you.” — What is the best answer?", ["Nice to meet you, too.", "Yes, I meet you.", "Thank you meet you.", "Me too meet."], 0, "Add “too”: Nice to meet you, too."],
    ["fill", "Rina, ___ is Budi. He's my colleague.", "this", "Introduce another person with “This is …”."],
    ["fill", "I'm ___ Yogyakarta. (asal kota)", "from", "I'm from + place."],
    ["order", "Nice to meet you, too.", "Reply to “Nice to meet you.”"],
    ["match", [["Good morning", "before 12:00"], ["Good afternoon", "12:00 to about 18:00"], ["Good evening", "when you meet someone at night"], ["Good night", "when you leave at night"]], "Time-based greetings."]
  ],
  "quiz": [
    ["mc", "How do you introduce a colleague standing next to you?", ["He is Dimas.", "This is Dimas.", "Introduce Dimas.", "That Dimas."], 1, "Use “This is …”."],
    ["mc", "Which answer to “How are you?” is natural?", ["I'm fine, thanks. And you?", "I'm 25 years.", "Yes, I am.", "Thank you very much, goodbye."], 0, "Answer briefly and ask back."],
    ["fill", "My ___ is Santoso. (nama keluarga)", "surname|last name|family name", "Surname = family name."],
    ["mc", "Which is informal?", ["Good afternoon, sir.", "Hi!", "Good evening, madam.", "How do you do?"], 1, "“Hi” is informal."],
    ["fix", "Introduce, my name is Lusi.", "My name is Lusi.|Hello, my name is Lusi.|Hi, my name is Lusi.|I'm Lusi.", "Do not translate “perkenalkan” as “introduce”."]
  ],
  "test": [
    ["mc", "You are leaving the office at 21:00. You say:", ["Good evening!", "Good night!", "Good morning!", "Hello!"], 1, "“Good night” is used when leaving at night."],
    ["fill", "Nice to meet you, ___.", "too", "Nice to meet you, too."],
    ["mc", "Which sentence introduces you?", ["I'm Rudi, from Jakarta.", "He's Rudi from Jakarta.", "This Rudi Jakarta.", "Me Rudi."], 0, "I'm + name, from + city."],
    ["order", "This is my colleague, Sinta.", "This is + person."],
    ["mc", "“How are you?” is mainly:", ["a friendly greeting", "a medical question", "a question about age", "a question about your job"], 0, "It is small talk; answer briefly."]
  ],
  "speak": {"task": "Introduce yourself in four sentences: greeting, name, city, job or study. Then introduce a friend or family member using “This is …”.", "role": "You meet a new colleague at the coffee machine. Greet them, introduce yourself, ask how they are, and say goodbye politely.",
    "pron": [["Good morning", "stress: good MORning"], ["Nice to meet you", "link the words: nice-to-MEET-you"], ["colleague", "KOL-eeg, two syllables"], ["How are you?", "rising-falling friendly tone"]]},
  "write": {"task": "Write a short self-introduction (40–60 words) for a new online class: greeting, name, city, job or study, and one hobby.", "model": "Hello everyone! My name is Fajar and I'm from Makassar. I'm a student at a logistics institute. I like football and music. Nice to meet you all, and I hope we can learn together.", "check": ["A greeting at the start", "My name is / I'm", "I'm from + city", "A friendly ending"]},
  "sum": ["Good morning/afternoon/evening are greetings; good night is a goodbye.", "Introduce yourself with “My name is …” or “I'm …”; introduce others with “This is …”.", "Answer “Nice to meet you” with “Nice to meet you, too.”", "“How are you?” needs a short answer and a question back."]
},
{
  "id": "a1-03", "st": "A1", "m": "a1-m1", "type": "grammar",
  "title": "Subject pronouns: I, you, he, she, it, we, they",
  "sub": "Kata ganti subjek",
  "obj": ["Use the seven subject pronouns correctly", "Choose he, she or it for people and things", "Replace a noun with a pronoun to avoid repetition", "Avoid using “he” for women (a common mistake)"],
  "exp": [
    {"h": "What is a subject pronoun?", "p": "A subject pronoun replaces the person or thing that does the action. Instead of repeating “Rina”, we say “she”: Rina is a nurse. She works in a hospital.", "id": "Kata ganti subjek menggantikan pelaku kalimat agar kita tidak mengulang nama."},
    {"h": "The seven pronouns", "p": "Singular: I (saya), you (kamu/Anda), he (dia laki-laki), she (dia perempuan), it (benda/hewan/ide). Plural: we (kami/kita), you (kalian), they (mereka, also for things).", "id": "Bahasa Indonesia hanya punya “dia”, tetapi bahasa Inggris membedakan: he (laki-laki), she (perempuan), it (benda/hewan)."},
    {"h": "Always use a subject", "p": "English sentences need a subject. Indonesian can say “Sedang hujan” or “Sudah makan?”, but English must say “It is raining” and “Have you eaten?”. Use “it” for weather, time and distance: It's hot. It's 7 o'clock. It's 10 km.", "id": "Kalimat bahasa Inggris hampir selalu butuh subjek. Untuk cuaca, waktu, dan jarak gunakan “it”."},
    {"h": "Capital I", "p": "The pronoun I is always a capital letter, even in the middle of a sentence: “Today I am busy.”", "id": "“I” selalu ditulis dengan huruf kapital."}
  ],
  "struct": ["Subject pronoun + verb + …   →   She works here.", "Noun → pronoun   →   Budi and I → we;  the boxes → they"],
  "forms": {"pos": ["I am a student.", "She works in Jakarta.", "They are my friends."], "neg": ["I am not a teacher.", "He doesn't work on Sunday.", "It isn't expensive."], "q": ["Are you ready?", "Does she speak English?", "Are they at home?"]},
  "exc": ["“You” is both singular and plural: “You are my friend” / “You are my friends.”", "Use “it” for animals in general; pet owners often use he/she for their own pets.", "“They” can also refer to one person when you don't know if the person is male or female: “Someone called. They left a message.”"],
  "voc": [
    ["pronoun", "/ˈprəʊ.naʊn/", "noun", "kata ganti", "a word used instead of a noun", "“She” is a pronoun.", "types: subject, object, possessive"],
    ["subject", "/ˈsʌb.dʒekt/", "noun", "subjek", "the person or thing that does the action of the verb", "In “Budi drives”, Budi is the subject.", "grammar term"],
    ["nurse", "/nɜːs/", "noun", "perawat", "a person who cares for sick people in a hospital", "My sister is a nurse.", "coll: hospital nurse"],
    ["teacher", "/ˈtiː.tʃər/", "noun", "guru", "a person who teaches", "He is an English teacher.", "coll: maths teacher, class teacher"],
    ["friend", "/frend/", "noun", "teman", "a person you know well and like", "They are my best friends.", "coll: best friend, close friend"],
    ["busy", "/ˈbɪz.i/", "adjective", "sibuk", "having a lot to do", "We are busy today.", "ant: free"],
    ["rain", "/reɪn/", "verb/noun", "hujan", "water that falls from clouds", "It is raining.", "coll: heavy rain"]
  ],
  "ex": [
    ["I am a logistics student.", "Saya mahasiswa logistik."],
    ["You are very kind.", "Kamu sangat baik."],
    ["Pak Budi is my manager. He is from Bandung.", "Pak Budi manajer saya. Dia dari Bandung."],
    ["Ibu Sari is a doctor. She works at a clinic.", "Ibu Sari seorang dokter. Dia bekerja di klinik."],
    ["This laptop is new. It is fast.", "Laptop ini baru. Laptop ini cepat."],
    ["Rudi and I are classmates. We study together.", "Rudi dan saya teman sekelas. Kami belajar bersama."],
    ["Andi and Tika are married. They live in Bogor.", "Andi dan Tika sudah menikah. Mereka tinggal di Bogor."],
    ["The trucks are in the depot. They are ready.", "Truk-truk itu di depo. Truk-truk itu siap."],
    ["It's hot today.", "Hari ini panas."],
    ["It's eight o'clock.", "Sekarang pukul delapan."],
    ["Are you and Lina from the same city? — Yes, we are.", "Apakah kamu dan Lina dari kota yang sama? — Ya."],
    ["Today I am very busy.", "Hari ini saya sangat sibuk."]
  ],
  "mis": [
    ["My mother is a teacher. He teaches maths.", "My mother is a teacher. She teaches maths.", "Gunakan “she” untuk perempuan. Kesalahan he/she sangat umum karena bahasa Indonesia hanya punya “dia”."],
    ["Is raining.", "It is raining.", "Kalimat bahasa Inggris perlu subjek. Untuk cuaca gunakan “it”."],
    ["Me and Rina are friends.", "Rina and I are friends.", "Sebagai subjek gunakan “I”, dan sebut orang lain lebih dulu."],
    ["i am happy.", "I am happy.", "“I” selalu huruf kapital."]
  ],
  "prac": [
    ["fill", "Maria is my sister. ___ is a nurse.", "She", "Maria is female → she."],
    ["fill", "My phone is old. ___ is slow.", "It", "A thing → it."],
    ["fill", "Dedi and I are colleagues. ___ work in the same office.", "We", "Dedi and I = we."],
    ["mc", "The boxes are heavy. ___ are in the warehouse.", ["It", "They", "We", "He"], 1, "Plural things → they."],
    ["fix", "Is very hot today.", "It is very hot today.|It's very hot today.", "Weather needs the subject “it”."],
    ["match", [["I", "saya"], ["we", "kami/kita"], ["they", "mereka"], ["she", "dia (perempuan)"], ["he", "dia (laki-laki)"]], "Subject pronouns and their meanings."]
  ],
  "quiz": [
    ["mc", "Mr Tan is my teacher. ___ is from Singapore.", ["She", "He", "It", "They"], 1, "Mr = man → he."],
    ["mc", "Which sentence is correct?", ["Rina and me are tired.", "Rina and I are tired.", "Me and Rina is tired.", "I and Rina are tired."], 1, "Subject: Rina and I."],
    ["fill", "___ is seven o'clock. (time)", "It", "Use it for time."],
    ["mc", "“You” can be:", ["singular only", "plural only", "singular or plural", "only for men"], 2, "You = kamu/Anda/kalian."],
    ["fix", "My aunt lives in Solo. He has a shop.", "My aunt lives in Solo. She has a shop.", "Aunt = female → she."]
  ],
  "test": [
    ["fill", "The cat is hungry. ___ wants food.", "It", "An animal in general → it."],
    ["mc", "Joko and Lisa are students. ___ study at ITL.", ["We", "They", "He", "It"], 1, "Two other people → they."],
    ["fix", "Is cold in the office.", "It is cold in the office.|It's cold in the office.", "Add “it” for weather/temperature."],
    ["mc", "Choose the correct pronoun for “my brother and I”.", ["they", "we", "you", "he"], 1, "My brother and I = we."],
    ["order", "She works in a hospital.", "Subject + verb + place."]
  ],
  "speak": {"task": "Show three photos of family or friends (or imagine them) and describe each person in two sentences using he, she or they: “This is my aunt. She is a teacher.”", "role": "Partner A points to people in a photo and asks “Who is this?”. Partner B answers with a pronoun and one fact.",
    "pron": [["he / she", "he /hiː/, she /ʃiː/: make the “sh” sound clearly"], ["they", "/ðeɪ/: tongue between the teeth"], ["it is → it's", "short form in speaking"]]},
  "write": {"task": "Write six sentences about people and things around you. Use each pronoun at least once (I, you, he, she, it, we, they).", "model": "I am a student. My father is a driver. He works in Jakarta. My mother is a cook. She makes great food. My cousins live in Bali. They are surfers. My laptop is old, but it works. My classmates and I study together. We like English.", "check": ["he for men, she for women", "it for one thing, they for many", "Capital I"]},
  "sum": ["Subject pronouns: I, you, he, she, it, we, they.", "He = male, she = female, it = thing or animal, they = plural (people or things).", "English sentences need a subject: It's raining. It's 8 o'clock.", "Say “Rina and I”, not “Me and Rina”, as a subject."]
},
{
  "id": "a1-04", "st": "A1", "m": "a1-m1", "type": "grammar",
  "title": "The verb to be: am, is, are",
  "sub": "Kata kerja “to be” (am, is, are)",
  "obj": ["Use am, is and are with the correct subject", "Make negative sentences with not", "Ask and answer yes/no questions with be", "Use short forms: I'm, she's, they aren't"],
  "exp": [
    {"h": "Why “be” is important", "p": "Indonesian often has no verb in sentences like “Saya guru” or “Dia di kantor”. English needs a verb: “I am a teacher.” “She is in the office.” The verb is “be”. We use it for names, jobs, age, feelings, nationality, places and descriptions.", "id": "Bahasa Indonesia sering tidak memakai kata kerja (Saya guru). Bahasa Inggris wajib memakai “be”: I am a teacher."},
    {"h": "Which form?", "p": "I → am. He, she, it (and one person or thing) → is. You, we, they (and plural nouns) → are.", "id": "I + am; he/she/it + is; you/we/they + are."},
    {"h": "Negatives and questions", "p": "Negative: put “not” after be: I am not tired. She is not here. Question: put be before the subject: Is she here? Are you ready? Short answers: Yes, I am. / No, she isn't.", "id": "Kalimat negatif: tambahkan “not”. Kalimat tanya: pindahkan am/is/are ke depan."},
    {"h": "Short forms (contractions)", "p": "In speaking and informal writing we use short forms: I'm, you're, he's, she's, it's, we're, they're; isn't, aren't. Note: there is no short form “amn't”; use “I'm not”.", "id": "Bentuk singkat umum dalam percakapan. Untuk “I am not” gunakan “I'm not”."}
  ],
  "struct": ["Subject + am/is/are + noun/adjective/place", "Subject + am/is/are + not + …", "Am/Is/Are + subject + …?"],
  "forms": {"pos": ["I am (I'm) a driver.", "She is (She's) 24 years old.", "We are (We're) at the station."], "neg": ["I am not (I'm not) late.", "He is not (He isn't) at home.", "They are not (They aren't) ready."], "q": ["Am I late?", "Is it expensive?", "Are you from Bali?"]},
  "exc": ["Age uses be, not have: “I am 20 (years old)”, not “I have 20 years.”", "Short answers do not use contractions in the positive: “Yes, I am.” (not “Yes, I'm.”).", "“There is/there are” (ada) is a special use of be: There is a bank near here."],
  "voc": [
    ["late", "/leɪt/", "adjective", "terlambat", "after the expected time", "Sorry, I'm late.", "ant: early, on time"],
    ["ready", "/ˈred.i/", "adjective", "siap", "prepared to do something", "Are you ready?", "coll: get ready, ready for"],
    ["tired", "/taɪəd/", "adjective", "lelah", "feeling that you need to rest", "We are tired after work.", "syn: exhausted (very tired)"],
    ["hungry", "/ˈhʌŋ.ɡri/", "adjective", "lapar", "wanting food", "Are you hungry? Let's eat.", "ant: full"],
    ["married", "/ˈmær.id/", "adjective", "menikah", "having a husband or wife", "My brother is married.", "ant: single"],
    ["office", "/ˈɒf.ɪs/", "noun", "kantor", "a place where people work at desks", "She is in the office now.", "coll: head office, branch office"],
    ["expensive", "/ɪkˈspen.sɪv/", "adjective", "mahal", "costing a lot of money", "This phone is expensive.", "ant: cheap"],
    ["years old", "/jɪəz əʊld/", "phrase", "berumur … tahun", "used to say someone's age", "My son is six years old.", "pattern: be + number + years old"]
  ],
  "ex": [
    ["I'm a warehouse supervisor.", "Saya supervisor gudang."],
    ["She's 28 years old.", "Dia berumur 28 tahun."],
    ["It's cheap but it's good.", "Murah tetapi bagus."],
    ["We're from Indonesia.", "Kami dari Indonesia."],
    ["They're in the meeting room.", "Mereka di ruang rapat."],
    ["My parents are at home.", "Orang tua saya di rumah."],
    ["I'm not hungry, thanks.", "Saya tidak lapar, terima kasih."],
    ["The report isn't ready yet.", "Laporannya belum siap."],
    ["Are you married? — No, I'm not. I'm single.", "Apakah Anda sudah menikah? — Belum, saya masih lajang."],
    ["Is the bank open today? — Yes, it is.", "Apakah bank buka hari ini? — Ya."],
    ["Where are you now? — I'm at the station.", "Kamu di mana sekarang? — Saya di stasiun."],
    ["The drivers aren't late. They're on time.", "Para sopir tidak terlambat. Mereka tepat waktu."]
  ],
  "mis": [
    ["I teacher.", "I am a teacher.", "Kalimat bahasa Inggris butuh kata kerja “be”."],
    ["I have 25 years.", "I am 25 years old.", "Umur memakai “be”, bukan “have”."],
    ["She are my friend.", "She is my friend.", "She + is."],
    ["You is late.", "You are late.", "You + are (tunggal maupun jamak)."],
    ["Yes, I'm.", "Yes, I am.", "Jawaban singkat positif tidak memakai bentuk singkat."]
  ],
  "prac": [
    ["fill", "I ___ a student at ITL Trisakti.", "am|'m", "I + am."],
    ["fill", "The coffee ___ hot.", "is|'s", "One thing → is."],
    ["fill", "My friends ___ in the canteen.", "are|'re", "Plural → are."],
    ["mc", "___ you ready?", ["Is", "Are", "Am", "Be"], 1, "Questions: Are + you."],
    ["fix", "He not is at home.", "He is not at home.|He isn't at home.|He's not at home.", "Negative: is + not."],
    ["order", "Are you from Surabaya?", "Question: Are + subject + …?"],
    ["mc", "Is your office near here? — Yes, ___.", ["it is", "it's", "is it", "it are"], 0, "Short answer: Yes, it is."]
  ],
  "quiz": [
    ["fill", "They ___ my colleagues.", "are|'re", "They + are."],
    ["mc", "How old are you?", ["I have 30 years.", "I am 30 years old.", "I 30 years old.", "I'm have 30."], 1, "Age with be."],
    ["fill", "I ___ not tired. (be)", "am", "I am not = I'm not."],
    ["mc", "Choose the correct question.", ["Is she a manager?", "She is a manager?", "Are she a manager?", "Is a manager she?"], 0, "Be + subject + …?"],
    ["fix", "We is very happy today.", "We are very happy today.|We're very happy today.", "We + are."]
  ],
  "test": [
    ["fill", "My sister ___ a nurse.", "is|'s", "One person → is."],
    ["mc", "Negative of “It is expensive.”", ["It not expensive.", "It isn't expensive.", "It doesn't expensive.", "It aren't expensive."], 1, "is + not = isn't."],
    ["fix", "I hungry.", "I am hungry.|I'm hungry.", "Add the verb be."],
    ["mc", "Are they at work? — No, ___.", ["they aren't", "they isn't", "they not", "aren't they"], 0, "Short answer: No, they aren't."],
    ["order", "The report is not ready yet.", "Subject + is + not + adjective + yet."]
  ],
  "speak": {"task": "Describe yourself in six sentences with be: name, age, city, job/study, feeling today, and where you are now.", "role": "Interview a partner with yes/no questions using be (Are you married? Is your office big? Are your parents in Jakarta?). Answer with short answers.",
    "pron": [["I'm, you're, he's, she's", "use short forms when you speak"], ["isn't /ˈɪz.ənt/, aren't /ɑːnt/", "negative short forms"], ["Are you ready?", "rising intonation for yes/no questions"]]},
  "write": {"task": "Write a profile card for a classmate or colleague (6–8 sentences) using am/is/are, including at least one negative sentence and one question.", "model": "This is Wulan. She is 23 years old. She is from Semarang. She is an admin staff member at a shipping company. She isn't married. Her office is near the port. She is friendly and hard-working. Is she good at English? Yes, she is!", "check": ["is with he/she", "at least one isn't/aren't", "age with be"]},
  "sum": ["English sentences need a verb: I am a teacher (not “I teacher”).", "I am; he/she/it is; you/we/they are.", "Negative: be + not. Question: be + subject?", "Age: I am 25 (years old)."]
},
{
  "id": "a1-05", "st": "A1", "m": "a1-m2", "type": "grammar",
  "title": "Basic sentence structure: subject, verb, object",
  "sub": "Struktur kalimat dasar: S + V + O",
  "obj": ["Build sentences in the order subject + verb + object", "Add place and time in the right position", "Use adjectives before nouns", "Avoid word-by-word translation from Indonesian"],
  "exp": [
    {"h": "The basic order", "p": "Most English sentences follow S + V + O: subject (who), verb (action), object (what). “Rina (S) drinks (V) coffee (O).” The order is strict: “Coffee drinks Rina” means something different.", "id": "Urutan dasar: subjek + kata kerja + objek. Urutan ini mirip bahasa Indonesia, tetapi lebih ketat."},
    {"h": "Place and time", "p": "Put place before time at the end: “I study English at home every evening.” (S + V + O + place + time). Time can also go at the start: “Every evening, I study English at home.”", "id": "Keterangan tempat biasanya sebelum keterangan waktu di akhir kalimat."},
    {"h": "Adjective + noun", "p": "In English the adjective comes before the noun: a big house (rumah besar), a new car (mobil baru), red shoes (sepatu merah). This is the opposite of Indonesian.", "id": "Kata sifat di depan kata benda: “big house”, bukan “house big”."},
    {"h": "Sentences with be", "p": "With be, the pattern is S + be + complement: “The office is big.” “My manager is in Jakarta.”", "id": "Dengan “be”: subjek + be + keterangan."}
  ],
  "struct": ["Subject + Verb + Object (+ Place + Time)", "Subject + be + adjective/noun/place", "Article + adjective + noun → a new phone"],
  "forms": {"pos": ["Budi drives a truck.", "We have a meeting at 9.", "The warehouse is big."], "neg": ["Budi doesn't drive a bus.", "We don't have a meeting today.", "The warehouse isn't small."], "q": ["Does Budi drive a truck?", "Do we have a meeting today?", "Is the warehouse big?"]},
  "exc": ["Some verbs have no object: “She sleeps.” “The train arrives at 7.”", "Some verbs take two objects: “Give me the file.” (S + V + person + thing)", "Frequency adverbs (always, often) go before the main verb: “I always drink tea.” (Lesson A2-08)"],
  "voc": [
    ["drive", "/draɪv/", "verb", "mengemudi", "to control a car, bus or truck", "He drives a delivery truck.", "past: drove"],
    ["truck", "/trʌk/", "noun", "truk", "a large road vehicle for carrying goods", "The truck is in the depot.", "UK: lorry"],
    ["warehouse", "/ˈweə.haʊs/", "noun", "gudang", "a large building where goods are stored", "The warehouse is near the port.", "coll: warehouse staff"],
    ["meeting", "/ˈmiː.tɪŋ/", "noun", "rapat", "an event where people discuss something", "We have a meeting at nine.", "coll: have/attend a meeting"],
    ["every day", "/ˈev.ri deɪ/", "phrase", "setiap hari", "on all days", "I read the news every day.", "note: “everyday” (one word) is an adjective"],
    ["read", "/riːd/", "verb", "membaca", "to look at and understand words", "She reads emails in the morning.", "past: read /red/"],
    ["new", "/njuː/", "adjective", "baru", "recently made or bought", "I have a new laptop.", "ant: old"]
  ],
  "ex": [
    ["Rina drinks coffee.", "Rina minum kopi."],
    ["I read emails every morning.", "Saya membaca email setiap pagi."],
    ["The driver loads the boxes.", "Sopir memuat kotak-kotak."],
    ["We study English at the campus on Saturday.", "Kami belajar bahasa Inggris di kampus pada hari Sabtu."],
    ["My brother has a new motorbike.", "Kakak saya punya motor baru."],
    ["She buys fresh vegetables at the market.", "Dia membeli sayur segar di pasar."],
    ["They play football in the park every Sunday.", "Mereka bermain sepak bola di taman setiap Minggu."],
    ["The office is very quiet.", "Kantornya sangat sepi."],
    ["Give me the invoice, please.", "Tolong berikan faktur itu kepada saya."],
    ["The train arrives at seven.", "Kereta tiba pukul tujuh."],
    ["Every evening, I cook dinner for my family.", "Setiap sore, saya memasak makan malam untuk keluarga."],
    ["Our company sends goods to Kalimantan.", "Perusahaan kami mengirim barang ke Kalimantan."]
  ],
  "mis": [
    ["I have a house big.", "I have a big house.", "Kata sifat sebelum kata benda."],
    ["Every day I to office.", "Every day I go to the office.", "Kalimat perlu kata kerja (go)."],
    ["I at home study.", "I study at home.", "Urutan: subjek + kata kerja + tempat."],
    ["Yesterday I very busy.", "Yesterday I was very busy.", "Perlu kata kerja be (was)."]
  ],
  "prac": [
    ["order", "I drink tea every morning.", "S + V + O + time."],
    ["order", "She has a new car.", "Adjective before noun."],
    ["fix", "We have a room small.", "We have a small room.", "Adjective before noun."],
    ["mc", "Choose the correct order.", ["I English study at home.", "I study English at home.", "At home study I English.", "English I study at home."], 1, "S + V + O + place."],
    ["mc", "Where does “every day” usually go?", ["at the end or the start", "between subject and verb", "between verb and object", "after the adjective"], 0, "Time phrases usually go at the end or the start."],
    ["order", "The truck is in the warehouse.", "S + be + place."]
  ],
  "quiz": [
    ["fix", "My father drives a bus old.", "My father drives an old bus.", "Adjective before noun; “an” before a vowel sound."],
    ["order", "They play badminton on Sunday.", "S + V + O + time."],
    ["mc", "Which sentence is correct?", ["The manager in the office.", "The manager is in the office.", "In the office the manager.", "The manager office is in."], 1, "S + be + place."],
    ["mc", "“I go to work at 7 by bus.” What is the subject?", ["I", "go", "work", "bus"], 0, "The subject is I."],
    ["fix", "I every day read the news.", "I read the news every day.|Every day I read the news.", "Time phrase at the end or the start."]
  ],
  "test": [
    ["order", "We have a meeting at nine.", "S + V + O + time."],
    ["fix", "She buys at the market vegetables.", "She buys vegetables at the market.", "Object before place."],
    ["mc", "“rumah besar” in English is:", ["house big", "a big house", "big a house", "a house big"], 1, "Adjective + noun."],
    ["mc", "Which sentence has no object?", ["She reads books.", "The train arrives.", "He drives a truck.", "We need help."], 1, "“arrive” has no object."],
    ["order", "My sister works in a bank.", "S + V + place."]
  ],
  "speak": {"task": "Describe your normal day in eight sentences using S + V + O + place + time (I take the bus to campus at 6:30).", "role": "Partner A says a sentence in the wrong order; Partner B corrects it aloud. Swap after five sentences.",
    "pron": [["warehouse", "WARE-house: stress on the first part"], ["drives / reads / buys", "final -s sounds: /z/"], ["every day", "EV-ree DAY"]]},
  "write": {"task": "Write eight sentences about your workplace or campus. Use the order S + V + O and include at least two adjective + noun pairs and two time phrases.", "model": "I work in a big warehouse in Cikarang. I check incoming goods every morning. My supervisor gives me a list at 8 o'clock. The drivers bring heavy boxes. We use a new scanner. We send reports in the afternoon. I eat lunch in the canteen. I go home at 5 pm.", "check": ["Subject first", "Adjective before noun", "Place before time"]},
  "sum": ["Basic order: Subject + Verb + Object (+ Place + Time).", "Adjectives come before nouns: a new phone.", "With be: Subject + be + adjective/noun/place.", "Do not leave out the verb: “I go to the office”, not “I to office”."]
}
]);
