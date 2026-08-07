// メインアプリケーションロジック (全46問・ステージ機能付き)
let currentStageQuestions = [];
let currentQIdx = 0;
let userAnswers = {};
let activeBlankId = null;
let starCount = 0;
let keypadValue = "";
let currentStageId = 1;

// ページロード時の初期化
window.addEventListener('DOMContentLoaded', () => {
  renderStageGrid();
  showStageSelect();
});

// ステージ選択画面の生成
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

// コース選択画面を表示
function showStageSelect() {
  sounds.playTap();
  document.getElementById('stage-select-screen').style.display = 'flex';
  document.getElementById('quiz-play-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
}

// 特定ステージのクイズを開始
function startStage(stageId) {
  sounds.playTap();
  currentStageId = stageId;

  if (stageId === 5) {
    // ステージ5（ファイナル）：全46問からランダム/全問題
    currentStageQuestions = QUESTIONS;
  } else {
    // ステージ1〜4
    currentStageQuestions = QUESTIONS.filter(q => q.stage === stageId);
  }

  currentQIdx = 0;
  document.getElementById('stage-select-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-play-screen').style.display = 'flex';

  loadQuestion(currentQIdx);
}

// 問題のロード
function loadQuestion(index) {
  const q = currentStageQuestions[index];
  userAnswers = {};
  activeBlankId = null;
  keypadValue = "";

  // 進捗更新
  const progressPercent = ((index + 1) / currentStageQuestions.length) * 100;
  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('progress-text').innerText = `第 ${index + 1} / ${currentStageQuestions.length} 問`;

  // キャラクター＆セリフ
  const banner = document.getElementById('char-banner');
  banner.style.background = q.bgGradient;
  document.getElementById('char-avatar').src = q.avatar;
  document.getElementById('char-speech').innerHTML = `<b>${q.flag} ${q.character}:</b> 「${q.dialog}」`;

  // タイトル＆説明
  document.getElementById('q-title').innerHTML = `${q.flag} ${q.title}`;
  document.getElementById('q-desc').innerHTML = q.description;

  // 数式・穴埋め表示
  document.getElementById('q-equation-area').innerHTML = q.equationDisplay;

  // グラフ描画
  renderGraph(q.graphData);
}

// Canvas グラフ描画機能
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

  // 背景
  ctx.fillStyle = '#FAFAFA';
  ctx.fillRect(0, 0, width, height);

  // 座標軸 (原点: 中央)
  const originX = width / 2;
  const originY = height / 2;
  const scale = 14; // ピクセル倍率

  // グリッド線
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 1;
  for (let x = originX % scale; x < width; x += scale) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
  }
  for (let y = originY % scale; y < height; y += scale) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
  }

  // x軸・y軸
  ctx.strokeStyle = '#64748B';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(width, originY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(originX, 0); ctx.lineTo(originX, height); ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = 'bold 11px "M PLUS Rounded 1c"';
  ctx.fillText('x', width - 12, originY - 6);
  ctx.fillText('y', originX + 6, 12);
  ctx.fillText('O', originX - 12, originY + 12);

  // 一次関数の直線描画 y = ax + b
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

    // 切片 (0, b) の強点
    const interceptScreenY = originY - b * scale;
    if (interceptScreenY >= 0 && interceptScreenY <= height) {
      ctx.fillStyle = '#8B5CF6';
      ctx.beginPath();
      ctx.arc(originX, interceptScreenY, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 指定点
    if (graphData.type === 'point' && typeof graphData.pointX === 'number') {
      const ptScreenX = originX + graphData.pointX * scale;
      const ptScreenY = originY - graphData.pointY * scale;
      if (ptScreenX >= 0 && ptScreenX <= width && ptScreenY >= 0 && ptScreenY <= height) {
        ctx.fillStyle = '#3B82F6';
        ctx.beginPath();
        ctx.arc(ptScreenX, ptScreenY, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

// --------------------------------------------------
// iPadテンキー＆選択肢モーダル操作
// --------------------------------------------------

function openKeypadModal(blankId) {
  sounds.playTap();
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
  sounds.playTap();
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
  sounds.playTap();
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

// 選択肢モーダル
function openChoiceModal(blankId) {
  sounds.playTap();
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
  sounds.playTap();
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

// --------------------------------------------------
// ② 「わからない」ボタン（ヒントモーダル）
// --------------------------------------------------
function handleHintClick() {
  sounds.playHint();
  const q = currentStageQuestions[currentQIdx];
  document.getElementById('hint-modal-title').innerText = `${q.character}からのヒント`;
  document.getElementById('hint-modal-body').innerHTML = q.hint1;
  openModal('hint-modal');
}

// --------------------------------------------------
// ③ 「解答する！」ボタン（正誤判定）
// --------------------------------------------------
function handleSubmitClick() {
  const q = currentStageQuestions[currentQIdx];
  const blankKeys = Object.keys(q.blanks);

  // 空欄チェック
  let allFilled = true;
  blankKeys.forEach(k => {
    if (!userAnswers[k] || userAnswers[k].trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    sounds.playRetry();
    alert("空欄をタップして、ぜんぶの数字や言葉を入れてね！");
    return;
  }

  // 正誤判定
  let isCorrect = true;
  blankKeys.forEach(k => {
    if (userAnswers[k] !== q.blanks[k].correct) {
      isCorrect = false;
    }
  });

  if (isCorrect) {
    // 正解！
    sounds.playSuccess();
    starCount += 10;
    document.getElementById('star-count').innerText = starCount;

    document.getElementById('result-modal-icon').innerText = "🎉";
    document.getElementById('result-modal-title').innerText = "Kurwa! 大正解！！";
    document.getElementById('result-modal-body').innerHTML = `
      <p style="color: var(--success); font-size: 1.3rem; font-weight:900; margin-bottom:10px;">⭐ スター10個ゲット！</p>
      ${q.explanation}
    `;

    if (currentQIdx === currentStageQuestions.length - 1) {
      document.getElementById('result-modal-next-btn').innerText = "🏆 コースクリア画面へ！";
    } else {
      document.getElementById('result-modal-next-btn').innerText = "つぎの問題へ！ ➔";
    }

    openModal('result-modal');

  } else {
    // 不正解
    sounds.playRetry();
    document.getElementById('result-modal-icon').innerText = "🤔";
    document.getElementById('result-modal-title').innerText = "おしい！もう一息！";
    document.getElementById('result-modal-body').innerHTML = `
      <p style="color: #E11D48; font-weight:800; margin-bottom:10px;">ヒントを参考に、もう一度挑戦してみよう！</p>
      <div style="background: #FFF1F2; padding: 12px; border-radius: 12px; border: 1px solid #FECDD3;">
        ${q.hint2}
      </div>
    `;
    document.getElementById('result-modal-next-btn').innerText = "もう一度やる！";
    document.getElementById('result-modal-next-btn').onclick = () => closeModal('result-modal');
    openModal('result-modal');
  }
}

// 次の問題へ
function nextQuestion() {
  closeModal('result-modal');
  document.getElementById('result-modal-next-btn').onclick = nextQuestion;

  if (currentQIdx < currentStageQuestions.length - 1) {
    currentQIdx++;
    loadQuestion(currentQIdx);
  } else {
    showResultScreen();
  }
}

// 結果画面の表示
function showResultScreen() {
  sounds.playFanfare();
  document.getElementById('quiz-play-screen').style.display = 'none';

  const resultScreen = document.getElementById('result-screen');
  resultScreen.style.display = 'flex';

  document.getElementById('result-title').innerText = "🎉 コースクリア！おめでとう！";
  document.getElementById('result-desc').innerText = `全 ${currentStageQuestions.length} 問クリア！君は一次関数のマスターだ！`;

  // バッジ一覧
  const badgeGrid = document.getElementById('badge-grid');
  badgeGrid.innerHTML = '';
  BADGES.forEach(badge => {
    const item = document.createElement('div');
    item.className = 'badge-item celebrate-anim';
    item.innerHTML = `
      <div class="badge-flag">${badge.flag}</div>
      <div class="badge-name">${badge.name}</div>
    `;
    badgeGrid.appendChild(item);
  });
}

// モーダルユーティリティ
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { sounds.playTap(); document.getElementById(id).classList.remove('active'); }
