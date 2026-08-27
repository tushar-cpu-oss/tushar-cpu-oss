const fs = require("fs");

const contributions = Number(process.env.CONTRIBUTIONS || 0);

const level = Math.floor(contributions / 100) + 1;

const xp = contributions % 100;

const progress = Math.round((xp / 100) * 20);

const bar =
  "🟩".repeat(progress) +
  "⬛".repeat(20 - progress);

const titles = [
  "Code Apprentice",
  "Bug Hunter",
  "Logic Explorer",
  "Algorithm Adventurer",
  "Full Stack Ranger",
  "Backend Wizard",
  "System Architect",
  "Code Legend"
];

const titleIndex = Math.min(
  Math.floor((level - 1) / 3),
  titles.length - 1
);

const title = titles[titleIndex];

const svg = `
<svg width="900" height="400" xmlns="http://www.w3.org/2000/svg">

<style>

.title {
  font: bold 38px Arial;
  fill: white;
}

.text {
  font: 24px Arial;
  fill: #c9d1d9;
}

.small {
  font: 18px Arial;
  fill: #8b949e;
}

</style>

<rect width="100%" height="100%" rx="20" fill="#0d1117"/>

<text x="450" y="70" text-anchor="middle" class="title">
🎮 TUSHAR'S DEV QUEST
</text>

<text x="450" y="125" text-anchor="middle" class="text">
Level ${level} — ${title}
</text>

<text x="450" y="185" text-anchor="middle" class="text">
⚡ Total XP: ${contributions}
</text>

<text x="450" y="230" text-anchor="middle" class="text">
${bar}
</text>

<text x="450" y="275" text-anchor="middle" class="small">
${xp}/100 XP to Level ${level + 1}
</text>

<text x="450" y="340" text-anchor="middle" class="small">
Every GitHub contribution powers the journey 🚀
</text>

</svg>
`;

fs.mkdirSync("assets", { recursive: true });

fs.writeFileSync(
  "assets/dev-quest.svg",
  svg
);
