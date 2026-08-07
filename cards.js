// ポーランドボール カードコレクション & ガチャシステム (全200種類)

// 50の国・地域リスト
const COUNTRIES = [
  { code: "PL", name: "ポーランド", flag: "🇵🇱", desc: "一次関数の冒険者！" },
  { code: "JP", name: "日本", flag: "🇯🇵", desc: "計算速度世界一！" },
  { code: "US", name: "アメリカ", flag: "🇺🇸", desc: "サングラスがクール！" },
  { code: "DE", name: "ドイツ", flag: "🇩🇪", desc: "精密計算の達人！" },
  { code: "GB", name: "イギリス", flag: "🇬🇧", desc: "シルクハットの紳士！" },
  { code: "FR", name: "フランス", flag: "🇫🇷", desc: "数学の芸術家！" },
  { code: "IT", name: "イタリア", flag: "🇮🇹", desc: "ピッツァを愛するボール！" },
  { code: "KR", name: "韓国", flag: "🇰🇷", desc: "スピード回答王！" },
  { code: "CA", name: "カナダ", flag: "🇨🇦", desc: "メープルの国のボール！" },
  { code: "BR", name: "ブラジル", flag: "🇧🇷", desc: "サンバのノリで計算！" },
  { code: "AU", name: "オーストラリア", flag: "🇦🇺", desc: "カンガルーボール！" },
  { code: "ES", name: "スペイン", flag: "🇪🇸", desc: "情熱の数式マスター！" },
  { code: "SE", name: "スウェーデン", flag: "🇸🇪", desc: "北欧のロジック王！" },
  { code: "FI", name: "フィンランド", flag: "🇫🇮", desc: "教育先進国ボール！" },
  { code: "NL", name: "オランダ", flag: "🇳🇱", desc: "風車の国のボール！" },
  { code: "CH", name: "スイス", flag: "🇨🇭", desc: "精密時計のような正確さ！" },
  { code: "EG", name: "エジプト", flag: "🇪🇬", desc: "ピラミッドの図形王！" },
  { code: "GR", name: "ギリシャ", flag: "🇬🇷", desc: "古代数学の発祥地！" },
  { code: "MX", name: "メキシコ", flag: "🇲🇽", desc: "タコスを食べるボール！" },
  { code: "AR", name: "アルゼンチン", flag: "🇦🇷", desc: "サッカーが得意！" },
  { code: "IN", name: "インド", flag: "🇮🇳", desc: "ゼロを発見した数字の神！" },
  { code: "CN", name: "中国", flag: "🇨🇳", desc: "そろばんの達人！" },
  { code: "VN", name: "ベトナム", flag: "🇻🇳", desc: "フォーを愛するボール！" },
  { code: "TH", name: "タイ", flag: "🇹🇭", desc: "微笑みの国のボール！" },
  { code: "ID", name: "インドネシア", flag: "🇮🇩", desc: "赤白ボールの仲間！" },
  { code: "PH", name: "フィリピン", flag: "🇵🇭", desc: "南国の太陽ボール！" },
  { code: "SG", name: "シンガポール", flag: "🇸🇬", desc: "マーライオンボール！" },
  { code: "NZ", name: "ニュージーランド", flag: "🇳🇿", desc: "マオリの戦士ボール！" },
  { code: "ZA", name: "南アフリカ", flag: "🇿🇦", desc: "虹の国のボール！" },
  { code: "UA", name: "ウクライナ", flag: "🇺🇦", desc: "青黄のツートンボール！" },
  { code: "BE", name: "ベルギー", flag: "🇧🇪", desc: "チョコが大好物！" },
  { code: "AT", name: "オーストリア", flag: "🇦🇹", desc: "音楽と数学の国！" },
  { code: "PT", name: "ポルトガル", flag: "🇵🇹", desc: "大航海時代の冒険者！" },
  { code: "TR", name: "トルコ", flag: "🇹🇷", desc: "三日月の国のボール！" },
  { code: "SA", name: "サウジアラビア", flag: "🇸🇦", desc: "オイルパワーボール！" },
  { code: "IE", name: "アイルランド", flag: "🇮🇪", desc: "幸運の四つ葉ボール！" },
  { code: "IS", name: "アイスランド", flag: "🇮🇸", desc: "氷と火のボール！" },
  { code: "NO", name: "ノルウェー", flag: "🇳🇴", desc: "バイキングボール！" },
  { code: "DK", name: "デンマーク", flag: "🇩🇰", desc: "ブロックの国のボール！" },
  { code: "CZ", name: "チェコ", flag: "🇨🇿", desc: "ボヘミアの数学者！" },
  { code: "HU", name: "ハンガリー", flag: "🇭🇺", desc: "ルービックキューブの生みの親！" },
  { code: "RO", name: "ルーマニア", flag: "🇷🇴", desc: "ドラキュラ城のボール！" },
  { code: "CL", name: "チリ", flag: "🇨🇱", desc: "縦長大陸のボール！" },
  { code: "PE", name: "ペルー", flag: "🇵🇪", desc: "マチュピチュのボール！" },
  { code: "MC", name: "モナコ", flag: "🇲🇨", desc: "セレブな赤白ボール！" },
  { code: "VA", name: "バチカン", flag: "🇻🇦", desc: "神聖な鍵のボール！" },
  { code: "SL", name: "シーランド", flag: "🏴‍☠️", desc: "最小の公国ボール！" },
  { code: "AQ", name: "南極ボール", flag: "🇦🇶", desc: "ペンギンと一緒！" },
  { code: "UN", name: "国連ボール", flag: "🇺🇳", desc: "世界平和のリーダー！" },
  { code: "PB", name: "ハイパーポーランド", flag: "👑", desc: "一次関数を極めし伝説の王！" }
];

