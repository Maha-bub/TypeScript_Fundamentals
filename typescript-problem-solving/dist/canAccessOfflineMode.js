"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canAccessOfflineMode = (listener) => {
    if (listener !== 'free') {
        return true;
    }
    return false;
};
console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
//# sourceMappingURL=canAccessOfflineMode.js.map