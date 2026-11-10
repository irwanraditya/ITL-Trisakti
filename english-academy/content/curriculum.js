/* English Learning Academy — curriculum map and configuration.
   Pure data (JSON literal) registered through ELA.add(). Edit lessons in lessons-*.js. */
ELA.add('curriculum', {
  "version": "1.0.0",
  "updated": "2026-11-10",
  "config": {
    "lessonPass": 70,
    "stagePass": 70,
    "finalPass": 70,
    "placementLevelThreshold": 60,
    "srsIntervals": [1, 3, 7, 14, 30],
    "dailyPlan": { "vocab": 15, "grammar": 10, "listening": 10, "speaking": 15, "rw": 10 },
    "vocabTarget": 10,
    "streakShare": 0.5,
    "readyLessonShare": 0.8,
    "readyAvgScore": 75
  },
  "glh": {
    "note": "Approximate cumulative guided learning hours published by Cambridge English. Real progress depends on prior knowledge, practice outside lessons and exposure to English.",
    "A1": "about 90–100 hours",
    "A2": "about 180–200 hours",
    "B1": "about 350–400 hours",
    "B2": "about 500–600 hours",
    "C1": "about 700–800 hours",
    "PRO": "C1 level plus focused practice in your professional field"
  },
  "stages": [
    {
      "id": "A1", "name": "A1 Beginner", "short": "A1",
      "desc": "Your first steps: sounds, greetings, the verb to be, simple present sentences and everyday words.",
      "descId": "Langkah pertama: bunyi huruf, salam, kata kerja to be, kalimat present sederhana, dan kosakata sehari-hari.",
      "cando": ["Introduce yourself and others", "Ask and answer simple personal questions", "Understand numbers, dates and times", "Use very common everyday words"],
      "modules": [
        { "id": "a1-m1", "title": "First Steps", "lessons": ["a1-01", "a1-02", "a1-03", "a1-04"] },
        { "id": "a1-m2", "title": "Building Sentences", "lessons": ["a1-05", "a1-06", "a1-07", "a1-08"] },
        { "id": "a1-m3", "title": "Everyday Present", "lessons": ["a1-09", "a1-10", "a1-11"] },
        { "id": "a1-m4", "title": "My World", "lessons": ["a1-12", "a1-13", "a1-14"] }
      ]
    },
    {
      "id": "A2", "name": "A2 Elementary", "short": "A2",
      "desc": "Talk about the past and the future, describe things, and handle travel and everyday situations.",
      "descId": "Bercerita tentang masa lalu dan rencana, mendeskripsikan sesuatu, dan menangani situasi perjalanan serta sehari-hari.",
      "cando": ["Describe past events and future plans", "Compare people, places and things", "Handle simple travel and shopping situations", "Talk about routines and experiences"],
      "modules": [
        { "id": "a2-m1", "title": "Past, Present and Future", "lessons": ["a2-01", "a2-02", "a2-03"] },
        { "id": "a2-m2", "title": "Describing and Deciding", "lessons": ["a2-04", "a2-05", "a2-06"] },
        { "id": "a2-m3", "title": "Time, Place and Habits", "lessons": ["a2-07", "a2-08", "a2-09"] },
        { "id": "a2-m4", "title": "Real-Life English", "lessons": ["a2-10", "a2-11", "a2-12"] }
      ]
    },
    {
      "id": "B1", "name": "B1 Intermediate", "short": "B1",
      "desc": "Connect ideas, report what others said, explain problems and communicate at work with growing confidence.",
      "descId": "Menghubungkan gagasan, menyampaikan ucapan orang lain, menjelaskan masalah, dan berkomunikasi di tempat kerja dengan lebih percaya diri.",
      "cando": ["Describe experiences and explain reasons", "Give and justify opinions", "Handle most workplace conversations on familiar topics", "Write connected text on familiar topics"],
      "modules": [
        { "id": "b1-m1", "title": "Time and Experience", "lessons": ["b1-01", "b1-02", "b1-03", "b1-04"] },
        { "id": "b1-m2", "title": "Key Structures", "lessons": ["b1-05", "b1-06", "b1-07", "b1-08", "b1-09"] },
        { "id": "b1-m3", "title": "Expressing Ideas", "lessons": ["b1-10", "b1-11", "b1-12"] },
        { "id": "b1-m4", "title": "Communicating at Work", "lessons": ["b1-13", "b1-14"] }
      ]
    },
    {
      "id": "B2", "name": "B2 Upper Intermediate", "short": "B2",
      "desc": "Use advanced structures and natural word combinations to argue, persuade and write professionally.",
      "descId": "Memakai struktur lanjutan dan kombinasi kata yang wajar untuk berargumen, membujuk, dan menulis secara profesional.",
      "cando": ["Argue a point of view with supporting reasons", "Interact fluently with native speakers on work topics", "Choose formal or informal language appropriately", "Write clear, detailed business correspondence"],
      "modules": [
        { "id": "b2-m1", "title": "Advanced Grammar I", "lessons": ["b2-01", "b2-02", "b2-03", "b2-04"] },
        { "id": "b2-m2", "title": "Advanced Grammar II", "lessons": ["b2-05", "b2-06"] },
        { "id": "b2-m3", "title": "Vocabulary in Depth", "lessons": ["b2-07", "b2-08", "b2-09", "b2-10"] },
        { "id": "b2-m4", "title": "Persuasion and Professional Talk", "lessons": ["b2-11", "b2-12", "b2-13", "b2-14"] }
      ]
    },
    {
      "id": "C1", "name": "C1 Advanced", "short": "C1",
      "desc": "Communicate precisely and flexibly: nuance, register, academic and analytical English, and executive communication.",
      "descId": "Berkomunikasi secara presisi dan luwes: nuansa, register, bahasa akademik dan analitis, serta komunikasi eksekutif.",
      "cando": ["Express ideas fluently and precisely", "Adjust tone and register to any audience", "Read critically and write well-structured analysis", "Lead complex discussions and disagree diplomatically"],
      "modules": [
        { "id": "c1-m1", "title": "Precision and Nuance", "lessons": ["c1-01", "c1-02", "c1-03", "c1-04"] },
        { "id": "c1-m2", "title": "Academic and Critical English", "lessons": ["c1-05", "c1-06", "c1-07", "c1-08"] },
        { "id": "c1-m3", "title": "Influence and Leadership Talk", "lessons": ["c1-09", "c1-10", "c1-11", "c1-12"] }
      ]
    },
    {
      "id": "PRO", "name": "Professional English", "short": "PRO",
      "desc": "Specialised English for business communication, product management, data and technology, leadership and career growth.",
      "descId": "Bahasa Inggris khusus untuk komunikasi bisnis, manajemen produk, data dan teknologi, kepemimpinan, dan pengembangan karier.",
      "cando": ["Run and contribute to international meetings", "Explain technical work to any audience", "Negotiate, resolve conflict and lead teams in English", "Interview and network confidently"],
      "modules": [
        { "id": "pro-a", "title": "A. Business Communication", "lessons": ["pro-a1", "pro-a2", "pro-a3", "pro-a4", "pro-a5", "pro-a6", "pro-a7"] },
        { "id": "pro-b", "title": "B. Product Management", "lessons": ["pro-b1", "pro-b2", "pro-b3", "pro-b4", "pro-b5", "pro-b6", "pro-b7", "pro-b8"] },
        { "id": "pro-c", "title": "C. Data and Technology", "lessons": ["pro-c1", "pro-c2", "pro-c3", "pro-c4", "pro-c5", "pro-c6", "pro-c7"] },
        { "id": "pro-d", "title": "D. Leadership", "lessons": ["pro-d1", "pro-d2", "pro-d3", "pro-d4", "pro-d5", "pro-d6"] },
        { "id": "pro-e", "title": "E. Career Development", "lessons": ["pro-e1", "pro-e2", "pro-e3", "pro-e4", "pro-e5"] }
      ]
    }
  ],
  "roadmap": [
    { "w": 1, "focus": "Sounds, greetings and the verb to be", "lessons": ["a1-01", "a1-02", "a1-03", "a1-04"] },
    { "w": 2, "focus": "Sentence building, articles and plurals", "lessons": ["a1-05", "a1-06", "a1-07", "a1-08"] },
    { "w": 3, "focus": "Present simple, questions, numbers and time", "lessons": ["a1-09", "a1-10", "a1-11"] },
    { "w": 4, "focus": "Family, places and everyday talk; A1 assessment", "lessons": ["a1-12", "a1-13", "a1-14"], "assess": "A1" },
    { "w": 5, "focus": "Past simple, future and present continuous", "lessons": ["a2-01", "a2-02", "a2-03"] },
    { "w": 6, "focus": "Nouns, comparisons and modal verbs", "lessons": ["a2-04", "a2-05", "a2-06"] },
    { "w": 7, "focus": "Time, place, habits and phrasal verbs", "lessons": ["a2-07", "a2-08", "a2-09"] },
    { "w": 8, "focus": "Problems, travel and experiences; A2 assessment", "lessons": ["a2-10", "a2-11", "a2-12"], "assess": "A2" },
    { "w": 9, "focus": "Present perfect and past continuous", "lessons": ["b1-01", "b1-02", "b1-03", "b1-04"] },
    { "w": 10, "focus": "Conditionals, passive voice and reported speech", "lessons": ["b1-05", "b1-06", "b1-07"] },
    { "w": 11, "focus": "Relative clauses, gerunds and complex sentences", "lessons": ["b1-08", "b1-09", "b1-10"] },
    { "w": 12, "focus": "Opinions, solutions, stories and workplace talk; B1 assessment", "lessons": ["b1-11", "b1-12", "b1-13", "b1-14"], "assess": "B1" },
    { "w": 13, "focus": "Advanced tenses and mixed conditionals", "lessons": ["b2-01", "b2-02", "b2-03"] },
    { "w": 14, "focus": "Advanced modals, inversion and connectors", "lessons": ["b2-04", "b2-05", "b2-06"] },
    { "w": 15, "focus": "Collocations, phrasal verbs, idioms and register", "lessons": ["b2-07", "b2-08", "b2-09", "b2-10"] },
    { "w": 16, "focus": "Persuasion, debate, discussion and correspondence; B2 assessment", "lessons": ["b2-11", "b2-12", "b2-13", "b2-14"], "assess": "B2" },
    { "w": 17, "focus": "Accuracy, nuance, idiom and register", "lessons": ["c1-01", "c1-02", "c1-03", "c1-04"] },
    { "w": 18, "focus": "Academic English, critical reading, analytical writing and advanced listening", "lessons": ["c1-05", "c1-06", "c1-07", "c1-08"] },
    { "w": 19, "focus": "Presentations, discussions, diplomacy and executive talk; C1 assessment", "lessons": ["c1-09", "c1-10", "c1-11", "c1-12"], "assess": "C1" },
    { "w": 20, "focus": "Business communication", "lessons": ["pro-a1", "pro-a2", "pro-a3", "pro-a4", "pro-a5", "pro-a6", "pro-a7"] },
    { "w": 21, "focus": "Product management English", "lessons": ["pro-b1", "pro-b2", "pro-b3", "pro-b4", "pro-b5", "pro-b6", "pro-b7", "pro-b8"] },
    { "w": 22, "focus": "Data and technology English", "lessons": ["pro-c1", "pro-c2", "pro-c3", "pro-c4", "pro-c5", "pro-c6", "pro-c7"] },
    { "w": 23, "focus": "Leadership communication", "lessons": ["pro-d1", "pro-d2", "pro-d3", "pro-d4", "pro-d5", "pro-d6"] },
    { "w": 24, "focus": "Career English; Professional and final assessment", "lessons": ["pro-e1", "pro-e2", "pro-e3", "pro-e4", "pro-e5"], "assess": "PRO" }
  ]
});
