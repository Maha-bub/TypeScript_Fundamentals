"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAgeRatingAccess = (age) => {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age >= 7 && age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age >= 13 && age <= 16) {
        return "T (Teen)";
    }
    return "M (Mature)";
};
console.log(getAgeRatingAccess(10));
//# sourceMappingURL=gamingAgeChecker.js.map