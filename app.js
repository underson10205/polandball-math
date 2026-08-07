// メインアプリケーションロジック (5正解＝1チケット確実獲得ポイント制)
let currentStageQuestions = [];
let currentQIdx = 0;
let userAnswers = {};
let activeBlankId = null;
let starCount = 0;
let keypadValue = "";
let currentStageId = 1;

let solvedCount = 0;
let gachaTickets = 3;
let ticketPoints = 0; // ガチャチケット用ポイント (0〜4、5溜まるとチケット1枚)

const savedTicketsStr = safeGetItem('polandball_gacha_tickets');
if (savedTicketsStr !== null) {
  gachaTickets = parseInt(savedTicketsStr, 10);
  if (isNaN(gachaTickets)) gachaTickets = 3;
} else {
  safeSetItem('polandball_gacha_tickets', '3');
}

const savedSolvedStr = safeGetItem('polandball_solved_count');
if (savedSolvedStr !== null) {
  solvedCount = parseInt(savedSolvedStr, 10);
  if (isNaN(solvedCount)) solvedCount = 0;
}

const savedPointsStr = safeGetItem('polandball_ticket_points');
if (savedPointsStr !== null) {
  ticketPoints = parseInt(savedPointsStr, 10);
  if (isNaN(ticketPoints)) ticketPoints = 0;
}

function saveStats() {
  safeSetItem('polandball_gacha_tickets', gachaTickets.toString());
  safeSetItem('polandball_solved_count', solvedCount.toString());
  safeSetItem('polandball_ticket_points', ticketPoints.toString());
}

function initApp() {
  try {
    saveStats();
    renderStageGrid();
    updateHeaderStats();
    showStageSelect();
    setupModalOverlayClick();
  } catch (e) {}
}

function setupModalOverlayClick() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function updateHeaderStats() {
  try {
    const stats = getCardCollectionStats();
    const percentEl = document.getElementById('collection-percent');
    if (percentEl) percentEl.innerText = `${stats.percent}% (${stats.ownedCount}/200)`;
    
    const ticketEl = document.getElementById('ticket-count');
    if (ticketEl) ticketEl.innerText = gachaTickets;

    const starEl = document.getElementById('star-count');
    if (starEl) starEl.innerText = starCount;

    const bannerSub = document.querySelector('.gacha-ticket-banner div div:last-child');
    if (bannerSub) {
      const remaining = 5 - ticketPoints;
      bannerSub.innerText = `正解ポイント: ${ticketPoints}/5 ⭐ (あと ${remaining} 問でチケット1枚GET！)`;
    }
  } catch (e) {}
}

function renderStageGrid() {
  const container = document.getElementById('stage-grid');
  if (!container) return;
  container.innerHTML = '';

  STAGES.forEach(stage => {
    const card = document.createElement('div');
    card.className = 'stage-card';
    card.onclick = () => startStage(stage.id);
    card.innerHTML = `
      <div class="stage-info">
        <div class="stage-icon">${stage.icon}</div>
        <div>
          <div class="stage-name" style="color: ${stage.color};">${stage.name}</div>
          <div class="stage-range">${stage.range}</div>
        </div>
      </div>
      <div class="stage-arrow">➔</div>
    `;
    container.appendChild(card);
  });
}

function showStageSelect() {
  try { sounds.playTap(); } catch(e){}
  updateHeaderStats();
  const selectScreen = document.getElementById('stage-select-screen');
  if (selectScreen) selectScreen.style.display = 'flex';
  const playScreen = document.getElementById('quiz-play-screen');
  if (playScreen) playScreen.style.display = 'none';
  const resultScreen = document.getElementById('result-screen');
  if (resultScreen) resultScreen.style.display = 'none';
}

function startStage(stageId) {
  try { sounds.playTap(); } catch(e){}
  currentStageId = stageId;

  if (stageId === 5) {
    currentStageQuestions = QUESTIONS;
  } else {
    currentStageQuestions = QUESTIONS.filter(q => q.stage === stageId);
  }

  currentQIdx = 0;
  document.getElementById('stage-select-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-play-screen').style.display = 'flex';

  loadQuestion(currentQIdx);
}

