const phrases = [
    "空を飛ぶ", "昼寝好きな", "スピード重視の", "人生を謳歌する", "マイペースな",
    "夢見る", "宇宙を愛する", "いたずら好きな", "美食家の", "冒険心あふれる",
    "笑いを追求する", "魔法を信じる", "パーティー好きな", "奇跡を起こす", "何でもコレクションする",
    "忍者のような", "ロボットに憧れる", "永遠に若い", "世界一を目指す", "音楽が命の",
    "終わらない好奇心を持つ", "笑いの神", "未来を見通す", "スポーツ万能な", "自由奔放な",
    "全てを黄金に変える", "サバイバルマスターな", "風を読む", "不思議な力を持つ", "冒険好きな",
    "好奇心旺盛な", "冷静な", "頭を使う", "力強い", "想像力豊かな",
    "人を助ける", "チームワークを大切にする", "新しいことに挑戦する", "落ち着いた", "計画的な",
    "笑顔が絶えない", "人付き合いが上手い", "優しさを持つ", "忍耐力がある", "効率的な",
    "努力家の", "勇気ある", "目標を持つ", "工夫を凝らす", "社会を変える"
];

const jobs = [
    "法人営業", "個人営業", "商品企画", "マーケティング", "広報・PR",
    "法務", "人事", "ITコンサルタント", "Webエンジニア", "研究・開発",
    "コンサルタント", "店舗販売・接客", "編集・制作", "デザイナー", "ゲームクリエイター"
];

function generateCareer() {
    const phraseIndex = Math.floor(Math.random() * phrases.length);
    const jobIndex = Math.floor(Math.random() * jobs.length);

    const phraseText = phrases[phraseIndex];
    const jobText = jobs[jobIndex];

    document.getElementById('phrase').innerText = phraseText;
    document.getElementById('job').innerText = jobText;
}
