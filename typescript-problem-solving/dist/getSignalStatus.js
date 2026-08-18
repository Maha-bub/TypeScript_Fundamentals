"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (Strength) => {
    if (Strength <= 20) {
        return "Weak";
    }
    else if (Strength >= 21 && Strength <= 50) {
        return "Fair";
    }
    else if (Strength >= 51 && Strength <= 80) {
        return "Good";
    }
    return "Excellent";
};
console.log(getSignalStatus(20));
console.log(getSignalStatus(21));
console.log(getSignalStatus(50));
console.log(getSignalStatus(80));
//# sourceMappingURL=getSignalStatus.js.map