function loadQuestion(index) {
  if (!currentStageQuestions || !currentStageQuestions[index]) {
    showResultScreen();
    return;
  }

  const q = currentStageQuestions[index];
  userAnswers = {};
  activeBlankId = null;
  keypadValue = "";

  const avatar = q.avatar || 'images/polandball.jpg';
  const bg = q.bgGradient || 'linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)';
  const flag = q.flag || '🇵🇱';
  const character = q.character || 'ポーランドボール';
  const dialog = q.dialog || 'Kurwa! 一緒にがんばろう！';

  const progressPercent = ((index + 1) / currentStageQuestions.length) * 100;
  const fillEl = document.getElementById('progress-fill');
  if (fillEl) fillEl.style.width = `${progressPercent}%`;
  const textEl = document.getElementById('progress-text');
  if (textEl) textEl.innerText = `第 ${index + 1} / ${currentStageQuestions.length} 問`;

  const banner = document.getElementById('char-banner');
  if (banner) banner.style.background = bg;
  const avatarEl = document.getElementById('char-avatar');
  if (avatarEl) avatarEl.src = avatar;
  const speechEl = document.getElementById('char-speech');
  if (speechEl) speechEl.innerHTML = `<b>${flag} ${character}:</b> 「${dialog}」`;

  const titleEl = document.getElementById('q-title');
  if (titleEl) titleEl.innerHTML = `${flag} ${q.title || ''}`;
  const descEl = document.getElementById('q-desc');
  if (descEl) descEl.innerHTML = q.description || '';
  const eqArea = document.getElementById('q-equation-area');
  if (eqArea) eqArea.innerHTML = q.equationDisplay || '';

  renderGraph(q.graphData);
}

