type User = 'free' | 'premium' | 'pro'

const canAccessOfflineMode = (listener: User): boolean => {
    if (listener !== 'free') {
        return true;
    } return false

}

console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
