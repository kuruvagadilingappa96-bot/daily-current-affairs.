// Info panel drawer toggle interface handler
const infoToggle = document.getElementById('info-toggle');
const infoDrawer = document.getElementById('info-drawer');

if (infoToggle && infoDrawer) {
    infoToggle.addEventListener('click', () => {
        infoDrawer.classList.toggle('hidden');
    });
}

const quizData = [
    {
        qEn: "1. What is India's rank according to the Sustainable Development Report 2026?",
        qTe: "1. సుస్థిర అభివృద్ధి నివేదిక 2026 ప్రకారం భారతదేశ ర్యాంక్ ఎంత?",
        opts: ["a) 94th place / 94వ స్థానం", "b) 99th place / 99వ స్థానం", "c) 87th place / 87వ స్థానం", "d) 112th place / 112వ స్థానం"],
        correctIndex: 0,
        exp: "According to the Sustainable Development Report 2026, India secured its highest-ever position of 94th place out of 167 nations."
    },
    {
        qEn: "2. Which organization releases this report?",
        qTe: "2. ఈ నివేదికను ఏ సంస్థ విడుదల చేస్తుంది?",
        opts: ["a) World Bank / ప్రపంచ బ్యాంకు", "b) Sustainable Development Solutions Network / సస్టైనబుల్ డెవలప్‌మెంట్ సొల్యూషన్స్ నెట్‌వర్క్", "c) United Nations / ఐక్యరాజ్యసమితి", "d) Organisation for Economic Co-operation and Development (OECD) / ఆర్గనైజేషన్ ఫర్ ఎకనామిక్ కో-ఆపరేషన్ అండ్ డెవలప్‌మెంట్"],
        correctIndex: 1,
        exp: "This report is published annually by the UN Sustainable Development Solutions Network (SDSN)."
    },
    {
        qEn: "3. According to the World Investment Report 2026, which country attracted the highest FDI globally?",
        qTe: "3. వరల్డ్ ఇన్వెస్ట్‌మెంట్ రిపోర్ట్ 2026 ప్రకారం, ప్రపంచవ్యాప్తంగా అత్యధిక ఎఫ్‌డిఐని ఆకర్షించిన దేశం ఏది?",
        opts: ["a) Singapore / సింగపూర్", "b) India / భారతదేశం", "c) USA / USA", "d) Hong Kong / హాంకాంగ్"],
        correctIndex: 2,
        exp: "The United States remained the largest global recipient of Foreign Direct Investment (FDI)."
    },
    {
        qEn: "4. What rank did India hold in the rankings for FDI inflow destinations for the year 2025?",
        qTe: "4. 2025 సంవత్సరానికి ఎఫ్‌డిఐ ఇన్‌ఫ్లో గమ్యస్థానాలకు సంబంధించిన ర్యాంకింగ్‌లలో భారతదేశం ఏ ర్యాంక్‌ను కలిగి ఉంది?",
        opts: ["a) 13th place / 13వ స్థానం", "b) 11th place / 11వ స్థానం", "c) 18th place / 18వ స్థానం", "d) 20th place / 20వ స్థానం"],
        correctIndex: 1,
        exp: "According to UNCTAD metrics, India climbed two positions to become the 11th-largest recipient of global FDI inflows for 2025."
    },
    {
        qEn: "5. What does the UDISE+ report relate to?",
        qTe: "5. UDISE+ నివేదిక దేనికి సంబంధించినది?",
        opts: ["a) Defense sector / రక్షణ రంగం", "b) Education system / విਦ్యా వ్యవస్థ", "c) Economic growth / ఆర్థిక వృద్ధి", "d) Environment / పర్యావరణం"],
        correctIndex: 1,
        exp: "UDISE+ stands for Unified District Information System for Education Plus, evaluating school structures and enrollment systems."
    },
    {
        qEn: "6. What is 'Pinaka', recently tested by DRDO, related to?",
        qTe: "6. DRDO ఇటీవల పరీక్షించిన 'పినాక' దేనికి సంబంధించినది?",
        opts: ["a) Warship / యుద్ధనౌక", "b) Long-range guided rocket / లాంగ్-రేంజ్ గైడెడ్ రాకెట్", "c) Fighter jet / ఫైటర్ జెట్", "d) Drone / డ్రోన్"],
        correctIndex: 1,
        exp: "Pinaka is a Multi-Barrel Rocket Launcher System developed by the DRDO."
    },
    {
        qEn: "7. On which river is the Sardar Sarovar Project built?",
        qTe: "7. సర్దార్ సరోవర్ ప్రాజెక్ట్ ఏ నదిపై నిర్మించబడింది?",
        opts: ["A) Krishna / కృష్ణ", "B) Narmada / నర్మద", "C) Kaveri / కావేరి", "D) Tungabhadra / తుంగభద్ర"],
        correctIndex: 1,
        exp: "The gravity dam is constructed over the Narmada River in Gujarat."
    },
    {
        qEn: "8. In which country is the 'Prambanan' temple, recently visited by Prime Minister Narendra Modi, located?",
        qTe: "8. ఇటీవల ప్రధాని నరేంద్ర మోదీ సందర్శించిన 'ప్రంబనన్' దేవాలయం ఏ దేశంలో ఉంది?",
        opts: ["A) Nepal / నేపాల్", "B) Sri Lanka / శ్రీлкуం", "C) Indonesia / ఇండోనేషియా", "D) Vietnam / వియత్నాం"],
        correctIndex: 2,
        exp: "Prambanan is the largest Hindu temple compound in Indonesia, located in central Java."
    },
    {
        qEn: "9. Who is the 12th Indian cricketer to be inducted into the ICC Hall of Fame?",
        qTe: "9. ICC హాల్ ఆఫ్ ఫేమ్‌లోకి ప్రవేశించిన 12వ భారత క్రికెటర్ ఎవరు?",
        opts: ["A) Mahendra Singh Dhoni / మహేంద్ర సింగ్ ధోని", "B) Virender Sehwag / వీరేంద్ర సెహ్వాగ్", "C) Sourav Ganguly / సౌరవ్ గంగూలీ", "D) Sachin Tendulkar / సచిన్ టెండూల్కర్"],
        correctIndex: 2,
        exp: "Former legendary captain Sourav Ganguly is honored as the 12th Indian inductee into the ICC Hall of Fame."
    },
    {
        qEn: "10. Who is India's 98th Chess Grandmaster?",
        qTe: "10. భారతదేశ 98వ చెస్ గ్రాండ్ మాస్టర్ ఎవరు?",
        opts: ["A) S. Aswath / ఎస్. అశ్వత్", "B) Viswanathan Anand / విశ్వనాథన్ ఆనంద్", "C) D. Gukesh / డి. గుకేష్", "D) Praggnanandhaa / ప్రజ్ఞానానంద"],
        correctIndex: 0,
        exp: "Young prodigy S. Aswath secured the final parameters required to become India's 98th Chess Grandmaster."
    },
    {
        qEn: "11. Where is the headquarters of UNCTAD located?",
        qTe: "11. UNCTAD ప్రధాన కార్యాలయం ఎక్కడ ఉంది?",
        opts: ["A) New York / న్యూయార్క్", "B) Geneva / జెనీవా", "C) Paris / పారిస్", "D) London / లండన్"],
        correctIndex: 1,
        exp: "The United Nations Conference on Trade and Development (UNCTAD) is based out of Geneva, Switzerland."
    },
    {
        qEn: "12. In which Indian state was the Pinaka rocket test conducted?",
        qTe: "12. పినాక రాకెట్ పరీక్షను భారతదేశంలో ఏ రాష్ట్రంలో నిర్వహించారు?",
        opts: ["A) Andhra Pradesh / ఆంధ్రప్రదేశ్", "B) Tamil Nadu / தமிழ்நாடு", "C) Odisha / ఒడిశా", "D) Maharashtra / మహారాష్ట్ర"],
        correctIndex: 2,
        exp: "Tests were successfully executed out of the Integrated Test Range (ITR) situated in Chandipur, Odisha."
    },
    {
        qEn: "13. How many states are involved in the Sardar Sarovar Project agreement?",
        qTe: "13. సర్దార్ సరోవర్ ప్రాజెక్ట్ ఒప్పందంలో ఎన్ని రాష్ట్రాలు పాలుపంచుకున్నాయి?",
        opts: ["A) 3 / 3", "B) 4 / 4", "C) 5 / 5", "D) 6 / 6"],
        correctIndex: 1,
        exp: "4 states share the structural benefits and distribution agreements: Gujarat, Madhya Pradesh, Maharashtra, and Rajasthan."
    },
    {
        qEn: "14. Which report serves as the primary information system for the implementation of the National Education Policy (NEP) 2020?",
        qTe: "14. జాతీయ విద్యా విధానం (NEP) 2020 అమలుకు ప్రాథమిక సమాచార వ్యవస్థగా ఏ నివేదిక పనిచేస్తుంది?",
        opts: ["A) IMF Report / IMF నివేదిక", "B) UDISE+ / UDISE+", "C) World Bank Report / ప్రపంచ బ్యాంకు నివేదిక", "D) NITI Aayog Report / నీతి ఆయోగ్ నివేదిక"],
        correctIndex: 1,
        exp: "The UDISE+ database tracks school levels dynamically to implement structures introduced under NEP 2020."
    },
    {
        qEn: "15. What UNESCO status does the Prambanan temple hold?",
        qTe: "15. ప్రంబనన్ దేవాలయం యునెస్కో ఏ హోదాను కలిగి ఉంది?",
        opts: ["A) Natural Heritage Site /  సహజ వారసత్వ ప్రదేశం", "B) World Heritage Site / ప్రపంచ వారసత్వ ప్రదేశం", "C) Biosphere Reserve / బయోస్పియర్ రిజర్వ్", "D) None of the above / పైవేవీ కావు"],
        correctIndex: 1,
        exp: "Prambanan is categorized globally as a UNESCO World Heritage cultural complex."
    }
];