function renderGraph(graphData) {
  const canvas = document.getElementById('graphCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  const width = rect.width;
  const height = rect.height;

  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, width, height);

  const originX = width / 2;
  const originY = height / 2;
  const scale = 14;

  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 1;
  for (let x = originX % scale; x < width; x += scale) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
  }
  for (let y = originY % scale; y < height; y += scale) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
  }

  ctx.strokeStyle = '#64748B';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = 'bold 11px "M PLUS Rounded 1c"';
  ctx.fillText('x', width - 12, originY - 6);
  ctx.fillText('y', originX + 6, 12);
  ctx.fillText('O', originX - 12, originY + 12);

  if (graphData && typeof graphData.a === 'number') {
    const a = graphData.a;
    const b = graphData.b;

    ctx.strokeStyle = '#FF4747';
    ctx.lineWidth = 3.5;
    ctx.beginPath();

    const xMin = -originX / scale;
    const xMax = (width - originX) / scale;
    const yMin = a * xMin + b;
    const yMax = a * xMax + b;

    ctx.moveTo(0, originY - yMin * scale);
    ctx.lineTo(width, originY - yMax * scale);
    ctx.stroke();

    const interceptScreenY = originY - b * scale;
    if (interceptScreenY >= 0 && interceptScreenY <= height) {
      ctx.fillStyle = '#8B5CF6';
      ctx.beginPath();
      ctx.arc(originX, interceptScreenY, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function openKeypadModal(blankId) {
  try { sounds.playTap(); } catch(e){}
  activeBlankId = blankId;
  keypadValue = userAnswers[blankId] || "";
  updateKeypadDisplay();
  document.getElementById('keypad-sheet').classList.add('active');
}

function closeKeypad() {
  document.getElementById('keypad-sheet').classList.remove('active');
  activeBlankId = null;
}

function pressKey(key) {
  try { sounds.playTap(); } catch(e){}
  if (key === 'BS') {
    keypadValue = keypadValue.slice(0, -1);
  } else if (key === '-') {
    if (keypadValue.startsWith('-')) {
      keypadValue = keypadValue.substring(1);
    } else {
      keypadValue = '-' + keypadValue;
    }
  } else {
    if (keypadValue.length < 5) {
      keypadValue += key;
    }
  }
  updateKeypadDisplay();
}

function updateKeypadDisplay() {
  document.getElementById('keypad-display').innerText = keypadValue || "【 ? 】";
}

function confirmKeypad() {
  try { sounds.playTap(); } catch(e){}
  if (activeBlankId) {
    userAnswers[activeBlankId] = keypadValue;
    const btn = document.querySelector(`[data-blank-id="${activeBlankId}"]`);
    if (btn) {
      if (keypadValue) {
        btn.innerText = keypadValue;
        btn.classList.add('filled');
      } else {
        btn.innerText = "【 ? 】";
        btn.classList.remove('filled');
      }
    }
  }
  closeKeypad();
}

function openChoiceModal(blankId) {
  try { sounds.playTap(); } catch(e){}
  activeBlankId = blankId;
  const q = currentStageQuestions[currentQIdx];
  const blankConfig = q.blanks[blankId];

  const optionsContainer = document.getElementById('choice-options');
  optionsContainer.innerHTML = '';

  blankConfig.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => selectChoice(opt);
    optionsContainer.appendChild(btn);
  });

  openModal('choice-modal');
}

function selectChoice(value) {
  try { sounds.playTap(); } catch(e){}
  if (activeBlankId) {
    userAnswers[activeBlankId] = value;
    const btn = document.querySelector(`[data-blank-id="${activeBlankId}"]`);
    if (btn) {
      btn.innerText = value;
      btn.classList.add('filled');
    }
  }
  closeModal('choice-modal');
  activeBlankId = null;
}

function handleHintClick() {
  try { sounds.playHint(); } catch(e){}
  const q = currentStageQuestions[currentQIdx];
  document.getElementById('hint-modal-title').innerText = `${q.character || 'ポーランドボール'}からのヒント`;
  document.getElementById('hint-modal-body').innerHTML = q.hint1 || '';
  openModal('hint-modal');
}

function normalizeAnswer(val) {
  if (val === undefined || val === null) return "";
  return String(val)
    .trim()
    .replace(/\s+/g, '')
    .replace(/[（\(]/g, '(')
    .replace(/[）\)]/g, ')')
    .replace(/ー/g, '-');
}

// ★正解ポイント蓄積制 (5ptで1チケット必ず付与)★
function handleSubmitClick() {
  try {
    const q = currentStageQuestions[currentQIdx];
    if (!q || !q.blanks) return;

    const blankKeys = Object.keys(q.blanks);

    let allFilled = true;
    blankKeys.forEach(k => {
      const uVal = userAnswers[k];
      if (uVal === undefined || uVal === null || String(uVal).trim() === "") {
        allFilled = false;
      }
    });

    if (!allFilled) {
      try { sounds.playRetry(); } catch(e){}
      alert("空欄をタップして、ぜんぶの数字や言葉を入れてね！");
      return;
    }

    let isCorrect = true;
    blankKeys.forEach(k => {
      const userNorm = normalizeAnswer(userAnswers[k]);
      const correctNorm = normalizeAnswer(q.blanks[k].correct);
      if (userNorm !== correctNorm) {
        isCorrect = false;
      }
    });

    const nextBtn = document.getElementById('result-modal-next-btn');

    if (isCorrect) {
      try { sounds.playSuccess(); } catch(e){}
      starCount += 10;
      solvedCount++;
      ticketPoints++; // 1正解につき1ポイント！

      let ticketEarnedNotice = "";
      // 5ポイント貯まったら必ずガチャチケット1枚獲得！
      if (ticketPoints >= 5) {
        gachaTickets++;
        ticketPoints -= 5;
        try { sounds.playFanfare(); } catch(e){}
        ticketEarnedNotice = `
          <div style="background:linear-gradient(135deg, #F59E0B 0%, #D97706 100%); color:white; border:3px solid #FEF3C7; padding:14px; border-radius:16px; font-weight:900; margin-top:12px; box-shadow:0 6px 16px rgba(245,158,11,0.4); animation:celebrate 0.5s ease; text-align:center;">
            🎉 5問正解達成！ ガチャチケット1枚GET！！<br>
            <span style="font-size:1.1rem; color:#FEF3C7;">🎟️ 所持チケット: ${gachaTickets}枚</span>
          </div>
        `;
      } else {
        const remaining = 5 - ticketPoints;
        ticketEarnedNotice = `
          <div style="background:#F1F5F9; color:#475569; padding:10px; border-radius:14px; font-weight:800; font-size:0.9rem; margin-top:10px; text-align:center;">
            🎫 チケットポイント: <b>${ticketPoints} / 5</b> ⭐<br>
            <span style="color:#D97706;">(あと <b>${remaining}</b> 問正解でチケットGET！)</span>
          </div>
        `;
      }

      saveStats();
      updateHeaderStats();

      document.getElementById('result-modal-icon').innerText = "🎉";
      document.getElementById('result-modal-title').innerText = "Kurwa! 大正解！！";
      document.getElementById('result-modal-body').innerHTML = `
        <p style="color: var(--success); font-size: 1.3rem; font-weight:900; margin-bottom:10px;">⭐ スター10個ゲット！ (通算 ${solvedCount} 問正解)</p>
        ${ticketEarnedNotice}
        ${q.explanation || ''}
      `;

      nextBtn.onclick = () => {
        closeModal('result-modal');
        if (currentQIdx < currentStageQuestions.length - 1) {
          currentQIdx++;
          loadQuestion(currentQIdx);
        } else {
          showResultScreen();
        }
      };

      if (currentQIdx === currentStageQuestions.length - 1) {
        nextBtn.innerText = "🏆 コースクリア画面へ！";
      } else {
        nextBtn.innerText = "つぎの問題へ！ ➔";
      }

      openModal('result-modal');

    } else {
      try { sounds.playRetry(); } catch(e){}
      document.getElementById('result-modal-icon').innerText = "🤔";
      document.getElementById('result-modal-title').innerText = "おしい！もう一息！";
      document.getElementById('result-modal-body').innerHTML = `
        <p style="color: #E11D48; font-weight:800; margin-bottom:10px;">ヒントを参考に、もう一度挑戦してみよう！</p>
        <div style="background: #FFF1F2; padding: 12px; border-radius: 12px; border: 1px solid #FECDD3;">
          ${q.hint2 || ''}
        </div>
      `;
      nextBtn.innerText = "もう一度やる！";
      nextBtn.onclick = () => closeModal('result-modal');
      openModal('result-modal');
    }
  } catch (err) {
    if (currentQIdx < currentStageQuestions.length - 1) {
      currentQIdx++;
      loadQuestion(currentQIdx);
    } else {
      showResultScreen();
    }
  }
}

function nextQuestion() {
  closeModal('result-modal');
  if (currentQIdx < currentStageQuestions.length - 1) {
    currentQIdx++;
    loadQuestion(currentQIdx);
  } else {
    showResultScreen();
  }
}

function showResultScreen() {
  try { sounds.playFanfare(); } catch(e){}
  document.getElementById('quiz-play-screen').style.display = 'none';

  const resultScreen = document.getElementById('result-screen');
  resultScreen.style.display = 'flex';

  document.getElementById('result-title').innerText = "🎉 コースクリア！おめでとう！";
  document.getElementById('result-desc').innerText = `全 ${currentStageQuestions.length} 問クリア！ガチャチケットをゲットしよう！`;
}

function openGachaModal() {
  try { sounds.playTap(); } catch(e){}
  const container = document.getElementById('gacha-card-result-container');
  container.innerHTML = `
    <div id="gacha-pack-cover" onclick="doDrawGacha()" style="cursor: pointer; background: linear-gradient(135deg, #EF4444 0%, #3B82F6 100%); color: white; width: 160px; height: 210px; border-radius: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 900; box-shadow: 0 10px 30px rgba(0,0,0,0.3); animation: float 3s infinite ease-in-out;">
      <span style="font-size: 3.5rem;">📦</span>
      <span>パックをタップ！</span>
    </div>
  `;
  openModal('gacha-modal');
}

function doDrawGacha() {
  if (gachaTickets <= 0) {
    try { sounds.playRetry(); } catch(e){}
    alert("ガチャチケットがありません！問題を解いて5問正解ごとにゲットしてね！");
    return;
  }

  gachaTickets--;
  saveStats();
  updateHeaderStats();

  const result = drawCardGacha();
  const card = result.card;

  if (card.rarity === 'SSR') {
    try { sounds.playFanfare(); } catch(e){}
  } else {
    try { sounds.playSuccess(); } catch(e){}
  }

  const container = document.getElementById('gacha-card-result-container');
  container.innerHTML = `
    <div class="gacha-card-result rarity-${card.rarity}">
      <div style="font-size: 0.85rem; font-weight: 900; color: ${card.rarityBorder};">${card.rarityName}</div>
      <div class="pb-card-illustration">${renderCardIllustration(card)}</div>
      <div style="font-size: 1.1rem; font-weight: 900;">${card.title}</div>
      <div style="font-size: 0.8rem; opacity: 0.9;">${card.desc}</div>
      ${result.isNew ? '<div style="background:#EF4444; color:white; font-weight:900; font-size:0.8rem; padding:2px 10px; border-radius:50px;">NEW!</div>' : ''}
    </div>
  `;
}

let currentCollectionFilter = 'ALL';

function openCardCollectionModal() {
  try { sounds.playTap(); } catch(e){}
  try {
    renderCardCollectionGrid();
  } catch (e) {}
  openModal('collection-modal');
}

function filterCardCollection(filter) {
  try { sounds.playTap(); } catch(e){}
  currentCollectionFilter = filter;

  document.querySelectorAll('.rarity-tabs .tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.includes(filter) || (filter === 'ALL' && btn.innerText === 'すべて')) {
      btn.classList.add('active');
    }
  });

  renderCardCollectionGrid();
}

