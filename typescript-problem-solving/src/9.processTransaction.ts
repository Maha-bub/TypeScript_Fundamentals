interface Transaction {
    type: "deposit" | "withdrawal",
    amount: number
}

const processTransaction = (amount: number, transaction: Transaction) => {
    let amountTotal = amount;
    if (transaction.type === "deposit") {
       return amountTotal + transaction.amount;
    } else if (transaction.type === "withdrawal") {
       return amountTotal -= transaction.amount;
    }
    return amountTotal;

}

console.log(processTransaction(5000, { type: "withdrawal", amount: 2000 }));
console.log(processTransaction(5000, { type: "withdrawal", amount: 7000 }));
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
