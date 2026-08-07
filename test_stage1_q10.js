// 自動テストスクリプト: v2 ファイル対応版
const fs = require('fs');

const dummyElements = {
  'collection-percent': { innerText: '' },
  'ticket-count': { innerText: '' },
  'star-count': { innerText: '' },
  'stage-grid': { innerHTML: '', appendChild: () => {} },
  'stage-select-screen': { style: { display: '' } },
  'quiz-play-screen': { style: { display: '' } },
  'result-screen': { style: { display: '' } },
  'progress-fill': { style: { width: '' } },
  'progress-text': { innerText: '' },
  'char-banner': { style: { background: '' } },
  'char-avatar': { src: '' },
  'char-speech': { innerHTML: '' },
  'q-title': { innerHTML: '' },
  'q-desc': { innerHTML: '' },
  'q-equation-area': { innerHTML: '' },
  'graphCanvas': { 
    getContext: () => ({ 
      scale:()=>{}, fillStyle:'', fillRect:()=>{}, strokeStyle:'', lineWidth:1, beginPath:()=>{}, moveTo:()=>{}, lineTo:()=>{}, stroke:()=>{}, fillText:()=>{}, arc:()=>{}, fill:()=>{} 
    }), 
    getBoundingClientRect: () => ({ width: 400, height: 300 }) 
  },
  'keypad-sheet': { classList: { add: ()=>{}, remove: ()=>{} } },
  'keypad-display': { innerText: '' },
  'choice-options': { innerHTML: '' },
  'hint-modal-title': { innerText: '' },
  'hint-modal-body': { innerHTML: '' },
  'result-modal-icon': { innerText: '' },
  'result-modal-title': { innerText: '' },
  'result-modal-body': { innerHTML: '' },
  'result-modal-next-btn': { innerText: '', onclick: null },
  'result-title': { innerText: '' },
  'result-desc': { innerHTML: '' },
  'gacha-card-result-container': { innerHTML: '' },
  'collection-stats-text': { innerText: '' },
  'card-collection-grid': { innerHTML: '', appendChild: () => {} }
};

const localStorageStore = {};
global.window = {
  devicePixelRatio: 1,
  addEventListener: () => {},
  document: {
    readyState: 'complete',
    addEventListener: () => {},
    getElementById: (id) => dummyElements[id] || { style: {}, innerText: '', innerHTML: '', classList: { add:()=>{}, remove:()=>{} } },
    querySelector: () => ({ innerText: '' }),
    querySelectorAll: () => []
  },
  localStorage: {
    getItem: (key) => localStorageStore[key] || null,
    setItem: (key, val) => { localStorageStore[key] = String(val); }
  }
};
global.document = global.window.document;
global.localStorage = global.window.localStorage;
global.sounds = { playTap:()=>{}, playSuccess:()=>{}, playRetry:()=>{}, playFanfare:()=>{} };

let questionsCode = fs.readFileSync('c:/Users/hoshi/.gemini/antigravity/scratch/蒼の問題作成アプリ/questions_v2.js', 'utf8');
let cardsCode = fs.readFileSync('c:/Users/hoshi/.gemini/antigravity/scratch/蒼の問題作成アプリ/cards_v2.js', 'utf8');
let appCode = fs.readFileSync('c:/Users/hoshi/.gemini/antigravity/scratch/蒼の問題作成アプリ/app_v2.js', 'utf8');

eval(questionsCode);
eval(cardsCode);
eval(appCode);

try {
  console.log("=== 1. 初期化テスト ===");
  initApp();
  console.log("・初期チケット数:", gachaTickets);

  console.log("\n=== 2. ステージ1開始 ===");
  startStage(1);
  console.log("・ステージ1問題数:", currentStageQuestions.length);

  console.log("\n=== 3. 第10問まで移動 (インデックス 9) ===");
  currentQIdx = 9;
  loadQuestion(9);
  console.log("・第10問タイトル:", dummyElements['q-title'].innerHTML);

  console.log("\n=== 4. 解答入力 (傾き -6, 切片 10) ===");
  userAnswers = { b1: "-6", b2: "10" };

  console.log("\n=== 5. 「解答する！」ボタン押下実行 ===");
  const ticketBefore = gachaTickets;
  handleSubmitClick();
  const ticketAfter = gachaTickets;

  console.log("\n-------------------------------------------");
  console.log("【100%自動検証テスト結果 (v2)】");
  console.log("・解答前チケット数:", ticketBefore);
  console.log("・解答後チケット数:", ticketAfter);
  console.log("・チケット加算検証 (+1枚):", ticketAfter === ticketBefore + 1 ? "PASSED ✅ (正常に1枚増えました！)" : "FAILED ❌");
  console.log("・クイズ画面非表示化 (display:none):", dummyElements['quiz-play-screen'].style.display === 'none' ? "PASSED ✅" : "FAILED ❌");
  console.log("・コース完了画面表示化 (display:flex):", dummyElements['result-screen'].style.display === 'flex' ? "PASSED ✅" : "FAILED ❌");
  console.log("・コース完了タイトル:", dummyElements['result-title'].innerText);
  console.log("・チケット獲得バナー文面:", dummyElements['result-desc'].innerHTML.replace(/<[^>]+>/g, ' ').trim());
  console.log("-------------------------------------------\n");

  console.log("=== 6. トップ画面戻りテスト ===");
  forceGoHome();
  console.log("・トップ画面表示化 (display:flex):", dummyElements['stage-select-screen'].style.display === 'flex' ? "PASSED ✅ (トップへ戻りました！)" : "FAILED ❌");

} catch (err) {
  console.error("テスト実行エラー:", err);
}
