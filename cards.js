// ポーランドボール カードコレクション & ガチャシステム (全200種類) - イラスト強化版

function safeGetItem(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function safeSetItem(key, value) {
  try { localStorage.setItem(key, value); } catch (e) {}
}

const COUNTRIES = [
  { code: "PL", name: "ポーランド", flag: "🇵🇱", desc: "一次関数の冒険者！", image: "images/polandball.jpg", color: "#FF4B4B" },
  { code: "JP", name: "日本", flag: "🇯🇵", desc: "計算速度世界一！", image: "images/japanball.jpg", color: "#FF6B6B" },
  { code: "US", name: "アメリカ", flag: "🇺🇸", desc: "サングラスがクール！", image: "images/usaball.jpg", color: "#3B82F6" },
  { code: "DE", name: "ドイツ", flag: "🇩🇪", desc: "精密計算の達人！", color: "#10B981" },
  { code: "GB", name: "イギリス", flag: "🇬🇧", desc: "シルクハットの紳士！", color: "#8B5CF6" },
  { code: "FR", name: "フランス", flag: "🇫🇷", desc: "数学の芸術家！", color: "#EC4899" },
  { code: "IT", name: "イタリア", flag: "🇮🇹", desc: "ピッツァを愛するボール！", color: "#10B981" },
  { code: "KR", name: "韓国", flag: "🇰🇷", desc: "スピード回答王！", color: "#6366F1" },
  { code: "CA", name: "カナダ", flag: "🇨🇦", desc: "メープルの国のボール！", color: "#EF4444" },
  { code: "BR", name: "ブラジル", flag: "🇧🇷", desc: "サンバのノリで計算！", color: "#F59E0B" },
  { code: "AU", name: "オーストラリア", flag: "🇦🇺", desc: "カンガルーボール！", color: "#0284C7" },
  { code: "ES", name: "スペイン", flag: "🇪🇸", desc: "情熱の数式マスター！", color: "#EF4444" },
  { code: "SE", name: "スウェーデン", flag: "🇸🇪", desc: "北欧のロジック王！", color: "#0284C7" },
  { code: "FI", name: "フィンランド", flag: "🇫🇮", desc: "教育先進国ボール！", color: "#3B82F6" },
  { code: "NL", name: "オランダ", flag: "🇳🇱", desc: "風車の国のボール！", color: "#F97316" },
  { code: "CH", name: "スイス", flag: "🇨🇭", desc: "精密時計のような正確さ！", color: "#DC2626" },
  { code: "EG", name: "エジプト", flag: "🇪🇬", desc: "ピラミッドの図形王！", color: "#EAB308" },
  { code: "GR", name: "ギリシャ", flag: "🇬🇷", desc: "古代数学の発祥地！", color: "#0284C7" },
  { code: "MX", name: "メキシコ", flag: "🇲🇽", desc: "タコスを食べるボール！", color: "#16A34A" },
  { code: "AR", name: "アルゼンチン", flag: "🇦🇷", desc: "サッカーが得意！", color: "#38BDF8" },
  { code: "IN", name: "インド", flag: "🇮🇳", desc: "ゼロを発見した数字の神！", color: "#F97316" },
  { code: "CN", name: "中国", flag: "🇨🇳", desc: "そろばんの達人！", color: "#E11D48" },
  { code: "VN", name: "ベトナム", flag: "🇻🇳", desc: "フォーを愛するボール！", color: "#DC2626" },
  { code: "TH", name: "タイ", flag: "🇹🇭", desc: "微笑みの国のボール！", color: "#2563EB" },
  { code: "ID", name: "インドネシア", flag: "🇮🇩", desc: "赤白ボールの仲間！", color: "#EF4444" },
  { code: "PH", name: "フィリピン", flag: "🇵🇭", desc: "南国の太陽ボール！", color: "#0284C7" },
  { code: "SG", name: "シンガポール", flag: "🇸🇬", desc: "マーライオンボール！", color: "#E11D48" },
  { code: "NZ", name: "ニュージーランド", flag: "🇳🇿", desc: "マオリの戦士ボール！", color: "#1E3A8A" },
  { code: "ZA", name: "南アフリカ", flag: "🇿🇦", desc: "虹の国のボール！", color: "#059669" },
  { code: "UA", name: "ウクライナ", flag: "🇺🇦", desc: "青黄のツートンボール！", color: "#EAB308" },
  { code: "BE", name: "ベルギー", flag: "🇧🇪", desc: "チョコが大好物！", color: "#CA8A04" },
  { code: "AT", name: "オーストリア", flag: "🇦🇹", desc: "音楽と数学の国！", color: "#DC2626" },
  { code: "PT", name: "ポルトガル", flag: "🇵🇹", desc: "大航海時代の冒険者！", color: "#16A34A" },
  { code: "TR", name: "トルコ", flag: "🇹🇷", desc: "三日月の国のボール！", color: "#E11D48" },
  { code: "SA", name: "サウジアラビア", flag: "🇸🇦", desc: "オイルパワーボール！", color: "#15803D" },
  { code: "IE", name: "アイルランド", flag: "🇮🇪", desc: "幸運の四つ葉ボール！", color: "#16A34A" },
  { code: "IS", name: "アイスランド", flag: "🇮🇸", desc: "氷と火のボール！", color: "#0284C7" },
  { code: "NO", name: "ノルウェー", flag: "🇳🇴", desc: "バイキングボール！", color: "#DC2626" },
  { code: "DK", name: "デンマーク", flag: "🇩🇰", desc: "ブロックの国のボール！", color: "#E11D48" },
  { code: "CZ", name: "チェコ", flag: "🇨🇿", desc: "ボヘミアの数学者！", color: "#2563EB" },
  { code: "HU", name: "ハンガリー", flag: "🇭🇺", desc: "ルービックキューブの生みの親！", color: "#16A34A" },
  { code: "RO", name: "ルーマニア", flag: "🇷🇴", desc: "ドラキュラ城のボール！", color: "#CA8A04" },
  { code: "CL", name: "チリ", flag: "🇨🇱", desc: "縦長大陸のボール！", color: "#DC2626" },
  { code: "PE", name: "ペルー", flag: "🇵🇪", desc: "マチュピチュのボール！", color: "#DC2626" },
  { code: "MC", name: "モナコ", flag: "🇲🇨", desc: "セレブな赤白ボール！", color: "#EF4444" },
  { code: "VA", name: "バチカン", flag: "🇻🇦", desc: "神聖な鍵のボール！", color: "#EAB308" },
  { code: "SL", name: "シーランド", flag: "🏴‍☠️", desc: "最小の公国ボール！", color: "#475569" },
  { code: "AQ", name: "南極ボール", flag: "🇦🇶", desc: "ペンギンと一緒！", color: "#38BDF8" },
  { code: "UN", name: "国連ボール", flag: "🇺🇳", desc: "世界平和のリーダー！", color: "#0284C7" },
  { code: "PB", name: "ハイパーポーランド", flag: "👑", desc: "一次関数を極めし伝説の王！", image: "images/polandball.jpg", color: "#F59E0B" }
];

const RARITIES = [
  { level: "N", name: "ノーマル", weight: 60, color: "#94A3B8", border: "#64748B", bg: "#F1F5F9" },
  { level: "R", name: "レア", weight: 25, color: "#3B82F6", border: "#2563EB", bg: "#EFF6FF" },
  { level: "SR", name: "スーパーレア", weight: 12, color: "#A855F7", border: "#7E22CE", bg: "#F3E8FF" },
  { level: "SSR", name: "ウルトラSSR", weight: 3, color: "#F59E0B", border: "#D97706", bg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)" }
];

const CARD_DATABASE = [];
COUNTRIES.forEach(country => {
  RARITIES.forEach(rarity => {
    CARD_DATABASE.push({
      id: `${country.code}_${rarity.level}`,
      countryCode: country.code,
      countryName: country.name,
      flag: country.flag,
      image: country.image,
      color: country.color,
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

let userOwnedCards = {};
const savedCardsStr = safeGetItem('polandball_cards_owned');
if (savedCardsStr) {
  try { userOwnedCards = JSON.parse(savedCardsStr) || {}; } catch(e) { userOwnedCards = {}; }
}

function saveOwnedCards() {
  safeSetItem('polandball_cards_owned', JSON.stringify(userOwnedCards));
}

function drawCardGacha() {
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

  const candidates = CARD_DATABASE.filter(c => c.rarity === selectedRarity);
  const drawnCard = candidates[Math.floor(Math.random() * candidates.length)];

  const isNew = !userOwnedCards[drawnCard.id];
  userOwnedCards[drawnCard.id] = (userOwnedCards[drawnCard.id] || 0) + 1;
  saveOwnedCards();

  return { card: drawnCard, isNew: isNew };
}

function getCardCollectionStats() {
  const ownedCount = Object.keys(userOwnedCards).length;
  const totalCount = CARD_DATABASE.length;
  const percent = Math.floor((ownedCount / totalCount) * 100);
  return { ownedCount, totalCount, percent };
}
