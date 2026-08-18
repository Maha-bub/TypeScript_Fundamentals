interface Player {
    name: string,
    scores: number[];
}

interface Result {
    name: string,
    average: number,
    rank: string
}

const getPlayerStats = (player: Player): Result => {
    const TotalScore: number = player.scores.reduce((score, currentScore) => {
        return score += currentScore;
    }, 0);
    const playerName: string = player.name;

    const average: number = TotalScore / player.scores.length;
    let rank: string;
    if (average >= 80) {
        rank = "MVP";
    } else {
        rank = "Rookie"
    }
    return { name: playerName, average, rank }

}



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