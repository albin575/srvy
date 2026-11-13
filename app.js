/* ============================================================
   Survey dataset — 50 respondents, Piravom Municipality
   ============================================================ */

const TOTAL = 50;

const SECTIONS = {
  A: { label: 'Section A — Profile & general awareness', cls: 'sec-a', color: 'a' },
  B: { label: 'Section B — Saving & digital habits', cls: 'sec-b', color: 'b' },
  C: { label: 'Section C — Knowledge (scored)', cls: 'sec-c', color: 'c' },
  D: { label: 'Section D — Opinion', cls: 'sec-d', color: 'd' }
};

/* ---------- Respondent profile (Section A) ---------- */
const profile = [
  {
    title: 'Age group',
    items: [['18 – 21', 27], ['22 – 25', 17], ['Below 18', 3], ['Above 25', 3]]
  },
  {
    title: 'Gender',
    items: [['Male', 27], ['Female', 21], ['Other', 2]]
  },
  {
    title: 'Educational qualification',
    items: [['Plus two', 26], ['Under graduate', 16], ['Post graduate', 5], ['Other', 3]]
  }
];

/* ---------- Questionnaire with responses ---------- */
const questions = [
  { no: 1, sec: 'A', q: 'Name of the respondent', open: true,
    note: 'Open text field. Names are kept confidential and are not used in the analysis.' },

  { no: 2, sec: 'A', q: 'Age', options: [
    ['A. 18 – 21', 27], ['B. 22 – 25', 17], ['C. Below 18', 3], ['D. Above 25', 3]
  ]},

  { no: 3, sec: 'A', q: 'Gender', options: [
    ['A. Male', 27], ['B. Female', 21], ['C. Other', 2]
  ]},

  { no: 4, sec: 'A', q: 'Educational qualification', options: [
    ['A. Plus two', 26], ['B. Under graduate', 16], ['C. Post graduate', 5], ['D. Other', 3]
  ]},

  { no: 5, sec: 'A', q: 'Are you aware of financial awareness?', options: [
    ['A. Yes', 41], ['B. No', 9]
  ]},

  { no: 6, sec: 'B', q: 'How would you rate your overall knowledge about financial matters (budgeting, saving, banking)?', options: [
    ['A. Very good', 5], ['B. Good', 18], ['C. Average', 21], ['D. Poor', 5], ['E. Very poor', 1]
  ]},

  { no: 7, sec: 'B', q: 'Do you maintain a monthly budget to manage your income and expenses?', options: [
    ['A. Yes, regularly', 14], ['B. Sometimes', 19], ['C. Rarely', 10], ['D. Never', 7]
  ]},

  { no: 8, sec: 'B', q: 'How do you usually manage your monthly savings?', options: [
    ['A. Save a fixed amount regularly', 18],
    ['B. Save whatever is left after spending', 18],
    ['C. No regular savings habit', 11],
    ['D. I spend more than I earn', 3]
  ]},

  { no: 9, sec: 'C', q: 'Which of the following best describes your understanding of interest rates (simple vs. compound)?', scored: true, options: [
    ['A. Can calculate both easily', 6],
    ['B. Understand the concept but cannot calculate', 21],
    ['C. Heard about it but unclear', 16],
    ['D. No idea', 7]
  ]},

  { no: 10, sec: 'C', q: 'Can you correctly explain the difference between a savings account and a fixed deposit?', scored: true, options: [
    ['A. Yes, clearly', 11],
    ['B. Somewhat', 22],
    ['C. Only know savings account', 12],
    ['D. No idea', 5]
  ]},

  { no: 11, sec: 'B', q: 'How often do you use digital payment methods (UPI, mobile banking, net banking)?', options: [
    ['A. Daily', 31], ['B. Weekly', 13], ['C. Rarely', 5], ['D. Never', 1]
  ]},

  { no: 12, sec: 'B', q: 'Which digital payment platform do you use most?', options: [
    ['A. Google Pay', 21], ['B. PhonePe', 15], ['C. Paytm', 4],
    ['D. BHIM / UPI apps of banks', 7], ['E. None', 3]
  ]},

  { no: 13, sec: 'C', q: 'Are you aware of the following government schemes? (Select all that apply)', scored: true, multi: true, options: [
    ['A. PM Jan Dhan Yojana', 26],
    ['B. Sukanya Samriddhi Yojana', 21],
    ['C. PM Vaya Vandana Yojana', 6],
    ['D. Pradhan Mantri Mudra Yojana', 12],
    ['E. None of these', 8]
  ]},

  { no: 14, sec: 'C', q: 'Have you ever faced any security issue (fraud / scam) while using digital financial services?', scored: true, options: [
    ['A. Yes, lost money', 4],
    ['B. Yes, but no loss', 7],
    ['C. No, but I know someone who did', 19],
    ['D. No, and I don\u2019t know anyone who did', 20]
  ]},

  { no: 15, sec: 'C', q: 'Do you know how to safely report a digital payment fraud?', scored: true, options: [
    ['A. Yes, fully aware', 9], ['B. Somewhat aware', 24], ['C. Not aware', 17]
  ]},

  { no: 16, sec: 'B', q: 'Have you ever attended any financial literacy programme / campaign?', options: [
    ['A. Yes, more than once', 5], ['B. Yes, once', 11], ['C. Never', 34]
  ]},

  { no: 17, sec: 'D', q: 'Do you think financial education should be made compulsory in schools / colleges?', options: [
    ['A. Strongly agree', 19], ['B. Agree', 21], ['C. Neutral', 8],
    ['D. Disagree', 2], ['E. Strongly disagree', 0]
  ]},

  { no: 18, sec: 'D', q: 'According to you, which is the most effective way to spread financial awareness among youth?', options: [
    ['A. Social media campaigns', 15],
    ['B. Workshops / seminars', 12],
    ['C. Inclusion in school / college curriculum', 16],
    ['D. Bank-led awareness programmes', 5],
    ['E. Television / radio programmes', 2]
  ]},

  { no: 19, sec: 'B', q: 'How willing would you be to attend a free financial literacy workshop in your area?', options: [
    ['A. Definitely willing', 17], ['B. Probably willing', 22],
    ['C. Not sure', 8], ['D. Not interested', 3]
  ]},

  { no: 20, sec: 'D', q: 'In your opinion, how effective are government financial literacy campaigns (e.g. RBI\u2019s campaigns) in reaching middle-income youth?', options: [
    ['A. Very effective', 6], ['B. Somewhat effective', 23], ['C. Rarely effective', 11],
    ['D. Not effective at all', 4], ['E. Never heard of them', 6]
  ]}
];