function renderCardCollectionGrid() {
  try {
    const stats = getCardCollectionStats();
    const statsTextEl = document.getElementById('collection-stats-text');
    if (statsTextEl) {
      statsTextEl.innerText = `${stats.ownedCount} / ${stats.totalCount} 枚 (${stats.percent}%)`;
    }

    const container = document.getElementById('card-collection-grid');
    if (!container) return;
    container.innerHTML = '';

    let list = CARD_DATABASE || [];
    if (currentCollectionFilter !== 'ALL') {
      list = CARD_DATABASE.filter(c => c.rarity === currentCollectionFilter);
    }

    list.forEach(card => {
      const isOwned = !!(userOwnedCards && userOwnedCards[card.id]);
      const count = (userOwnedCards && userOwnedCards[card.id]) || 0;

      const item = document.createElement('div');
      item.className = `pb-card-item ${isOwned ? '' : 'unowned'}`;
      item.style.background = card.rarityBg || '#F1F5F9';
      item.style.border = `3px solid ${card.rarityBorder || '#64748B'}`;

      item.innerHTML = `
        <div class="pb-card-rarity" style="background: ${card.rarityBorder || '#64748B'};">${card.rarity}</div>
        <div class="pb-card-illustration">${renderCardIllustration(card)}</div>
        <div class="pb-card-title">${card.countryName}</div>
        ${isOwned ? `<div style="font-size: 0.7rem; font-weight: 800; color: #475569;">x${count}枚</div>` : '<div style="font-size: 0.75rem; color:#94A3B8;">未獲得</div>'}
      `;
      container.appendChild(item);
    });
  } catch (err) {}
}

function renderCardIllustration(card) {
  if (!card) return '';
  if (card.image) {
    return `<img src="${card.image}" alt="${card.countryName || ''}" style="width:76px; height:76px; border-radius:50%; border:3px solid white; box-shadow:0 6px 14px rgba(0,0,0,0.2); object-fit:cover;">`;
  } else {
    return `
      <div class="pb-sphere-graphic" style="background:${card.bgStyle || '#DC2626'};">
        <div class="pb-eyes-wrapper">
          <div class="pb-eye-left"></div>
          <div class="pb-eye-right"></div>
        </div>
      </div>
    `;
  }
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    el.style.display = 'flex';
  }
}

function closeModal(id) {
  try { sounds.playTap(); } catch(e){}
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('active');
    el.style.display = 'none';
  }
}
