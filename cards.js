// ポーランドボールのカードデータベース (全200種)
function safeGetItem(key) {
  try {
    if (typeof localStorage !== 'undefined' && localStorage) {
      return localStorage.getItem(key);
    }
  } catch (e) {}
  return null;
}

function safeSetItem(key, value) {
  try {
    if (typeof localStorage !== 'undefined' && localStorage) {
      localStorage.setItem(key, value);
    }
  } catch (e) {}
}

const COUNTRY_DESIGNS = {
  JP: { name: "日本", bg: "radial-gradient(circle at center, #DC2626 35%, #FFFFFF 36%)" },
  PL: { name: "ポーランド", bg: "linear-gradient(180deg, #FFFFFF 50%, #DC2626 50%)" },
  US: { name: "アメリカ", bg: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #DC2626 100%)" },
  DE: { name: "ドイツ", bg: "linear-gradient(180deg, #0F172A 33.3%, #DC2626 33.3%, #DC2626 66.6%, #F59E0B 66.6%)" },
  GB: { name: "イギリス", bg: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #DC2626 100%)" },
  FR: { name: "フランス", bg: "linear-gradient(90deg, #1D4ED8 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #DC2626 66.6%)" },
  IT: { name: "イタリア", bg: "linear-gradient(90deg, #16A34A 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #DC2626 66.6%)" },
  KR: { name: "韓国", bg: "radial-gradient(circle at center, #1D4ED8 25%, #FFFFFF 26%)" },
  CA: { name: "カナダ", bg: "linear-gradient(90deg, #DC2626 25%, #FFFFFF 25%, #FFFFFF 75%, #DC2626 75%)" },
  BR: { name: "ブラジル", bg: "radial-gradient(circle at center, #1E3A8A 25%, #F59E0B 26%, #F59E0B 60%, #16A34A 61%)" },
  AU: { name: "オーストラリア", bg: "linear-gradient(135deg, #1E3A8A 0%, #0284C7 100%)" },
  ES: { name: "スペイン", bg: "linear-gradient(180deg, #DC2626 25%, #F59E0B 25%, #F59E0B 75%, #DC2626 75%)" },
  RU: { name: "ロシア", bg: "linear-gradient(180deg, #FFFFFF 33.3%, #1D4ED8 33.3%, #1D4ED8 66.6%, #DC2626 66.6%)" },
  CN: { name: "中国", bg: "radial-gradient(circle at 30% 30%, #F59E0B 15%, #DC2626 16%)" },
  IN: { name: "インド", bg: "linear-gradient(180deg, #EA580C 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #16A34A 66.6%)" },
  MX: { name: "メキシコ", bg: "linear-gradient(90deg, #16A34A 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #DC2626 66.6%)" },
  AR: { name: "アルゼンチン", bg: "linear-gradient(180deg, #38BDF8 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #38BDF8 66.6%)" },
  NL: { name: "オランダ", bg: "linear-gradient(180deg, #DC2626 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #1D4ED8 66.6%)" },
  SE: { name: "スウェーデン", bg: "radial-gradient(circle at center, #F59E0B 25%, #0284C7 26%)" },
  CH: { name: "スイス", bg: "radial-gradient(circle at center, #FFFFFF 30%, #DC2626 31%)" },
  EG: { name: "エジプト", bg: "linear-gradient(180deg, #DC2626 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #0F172A 66.6%)" },
  GR: { name: "ギリシャ", bg: "linear-gradient(180deg, #0284C7 0%, #FFFFFF 50%, #0284C7 100%)" },
  FI: { name: "フィンランド", bg: "radial-gradient(circle at center, #0284C7 30%, #FFFFFF 31%)" },
  SG: { name: "シンガポール", bg: "linear-gradient(180deg, #DC2626 50%, #FFFFFF 50%)" },
  TH: { name: "タイ", bg: "linear-gradient(180deg, #DC2626 20%, #FFFFFF 20%, #FFFFFF 40%, #1E3A8A 40%, #1E3A8A 60%, #FFFFFF 60%, #FFFFFF 80%, #DC2626 80%)" },
  VN: { name: "ベトナム", bg: "radial-gradient(circle at center, #F59E0B 25%, #DC2626 26%)" },
  PH: { name: "フィリピン", bg: "linear-gradient(180deg, #1D4ED8 50%, #DC2626 50%)" },
  ID: { name: "インドネシア", bg: "linear-gradient(180deg, #DC2626 50%, #FFFFFF 50%)" },
  MY: { name: "マレーシア", bg: "linear-gradient(180deg, #DC2626 0%, #FFFFFF 100%)" },
  NZ: { name: "ニュージーランド", bg: "linear-gradient(135deg, #1E3A8A 0%, #0284C7 100%)" },
  ZA: { name: "南アフリカ", bg: "linear-gradient(135deg, #16A34A 35%, #DC2626 35%, #DC2626 65%, #0284C7 65%)" },
  UA: { name: "ウクライナ", bg: "linear-gradient(180deg, #0284C7 50%, #F59E0B 50%)" },
  BE: { name: "ベルギー", bg: "linear-gradient(90deg, #0F172A 33.3%, #F59E0B 33.3%, #F59E0B 66.6%, #DC2626 66.6%)" },
  AT: { name: "オーストリア", bg: "linear-gradient(180deg, #DC2626 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #DC2626 66.6%)" },
  PT: { name: "ポルトガル", bg: "linear-gradient(90deg, #16A34A 40%, #DC2626 40%)" },
  TR: { name: "トルコ", bg: "radial-gradient(circle at center, #FFFFFF 25%, #DC2626 26%)" },
  SA: { name: "サウジアラビア", bg: "linear-gradient(180deg, #15803D 0%, #166534 100%)" },
  IE: { name: "アイルランド", bg: "linear-gradient(90deg, #16A34A 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #F97316 66.6%)" },
  IS: { name: "アイスランド", bg: "radial-gradient(circle, #DC2626 25%, #0284C7 26%)" },
  NO: { name: "ノルウェー", bg: "radial-gradient(circle, #1E3A8A 25%, #DC2626 26%)" },
  DK: { name: "デンマーク", bg: "radial-gradient(circle, #FFFFFF 25%, #DC2626 26%)" },
  CZ: { name: "チェコ", bg: "linear-gradient(180deg, #FFFFFF 50%, #DC2626 50%)" },
  HU: { name: "ハンガリー", bg: "linear-gradient(180deg, #DC2626 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #16A34A 66.6%)" },
  RO: { name: "ルーマニア", bg: "linear-gradient(90deg, #1D4ED8 33.3%, #F59E0B 33.3%, #F59E0B 66.6%, #DC2626 66.6%)" },
  CL: { name: "チリ", bg: "linear-gradient(180deg, #FFFFFF 50%, #DC2626 50%)" },
  PE: { name: "ペルー", bg: "linear-gradient(90deg, #DC2626 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #DC2626 66.6%)" },
  MC: { name: "モナコ", bg: "linear-gradient(180deg, #DC2626 50%, #FFFFFF 50%)" },
  VA: { name: "バチカン", bg: "linear-gradient(90deg, #F59E0B 50%, #FFFFFF 50%)" },
  SL: { name: "シーランド", bg: "linear-gradient(135deg, #DC2626 40%, #0F172A 40%, #0F172A 60%, #FFFFFF 60%)" },
  AQ: { name: "南極ボール", bg: "linear-gradient(180deg, #38BDF8 0%, #0284C7 100%)" },
  UN: { name: "国連ボール", bg: "radial-gradient(circle, #FFFFFF 30%, #0284C7 31%)" },
  PB: { name: "ハイパーポーランド", bg: "linear-gradient(180deg, #FFFFFF 50%, #DC2626 50%)", image: "images/polandball.jpg" }
};

const RARITIES = [
  { level: "N", name: "ノーマル", weight: 60, color: "#94A3B8", border: "#64748B", bg: "#F1F5F9" },
  { level: "R", name: "レア", weight: 25, color: "#3B82F6", border: "#2563EB", bg: "#EFF6FF" },
  { level: "SR", name: "スーパーレア", weight: 12, color: "#A855F7", border: "#7E22CE", bg: "#F3E8FF" },
  { level: "SSR", name: "ウルトラSSR", weight: 3, color: "#F59E0B", border: "#D97706", bg: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)" }
];

const CARD_DATABASE = [];
Object.keys(COUNTRY_DESIGNS).forEach(code => {
  const country = COUNTRY_DESIGNS[code];
  RARITIES.forEach(rarity => {
    CARD_DATABASE.push({
      id: `${code}_${rarity.level}`,
      countryCode: code,
      countryName: country.name,
      bgStyle: country.bg,
      image: country.image,
      rarity: rarity.level,
      rarityName: rarity.name,
      rarityColor: rarity.color,
      rarityBorder: rarity.border,
      rarityBg: rarity.bg,
      desc: `${country.name}のポーランドボール！`,
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
  let rand = Math.random() * 100;
  let selectedRarity = RARITIES[0];
  let cumulative = 0;
  for (let r of RARITIES) {
    cumulative += r.weight;
    if (rand <= cumulative) {
      selectedRarity = r;
      break;
    }
  }

  const pool = CARD_DATABASE.filter(c => c.rarity === selectedRarity.level);
  const card = pool[Math.floor(Math.random() * pool.length)] || CARD_DATABASE[0];

  const isNew = !userOwnedCards[card.id];
  userOwnedCards[card.id] = (userOwnedCards[card.id] || 0) + 1;
  saveOwnedCards();

  return { card, isNew };
}

function getCardCollectionStats() {
  const ownedCount = Object.keys(userOwnedCards).length;
  const totalCount = CARD_DATABASE.length;
  const percent = totalCount > 0 ? Math.floor((ownedCount / totalCount) * 100) : 0;
  return { ownedCount, totalCount, percent };
}