/* ---------- Charts ---------- */
const chartSaving = [
  ['No savings (0%)', 14],
  ['Below 10%', 13],
  ['10 – 30%', 17],
  ['Above 30%', 6]
];

const chartInvest = [
  ['Bank fixed deposit', 17],
  ['Gold / jewellery', 12],
  ['Mutual funds / SIP', 5],
  ['Post office / recurring deposit', 2],
  ['No formal investment (cash at home)', 14]
];

const chartAwareness = [
  ['Financially aware (8–10 marks)', 14, 'var(--accent)'],
  ['Partially aware (5–7 marks)', 21, 'var(--amber)'],
  ['Financially unaware (0–4 marks)', 15, 'var(--rust)']
];

const chartRelation = [
  ['No savings', 2.9],
  ['Below 10%', 4.8],
  ['10 – 30%', 7.4],
  ['Above 30%', 8.7]
];

/* ============================================================
   Rendering helpers
   ============================================================ */

const pct = (n) => Math.round((n / TOTAL) * 100);

function barRows(container, items, color) {
  container.innerHTML = items.map(([label, n]) => {
    const p = pct(n);
    return `
      <div class="bar-row">
        <div class="bar-top"><span>${label}</span><b>${n} · ${p}%</b></div>
        <div class="bar-track"><div class="bar-fill ${color || ''}" style="width:${p}%"></div></div>
      </div>`;
  }).join('');
}

