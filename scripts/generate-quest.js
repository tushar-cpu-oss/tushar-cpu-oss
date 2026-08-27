const fs = require("fs");

const contributions = Math.max(0, Number(process.env.CONTRIBUTIONS || 0));

const XP_PER_LEVEL = 100;
const level = Math.floor(contributions / XP_PER_LEVEL) + 1;
const xp = contributions % XP_PER_LEVEL;
const progressWidth = Math.round((xp / XP_PER_LEVEL) * 560);

const titles = [
  "Code Apprentice",
  "Bug Hunter",
  "Logic Explorer",
  "Algorithm Adventurer",
  "Full Stack Ranger",
  "Backend Builder",
  "System Explorer",
  "Code Legend"
];

const title = titles[Math.min(Math.floor((level - 1) / 3), titles.length - 1)];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="320" viewBox="0 0 900 320">
  <rect width="900" height="320" rx="24" fill="#0d1117"/>
  <text x="450" y="58" text-anchor="middle" fill="#f0f6fc" font-family="Arial, sans-serif" font-size="32" font-weight="700">TUSHAR'S DEV QUEST</text>

  <text x="450" y="108" text-anchor="middle" fill="#c9d1d9" font-family="Arial, sans-serif" font-size="24">Level ${level} · ${title}</text>
  <text x="450" y="150" text-anchor="middle" fill="#8b949e" font-family="Arial, sans-serif" font-size="20">Total XP: ${contributions}</text>

  <rect x="170" y="188" width="560" height="28" rx="14" fill="#21262d"/>
  <rect x="170" y="188" width="${progressWidth}" height="28" rx="14" fill="#58a6ff"/>

  <text x="450" y="255" text-anchor="middle" fill="#c9d1d9" font-family="Arial, sans-serif" font-size="18">${xp} / ${XP_PER_LEVEL} XP to Level ${level + 1}</text>
  <text x="450" y="290" text-anchor="middle" fill="#8b949e" font-family="Arial, sans-serif" font-size="16">Every GitHub contribution powers the journey.</text>
</svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync("assets/dev-quest.svg", svg);
console.log(`Generated Dev Quest: ${contributions} XP, Level ${level}`);
