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
    hint1: "💡 <b>ブラジルからのヒント！</b><br>傾き＝-6、切片＝10 だよ！パーフェクトを目指そう！",
    hint2: "おしい！傾きに -6、切片に 10 を入れてね！",
    explanation: "✨ <b>解説</b><br>傾き <b>-6</b>、切片 <b>10</b>！ステージ1クリアおめでとう！"
  },

  // ==========================================
  // 【ステージ2】代入計算マスター（第11問〜第20問）
  // ==========================================
  {
    id: 11, stage: 2, character: "日本ボール", avatar: "images/japanball.jpg", flag: "🇯🇵",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    dialog: "x = 4 を代入して y を計算しよう！",
    title: "第11問：x に数字を入れて計算！",
    description: "式 <b>y = 2x + 3</b> で <b>x = 4</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 2 × <b>4</b> + 3 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "11", type: "number" } },
    graphData: { type: "point", a: 2, b: 3, pointX: 4, pointY: 11 },
    hint1: "💡 <b>ヒント！</b><br>2 × 4 = 8。それに 3 を足すと...？",
    hint2: "8 + 3 の計算だよ！答えは 11 だよ！",
    explanation: "✨ <b>解説</b><br>2 × 4 + 3 = 8 + 3 = <b>11</b> です！"
  },
  {
    id: 12, stage: 2, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)",
    dialog: "x = 5 のときの計算だよ！Kurwa!",
    title: "第12問：y = 3x - 2 に代入！",
    description: "式 <b>y = 3x - 2</b> で <b>x = 5</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 3 × <b>5</b> - 2 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "13", type: "number" } },
    graphData: { type: "point", a: 3, b: -2, pointX: 5, pointY: 13 },
    hint1: "💡 <b>ヒント！</b><br>3 × 5 = 15。そこから 2 を引こう！",
    hint2: "15 - 2 = 13 だよ！",
    explanation: "✨ <b>解説</b><br>3 × 5 - 2 = 15 - 2 = <b>13</b> です！"
  },
  {
    id: 13, stage: 2, character: "アメリカボール", avatar: "images/usaball.jpg", flag: "🇺🇸",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    dialog: "x = 0 のときは超簡単だゼ！",
    title: "第13問：x = 0 を代入！",
    description: "式 <b>y = 7x + 4</b> で <b>x = 0</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 7 × <b>0</b> + 4 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "4", type: "number" } },
    graphData: { type: "point", a: 7, b: 4, pointX: 0, pointY: 4 },
    hint1: "💡 <b>ヒント！</b><br>7 × 0 は 0 になるよ！残る数字は...？（切片と同じだね！）",
    hint2: "0 + 4 ＝ 4 だよ！",
    explanation: "✨ <b>解説</b><br>x = 0 のときは切片の数字がそのまま y の値になります！答えは <b>4</b>！"
  },
  {
    id: 14, stage: 2, character: "ドイツボール", avatar: "images/polandball.jpg", flag: "🇩🇪",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    dialog: "x = 1 を代入する！",
    title: "第14問：x = 1 の計算！",
    description: "式 <b>y = 4x + 6</b> で <b>x = 1</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4 × <b>1</b> + 6 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "10", type: "number" } },
    graphData: { type: "point", a: 4, b: 6, pointX: 1, pointY: 10 },
    hint1: "💡 <b>ヒント！</b><br>4 × 1 = 4。それに 6 を足そう！",
    hint2: "4 + 6 = 10 だよ！",
    explanation: "✨ <b>解説</b><br>4 × 1 + 6 = 4 + 6 = <b>10</b> です！"
  },
  {
    id: 15, stage: 2, character: "イギリスボール", avatar: "images/polandball.jpg", flag: "🇬🇧",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    dialog: "マイナスの掛け算が入ります。",
    title: "第15問：傾きがマイナスの代入！",
    description: "式 <b>y = -2x + 10</b> で <b>x = 3</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -2 × <b>3</b> + 10 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "4", type: "number" } },
    graphData: { type: "point", a: -2, b: 10, pointX: 3, pointY: 4 },
    hint1: "💡 <b>ヒント！</b><br>-2 × 3 = -6 です。-6 に 10 を足すと...？",
    hint2: "-6 + 10 = 4 になるよ！",
    explanation: "✨ <b>解説</b><br>-2 × 3 + 10 = -6 + 10 = <b>4</b> です！"
  },
  {
    id: 16, stage: 2, character: "オーストラリアボール", avatar: "images/polandball.jpg", flag: "🇦🇺",
    bgGradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    dialog: "G'day! 今度は y の値から x を逆算してみよう！",
    title: "第16问：y から x を逆算しよう！",
    description: "式 <b>y = 2x + 1</b> で <b>y = 7</b> のとき、<b>x</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq"><b>7</b> = 2x + 1</div>
        <div class="substitute-box"><p>2x = 6 だから x は...？</p> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "3", type: "number" } },
    graphData: { type: "point", a: 2, b: 1, pointX: 3, pointY: 7 },
    hint1: "💡 <b>ヒント！</b><br>2 × <b>？</b> + 1 = 7 になる数字を考えよう！2 × 3 ＝ 6 だね！",
    hint2: "2 × 3 + 1 ＝ 7 だから x = 3 だよ！",
    explanation: "✨ <b>解説</b><br>7 = 2x + 1 → 2x = 6 → x = <b>3</b> です！"
  },
  {
    id: 17, stage: 2, character: "韓国ボール", avatar: "images/polandball.jpg", flag: "🇰🇷",
    bgGradient: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)",
    dialog: "x = 6 の代入計算です！ファイティン！",
    title: "第17問：x = 6 を代入！",
    description: "式 <b>y = 5x - 4</b> で <b>x = 6</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 5 × <b>6</b> - 4 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "26", type: "number" } },
    graphData: { type: "point", a: 5, b: -4, pointX: 6, pointY: 26 },
    hint1: "💡 <b>ヒント！</b><br>5 × 6 = 30。30 から 4 を引くと...？",
    hint2: "30 - 4 = 26 だよ！",
    explanation: "✨ <b>解説</b><br>5 × 6 - 4 = 30 - 4 = <b>26</b> です！"
  },
  {
    id: 18, stage: 2, character: "フランスボール", avatar: "images/polandball.jpg", flag: "🇫🇷",
    bgGradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    dialog: "x = 2 のときの計算だよ！",
    title: "第18問：y = -3x + 8 に代入！",
    description: "式 <b>y = -3x + 8</b> で <b>x = 2</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -3 × <b>2</b> + 8 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "2", type: "number" } },
    graphData: { type: "point", a: -3, b: 8, pointX: 2, pointY: 2 },
    hint1: "💡 <b>ヒント！</b><br>-3 × 2 = -6。-6 に 8 を足すと...？",
    hint2: "-6 + 8 = 2 になるよ！",
    explanation: "✨ <b>解説</b><br>-3 × 2 + 8 = -6 + 8 = <b>2</b> です！"
  },
  {
    id: 19, stage: 2, character: "イタリアボール", avatar: "images/polandball.jpg", flag: "🇮🇹",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    dialog: "x = 10 の大きな数字を代入！",
    title: "第19問：x = 10 の計算！",
    description: "式 <b>y = 4x + 15</b> で <b>x = 10</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4 × <b>10</b> + 15 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "55", type: "number" } },
    graphData: { type: "point", a: 4, b: 15, pointX: 10, pointY: 55 },
    hint1: "💡 <b>ヒント！</b><br>4 × 10 = 40。40 に 15 を足そう！",
    hint2: "40 + 15 = 55 だよ！",
    explanation: "✨ <b>解説</b><br>4 × 10 + 15 = 40 + 15 = <b>55</b> です！"
  },
  {
    id: 20, stage: 2, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dialog: "ステージ2ラスト！Kurwa! 完璧に解こう！",
    title: "第20問：ステージ2クリア問題！",
    description: "式 <b>y = 6x - 7</b> で <b>x = 3</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 6 × <b>3</b> - 7 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "11", type: "number" } },
    graphData: { type: "point", a: 6, b: -7, pointX: 3, pointY: 11 },
    hint1: "💡 <b>ヒント！</b><br>6 × 3 = 18。18 から 7 を引くと...？",
    hint2: "18 - 7 = 11 だよ！",
    explanation: "✨ <b>解説</b><br>6 × 3 - 7 = 18 - 7 = <b>11</b>！ステージ2クリアおめでとう！"
  },

  // ==========================================
  // 【ステージ3】表穴埋め ＆ 変化の割合（第21問〜第30問）
  // ==========================================
  {
    id: 21, stage: 3, character: "アメリカボール", avatar: "images/usaball.jpg", flag: "🇺🇸",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    dialog: "表の空欄を完成させるゼ！",
    title: "第21問：表の穴埋め（y = 3x - 1）",
    description: "一次関数 <b>y = 3x - 1</b> の表の空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 3x - 1</div>
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td></tr>
            <tr><th>y</th><td>-1</td><td>2</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td><td><button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "5", type: "number" }, b2: { correct: "8", type: "number" } },
    graphData: { type: "static", a: 3, b: -1 },
    hint1: "💡 <b>ヒント！</b><br>xが1増えるごとにyは「3」増えるよ！2 + 3 ＝ 5、5 + 3 ＝ 8 だね！",
    hint2: "空欄には 5 と 8 が入るよ！",
    explanation: "✨ <b>解説</b><br>x=2のときy=5、x=3のときy=8 になります！"
  },
  {
    id: 22, stage: 3, character: "ドイツボール", avatar: "images/polandball.jpg", flag: "🇩🇪",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    dialog: "「変化の割合」のルールを覚えているか？",
    title: "第22問：変化の割合ってなに？",
    description: "一次関数 <b>y = 4x + 2</b> において、<b>x が 1 増えると y はいくら増える？</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">4</span>x + 2</div>
        <p>変化の割合 ＝ 傾き a の値！</p>
        <div class="math-eq">y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
      </div>`,
    blanks: { b1: { correct: "4", type: "number" } },
    graphData: { type: "static", a: 4, b: 2 },
    hint1: "💡 <b>ヒント！</b><br>xが1増えたときのyの増え方（変化の割合）は、xの前にある数字「4」そのままだよ！",
    hint2: "答えは 4 だよ！",
    explanation: "✨ <b>解説</b><br>y = 4x + 2 の変化の割合は <b>4</b> です！"
  },
  {
    id: 23, stage: 3, character: "日本ボール", avatar: "images/japanball.jpg", flag: "🇯🇵",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    dialog: "y = 2x + 5 の表を完成させよう！",
    title: "第23問：表の穴埋め（y = 2x + 5）",
    description: "一次関数 <b>y = 2x + 5</b> の表を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>0</td><td>1</td><td>2</td></tr>
            <tr><th>y</th><td>5</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td><td><button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "7", type: "number" }, b2: { correct: "9", type: "number" } },
    graphData: { type: "static", a: 2, b: 5 },
    hint1: "💡 <b>ヒント！</b><br>2ずつ増えていくよ！5 + 2 = 7、7 + 2 = 9 だよ！",
    hint2: "7 と 9 を入れてね！",
    explanation: "✨ <b>解説</b><br>x=1で 7、x=2で 9 になります！"
  },
  {
    id: 24, stage: 3, character: "イギリスボール", avatar: "images/polandball.jpg", flag: "🇬🇧",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    dialog: "x が 2 増えた場合の変化の割合計算です。",
    title: "第24問：x が 2 増えたら y は？",
    description: "一次関数 <b>y = 3x + 1</b> で、<b>x が 2 増えると y はいくら増える？</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 3x + 1</div>
        <p>1増えると 3 増える。じゃあ 2 増えたら...？ (3 × 2)</p>
        <div class="math-eq">y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
      </div>`,
    blanks: { b1: { correct: "6", type: "number" } },
    graphData: { type: "static", a: 3, b: 1 },
    hint1: "💡 <b>ヒント！</b><br>変化の割合(3) × xの増える量(2) ＝ 6 だよ！",
    hint2: "3 × 2 ＝ 6 になるよ！",
    explanation: "✨ <b>解説</b><br>y の増加量 ＝ 変化の割合 × xの増加量 ＝ 3 × 2 ＝ <b>6</b> です！"
  },
  {
    id: 25, stage: 3, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)",
    dialog: "減っていく表の穴埋めだよ！",
    title: "第25問：減っていく表の穴埋め！",
    description: "一次関数 <b>y = -2x + 10</b> の表の空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>0</td><td>1</td><td>2</td></tr>
            <tr><th>y</th><td>10</td><td>8</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "6", type: "number" } },
    graphData: { type: "static", a: -2, b: 10 },
    hint1: "💡 <b>ヒント！</b><br>2ずつ減っているよ！10 → 8 → 6 だね！",
    hint2: "8 - 2 = 6 だよ！",
    explanation: "✨ <b>解説</b><br>x=2 のとき y = <b>6</b> です！"
  },
  {
    id: 26, stage: 3, character: "カナダボール", avatar: "images/polandball.jpg", flag: "🇨🇦",
    bgGradient: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)",
    dialog: "変化の割合がマイナスのとき！",
    title: "第26問：マイナスの変化の割合！",
    description: "一次関数 <b>y = -5x + 4</b> において、<b>x が 1 増えると y はいくら増える？（減る？）</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -5x + 4</div>
        <div class="math-eq">y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
      </div>`,
    blanks: { b1: { correct: "-5", type: "number" } },
    graphData: { type: "static", a: -5, b: 4 },
    hint1: "💡 <b>ヒント！</b><br>xの前の数字「-5」がそのまま変化の割合だよ！「ー」キーを使ってね！",
    hint2: "答えは -5 だよ！",
    explanation: "✨ <b>解説</b><br>変化の割合は <b>-5</b>（5減る）です！"
  },
  {
    id: 27, stage: 3, character: "ブラジルボール", avatar: "images/polandball.jpg", flag: "🇧🇷",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #F59E0B 100%)",
    dialog: "y = 5x - 3 の表埋め！",
    title: "第27問：表の空欄（y = 5x - 3）",
    description: "一次関数 <b>y = 5x - 3</b> の表の空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>1</td><td>2</td><td>3</td></tr>
            <tr><th>y</th><td>2</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td><td><button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "7", type: "number" }, b2: { correct: "12", type: "number" } },
    graphData: { type: "static", a: 5, b: -3 },
    hint1: "💡 <b>ヒント！</b><br>5ずつ増えていくよ！2 → 7 → 12 だね！",
    hint2: "7 と 12 を入れてね！",
    explanation: "✨ <b>解説</b><br>x=2で 7、x=3で 12 です！"
  },
  {
    id: 28, stage: 3, character: "韓国ボール", avatar: "images/polandball.jpg", flag: "🇰🇷",
    bgGradient: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)",
    dialog: "x が 3 増えたときの y の増加量！",
    title: "第28問：x が 3 増えたら？",
    description: "一次関数 <b>y = 4x - 1</b> で、<b>x が 3 増えると y はいくら増える？</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4x - 1</div>
        <p>4 × 3 の計算だよ！</p>
        <div class="math-eq">y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
      </div>`,
    blanks: { b1: { correct: "12", type: "number" } },
    graphData: { type: "static", a: 4, b: -1 },
    hint1: "💡 <b>ヒント！</b><br>変化の割合(4) × xの増加量(3) ＝ 12 だよ！",
    hint2: "4 × 3 ＝ 12 だよ！",
    explanation: "✨ <b>解説</b><br>4 × 3 ＝ <b>12</b> 増えます！"
  },
  {
    id: 29, stage: 3, character: "オーストラリアボール", avatar: "images/polandball.jpg", flag: "🇦🇺",
    bgGradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
    dialog: "y = 6x + 1 の表埋め！",
    title: "第29問：表の空欄（y = 6x + 1）",
    description: "一次関数 <b>y = 6x + 1</b> の表の空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>0</td><td>1</td><td>2</td></tr>
            <tr><th>y</th><td>1</td><td>7</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "13", type: "number" } },
    graphData: { type: "static", a: 6, b: 1 },
    hint1: "💡 <b>ヒント！</b><br>6ずつ増えるよ！7 + 6 ＝ 13 だね！",
    hint2: "13 を入力してね！",
    explanation: "✨ <b>解説</b><br>x=2 のとき y = <b>13</b> です！"
  },
  {
    id: 30, stage: 3, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dialog: "ステージ3クリア問題！Kurwa!",
    title: "第30問：ステージ3ラスト！",
    description: "一次関数 <b>y = -4x + 15</b> において、<b>変化の割合</b>はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -4x + 15</div>
        <div class="math-eq">変化の割合 ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "-4", type: "number" } },
    graphData: { type: "static", a: -4, b: 15 },
    hint1: "💡 <b>ヒント！</b><br>xの前についている数字「-4」がそのまま変化の割合だよ！",
    hint2: "-4 を入れてね！",
    explanation: "✨ <b>解説</b><br>変化の割合は <b>-4</b>！ステージ3クリア！"
  },

  // ==========================================
  // 【ステージ4】グラフと座標・文章題（第31問〜第40問）
  // ==========================================
  {
    id: 31, stage: 4, character: "イギリスボール", avatar: "images/polandball.jpg", flag: "🇬🇧",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    dialog: "y軸との交点（切片）の座標を答えましょう。",
    title: "第31問：y軸との交点の座標！",
    description: "一次関数 <b>y = 3x + 4</b> のグラフが <b>y軸と交わる点のy座標</b> はどこ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 3x + <span class="highlight-b">4</span></div>
        <div class="math-eq">交点の y座標 ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "4", type: "number" } },
    graphData: { type: "intercept", a: 3, b: 4 },
    hint1: "💡 <b>ヒント！</b><br>y軸と交わる点＝切片（b）のことだよ！後ろの数字「4」が正解！",
    hint2: "4 を入力してね！",
    explanation: "✨ <b>解説</b><br>切片が 4 なので、y軸との交点は (0, <b>4</b>) になります！"
  },
  {
    id: 32, stage: 4, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)",
    dialog: "ぼくの冒険の文章題だよ！Kurwa!",
    title: "第32問：ポーランドボールの散歩！",
    description: "ポーランドボールは最初 <b>5m</b> の位置にいます。<br>そこから <b>毎分 3m</b> の速さで歩きます。<br><b>x 分後の位置 y を表す式</b>を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="story-box"><p>🚶 毎分 3m 進む（速さ＝3）</p><p>📍 最初 5m 地点（スタート＝5）</p></div>
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "3", type: "number" }, b2: { correct: "5", type: "number" } },
    graphData: { type: "story", a: 3, b: 5 },
    hint1: "💡 <b>ヒント！</b><br>・増えるペース（速さ 3）が x の前！<br>・スタート位置（5）が後ろ！",
    hint2: "3x + 5 になるよ！",
    explanation: "✨ <b>解説</b><br>求める式は <b>y = 3x + 5</b> です！"
  },
  {
    id: 33, stage: 4, character: "日本ボール", avatar: "images/japanball.jpg", flag: "🇯🇵",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    dialog: "貯金箱のお金が増えていく文章題です！",
    title: "第33問：日本ボールの貯金箱！",
    description: "最初に <b>100円</b> 入っている貯金箱に、<b>毎日 20円</b> ずつ貯金します。<br><b>x 日後の貯金額 y 円</b> の式を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "20", type: "number" }, b2: { correct: "100", type: "number" } },
    graphData: { type: "story", a: 20, b: 100 },
    hint1: "💡 <b>ヒント！</b><br>・毎日増える額「20」が x の前！<br>・最初の額「100」が後ろ！",
    hint2: "20x + 100 になるよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = 20x + 100</b> です！"
  },
  {
    id: 34, stage: 4, character: "アメリカボール", avatar: "images/usaball.jpg", flag: "🇺🇸",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    dialog: "水槽の水が減っていく問題だゼ！",
    title: "第34問：水槽の水が減る文章題！",
    description: "最初 <b>50L</b> 入っている水槽から、<b>毎分 4L</b> ずつ水をぬきます。<br><b>x 分後の水の量 y L</b> の式を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="story-box"><p>💧 毎分 4L 減る（-4）</p><p>🚰 最初 50L（+50）</p></div>
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "-4", type: "number" }, b2: { correct: "50", type: "number" } },
    graphData: { type: "story", a: -4, b: 50 },
    hint1: "💡 <b>ヒント！</b><br>減るので x の前はマイナス！「-4」だよ！<br>最初は「50」だね！",
    hint2: "-4x + 50 だよ！",
    explanation: "✨ <b>解説</b><br>減るので <b>y = -4x + 50</b> になります！"
  },
  {
    id: 35, stage: 4, character: "ドイツボール", avatar: "images/polandball.jpg", flag: "🇩🇪",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    dialog: "ローソクが燃えて短くなる問題だ！",
    title: "第35問：ローソクの長さの式！",
    description: "長さ <b>20cm</b> のローソクが、<b>1分間に 2cm</b> ずつ短くなります。<br><b>x 分後の長さ y cm</b> の式を作ろう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "-2", type: "number" }, b2: { correct: "20", type: "number" } },
    graphData: { type: "story", a: -2, b: 20 },
    hint1: "💡 <b>ヒント！</b><br>1分に 2cm 減るから「-2x」、最初の長さ「20」！",
    hint2: "-2x + 20 だよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = -2x + 20</b> です！"
  },
  {
    id: 36, stage: 4, character: "フランスボール", avatar: "images/polandball.jpg", flag: "🇫🇷",
    bgGradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    dialog: "原点を通るグラフ（切片＝0）の確認だよ！",
    title: "第36問：原点を通る直線！",
    description: "一次関数 <b>y = 4x</b> のグラフが <b>y軸と交わる点（切片）</b> はどこかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4x</div>
        <div class="math-eq">切片 b ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "0", type: "number" } },
    graphData: { type: "intercept", a: 4, b: 0 },
    hint1: "💡 <b>ヒント！</b><br>何も足されていないので切片は「0」！原点 (0, 0) を通るよ！",
    hint2: "0 を入れてね！",
    explanation: "✨ <b>解説</b><br>y = 4x の切片は <b>0</b>（原点）です！"
  },
  {
    id: 37, stage: 4, character: "イタリアボール", avatar: "images/polandball.jpg", flag: "🇮🇹",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #047857 100%)",
    dialog: "ピザの配達スピード問題！",
    title: "第37問：ピザ配達ボールの移動！",
    description: "配達バイクが最初 <b>2km</b> の場所にいて、<b>時速 30km</b> で走ります。<br><b>x 時間後の移動距離 y km</b> の式を作ろう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "30", type: "number" }, b2: { correct: "2", type: "number" } },
    graphData: { type: "story", a: 30, b: 2 },
    hint1: "💡 <b>ヒント！</b><br>速さ 30 が x の前、最初の距離 2 が後ろだよ！",
    hint2: "30x + 2 だよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = 30x + 2</b> です！"
  },
  {
    id: 38, stage: 4, character: "韓国ボール", avatar: "images/polandball.jpg", flag: "🇰🇷",
    bgGradient: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)",
    dialog: "エレベーターが降りてくる問題！",
    title: "第38問：エレベーターの高さ！",
    description: "地上 <b>30m</b> の高さから、<b>毎秒 3m</b> の速さで降りてくるエレベーターがあります。<br><b>x 秒後の高さ y m</b> の式を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "-3", type: "number" }, b2: { correct: "30", type: "number" } },
    graphData: { type: "story", a: -3, b: 30 },
    hint1: "💡 <b>ヒント！</b><br>降りてくる（減る）ので「-3x」、最初の高さ「30」！",
    hint2: "-3x + 30 だよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = -3x + 30</b> です！"
  },
  {
    id: 39, stage: 4, character: "ブラジルボール", avatar: "images/polandball.jpg", flag: "🇧🇷",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #F59E0B 100%)",
    dialog: "切片がマイナスのグラフ交点！",
    title: "第39問：切片がマイナスのy軸交点！",
    description: "一次関数 <b>y = 5x - 8</b> のグラフが <b>y軸と交わる点の y座標</b> は？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 5x <span class="highlight-b">- 8</span></div>
        <div class="math-eq">y座標 ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "-8", type: "number" } },
    graphData: { type: "intercept", a: 5, b: -8 },
    hint1: "💡 <b>ヒント！</b><br>切片が -8 だから、y軸との交点も -8 だよ！「ー」キーを忘れずに！",
    hint2: "-8 を入れてね！",
    explanation: "✨ <b>解説</b><br>y軸との交点は (0, <b>-8</b>) です！"
  },
  {
    id: 40, stage: 4, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dialog: "ステージ4クリア！Kurwa! 大大満足！",
    title: "第40問：ステージ4ラスト問題！",
    description: "最初 <b>10L</b> 入っているタンクに <b>毎分 5L</b> ずつ油を入れます。<br><b>x 分後の量 y L</b> の式を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "5", type: "number" }, b2: { correct: "10", type: "number" } },
    graphData: { type: "story", a: 5, b: 10 },
    hint1: "💡 <b>ヒント！</b><br>毎分 5L 増えるから「5x」、最初「10」！",
    hint2: "5x + 10 だよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = 5x + 10</b> です！ステージ4クリア！"
  },

  // ==========================================
  // 【ステージ5】ファイナルマスターチャレンジ（第41問〜第46問）
  // ==========================================
  {
    id: 41, stage: 5, character: "マスターボール", avatar: "images/polandball.jpg", flag: "👑",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dialog: "ここからはファイナルステージ！全知識を試すぞ！",
    title: "第41問：総合チェック①",
    description: "式 <b>y = -7x + 12</b> の「傾き」と「切片」を答えよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -7x + 12</div>
        <div class="math-labels">
          <div class="label-box"><span>傾き ＝</span> <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
          <div class="label-box"><span>切片 ＝</span> <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
        </div>
      </div>`,
    blanks: { b1: { correct: "-7", type: "number" }, b2: { correct: "12", type: "number" } },
    graphData: { type: "static", a: -7, b: 12 },
    hint1: "💡 <b>ヒント！</b><br>傾き＝-7、切片＝12 だよ！",
    hint2: "-7 と 12 を入れてね！",
    explanation: "✨ <b>解説</b><br>傾き <b>-7</b>、切片 <b>12</b> です！"
  },
  {
    id: 42, stage: 5, character: "マスターボール", avatar: "images/polandball.jpg", flag: "👑",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dialog: "総合チェック② 代入計算！",
    title: "第42問：総合チェック②",
    description: "式 <b>y = 4x - 9</b> で <b>x = 5</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 4 × <b>5</b> - 9 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "11", type: "number" } },
    graphData: { type: "point", a: 4, b: -9, pointX: 5, pointY: 11 },
    hint1: "💡 <b>ヒント！</b><br>4 × 5 = 20。20 - 9 ＝ 11 だよ！",
    hint2: "11 を入れてね！",
    explanation: "✨ <b>解説</b><br>4 × 5 - 9 = 20 - 9 = <b>11</b> です！"
  },
  {
    id: 43, stage: 5, character: "マスターボール", avatar: "images/polandball.jpg", flag: "👑",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dialog: "総合チェック③ 表の完成！",
    title: "第43問：総合チェック③",
    description: "一次関数 <b>y = -3x + 7</b> の表の空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="table-container">
          <table class="math-table">
            <tr><th>x</th><td>0</td><td>1</td><td>2</td></tr>
            <tr><th>y</th><td>7</td><td>4</td><td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td></tr>
          </table>
        </div>
      </div>`,
    blanks: { b1: { correct: "1", type: "number" } },
    graphData: { type: "static", a: -3, b: 7 },
    hint1: "💡 <b>ヒント！</b><br>3ずつ減っているよ！ 7 → 4 → 1 だね！",
    hint2: "1 を入力してね！",
    explanation: "✨ <b>解説</b><br>x=2 のとき y = <b>1</b> です！"
  },
  {
    id: 44, stage: 5, character: "マスターボール", avatar: "images/polandball.jpg", flag: "👑",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dialog: "総合チェック④ 変化の割合！",
    title: "第44問：総合チェック④",
    description: "一次関数 <b>y = 8x - 15</b> において、<b>x が 2 増えると y はいくら増える？</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 8x - 15</div>
        <p>8 × 2 の計算だよ！</p>
        <div class="math-eq">y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
      </div>`,
    blanks: { b1: { correct: "16", type: "number" } },
    graphData: { type: "static", a: 8, b: -15 },
    hint1: "💡 <b>ヒント！</b><br>8 × 2 ＝ 16 増えるよ！",
    hint2: "16 を入力してね！",
    explanation: "✨ <b>解説</b><br>8 × 2 ＝ <b>16</b> です！"
  },
  {
    id: 45, stage: 5, character: "マスターボール", avatar: "images/polandball.jpg", flag: "👑",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
    dialog: "総合チェック⑤ 文章題！",
    title: "第45問：総合チェック⑤",
    description: "最初 <b>15m</b> の位置にいて、<b>毎秒 4m</b> の速さで進みます。<br><b>x 秒後の位置 y m</b> の式を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "4", type: "number" }, b2: { correct: "15", type: "number" } },
    graphData: { type: "story", a: 4, b: 15 },
    hint1: "💡 <b>ヒント！</b><br>速さ 4 が x の前、最初の位置 15 が後ろ！",
    hint2: "4x + 15 だよ！",
    explanation: "✨ <b>解説</b><br>式は <b>y = 4x + 15</b> です！"
  },
  {
    id: 46, stage: 5, character: "ポーランドボール", avatar: "images/polandball.jpg", flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dialog: "これが全46問の本当の最終問題だ！Kurwa!! 君ならできる！",
    title: "第46問：全46問グランドフィナーレ！",
    description: "式 <b>y = -5x + 20</b> で <b>x = 4</b> のとき、<b>y</b> はいくつ？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -5 × <b>4</b> + 20 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
      </div>`,
    blanks: { b1: { correct: "0", type: "number" } },
    graphData: { type: "point", a: -5, b: 20, pointX: 4, pointY: 0 },
    hint1: "💡 <b>ヒント！</b><br>-5 × 4 = -20。 -20 + 20 は...？",
    hint2: "-20 + 20 = 0 だよ！",
    explanation: "✨ <b>解説</b><br>-5 × 4 + 20 = -20 + 20 = <b>0</b> です！全46問パーフェクトクリア！！"
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

// コレクションバッジデータ（豪華増量版）
const BADGES = [
  { id: 1, name: "ポーランドボール", flag: "🇵🇱", desc: "一次関数のきほんをマスター！" },
  { id: 2, name: "日本ボール", flag: "🇯🇵", desc: "代入計算のプロ！" },
  { id: 3, name: "アメリカボール", flag: "🇺🇸", desc: "表の空欄埋めが得意！" },
  { id: 4, name: "ドイツボール", flag: "🇩🇪", desc: "変化の割合を見抜いた！" },
  { id: 5, name: "イギリスボール", flag: "🇬🇧", desc: "切片を優雅に発見！" },
  { id: 6, name: "フランスボール", flag: "🇫🇷", desc: "隠れた1を見破った！" },
  { id: 7, name: "イタリアボール", flag: "🇮🇹", desc: "-x の傾きを克服！" },
  { id: 8, name: "韓国ボール", flag: "🇰🇷", desc: "逆順の式をクリア！" },
  { id: 9, name: "カナダボール", flag: "🇨🇦", desc: "マイナスの変化の割合！" },
  { id: 10, name: "ブラジルボール", flag: "🇧🇷", desc: "サンバの勢いで計算！" },
  { id: 11, name: "オーストラリアボール", flag: "🇦🇺", desc: "逆算計算マスター！" },
  { id: 12, name: "マスターボール", flag: "👑", desc: "全46問完全踏破の伝説！" }
];
