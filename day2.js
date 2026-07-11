// 1. TYPING TEXT ENGINE ON THE LANDING COMPONENT
const phrases = ["Prepare for Current Affairs 2026...", "15 High-Yield Mock Sets...", "Track your competitive standing!"];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const textEl = document.getElementById("text");
    if (!textEl) return;
    
    const currentPhrase = phrases[phraseIdx];
    textEl.textContent = isDeleting ? currentPhrase.substring(0, charIdx - 1) : currentPhrase.substring(0, charIdx + 1);
    charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === currentPhrase.length) { speed = 1500; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; speed = 400; }
    setTimeout(typeEffect, speed);
}

// Info Modal Drawer Toggle
const infoToggle = document.getElementById('info-toggle');
const infoDrawer = document.getElementById('info-drawer');
if (infoToggle && infoDrawer) {
    infoToggle.addEventListener('click', () => infoDrawer.classList.toggle('hidden'));
}

document.addEventListener("DOMContentLoaded", typeEffect);

// 2. EXAM DATABASE CONTAINER (10 JULY 2026 METRICS)
const quizData = [
    { qEn: "1. Which organization developed India's first mobile smart algal liquid tree?", qTe: "1. భారతదేశంలోనే తొలి మొబైల్ స్మార్ట్ ఆల్గల్ లిక్విడ్ ట్రీని అభివృద్ధి చేసిన సంస్థ ఏది?", opts: ["A) DRDO", "B) CSIR-CIMFR", "C) ISRO", "D) IIT Madras"], corr: 1 },
    { qEn: "2. What growth rate has the Asian Development Bank (ADB) projected for India for the 2026-27 financial year?", qTe: "2. ఏషియన్ డెవలప్‌మెంట్ బ్యాంక్ (ADB) 2026-27 ఆర్థిక సంవత్సరానికి భారత వృద్ధి రేటును ఎంతగా అంచనా వేసింది?", opts: ["A) 6.4%", "B) 7.3%", "C) 6.6%", "D) 6.3%"], corr: 2 },
    { qEn: "3. What does the 'green refrigerant' technology developed by CSIR-IICT (Hyderabad) replace?", qTe: "3. CSIR-IICT (హైదరాబాద్) అభివృద్ధి చేసిన 'గ్రీన్ రెఫ్రిజిరెంట్' సాంకేతికత దేనిని భర్తీ చేస్తుంది?", opts: ["A) Chlorofluorocarbons (CFCs)", "B) Hydrofluorocarbons (HFCs)", "C) Nitrous oxide", "D) Methane"], corr: 1 },
    { qEn: "4. Which country is set to host the Global AI Summit in 2027?", qTe: "4. 2027లో గ్లోబల్ AI సమ్మిట్‌ను ఏ దేశం నిర్వహించనుంది?", opts: ["A) India", "B) UAE", "C) Switzerland", "D) France"], corr: 3 },
    { qEn: "5. With which organization did the Indian Coast Guard sign an agreement to make coastal areas plastic-free?", qTe: "5. తీర ప్రాంతాలను ప్లాస్టిక్ రహితంగా మార్చడానికి ఇండియన్ కోస్ట్ గార్డ్ ఏ సంస్థతో ఒప్పందం కుదుర్చుకుంది?", opts: ["A) Patanjali", "B) Bisleri", "C) Kinley", "D) Best Water"], corr: 1 },
    { qEn: "6. Who has been appointed as India's next ambassador to Ukraine?", qTe: "6. ఉక్రెయిన్‌లో భారత తదుపరి రాయబారిగా ఎవరు నియమితులయ్యారు?", opts: ["A) Dinesh Trivedi", "B) Anjani Kumar", "C) S. Jaishankar", "D) Vikram Misri"], corr: 1 },
    { qEn: "7. Which state will host the 'Khelo India Youth Games' in 2026?", qTe: "7. 2026లో 'కేలో ఇండియా యూత్ గేమ్స్'కి ఆతిథ్యం ఇవ్వనున్న రాష్ట్రం ఏది?", opts: ["A) Bihar", "B) Telangana", "C) Maharashtra", "D) Haryana"], corr: 1 },
    { qEn: "8. Who unveiled the trophy for the 135th edition of the 'Durand Cup 2026'?", qTe: "8. 135వ ఎడిషన్ 'డూరాండ్ కప్ 2026' ట్రోఫీని ఎవరు ఆవిష్కరించారు?", opts: ["A) Narendra Modi", "B) Mansukh Mandaviya", "C) Draupadi Murmu", "D) Rajnath Singh"], corr: 2 },
    { qEn: "9. To which state does Acharya Ranchodlal Goswami, selected for the 'Ustad Bismillah Khan Yuva Puraskar 2025', belong?", qTe: "9. 'ఉస్తాద్ బిస్మిల్లా ఖాన్ యువ పురస్కారం 2025'కి ఎంపికైన ఆచార్య రణచోద్రాల్ గోస్వామి ఏ రాష్ట్రానికి చెందినవారు?", opts: ["A) Rajasthan", "B) Gujarat", "C) Punjab", "D) Madhya Pradesh"], corr: 1 },
    { qEn: "10. What is the name of the ocean observation satellite recently launched by China?", qTe: "10. చైనా ఇటీవల ప్రయోగించిన సముద్ర పరిశీలన ఉపగ్రహం పేరు ఏమిటి?", opts: ["A) Hi-Tech 1", "B) HY-1", "C) Ocean-Sat", "D) Sea-Sat"], corr: 1 },
    { qEn: "11. Who is the current Director General of CSIR?", qTe: "11. CSIR ప్రస్తుత డైరెక్టర్ జనరల్ ఎవరు?", opts: ["A) Nallathamby Kalaiselvi", "B) S. Somanath", "C) Anil Kumar", "D) K. Sivan"], corr: 0 },
    { qEn: "12. India and which country jointly inaugurated the 'Manas Mahabharata Study Centre'?", qTe: "12. భారత్ మరియు ఏ దేశం సంయుక్తంగా 'మనాస్ మహాభారత అధ్యయన కేంద్రం'ను ప్రారంభించాయి?", opts: ["A) Nepal", "B) Kyrgyzstan", "C) Bhutan", "D) Mongolia"], corr: 3 },
    { qEn: "13. The ACITI partnership was established between which three countries?", qTe: "13. అసిటీ (ACITI) భాగస్వామ్యం ఏ మూడు దేశాల మధ్య కుదిరింది?", opts: ["A) India, USA, Japan", "B) India, Australia, Canada", "C) India, Britain, Germany", "D) India, Russia, France"], corr: 3 },
    { qEn: "14. With which sport is the Durand Cup associated?", qTe: "14. డూరాండ్ కప్ ఏ క్రీడకు సంబంధించినది?", opts: ["A) Cricket", "B) Hockey", "C) Football", "D) Kabaddi"], corr: 2 },
    { qEn: "15. In which year was the Sangeet Natak Akademi established?", qTe: "15. సంగీత నాటక అకాడమీ ఏ సంవత్సరంలో స్థాపించబడింది?", opts: ["A) 1942", "B) 1953", "C) 1966", "D) 1978"], corr: 1 }
];

