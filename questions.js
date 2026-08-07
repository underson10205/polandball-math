// ポーランドボールの一次関数（レベル1）問題データ - 全46問拡張版

const QUESTIONS = [
  // ==========================================
  // 【ステージ1】一次関数の基本・傾きと切片（第1問〜第10問）
  // ==========================================
  {
    id: 1, stage: 1, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)",
    dialog: "Kurwa! 一次関数のきほんの形を覚えるよ！",
    title: "第1問：一次関数の【名前】を覚えよう！",
    description: "一次関数は <b>y = ax + b</b> という決まった形をしているんだ！<br>それぞれの数字や文字に名前がついているよ。",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">a</span>x + <span class="highlight-b">b</span></div>
        <div class="math-labels">
          <div class="label-box"><span>a の名前:</span> <button class="blank-btn" data-blank-id="b1" onclick="openChoiceModal('b1')">【 えらんでね 】</button></div>
          <div class="label-box"><span>b の名前:</span> <button class="blank-btn" data-blank-id="b2" onclick="openChoiceModal('b2')">【 えらんでね 】</button></div>
        </div>
      </div>`,
    blanks: {
      b1: { correct: "傾き（変化の割合）", options: ["傾き（変化の割合）", "切片", "原点", "比例"] },
      b2: { correct: "切片", options: ["傾き（変化の割合）", "切片", "座標", "定数"] }
    },
    graphData: { type: "static", a: 2, b: 1 },
    hint1: "💡 <b>ポーランドからのヒント！</b><br>・xの前の数字 <b>a</b> は「傾き（変化の割合）」！<br>・うしろの数字 <b>b</b> は「切片」だよ！",
    hint2: "おしい！xにくっついてるのが「傾き」、うしろが「切片」だよ！",
    explanation: "✨ <b>解説</b><br>y = ax + b において、a は「傾き（変化の割合）」、b は「切片」です！"
  },
  {
    id: 2, stage: 1, character: "日本ボール", avatar: "images/japanball.jpg", flag: "🇯🇵",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    dialog: "y = 3x + 5 の 傾きと切片を見つけよう！",
    title: "第2問：傾きと切片はどれかな？",
    description: "式 <b>y = 3x + 5</b> の「傾き」と「切片」を答えよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">3</span>x + <span class="highlight-b">5</span></div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "3", type: "number" }, b2: { correct: "5", type: "number" } },
    graphData: { type: "static", a: 3, b: 5 },
    hint1: "💡 <b>日本ボールからのヒント！</b><br>xの前にある数字が「傾き」、後ろにある数字が「切片」だよ！",
    hint2: "おしい！3が傾きで、5が切片だよ！",
    explanation: "✨ <b>解説</b><br>y = 3x + 5 では、xの係数 3 が「傾き」、定数項 5 が「切片」です！"
  },
  {
    id: 3, stage: 1, character: "アメリカボール", avatar: "images/usaball.jpg", flag: "🇺🇸",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    dialog: "マイナスがついた式だゼ！落ち着いて見極めよう！",
    title: "第3問：マイナスがある式の切片！",
    description: "式 <b>y = 4x - 7</b> の「切片」はいくつかな？符号にも注意しよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4x <span class="highlight-b">- 7</span></div>
        <div class="math-labels">
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-7", type: "number" } },
    graphData: { type: "static", a: 4, b: -7 },
    hint1: "💡 <b>アメリカボールからのヒント！</b><br>「- 7」のように引き算になっているときは、切片はマイナスの数字（-7）になるよ！「ー」キーを使ってね！",
    hint2: "おしい！マイナスを忘れないでね。切片は「-7」だよ！",
    explanation: "✨ <b>解説</b><br>y = 4x - 7 の切片は符号を含めて <b>-7</b> です！"
  },
  {
    id: 4, stage: 1, character: "ドイツボール", avatar: "images/polandball.jpg", flag: "🇩🇪",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    dialog: "傾きがマイナスの式を分析するぞ！",
    title: "第4問：傾きがマイナスの式！",
    description: "式 <b>y = -2x + 9</b> の「傾き」はいくつかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">-2</span>x + 9</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-2", type: "number" } },
    graphData: { type: "static", a: -2, b: 9 },
    hint1: "💡 <b>ドイツボールからのヒント！</b><br>xの前についている数字「-2」がそのまま傾きになるぞ！",
    hint2: "おしい！「ー」ボタンを押してから「2」と入れよう！",
    explanation: "✨ <b>解説</b><br>y = -2x + 9 の傾きは <b>-2</b> です！右下がりの直線になるよ！"
  },
  {
    id: 5, stage: 1, character: "イギリスボール", avatar: "images/polandball.jpg", flag: "🇬🇧",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    dialog: "切片がない（0の）式について学びましょう。",
    title: "第5問：切片が隠れている式？",
    description: "式 <b>y = 5x</b> の「切片」はいくつかな？（後ろに何もついていないよ）",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 5x <span class="highlight-b">（ ＋ 0 ）</span></div>
        <div class="math-labels">
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "0", type: "number" } },
    graphData: { type: "static", a: 5, b: 0 },
    hint1: "💡 <b>イギリスボールからのヒント！</b><br>後ろに何も足されていないということは、切片は「0」ということですね！原点を通る比例の式です。",
    hint2: "おしい！何もついていないときは「0」を入力してね！",
    explanation: "✨ <b>解説</b><br>y = 5x は y = 5x + 0 と同じなので、切片は <b>0</b> です！"
  },
  {
    id: 6, stage: 1, character: "フランスボール", avatar: "images/polandball.jpg", flag: "🇫🇷",
    bgGradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    dialog: "Bonjour! xの前に数字がない時はどうするのかな？",
    title: "第6問：xの前に数字がない式の傾き！",
    description: "式 <b>y = x + 4</b> の「傾き」はいくつかな？（1xの1が省略されているよ）",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">1</span>x + 4</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "1", type: "number" } },
    graphData: { type: "static", a: 1, b: 4 },
    hint1: "💡 <b>フランスからのヒント！</b><br>ただの「x」は「1 × x」のことだから、傾きは「1」だよ！",
    hint2: "おしい！xの前の隠れた数字は「1」だよ！",
    explanation: "✨ <b>解説</b><br>y = x + 4 は y = 1x + 4 のことなので、傾きは <b>1</b> です！"
  },
  {
    id: 7, stage: 1, character: "イタリアボール", avatar: "images/polandball.jpg", flag: "🇮🇹",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    dialog: "Ciao! -x の場合の傾きを答えてね！ピッツァ！",
    title: "第7問：-x の式の傾き！",
    description: "式 <b>y = -x + 3</b> の「傾き」はいくつかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">-1</span>x + 3</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-1", type: "number" } },
    graphData: { type: "static", a: -1, b: 3 },
    hint1: "💡 <b>イタリアからのヒント！</b><br>「-x」は「-1 × x」のこと！だから傾きは「-1」だよ！",
    hint2: "おしい！マイナスがついた隠れ1なので「-1」だよ！",
    explanation: "✨ <b>解説</b><br>y = -x + 3 の傾きは <b>-1</b> です！"
  },
  {
    id: 8, stage: 1, character: "韓国ボール", avatar: "images/polandball.jpg", flag: "🇰🇷",
    bgGradient: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)",
    dialog: "アンニョン！順番が逆になっている式に気をつけて！",
    title: "第8問：順番が逆になっている式！",
    description: "式 <b>y = 8 + 2x</b> の「傾き」と「切片」はどれかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-b">8</span> + <span class="highlight-a">2</span>x</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "2", type: "number" }, b2: { correct: "8", type: "number" } },
    graphData: { type: "static", a: 2, b: 8 },
    hint1: "💡 <b>韓国ボールからのヒント！</b><br>順番が入れ替わっていても、<b>xにくっついている「2」が傾き</b>、単独の「8」が切片だよ！",
    hint2: "おしい！xがついている方が傾き（2）、ついていない方が切片（8）だよ！",
    explanation: "✨ <b>解説</b><br>y = 8 + 2x は y = 2x + 8 と同じ！傾きは <b>2</b>、切片は <b>8</b> です！"
  },
  {
    id: 9, stage: 1, character: "カナダボール", avatar: "images/polandball.jpg", flag: "🇨🇦",
    bgGradient: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)",
    dialog: "Eh! 両方マイナスの式に挑戦だ！",
    title: "第9問：両方マイナスの式！",
    description: "式 <b>y = -3x - 5</b> の「傾き」と「切片」を答えよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -3x - 5</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-3", type: "number" }, b2: { correct: "-5", type: "number" } },
    graphData: { type: "static", a: -3, b: -5 },
    hint1: "💡 <b>カナダからのヒント！</b><br>両方にマイナスがついているよ！傾きは「-3」、切片は「-5」だね！",
    hint2: "おしい！マイナスを忘れずに両方に入れてね！",
    explanation: "✨ <b>解説</b><br>傾きは <b>-3</b>、切片は <b>-5</b> です！"
  },
  {
    id: 10, stage: 1, character: "ブラジルボール", avatar: "images/polandball.jpg", flag: "🇧🇷",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #F59E0B 100%)",
    dialog: "ステージ1の総まとめ問題だ！サンバ！",
    title: "第10問：ステージ1ラスト！",
    description: "式 <b>y = -6x + 10</b> の「傾き」と「切片」をバシッと決めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -6x + 10</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き a ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
          <div class="label-box"><span>切片 b ＝</span> <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-6", type: "number" }, b2: { correct: "10", type: "number" } },
    graphData: { type: "static", a: -6, b: 10 },
    hint1: "💡 <b>ブラジルからのヒント！</b><br>xの前の数が「傾き a」、うしろの数が「切片 b」だよ！",
    hint2: "傾きは -6、切片は 10 だよ！",
    explanation: "✨ <b>解説</b><br>大正解！傾き a = -6、切片 b = 10 だね！"
  }
];

// ステージ定義
const STAGES = [
  { id: 1, name: "ステージ1：傾きと切片", icon: "📐", range: "第1〜10問", color: "#FF4B4B" },
  { id: 2, name: "ステージ2：代入計算", icon: "🔢", range: "第11〜20問", color: "#3B82F6" },
  { id: 3, name: "ステージ3：表と変化の割合", icon: "📊", range: "第21〜30問", color: "#10B981" },
  { id: 4, name: "ステージ4：グラフと文章題", icon: "🚶", range: "第31〜40問", color: "#8B5CF6" },
  { id: 5, name: "ステージ5：ファイナル挑戦", icon: "👑", range: "第41〜46問", color: "#F59E0B" }
];

if (typeof window !== 'undefined') {
  window.QUESTIONS = QUESTIONS;
  window.STAGES = STAGES;
}
