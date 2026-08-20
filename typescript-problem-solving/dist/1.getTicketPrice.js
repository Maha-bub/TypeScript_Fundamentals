"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    if (age < 5) {
        return 0;
    }
    else if (age >= 5 && age <= 12) {
        return 100;
    }
    else if (age >= 13 && age <= 59) {
        return 200;
    }
    return 120;
};
console.log(getTicketPrice(0));
console.log(getTicketPrice(5));
console.log(getTicketPrice(20));
console.log(getTicketPrice(60));
//# sourceMappingURL=1.getTicketPrice.js.map