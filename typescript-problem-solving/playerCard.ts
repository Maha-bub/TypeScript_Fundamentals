interface PlayerCard {
    username: string,
    level: number,
    region: string
}
const formatPlayerCard = (player: PlayerCard) => {
    return `${player.username} is a level ${player.level} player from ${player.region}.`;

}




console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));