"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalListeningTime = (tracks) => {
    // write your code here
    const totalMinutes = tracks.reduce((acc, track) => {
        return acc += track.minutes;
    }, 0);
    return totalMinutes;
};
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
//# sourceMappingURL=calculateTotalListningTime.js.map