// レア度定義（4段階 × 50キャラ ＝ 200種類）
const RARITIES = [
  { level: "N", name: "ノーマル", weight: 60, color: "#94A3B8", border: "#64748B", bg: "#F1F5F9" },
  { level: "R", name: "レア", weight: 25, color: "#3B82F6", border: "#2563EB", bg: "#EFF6FF" },
  { level: "SR", name: "スーパーレア", weight: 12, color: "#A855F7", border: "#7E22CE", bg: "#F3E8FF" },
  { level: "SSR", name: "ウルトラSSR", weight: 3, color: "#F59E0B", border: "#D97706", bg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)" }
];

// 200種類のカードマスターデータベースを自動生成
const CARD_DATABASE = [];
COUNTRIES.forEach(country => {
  RARITIES.forEach(rarity => {
    CARD_DATABASE.push({
      id: `${country.code}_${rarity.level}`,
      countryCode: country.code,
      countryName: country.name,
      flag: country.flag,
      rarity: rarity.level,
      rarityName: rarity.name,
      rarityColor: rarity.color,
      rarityBorder: rarity.border,
      rarityBg: rarity.bg,
      desc: country.desc,
      title: `${country.name} [${rarity.level}]`
    });
  });
});

// 所持カード管理（localStorage対応）
let userOwnedCards = {};
try {
  const saved = localStorage.getItem('polandball_cards_owned');
  if (saved) userOwnedCards = JSON.parse(saved);
} catch (e) {
  userOwnedCards = {};
}

function saveOwnedCards() {
  try {
    localStorage.setItem('polandball_cards_owned', JSON.stringify(userOwnedCards));
  } catch (e) {}
}

// ガチャを引く（1枚取得）
function drawCardGacha() {
  // レア度判定
  const rand = Math.random() * 100;
  let selectedRarity = "N";
  let cumulative = 0;

  for (const r of RARITIES) {
    cumulative += r.weight;
    if (rand <= cumulative) {
      selectedRarity = r.level;
      break;
    }
  }

  // 該当レア度のカード候補からランダム抽出
  const candidates = CARD_DATABASE.filter(c => c.rarity === selectedRarity);
  const drawnCard = candidates[Math.floor(Math.random() * candidates.length)];

  // 所持判定
  const isNew = !userOwnedCards[drawnCard.id];
  userOwnedCards[drawnCard.id] = (userOwnedCards[drawnCard.id] || 0) + 1;
  saveOwnedCards();

  return { card: drawnCard, isNew: isNew };
}

// 図鑑の獲得率を計算
function getCardCollectionStats() {
  const ownedCount = Object.keys(userOwnedCards).length;
  const totalCount = CARD_DATABASE.length; // 200
  const percent = Math.floor((ownedCount / totalCount) * 100);
  return { ownedCount, totalCount, percent };
}
