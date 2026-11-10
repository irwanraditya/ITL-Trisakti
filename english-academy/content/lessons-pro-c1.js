/* English Learning Academy — Professional English, C. Data and Technology (1–4). */
ELA.add('lessons', [
{
  "id": "pro-c1", "st": "PRO", "m": "pro-c", "type": "vocab",
  "title": "Data analytics vocabulary",
  "sub": "Kosakata analitik data",
  "obj": ["Use core statistics and analytics terms accurately in English", "Describe distributions, trends, correlations and outliers", "Explain analytical methods (segmentation, cohort, A/B testing) simply", "Avoid common misuses (average vs median, correlation vs causation, percent vs percentage point)"],
  "exp": [
    {"h": "Describing data", "p": "Central tendency: mean (average), median (middle value), mode (most frequent). Spread: range, standard deviation, interquartile range. Shape: skewed (long tail to one side), normal distribution. Unusual points: outliers. Use the median when data are skewed (e.g. delivery times with a few very late parcels).", "id": "Gunakan median jika data miring, misalnya waktu pengiriman dengan beberapa keterlambatan ekstrem."},
    {"h": "Relationships and tests", "p": "Correlation shows two variables move together (r from −1 to +1); it does not prove causation. A/B tests compare a control group with a treatment group; results are statistically significant when unlikely to be due to chance (often p < 0.05). Confidence interval gives a plausible range for the true value.", "id": "Korelasi bukan kausalitas; uji A/B membandingkan grup kontrol dan perlakuan."},
    {"h": "Percent vs percentage points", "p": "If on-time delivery rises from 90% to 93%, it increased by 3 percentage points, or by about 3.3 percent. Mixing these up is one of the most common errors in business reports.", "id": "Naik dari 90% ke 93% = naik 3 poin persentase, bukan 3 persen."}
  ],
  "voc": [
    ["median", "/ˈmiː.di.ən/", "noun", "median", "the middle value when data are ordered", "The median delivery time is 26 hours.", "vs mean (average)"],
    ["outlier", "/ˈaʊt.laɪ.ər/", "noun", "pencilan", "a value far from the others", "Three outliers distort the average.", "coll: remove/investigate outliers"],
    ["skewed", "/skjuːd/", "adjective", "miring, condong", "not symmetrical; with a long tail", "Delivery times are right-skewed.", "noun: skew"],
    ["standard deviation", "/ˌstæn.dəd ˌdiː.viˈeɪ.ʃən/", "noun", "simpangan baku", "a measure of spread around the mean", "The standard deviation is 4.2 hours.", "abbr: SD"],
    ["correlation", "/ˌkɒr.əˈleɪ.ʃən/", "noun", "korelasi", "a statistical relationship between variables", "There's a strong positive correlation (r = 0.78).", "≠ causation"],
    ["statistically significant", "/stəˈtɪs.tɪ.kli sɪɡˈnɪf.ɪ.kənt/", "adjective phrase", "signifikan secara statistik", "unlikely to be due to chance", "The uplift is statistically significant.", "often p < 0.05"],
    ["cohort", "/ˈkəʊ.hɔːt/", "noun", "kohort", "a group sharing a starting point (e.g. sign-up month)", "The March cohort retained better.", "coll: cohort analysis"],
    ["segment", "/ˈseɡ.mənt/", "noun/verb", "segmen; menyegmentasi", "a group of customers with shared traits", "We segmented sellers by order volume.", "noun: segmentation"],
    ["percentage point", "/pəˈsen.tɪdʒ pɔɪnt/", "noun", "poin persentase", "the difference between two percentages", "On-time rose by 3 percentage points.", "abbr: pp"],
    ["baseline", "/ˈbeɪs.laɪn/", "noun", "nilai dasar", "a starting value for comparison", "Compared with the baseline, errors fell 20%.", "coll: establish a baseline"],
    ["sample size", "/ˈsɑːm.pəl saɪz/", "noun", "ukuran sampel", "the number of observations", "The sample size is too small to conclude.", "abbr: n"],
    ["A/B test", "/ˌeɪˈbiː test/", "noun", "uji A/B", "an experiment comparing two versions", "We ran an A/B test on the checkout page.", "control vs treatment"]
  ],
  "ex": [
    ["The median delivery time is 26 hours, but the mean is 31 because of a few outliers.", "Median waktu pengiriman 26 jam, tetapi rata-ratanya 31 karena beberapa pencilan."],
    ["Delivery times are right-skewed, so we report the median.", "Waktu pengiriman miring ke kanan, jadi kami melaporkan median."],
    ["There's a strong positive correlation between distance and damage rate.", "Ada korelasi positif kuat antara jarak dan tingkat kerusakan."],
    ["Correlation doesn't prove that distance causes damage; handling may be the real factor.", "Korelasi tidak membuktikan jarak menyebabkan kerusakan; penanganan bisa menjadi faktor sebenarnya."],
    ["The new checkout increased conversion by 1.8 percentage points, which is statistically significant.", "Checkout baru menaikkan konversi 1,8 poin persentase, yang signifikan secara statistik."],
    ["The March cohort has 15% higher 90-day retention.", "Kohort Maret memiliki retensi 90 hari 15% lebih tinggi."],
    ["We segmented sellers into three groups by monthly order volume.", "Kami menyegmentasi penjual menjadi tiga kelompok berdasarkan volume pesanan bulanan."],
    ["Compared with the baseline, picking errors fell by 22%.", "Dibandingkan nilai dasar, kesalahan pengambilan turun 22%."],
    ["The sample size of 40 is too small to draw firm conclusions.", "Ukuran sampel 40 terlalu kecil untuk menarik kesimpulan pasti."],
    ["We ran an A/B test with a control group and a treatment group.", "Kami menjalankan uji A/B dengan grup kontrol dan grup perlakuan."]
  ],
  "mis": [
    ["On-time rose from 90% to 93%, an increase of 3%.", "On-time rose from 90% to 93%, an increase of 3 percentage points.", "Selisih dua persentase = poin persentase."],
    ["Sales and rain are correlated, so rain causes sales.", "Sales and rain are correlated; we need further analysis to test causation.", "Korelasi ≠ kausalitas."],
    ["The average is the middle value.", "The median is the middle value; the mean is the average.", "Bedakan mean dan median."],
    ["The data is significant. (tanpa uji)", "The difference is statistically significant (p = 0.01).", "Gunakan 'significant' secara tepat."]
  ],
  "prac": [
    ["match", [["mean", "the average"], ["median", "the middle value"], ["mode", "the most frequent value"], ["outlier", "a value far from the rest"], ["standard deviation", "spread around the mean"]], "Descriptive statistics."],
    ["mc", "Conversion rose from 4.0% to 5.0%. That is:", ["+1%", "+1 percentage point (+25%)", "+5%", "+100%"], 1, "1 pp = 25% relative increase."],
    ["fill", "Delivery times are right-___, so we use the median. (miring)", "skewed", "skewed."],
    ["fill", "The March ___ retained better than February's. (kohort)", "cohort", "cohort."],
    ["fix", "The datas show a strong correlation.", "The data show a strong correlation.|The data shows a strong correlation.", "data has no -s."],
    ["mc", "Which is true?", ["Correlation proves causation.", "Correlation can exist without causation.", "Correlation is always 1.", "Correlation means average."], 1, "Correlation ≠ causation."]
  ],
  "quiz": [
    ["mc", "When data have extreme outliers, which is usually better?", ["mean", "median", "maximum", "sum"], 1, "Median is robust."],
    ["fill", "Compared with the ___, errors fell 20%. (nilai dasar)", "baseline", "baseline."],
    ["fix", "The uplift is statistic significant.", "The uplift is statistically significant.", "Adverb form."],
    ["mc", "In an A/B test, the group that sees the old version is the:", ["treatment group", "control group", "cohort", "segment"], 1, "Control."],
    ["order", "The sample size is too small to draw conclusions.", "Sample size caveat."]
  ],
  "test": [
    ["mc", "From 20% to 25% is an increase of:", ["5 percent", "5 percentage points (25% relative)", "25 percentage points", "20 percent"], 1, "pp vs %."],
    ["fill", "Three ___ are distorting the average. (pencilan)", "outliers", "outliers."],
    ["fix", "We segment sellers by volume last month.", "We segmented sellers by volume last month.", "Past simple."],
    ["mc", "A standard deviation tells you:", ["the middle value", "how spread out data are", "the sample size", "the cause"], 1, "Spread."],
    ["order", "There is a strong positive correlation between distance and damage.", "Describing correlation."]
  ],
  "speak": {"task": "Explain a dataset you know (sales, deliveries, grades) to a non-technical manager in 2 minutes: median vs mean, one outlier, one correlation (with a causation caveat) and one change in percentage points.", "role": "Partner A is a manager who confuses % and pp and assumes causation; Partner B corrects politely.",
    "pron": [["median /ˈmiː.di.ən/", "MEE-dee-an"], ["cohort /ˈkəʊ.hɔːt/", "KOH-hort"], ["statistically", "sta-TIS-ti-cly"]]},
  "write": {"task": "Write an analysis summary (120–150 words) of an A/B test or performance change using at least eight analytics terms correctly, including percentage points and a causation caveat.", "model": "Checkout A/B test – summary. Over four weeks, 18,400 sellers were randomly assigned to the control (current checkout) or the treatment (one-page checkout). Conversion in the treatment group was 6.1% versus 4.3% in the control, an increase of 1.8 percentage points (about 42% relative uplift). The difference is statistically significant (p < 0.01), and the 95% confidence interval for the uplift is 1.3 to 2.3 pp. The effect was strongest in the low-volume segment. Median time to complete checkout fell from 94 to 51 seconds; we report the median because completion times are right-skewed, with a few sessions over 20 minutes. One caveat: the test ran during a promotion, so the absolute conversion rates may not reflect normal weeks, although the comparison between groups remains valid.", "check": ["% vs percentage points correct", "Median/mean choice explained", "Caveats about causation or context"]},
  "sum": ["mean vs median vs mode; use the median for skewed data.", "Correlation ≠ causation; A/B tests use control and treatment groups.", "Percentage points for differences between percentages.", "Key terms: outlier, standard deviation, cohort, segment, baseline, statistically significant."]
},
{
  "id": "pro-c2", "st": "PRO", "m": "pro-c", "type": "vocab",
  "title": "Data engineering terminology",
  "sub": "Terminologi rekayasa data",
  "obj": ["Use core data engineering vocabulary: pipeline, ETL/ELT, orchestration, idempotent, partition", "Describe data flows and architectures clearly in English", "Discuss data quality, freshness and reliability", "Explain technical choices to non-engineers"],
  "exp": [
    {"h": "Pipelines and processing", "p": "A data pipeline moves data from sources to destinations. ETL (extract, transform, load) transforms before loading; ELT loads raw data into a warehouse and transforms there (common with BigQuery, Snowflake). Batch processing runs on a schedule; streaming processes events continuously. An orchestrator (e.g. Airflow) schedules and monitors tasks as a DAG (directed acyclic graph).", "id": "ETL vs ELT; batch vs streaming; orkestrasi dengan DAG."},
    {"h": "Reliability vocabulary", "p": "Idempotent: running a job twice gives the same result (safe to retry). Incremental load: only new or changed data. Backfill: reprocess historical periods. Upsert/merge: insert new rows and update existing ones. Partitioning and clustering reduce scanned data and cost. Data freshness/latency: how up to date data are. SLA: an agreed level of service (e.g. tables ready by 07:00).", "id": "Idempoten, beban inkremental, backfill, upsert, partisi, kesegaran data, SLA."},
    {"h": "Data quality", "p": "Quality dimensions: completeness (no missing values), accuracy, consistency, uniqueness (no duplicates), timeliness, validity (correct format). Tests: row-count checks, null checks, schema checks. Schema drift happens when a source changes its structure without warning.", "id": "Dimensi kualitas data dan uji otomatis."}
  ],
  "voc": [
    ["pipeline", "/ˈpaɪp.laɪn/", "noun", "pipeline (alur data)", "a series of steps moving and transforming data", "The orders pipeline runs every hour.", "coll: data pipeline"],
    ["ELT", "/ˌiː.elˈtiː/", "noun", "ELT", "extract, load, then transform in the warehouse", "We moved from ETL to ELT on BigQuery.", "vs ETL"],
    ["orchestration", "/ˌɔː.kɪˈstreɪ.ʃən/", "noun", "orkestrasi", "scheduling and coordinating data tasks", "We use Airflow for orchestration.", "verb: orchestrate"],
    ["DAG", "/dæɡ/", "noun", "DAG", "directed acyclic graph: tasks with dependencies", "The DAG failed at the transform step.", "Airflow"],
    ["idempotent", "/ˌaɪ.demˈpəʊ.tənt/", "adjective", "idempoten", "giving the same result when run more than once", "Make the load idempotent so retries are safe.", "noun: idempotency"],
    ["incremental load", "/ˌɪŋ.krəˈmen.təl ləʊd/", "noun", "pemuatan inkremental", "loading only new or changed records", "Switch to an incremental load to cut costs.", "vs full load"],
    ["backfill", "/ˈbæk.fɪl/", "noun/verb", "pengisian ulang data historis", "reprocessing past periods", "We need to backfill March after the bug fix.", "Airflow: backfill"],
    ["upsert", "/ˈʌp.sɜːt/", "noun/verb", "upsert", "insert new rows and update existing ones", "Use MERGE to upsert the daily changes.", "syn: merge"],
    ["partition", "/pɑːˈtɪʃ.ən/", "noun/verb", "partisi", "a section of a table split by a column, often date", "Partition the table by order date.", "coll: partition pruning"],
    ["schema drift", "/ˈskiː.mə drɪft/", "noun", "perubahan skema", "unexpected changes in a source's structure", "Schema drift broke the ingestion job.", "data quality"],
    ["data freshness", "/ˈdeɪ.tə ˈfreʃ.nəs/", "noun", "kesegaran data", "how up to date data are", "Data freshness is two hours.", "syn: latency"],
    ["SLA", "/ˌes.elˈeɪ/", "noun", "SLA", "service-level agreement", "The SLA is tables ready by 07:00 WIB.", "also: SLO, SLI"]
  ],
  "ex": [
    ["The orders pipeline extracts data from the API every hour.", "Pipeline pesanan mengekstrak data dari API setiap jam."],
    ["We moved from ETL to ELT so that analysts can transform data in BigQuery.", "Kami beralih dari ETL ke ELT agar analis bisa mentransformasi data di BigQuery."],
    ["Airflow orchestrates the DAG and retries failed tasks.", "Airflow mengorkestrasi DAG dan mengulang tugas yang gagal."],
    ["The load must be idempotent, so running it twice doesn't create duplicates.", "Proses muat harus idempoten, sehingga menjalankannya dua kali tidak membuat duplikat."],
    ["Switching to an incremental load cut our daily scan from 2 TB to 40 GB.", "Beralih ke muat inkremental memangkas pemindaian harian dari 2 TB menjadi 40 GB."],
    ["After fixing the bug, we backfilled the last 30 days.", "Setelah memperbaiki bug, kami mengisi ulang data 30 hari terakhir."],
    ["We upsert daily changes with a MERGE statement.", "Kami melakukan upsert perubahan harian dengan pernyataan MERGE."],
    ["The table is partitioned by order date and clustered by region.", "Tabel dipartisi berdasarkan tanggal pesanan dan dikelompokkan berdasarkan wilayah."],
    ["Schema drift in the carrier feed broke the ingestion job.", "Perubahan skema pada feed pengangkut merusak tugas ingesti."],
    ["Our SLA is that the sales mart is ready by 07:00 WIB.", "SLA kami: data mart penjualan siap pukul 07.00 WIB."]
  ],
  "mis": [
    ["The job is idempotent, so running it twice doubles the rows.", "Because the job is idempotent, running it twice gives the same result.", "Idempoten = hasil sama saat diulang."],
    ["We do a full load every hour of 5 years of data.", "We use an incremental load and a weekly full reconciliation.", "Pilih beban inkremental untuk efisiensi."],
    ["The data is fresh. (tanpa angka)", "Data freshness is under two hours.", "Kuantifikasi kesegaran."],
    ["Explaining DAGs to the CFO with technical jargon only.", "Airflow is a scheduler that runs each step in the right order and alerts us if something fails.", "Sederhanakan untuk non-teknis."]
  ],
  "prac": [
    ["match", [["ETL", "transform before loading"], ["ELT", "load raw, transform in the warehouse"], ["Backfill", "reprocess past periods"], ["Upsert", "insert new and update existing rows"], ["Schema drift", "unexpected source structure change"]], "Data engineering terms."],
    ["fill", "Make the load ___ so that retries are safe. (idempoten)", "idempotent", "idempotent."],
    ["fill", "Partition the table ___ order date.", "by", "partition by."],
    ["mc", "Which reduces scanned data most in a date-filtered query?", ["SELECT *", "partition pruning", "more columns", "no WHERE clause"], 1, "Partition pruning."],
    ["fix", "We need backfill March data.", "We need to backfill March data.|We need to backfill the March data.", "need + to."],
    ["order", "Airflow orchestrates the DAG and retries failed tasks.", "Orchestration."]
  ],
  "quiz": [
    ["mc", "“Data freshness is two hours” means:", ["data are two hours old at most", "data expire in two hours", "the job takes two hours", "data are deleted"], 0, "Freshness."],
    ["fill", "The ___ is tables ready by 07:00. (SLA abbr.)", "SLA", "SLA."],
    ["fix", "The DAG were failed at the transform step.", "The DAG failed at the transform step.", "Simple past, active."],
    ["mc", "Streaming processing is:", ["scheduled once a day", "continuous, event by event", "manual", "only for images"], 1, "Streaming."],
    ["order", "Schema drift broke the ingestion job last night.", "Describing an incident."]
  ],
  "test": [
    ["mc", "An incremental load:", ["reloads everything", "loads only new or changed data", "deletes data", "is never used"], 1, "Incremental."],
    ["fill", "We use a MERGE statement to ___ the daily changes.", "upsert|merge", "upsert."],
    ["fix", "The table is partition by date.", "The table is partitioned by date.", "Passive: be + V3."],
    ["mc", "Which is a data quality dimension?", ["colour", "uniqueness", "font", "salary"], 1, "Uniqueness."],
    ["order", "We moved from ETL to ELT on BigQuery.", "Architecture change."]
  ],
  "speak": {"task": "Explain one data pipeline you know (or design one) in 2 minutes: sources, ingestion, orchestration, transformation, storage (partitioning), quality checks and SLA. Then explain it again in 30 seconds for a non-technical manager.", "role": "Partner A is a data engineer asking precise questions (Is it idempotent? How do you backfill?); Partner C is a manager asking “What does this mean for my report?”",
    "pron": [["idempotent /ˌaɪ.demˈpəʊ.tənt/", "eye-dem-POH-tent"], ["schema /ˈskiː.mə/", "SKEE-ma"], ["DAG /dæɡ/", "like the word 'dag'"]]},
  "write": {"task": "Write a short design note (130–160 words) for a pipeline: purpose, sources, ELT steps, orchestration, partitioning, idempotency/backfill strategy, data quality checks and SLA.", "model": "Design note – Delivery events pipeline. Purpose: provide hourly on-time delivery metrics for the operations dashboard. Sources: carrier tracking API (JSON events) and the internal orders database. Ingestion: an Airflow DAG runs every hour, extracting events updated since the last successful watermark (incremental load) into a raw BigQuery table partitioned by event date. Transformation: dbt models deduplicate events and upsert the latest status per parcel with MERGE, making the load idempotent; reruns produce the same result. Backfill: any date range can be reprocessed by passing start and end dates to the DAG. Quality checks: row-count anomaly detection, null checks on parcel_id and status, and schema checks to catch drift. Monitoring: failures alert the on-call engineer in Slack. SLA: metrics no more than 2 hours old between 06:00 and 22:00 WIB.", "check": ["Correct terms (incremental, idempotent, partition, upsert, backfill)", "Quality checks and SLA", "Clear, structured explanation"]},
  "sum": ["Pipelines move data: ETL vs ELT, batch vs streaming, orchestrated as DAGs.", "Reliability: idempotent loads, incremental loads, upserts, backfills.", "Cost/performance: partitioning and clustering; avoid scanning everything.", "Quality and service: completeness, uniqueness, schema drift, freshness, SLA."]
},
{
  "id": "pro-c3", "st": "PRO", "m": "pro-c", "type": "vocab",
  "title": "Business intelligence",
  "sub": "Business intelligence",
  "obj": ["Use BI vocabulary: KPI, metric, dimension, measure, fact table, star schema, semantic model", "Explain how BI turns data into decisions", "Discuss metric definitions and a single source of truth", "Talk about self-service BI and governance"],
  "exp": [
    {"h": "Metrics and KPIs", "p": "A metric is any measurement (number of deliveries). A KPI is a metric linked to a goal and target (on-time delivery ≥ 95%). Leading indicators predict future results (pickups booked); lagging indicators show results after the fact (monthly revenue).", "id": "KPI = metrik yang terkait tujuan dan target; indikator leading vs lagging."},
    {"h": "Modelling vocabulary", "p": "Star schema: a central fact table (events or transactions with measures, e.g. delivery_count, revenue) linked to dimension tables (date, customer, region, carrier). Measures are aggregated (sum, average); dimensions are used to slice and filter. Granularity (grain) = the level of detail of one row. A semantic model defines business-friendly measures once (e.g. in Power BI with DAX).", "id": "Skema bintang: tabel fakta + tabel dimensi; grain = tingkat detail per baris."},
    {"h": "Single source of truth and governance", "p": "Different teams often calculate the same KPI differently (“Is a delivery late after 24 or 48 hours?”). Agree definitions in a data dictionary, certify key datasets, and control access with row-level security. Self-service BI lets business users build their own reports on governed data.", "id": "Satu sumber kebenaran: definisi KPI disepakati dan didokumentasikan."}
  ],
  "voc": [
    ["KPI", "/ˌkeɪ.piːˈaɪ/", "noun", "KPI", "key performance indicator: a metric with a target", "Our main KPI is on-time delivery.", "plural: KPIs"],
    ["dimension", "/daɪˈmen.ʃən/", "noun", "dimensi", "an attribute used to slice data (date, region)", "Slice the data by the region dimension.", "BI modelling"],
    ["measure", "/ˈmeʒ.ər/", "noun", "ukuran (measure)", "a calculated value (sum, average)", "Create a measure for total revenue.", "Power BI: DAX measure"],
    ["fact table", "/ˈfækt ˌteɪ.bəl/", "noun", "tabel fakta", "a table of events or transactions with measures", "The fact table has one row per delivery.", "star schema"],
    ["star schema", "/ˈstɑː ˌskiː.mə/", "noun", "skema bintang", "a fact table surrounded by dimension tables", "We redesigned the model as a star schema.", "vs snowflake schema"],
    ["granularity", "/ˌɡræn.jəˈlær.ə.ti/", "noun", "granularitas", "the level of detail of data", "The grain is one row per parcel per day.", "syn: grain"],
    ["drill down", "/drɪl daʊn/", "phrasal verb", "menelusuri lebih rinci", "to move from summary to detail", "Drill down from region to city.", "noun: drill-down"],
    ["single source of truth", "/ˈsɪŋ.ɡəl sɔːs əv truːθ/", "noun", "satu sumber kebenaran", "one trusted, agreed dataset", "The certified dataset is our single source of truth.", "abbr: SSOT"],
    ["leading indicator", "/ˈliː.dɪŋ ˈɪn.dɪ.keɪ.tər/", "noun", "indikator awal", "a metric that predicts future results", "Pickups booked is a leading indicator of revenue.", "vs lagging indicator"],
    ["row-level security", "/ˌrəʊ.lev.əl sɪˈkjʊə.rə.ti/", "noun", "keamanan tingkat baris", "rules that limit which rows a user can see", "Row-level security limits managers to their region.", "abbr: RLS"],
    ["data dictionary", "/ˈdeɪ.tə ˈdɪk.ʃən.ər.i/", "noun", "kamus data", "documentation of fields and definitions", "Add the new KPI to the data dictionary.", "governance"],
    ["self-service BI", "/ˌselfˈsɜː.vɪs ˌbiːˈaɪ/", "noun", "BI swalayan", "business users building their own reports", "Self-service BI reduced report requests by 40%.", "governance needed"]
  ],
  "ex": [
    ["Our main KPI is on-time delivery, with a target of 95%.", "KPI utama kami adalah ketepatan pengiriman dengan target 95%."],
    ["The fact table has one row per delivery attempt.", "Tabel fakta memiliki satu baris per percobaan pengiriman."],
    ["Region, carrier and date are dimensions; delivery count is a measure.", "Wilayah, pengangkut, dan tanggal adalah dimensi; jumlah pengiriman adalah measure."],
    ["We redesigned the Power BI model as a star schema, and report load time fell from 20 to 3 seconds.", "Kami mendesain ulang model Power BI menjadi skema bintang, dan waktu muat laporan turun dari 20 ke 3 detik."],
    ["You can drill down from region to city to individual drivers.", "Anda bisa menelusuri dari wilayah ke kota hingga sopir."],
    ["Sales and Operations defined “late” differently, so we agreed one definition in the data dictionary.", "Penjualan dan Operasional mendefinisikan “terlambat” berbeda, jadi kami menyepakati satu definisi di kamus data."],
    ["The certified dataset is our single source of truth for revenue.", "Dataset tersertifikasi adalah satu sumber kebenaran kami untuk pendapatan."],
    ["Pickups booked is a leading indicator of next week's revenue.", "Jumlah penjemputan yang dipesan adalah indikator awal pendapatan minggu depan."],
    ["Row-level security limits regional managers to their own data.", "Keamanan tingkat baris membatasi manajer wilayah hanya pada datanya sendiri."],
    ["Self-service BI cut ad-hoc report requests by 40%.", "BI swalayan memangkas permintaan laporan ad-hoc sebesar 40%."]
  ],
  "mis": [
    ["Every number on the dashboard is a KPI.", "Only metrics tied to goals and targets are KPIs.", "Tidak semua metrik adalah KPI."],
    ["Using calculated columns for every total in Power BI.", "Prefer measures for aggregations; they are evaluated in context.", "Measure lebih efisien untuk agregasi."],
    ["Each team has its own definition of revenue.", "We agree one definition in the data dictionary and certify the dataset.", "Satu sumber kebenaran."],
    ["The grain of the table is unclear.", "The grain is one row per parcel per status change.", "Nyatakan grain secara eksplisit."]
  ],
  "prac": [
    ["match", [["Fact table", "events with measures"], ["Dimension", "attribute to slice by"], ["Measure", "aggregated calculation"], ["Grain", "level of detail per row"], ["RLS", "limits visible rows per user"]], "BI modelling terms."],
    ["mc", "Which is a leading indicator for revenue?", ["last month's revenue", "pickups booked this week", "annual profit", "tax paid"], 1, "Predicts future revenue."],
    ["fill", "You can drill ___ from region to city.", "down", "drill down."],
    ["fill", "The certified dataset is our single source of ___.", "truth", "SSOT."],
    ["fix", "Region are a dimension.", "Region is a dimension.", "Singular."],
    ["order", "The fact table has one row per delivery.", "Defining grain."]
  ],
  "quiz": [
    ["mc", "A KPI is:", ["any number", "a metric linked to a goal and target", "a table", "a chart type"], 1, "KPI."],
    ["fill", "Add the new definition to the data ___. (kamus data)", "dictionary", "data dictionary."],
    ["fix", "We redesign the model as star schema last month.", "We redesigned the model as a star schema last month.", "Past + article."],
    ["mc", "In a star schema, the central table is the:", ["dimension table", "fact table", "lookup list", "pivot"], 1, "Fact table."],
    ["order", "Row-level security limits managers to their region.", "RLS."]
  ],
  "test": [
    ["mc", "Monthly revenue is usually a:", ["leading indicator", "lagging indicator", "dimension", "grain"], 1, "Lagging."],
    ["fill", "The ___ is one row per parcel per day. (granularitas)", "grain|granularity", "grain."],
    ["fix", "Self-service BI reduce report requests.", "Self-service BI reduces report requests.|Self-service BI reduced report requests.", "Verb agreement."],
    ["mc", "In Power BI, aggregations are best created as:", ["measures", "screenshots", "comments", "new files"], 0, "Measures."],
    ["order", "Sales and Operations defined late deliveries differently.", "Definition conflict."]
  ],
  "speak": {"task": "Explain a BI model or dashboard you know in 2 minutes: grain of the fact table, main dimensions and measures, one KPI with target, one leading indicator and how you ensure a single source of truth.", "role": "Partner A is a business user who asks why two reports show different numbers; Partner B explains definitions and governance.",
    "pron": [["granularity", "gran-yu-LAR-i-ty"], ["dimension", "dy-MEN-shun or di-MEN-shun"], ["KPI", "kay-pee-EYE"]]},
  "write": {"task": "Write a KPI definition card (100–130 words) for a data dictionary: name, business question, formula, grain, dimensions, target, owner, refresh, and known caveats.", "model": "KPI: On-Time Delivery Rate (OTD). Business question: What share of parcels reach customers within the promised window? Formula: delivered parcels with delivered_at ≤ promised_by ÷ all delivered parcels, excluding customer-requested reschedules. Grain: one row per parcel (final delivery attempt). Dimensions: date, region, carrier, service level, seller segment. Target: ≥ 95% (green), 90–95% (amber), < 90% (red). Owner: Head of Operations (business); BI team (technical). Source: certified dataset mart.deliveries_v2. Refresh: hourly, 06:00–22:00 WIB. Caveats: parcels returned to sender are excluded; carrier timestamps may be up to 15 minutes late.", "check": ["Precise formula and grain", "Target, owner and refresh", "Caveats documented"]},
  "sum": ["KPI = metric + goal + target; leading vs lagging indicators.", "Star schema: fact table (measures) + dimension tables; state the grain.", "Prefer measures for aggregations; drill down from summary to detail.", "Single source of truth: data dictionary, certified datasets, row-level security."]
},
{
  "id": "pro-c4", "st": "PRO", "m": "pro-c", "type": "skills",
  "title": "Reporting and dashboards",
  "sub": "Pelaporan dan dasbor",
  "obj": ["Describe dashboard design choices and chart types in English", "Write clear titles, annotations and captions that state the insight", "Discuss dashboard usability, performance and audience", "Give and receive feedback on reports"],
  "exp": [
    {"h": "Design for the audience", "p": "Executive dashboards: few KPIs, trend and status, exceptions highlighted. Operational dashboards: near-real-time, detailed, action-oriented. Analytical reports: filters, drill-downs, exploration. Ask: Who uses it? What decision does it support? How often?", "id": "Desain dasbor sesuai audiens dan keputusan yang didukung."},
    {"h": "Chart vocabulary", "p": "Line chart (trend over time), bar/column chart (comparison), stacked bar (composition), scatter plot (relationship), heat map (patterns across two dimensions), KPI card (single number with change). Avoid 3D and pie charts with many slices. Axis, legend, label, tooltip, filter/slicer, threshold line.", "id": "Kosakata jenis grafik dan elemen visual."},
    {"h": "Titles that say the insight", "p": "Weak: “On-time delivery by month”. Strong: “On-time delivery fell to 88% in September, driven by the Surabaya hub.” Add annotations on key events (new carrier, holiday) and a caption with definitions and data source.", "id": "Judul grafik sebaiknya menyatakan wawasan, bukan sekadar topik."}
  ],
  "voc": [
    ["dashboard", "/ˈdæʃ.bɔːd/", "noun", "dasbor", "a visual display of key metrics", "The operations dashboard refreshes hourly.", "coll: executive/operational dashboard"],
    ["slicer", "/ˈslaɪ.sər/", "noun", "slicer (penyaring)", "a visual filter in a BI tool", "Use the region slicer to filter.", "Power BI"],
    ["tooltip", "/ˈtuːl.tɪp/", "noun", "tooltip", "information shown when hovering", "The tooltip shows the exact value.", "UI"],
    ["annotation", "/ˌæn.əˈteɪ.ʃən/", "noun", "anotasi", "a note on a chart explaining an event", "Add an annotation for the carrier change.", "verb: annotate"],
    ["threshold", "/ˈθreʃ.həʊld/", "noun", "ambang batas", "a value that triggers attention", "The red line shows the 95% threshold.", "coll: threshold line"],
    ["at a glance", "/ət ə ɡlɑːns/", "phrase", "sekilas", "immediately, with one look", "Managers should see the status at a glance.", "design goal"],
    ["clutter", "/ˈklʌt.ər/", "noun", "kesemrawutan", "too many elements", "Remove clutter from the dashboard.", "adj: cluttered"],
    ["refresh", "/rɪˈfreʃ/", "noun/verb", "pembaruan data", "updating data in a report", "The dataset refreshes every hour.", "coll: scheduled refresh"]
  ],
  "ex": [
    ["The executive dashboard shows five KPIs with traffic-light status.", "Dasbor eksekutif menampilkan lima KPI dengan status lampu lalu lintas."],
    ["Use a line chart to show the trend over twelve months.", "Gunakan grafik garis untuk menunjukkan tren selama dua belas bulan."],
    ["A stacked bar shows the share of late deliveries by cause.", "Grafik batang bertumpuk menunjukkan porsi keterlambatan berdasarkan penyebab."],
    ["On-time delivery fell to 88% in September, driven by the Surabaya hub.", "Ketepatan pengiriman turun ke 88% pada September, terutama karena hub Surabaya."],
    ["Add an annotation for the carrier change on 1 July.", "Tambahkan anotasi untuk pergantian pengangkut pada 1 Juli."],
    ["The red dashed line shows the 95% threshold.", "Garis putus-putus merah menunjukkan ambang 95%."],
    ["Managers should understand the status at a glance.", "Manajer harus memahami status secara sekilas."],
    ["The page is cluttered; let's remove the three gauges.", "Halamannya semrawut; mari hapus tiga gauge itu."],
    ["The dataset refreshes every hour between 6 a.m. and 10 p.m.", "Dataset diperbarui setiap jam antara pukul 06.00 dan 22.00."],
    ["Could you add a slicer for service level?", "Bisakah ditambahkan slicer untuk tingkat layanan?"]
  ],
  "mis": [
    ["Chart title: “Data”.", "Chart title: “Returns rose 18% in Q3, mostly in fashion”.", "Judul harus menyatakan wawasan."],
    ["A pie chart with 14 slices.", "A sorted bar chart of the 14 categories.", "Pie chart tidak cocok untuk banyak kategori."],
    ["Showing 30 visuals on one executive page.", "Five KPIs, one trend, exceptions highlighted.", "Kurangi kesemrawutan."],
    ["Your dashboard is ugly.", "The key KPI is hard to find; could we move it to the top left?", "Umpan balik spesifik dan membangun."]
  ],
  "prac": [
    ["match", [["Line chart", "trend over time"], ["Bar chart", "comparison between categories"], ["Scatter plot", "relationship between two variables"], ["Heat map", "patterns across two dimensions"], ["KPI card", "single number with change"]], "Chart choices."],
    ["mc", "Which title is strongest?", ["Monthly OTD", "Chart 3", "On-time delivery fell to 88% in September, driven by Surabaya", "Data"], 2, "States the insight."],
    ["fill", "The red line shows the 95% ___. (ambang)", "threshold", "threshold."],
    ["fill", "Managers should see the status at a ___. (sekilas)", "glance", "at a glance."],
    ["fix", "The dataset refresh every hour.", "The dataset refreshes every hour.", "Third person -s."],
    ["order", "Could you add a slicer for service level?", "Feedback request."]
  ],
  "quiz": [
    ["mc", "Executive dashboards should usually have:", ["as many visuals as possible", "few KPIs, trends and highlighted exceptions", "raw tables only", "no titles"], 1, "Executive design."],
    ["fill", "Add an ___ for the holiday period. (anotasi)", "annotation", "annotation."],
    ["fix", "The page is too clutter.", "The page is too cluttered.", "Adjective form."],
    ["mc", "Hover information on a chart is called a:", ["slicer", "tooltip", "legend", "axis"], 1, "Tooltip."],
    ["order", "Use a line chart to show the trend over time.", "Chart choice."]
  ],
  "test": [
    ["mc", "Which chart best shows composition of late deliveries by cause?", ["scatter plot", "stacked bar", "line chart", "map"], 1, "Composition."],
    ["fill", "The data ___ every hour. (diperbarui)", "refresh|refreshes", "refresh."],
    ["fix", "Could you add slicer for region?", "Could you add a slicer for region?", "Article."],
    ["mc", "Constructive feedback on a report is:", ["general and emotional", "specific and suggests an improvement", "silent", "about the author"], 1, "Specific."],
    ["order", "Returns rose eighteen percent in the third quarter.", "Insight title."]
  ],
  "speak": {"task": "Present a dashboard you know or have built (or a public one) for 2 minutes: audience, decisions supported, KPIs, chart choices and one improvement. Then give constructive feedback on a partner's dashboard.", "role": "Partner A is a busy regional manager who wants to know in 10 seconds what needs attention.",
    "pron": [["threshold /ˈθreʃ.həʊld/", "THRESH-hold"], ["annotation", "an-no-TAY-shun"], ["at a glance", "at-a-GLANCE"]]},
  "write": {"task": "Write (1) three insight-style chart titles with annotations, and (2) a short feedback message (80–100 words) to a colleague about their dashboard.", "model": "(1) “On-time delivery fell to 88% in September, driven by the Surabaya hub” (annotation: new line-haul carrier from 1 Sep). “Returns rose 18% in Q3, mostly in fashion items” (annotation: size-guide removed 12 Jul). “Cost per parcel is flat despite 9% higher fuel prices” (annotation: route optimisation live 1 Aug). (2) Hi Sari, great work on the operations dashboard—the drill-down from region to driver is really useful. Two suggestions: could we move the OTD KPI card to the top left and add the 95% threshold line on the trend chart? Also, the page has 14 visuals; maybe we could move the carrier tables to a detail page so managers can see the status at a glance. Happy to review together on Thursday.", "check": ["Titles state the insight", "Annotations explain key events", "Feedback is specific and constructive"]},
  "sum": ["Design for the audience and the decision: executive, operational, analytical.", "Choose charts by purpose: line (trend), bar (compare), stacked (composition), scatter (relationship).", "Titles state the insight; annotate key events; define metrics and sources.", "Feedback: specific, constructive, focused on the user."]
}
]);
