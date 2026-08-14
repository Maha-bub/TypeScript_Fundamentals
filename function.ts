const addTowNumbers = (num1: number, num2: number): number[] => {
    const totalSum: number = num1 + num2;
    return [totalSum];
}
const substructTowNumbers = (num1: number, num2: number): { number } => {
    const total: number = num1 - num2;
    return { number: total };
}
const multiplayTowNumbers = (num1: number, num2: number): [string, number] => {
    const total: number = num1 * num2;
    return ["Total", total];
}   