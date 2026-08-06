// ポーランドボールの一次関数（レベル1）問題データ
const QUESTIONS = [
  {
    id: 1,
    character: "ポーランドボール",
    avatar: "images/polandball.jpg",
    flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #FF4B4B 0%, #FF8585 100%)",
    dialog: "Kurwa! 一次関数のきほんの形を覚えるよ！",
    title: "第1問：一次関数の【名前】を覚えよう！",
    description: "一次関数は <b>y = ax + b</b> という決まった形をしているんだ！<br>それぞれの数字や文字に名前がついているよ。空欄にあてはまる言葉を選ぼう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">a</span>x + <span class="highlight-b">b</span></div>
        <div class="math-labels">
          <div class="label-box">
            <span>a の名前:</span>
            <button class="blank-btn" data-blank-id="b1" onclick="openChoiceModal('b1')">【 えらんでね 】</button>
          </div>
          <div class="label-box">
            <span>b の名前:</span>
            <button class="blank-btn" data-blank-id="b2" onclick="openChoiceModal('b2')">【 えらんでね 】</button>
          </div>
        </div>
      </div>
    `,
    blanks: {
      b1: {
        correct: "傾き（変化の割合）",
        options: ["傾き（変化の割合）", "切片", "xの二乗", "定数"]
      },
      b2: {
        correct: "切片",
        options: ["傾き（変化の割合）", "切片", "原点", "座標"]
      }
    },
    graphData: {
      type: "static",
      a: 2,
      b: 1,
      label: "y = 2x + 1"
    },
    hint1: "💡 <b>ポーランドからのヒント！</b><br>・<b>xの前にある数字 a</b> は、グラフの傾き具合（変化の割合）を表すよ！<br>・<b>うしろについている数字 b</b> は、y軸と交わる場所「切片（せっぺん）」だよ！",
    hint2: "おしい！もう一度見直してみてね。<br>・xにくっついている数字は<b>「傾き」</b>！<br>・ぽつんと後ろにある数字は<b>「切片」</b>だよ！",
    explanation: "✨ <b>解説（ポーランドボールのメモ）</b><br>一次関数 <b>y = ax + b</b> では：<br>・<b>a</b> ＝ <b>傾き</b>（変化の割合）<br>・<b>b</b> ＝ <b>切片</b>（y軸と交わる点）<br>例：y = 3x + 5 なら、傾きは 3、切片は 5 だよ！"
  },
  {
    id: 2,
    character: "日本ボール",
    avatar: "images/japanball.jpg",
    flag: "🇯🇵",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)",
    dialog: "数字を代入して計算してみよう！がんばってね！",
    title: "第2問：x に数字を入れて y を計算しよう！",
    description: "一次関数の式 <b>y = 2x + 3</b> があります。<br><b>x = 4</b> のとき、<b>y</b> の値はいくつになるかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 2 × <span class="highlight-x">x</span> + 3</div>
        <div class="substitute-box">
          <p>x に <b>4</b> を入れると...</p>
          <div class="math-eq">y = 2 × <b>4</b> + 3 = <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>
    `,
    blanks: {
      b1: {
        correct: "11",
        type: "number"
      }
    },
    graphData: {
      type: "point",
      a: 2,
      b: 3,
      pointX: 4,
      pointY: 11
    },
    hint1: "💡 <b>日本ボールからのヒント！</b><br>「2x」は「2 × x」のことだよ！<br>x に 4 を代入すると、<b>2 × 4 + 3</b> の計算になるよ！かけ算を先に計算してね！",
    hint2: "おしい！計算をもう一度確かめよう。<br>2 × 4 ＝ 8 だよね。<br>その 8 に 3 をたすと...？",
    explanation: "✨ <b>解説（日本ボールのメモ）</b><br>式：<b>y = 2x + 3</b> に x = 4 を代入します。<br>・2 × 4 = 8<br>・8 + 3 = <b>11</b><br>だから <b>y = 11</b> になります！正解は 11 だよ！"
  },
  {
    id: 3,
    character: "アメリカボール",
    avatar: "images/usaball.jpg",
    flag: "🇺🇸",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    dialog: "Awesome! 表の空欄を埋めてパーフェクトにしようゼ！",
    title: "第3問：表の【空欄】を完成させよう！",
    description: "一次関数 <b>y = 3x - 1</b> の表があるよ。<br>x の値が <b>0, 1, 2, 3</b> のときの y の値を求めて、空欄を埋めよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = 3x - 1</div>
        <div class="table-container">
          <table class="math-table">
            <tr>
              <th>x</th>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th>y</th>
              <td>-1</td>
              <td>2</td>
              <td><button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></td>
              <td><button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button></td>
            </tr>
          </table>
        </div>
      </div>
    `,
    blanks: {
      b1: { correct: "5", type: "number" },
      b2: { correct: "8", type: "number" }
    },
    graphData: {
      type: "table",
      a: 3,
      b: -1
    },
    hint1: "💡 <b>アメリカボールからのヒント！</b><br>・x = 2 のとき: y = 3 × 2 - 1 ＝ 6 - 1 ＝ ？<br>・x = 3 のとき: y = 3 × 3 - 1 ＝ 9 - 1 ＝ ？<br>★yの増え方（3ずつ増えてる！）にも注目してみてね！",
    hint2: "おしい！表をよーく見てみよう。<br>xが1増えるごとに、yは「3」ずつ増えているよ！<br>2の次は 2 + 3 ＝ 5、その次は 5 + 3 ＝ ...？",
    explanation: "✨ <b>解説（アメリカボールのメモ）</b><br>・x = 2 のとき: 3 × 2 - 1 = <b>5</b><br>・x = 3 のとき: 3 × 3 - 1 = <b>8</b><br>xが1増えるとyは「3」ずつ増えるルール（変化の割合＝3）になっているんだ！"
  },
  {
    id: 4,
    character: "ドイツボール",
    avatar: "images/polandball.jpg",
    flag: "🇩🇪",
    bgGradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    dialog: "精密な計算だ！「変化の割合」を見抜くぞ！",
    title: "第4問：「変化の割合」ってなに？",
    description: "一次関数 <b>y = 4x + 2</b> があります。<br><b>x が 1 増えると、y はいくら増えるかな？</b>",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = <span class="highlight-a">4</span>x + 2</div>
        <div class="rate-box">
          <p>x が 1 増えたときの y の増える量を<b>「変化の割合」</b>というよ！</p>
          <div class="math-eq">x が 1 増えると y は <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> 増える！</div>
        </div>
      </div>
    `,
    blanks: {
      b1: { correct: "4", type: "number" }
    },
    graphData: {
      type: "slope",
      a: 4,
      b: 2
    },
    hint1: "💡 <b>ドイツボールからのヒント！</b><br>一次関数 <b>y = ax + b</b> において、<br><b>「変化の割合」は常に x の前の数字 a と同じ</b>なんだ！<br>つまり、y = 4x + 2 の「4」に注目！",
    hint2: "おしい！一次関数では、xが1増えたときのyの増え方は「xにくっついている係数（数字）」そのままだよ！",
    explanation: "✨ <b>解説（ドイツボールのメモ）</b><br>一次関数 <b>y = ax + b</b> では：<br><b>変化の割合 ＝ 傾き ＝ a</b> です！<br>y = 4x + 2 の場合、a ＝ 4 なので、xが1増えるとyは <b>4</b> 増えます！"
  },
  {
    id: 5,
    character: "イギリスボール",
    avatar: "images/polandball.jpg",
    flag: "🇬🇧",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    dialog: "グラフの出発点「切片」を見つける紳士の嗜みです。",
    title: "第5問：グラフの【切片（せっぺん）】を探そう！",
    description: "一次関数 <b>y = -2x + 5</b> のグラフがあります。<br>このグラフが <b>y軸と交わる点の y座標（切片）</b> はどこかな？",
    equationDisplay: `
      <div class="math-card">
        <div class="math-eq">y = -2x + <span class="highlight-b">5</span></div>
        <div class="intercept-box">
          <p>x ＝ 0 のときの y の値（y軸との交点）が「切片」だよ！</p>
          <div class="math-eq">切片 b ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button></div>
        </div>
      </div>
    `,
    blanks: {
      b1: { correct: "5", type: "number" }
    },
    graphData: {
      type: "intercept",
      a: -2,
      b: 5
    },
    hint1: "💡 <b>イギリスボールからのヒント！</b><br>切片とは、式 <b>y = ax + b</b> の後ろにある <b>+ b</b> のこと！<br>y = -2x + 5 の後ろの数字を見てごらんなさい！",
    hint2: "おしい！後ろについている数字「5」がそのまま切片になるよ！<br>（x=0を代入すると y = -2×0 + 5 ＝ 5 になるね！）",
    explanation: "✨ <b>解説（イギリスボールのメモ）</b><br><b>y = -2x + 5</b> の切片は <b>5</b> です！<br>これは、グラフが縦軸（y軸）の「5」の場所を通ることを意味しているよ！"
  },
  {
    id: 6,
    character: "ポーランドボール",
    avatar: "images/polandball.jpg",
    flag: "🇵🇱",
    bgGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    dialog: "最後はぼくの大冒険！一次関数の式を完成させよう！",
    title: "第6問：ポーランドボールの進んだ距離の式！",
    description: "ポーランドボールが旅行中！<br>スタートの時点で <b>3m</b> の位置にいました。<br>そこから <b>毎分 2m</b> の速さで歩きます。<br><b>x 分後の位置 y を表す式</b>を完成させよう！",
    equationDisplay: `
      <div class="math-card">
        <div class="story-box">
          <p>🚶 1分ごとに <b>2m</b> 進む（変化の割合＝2）</p>
          <p>📍 最初から <b>3m</b> 先にいる（切片＝3）</p>
        </div>
        <div class="math-eq">
          y ＝ <button class="blank-btn" data-blank-id="b1" onclick="openKeypadModal('b1')">【 ? 】</button> x ＋ <button class="blank-btn" data-blank-id="b2" onclick="openKeypadModal('b2')">【 ? 】</button>
        </div>
      </div>
    `,
    blanks: {
      b1: { correct: "2", type: "number" },
      b2: { correct: "3", type: "number" }
    },
    graphData: {
      type: "story",
      a: 2,
      b: 3
    },
    hint1: "💡 <b>ポーランドからのヒント！</b><br>・増えるペース（速さ＝2）が x の前に入るよ！<b>（2x）</b><br>・最初のスタート位置（3）が後ろにつくよ！<b>（+ 3）</b>",
    hint2: "おしい！<br>xの前に「速さの 2」、後ろに「最初の位置の 3」を入れてみよう！<br>y = 2x + 3 になるよ！",
    explanation: "✨ <b>解説（ポーランドボールのメモ）</b><br>・1分に2mずつ増える ＝ <b>傾き 2</b><br>・最初から3m地点 ＝ <b>切片 3</b><br>よって、求める一次関数の式は <b>y = 2x + 3</b> になります！大満足 Kurwa!"
  }
];

// コレクションバッジデータ
const BADGES = [
  { id: 1, name: "ポーランドボール", flag: "🇵🇱", desc: "一次関数のきほんをマスター！" },
  { id: 2, name: "日本ボール", flag: "🇯🇵", desc: "代入計算のプロ！" },
  { id: 3, name: "アメリカボール", flag: "🇺🇸", desc: "表の空欄埋めが得意！" },
  { id: 4, name: "ドイツボール", flag: "🇩🇪", desc: "変化の割合を見抜いた！" },
  { id: 5, name: "イギリスボール", flag: "🇬🇧", desc: "切片を優雅に発見！" },
  { id: 6, name: "マスターボール", flag: "👑", desc: "一次関数レベル1を全問クリア！" }
];