let currentUserName = "";
let userAnswers = {};

const loginSection = document.getElementById('login-section');
const enterBtn = document.getElementById('enter-quiz-btn');

if (enterBtn) {
    enterBtn.addEventListener('click', () => {
        const nameVal = document.getElementById('username-input').value.trim();
        if (!nameVal) return alert("Kindly write your name to begin!");
        currentUserName = nameVal;
        
        document.getElementById('user-display-name').textContent = currentUserName;
        loginSection.classList.add('hidden');
        document.getElementById('score-banner').classList.remove('hidden');
        document.getElementById('quiz-portal').classList.remove('hidden');
        renderActiveQuiz();
    });
}

function renderActiveQuiz() {
    const targetDiv = document.getElementById('quiz-container');
    targetDiv.innerHTML = "";
    quizData.forEach((q, qIndex) => {
        const block = document.createElement('div');
        block.className = 'question-card';
        block.innerHTML = `<div style="font-weight:600; font-size:16px;">${q.qEn}</div><div style="color:var(--text-muted); font-size:14px; margin-top:4px;">${q.qTe}</div>`;
        
        const ul = document.createElement('ul');
        ul.className = 'options-list';
        
        q.opts.forEach((opt, oIndex) => {
            const li = document.createElement('li');
            li.className = 'option-item';
            li.textContent = opt;
            li.addEventListener('click', () => {
                ul.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                li.classList.add('selected');
                userAnswers[qIndex] = oIndex;
            });
            ul.appendChild(li);
        });
        block.appendChild(ul);
        targetDiv.appendChild(block);
    });
}

const submitBtn = document.getElementById('submit-quiz-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        let score = 0;
        quizData.forEach((q, idx) => {
            if (userAnswers[idx] === q.corr) score++;
        });

        document.getElementById('quiz-portal').classList.add('hidden');
        document.getElementById('score-banner').classList.add('hidden');
        document.getElementById('result-section').classList.remove('hidden');
        document.getElementById('final-score').textContent = score;

        computeLiveRankMetrics(currentUserName, score);
    });
}

function computeLiveRankMetrics(name, finalScore) {
    let storage = JSON.parse(localStorage.getItem('police_exam_leaderboard')) || [];
    storage.push({ name: name, score: finalScore, dateStamp: Date.now() });
    localStorage.setItem('police_exam_leaderboard', JSON.stringify(storage));

    storage.sort((x, y) => y.score - x.score || x.dateStamp - y.dateStamp);
    
    const rankNum = storage.findIndex(entry => entry.name === name && entry.score === finalScore) + 1;
    document.getElementById('final-rank').textContent = `#${rankNum} out of ${storage.length}`;

    const tableBody = document.getElementById('leaderboard-rows');
    tableBody.innerHTML = "";
    storage.forEach((item, pos) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td><strong>#${pos + 1}</strong></td><td>${item.name}</td><td>${item.score} / 15</td>`;
        tableBody.appendChild(row);
    });
}