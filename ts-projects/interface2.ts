function useState(initialValue: number): void {
    let value = initialValue;

    function Counter(newCounter: number) {
        let value = newCounter;
    }

    return [value, Counter];
}

let [counter, setCounter] = useState(0)

console.log(counter)
console.log(setCounter)