/* ---------- profile mini charts ---------- */
const profileBox = document.getElementById('profile-charts');
if (profileBox) {
  profileBox.innerHTML = profile.map((group) => `
    <article class="card mini-chart">
      <h4>${group.title}</h4>
      <div class="bars" data-group="${group.title}"></div>
    </article>`).join('');

  profile.forEach((group) => {
    const el = profileBox.querySelector(`.bars[data-group="${group.title}"]`);
    if (el) barRows(el, group.items, 'a');
  });
}

/* ---------- questionnaire ---------- */
const qList = document.getElementById('questionnaire-list');
if (qList) {
  qList.innerHTML = questions.map((item) => {
    const sec = SECTIONS[item.sec];
    const heading = `
      <div class="q-head">
        <span class="q-no">Q${item.no}</span>
        <div>
          <div class="q-text">${item.q}</div>
          ${item.multi ? '<div class="q-sub">Multiple answers allowed</div>' : ''}
        </div>
      </div>`;

    if (item.open) {
      return `<article class="q-card ${sec.cls}">${heading}
        <div class="bars">
          <div class="bar-row">
            <div class="bar-top"><span>Open text response</span><b>${TOTAL} replies</b></div>
            <div class="bar-track"><div class="bar-fill a" style="width:100%"></div></div>
          </div>
        </div>
        <p class="q-note">${item.note}</p>
      </article>`;
    }

    return `<article class="q-card ${sec.cls}">${heading}
      <div class="bars" data-q="${item.no}"></div>
      ${item.multi ? `<p class="q-note">Percentages are of the 50 respondents; the options add up to more than 100%.</p>` : ''}
      ${item.scored ? `<span class="q-tag">Scored · Section C</span>` : ''}
    </article>`;
  }).join('');

  questions.filter((item) => item.options).forEach((item) => {
    const el = qList.querySelector(`.bars[data-q="${item.no}"]`);
    if (el) barRows(el, item.options, SECTIONS[item.sec].color);
  });
}

/* ---------- charts ---------- */
const savingEl = document.getElementById('chart-saving');
if (savingEl) barRows(savingEl, chartSaving, 'a');

const investEl = document.getElementById('chart-invest');
if (investEl) barRows(investEl, chartInvest, 'b');

/* pie */
const pieEl = document.getElementById('chart-pie');
const pieLegend = document.getElementById('chart-pie-legend');
if (pieEl && pieLegend) {
  let angle = 0;
  const stops = chartAwareness.map(([, n]) => {
    angle += (n / TOTAL) * 360;
    return angle;
  });
  pieEl.style.setProperty('--a', `${stops[0]}deg`);
  pieEl.style.setProperty('--b', `${stops[1]}deg`);
  pieEl.style.setProperty('--c', `${stops[2]}deg`);

  pieLegend.innerHTML = chartAwareness.map(([label, n, color]) => `
    <li><i style="background:${color}"></i><span>${label}</span><b>${pct(n)}% <small>(${n})</small></b></li>
  `).join('');
}

/* columns */
const relationEl = document.getElementById('chart-relation');
if (relationEl) {
  const max = 10;
  relationEl.innerHTML = chartRelation.map(([label, score]) => `
    <div class="col">
      <span class="col-val">${score.toFixed(1)}</span>
      <div class="col-bar" style="height:${(score / max) * 100}%"></div>
    </div>`).join('');

  const axis = document.createElement('div');
  axis.className = 'cols-axis';
  axis.innerHTML = chartRelation.map(([label]) => `<div class="col-axis">${label}</div>`).join('');
  relationEl.insertAdjacentElement('afterend', axis);
}

/* ---------- scroll spy ---------- */
const links = Array.from(document.querySelectorAll('.topnav a'));
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

/* ============================================================
   Interactive Liquid Glass Features
   ============================================================ */

