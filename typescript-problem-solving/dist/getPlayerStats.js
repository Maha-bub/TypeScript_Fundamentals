"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerStats = (player) => {
    const TotalScore = player.scores.reduce((score, currentScore) => {
        return score += currentScore;
    }, 0);
    const playerName = player.name;
    const average = TotalScore / player.scores.length;
    let rank;
    if (average >= 80) {
        rank = "MVP";
    }
    else {
        rank = "Rookie";
    }
    return { name: playerName, average: average, rank: rank };
};
console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));
// Expected output:
// { name: "Nova", average: 87.5, rank: "MVP" }
// another example:
console.log(getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50]
}));
// Expected output:
// { name: "Zex", average: 58.75, rank: "Rookie" 
//# sourceMappingURL=getPlayerStats.js.map