let score = 0;
const container = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizPortal = document.getElementById('quiz-portal');

// Welcome screen trigger event
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden'); // Hides the landing box
    quizPortal.classList.remove('hidden'); // Opens the dynamic quiz
    buildQuiz();
});

function buildQuiz() {
    container.innerHTML = ""; // Clean injection check
    quizData.forEach((q, qIdx) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `q-${qIdx}`;

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.textContent = q.qEn;

        const tText = document.createElement('div');
        tText.className = 'telugu-text';
        tText.textContent = q.qTe;

        const optsList = document.createElement('ul');
        optsList.className = 'options-list';

        q.opts.forEach((opt, oIdx) => {
            const li = document.createElement('li');
            li.className = 'option-item';
            li.textContent = opt;
            li.addEventListener('click', () => handleSelection(qIdx, oIdx));
            optsList.appendChild(li);
        });

        const expBox = document.createElement('div');
        expBox.className = 'explanation-box';
        expBox.id = `exp-${qIdx}`;
        expBox.innerHTML = `<strong>Explanation / వివరణ:</strong><br>${q.exp}`;

        card.appendChild(qText);
        card.appendChild(tText);
        card.appendChild(optsList);
        card.appendChild(expBox);
        container.appendChild(card);
    });
}

function handleSelection(qIdx, selectedIdx) {
    const card = document.getElementById(`q-${qIdx}`);
    if (card.classList.contains('answered')) return;

    card.classList.add('answered');
    const items = card.querySelectorAll('.option-item');
    const correctIdx = quizData[qIdx].correctIndex;

    if (selectedIdx === correctIdx) {
        items[selectedIdx].classList.add('correct');
        score++;
        document.getElementById('score-counter').textContent = `Score: ${score} / 15`;
    } else {
        items[selectedIdx].classList.add('wrong');
        items[correctIdx].classList.add('correct');
    }

    document.getElementById(`exp-${qIdx}`).style.display = 'block';
}