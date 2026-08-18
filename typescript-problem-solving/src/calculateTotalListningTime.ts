interface Track {
    title: string,
    minutes: number
}


const calculateTotalListeningTime = (tracks: Track[]): number => {
    // write your code here
    const totalMinutes = tracks.reduce((acc, track) => {
        return acc += track.minutes;
    }, 0);
    return totalMinutes;
}


const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
console.log(calculateTotalListeningTime(tracks));
// 10
// another example:
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks2));