/* ---------- 1. Shadow Soft Toggle ---------- */
const shadowToggle = document.getElementById('shadow-toggle');
if (shadowToggle) {
  shadowToggle.addEventListener('click', () => {
    shadowToggle.classList.toggle('active');
    document.body.classList.toggle('shadow-soft-mode');
  });
}

/* ---------- 2. 3D Crystal Prism Dynamic Caustic & Mouse Tilt ---------- */
const prismWrap = document.getElementById('crystal-prism');
const prismCube = prismWrap ? prismWrap.querySelector('.prism-cube') : null;
const causticBeam = prismWrap ? prismWrap.querySelector('.caustic-beam') : null;

if (prismWrap && prismCube) {
  prismWrap.addEventListener('mousemove', (e) => {
    const rect = prismWrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / rect.height) * 16;
    const rotY = (x / rect.width) * 16;

    prismCube.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
    if (causticBeam) {
      causticBeam.style.transform = `rotate(${26 + rotY * 0.5}deg) skewX(${-14 + rotX * 0.3}deg) scale(${1 + Math.abs(x) / 100})`;
    }
  });

  prismWrap.addEventListener('mouseleave', () => {
    prismCube.style.transform = '';
    if (causticBeam) {
      causticBeam.style.transform = '';
    }
  });
}

/* ---------- 3. Chip Tokens Click Navigation to Awareness Levels ---------- */
const chipDark = document.querySelector('.chip-token.chip-dark');
const chipBlue = document.querySelector('.chip-token.chip-blue');
const chipAmber = document.querySelector('.chip-token.chip-amber');

function pulseCard(selector) {
  const card = document.querySelector(selector);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
    card.style.transform = 'scale(1.04) translateY(-6px)';
    card.style.boxShadow = '0 30px 60px -15px rgba(37, 99, 235, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.9)';
    setTimeout(() => {
      card.style.transform = '';
      card.style.boxShadow = '';
    }, 1200);
  }
}

if (chipDark) {
  chipDark.addEventListener('click', () => pulseCard('.level-card.high'));
}
if (chipBlue) {
  chipBlue.addEventListener('click', () => pulseCard('.level-card.mid'));
}
if (chipAmber) {
  chipAmber.addEventListener('click', () => pulseCard('.level-card.low'));
}

/* ---------- 4. Step Dials Interactive Selection ---------- */
const dialCircles = document.querySelectorAll('.dial-circle');
dialCircles.forEach((dial) => {
  dial.addEventListener('click', () => {
    dialCircles.forEach((d) => {
      d.style.borderColor = '';
      d.style.background = '';
    });
    dial.style.borderColor = '#2563eb';
    dial.style.background = '#ffffff';
  });
});

/* ---------- 5. Swatch Tiles Interactive Navigation to Survey Charts & Questions ---------- */
const swatchTiles = document.querySelectorAll('.swatch-tile');
const tileTargets = [
  '#chart-saving',               // 1: Saving habit 72%
  '#chart-invest',               // 2: Investing 28%
  '.q-card:has(.bars[data-q="11"])', // 3: Daily UPI 62%
  '.q-card:has(.bars[data-q="13"])', // 4: Govt schemes 52%
  '.q-card:has(.bars[data-q="7"])',  // 5: Monthly budget 28%
  '.q-card:has(.bars[data-q="16"])'  // 6: Workshops 32%
];

swatchTiles.forEach((tile, index) => {
  tile.addEventListener('click', () => {
    const targetSelector = tileTargets[index];
    if (targetSelector) {
      pulseCard(targetSelector);
    }
  });
});

/* ---------- 6. Hex Badges Navigation to Awareness Levels ---------- */
const hexPills = document.querySelectorAll('.hex-wrap');
if (hexPills[0]) hexPills[0].addEventListener('click', () => pulseCard('.level-card.high'));
if (hexPills[1]) hexPills[1].addEventListener('click', () => pulseCard('.level-card.mid'));
if (hexPills[2]) hexPills[2].addEventListener('click', () => pulseCard('.level-card.low'));


