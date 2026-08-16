// function useState(initialValue: number): void {
//     let value = initialValue;

//     function Counter(newCounter: number) {
//         let value = newCounter;
//     }

//     return [value, Counter];
// }

// let [counter, setCounter] = useState(0)

// console.log(counter)
// console.log(setCounter)

function useState<T>(initialValue:T){
    let value = initialValue;

    function Counter(newCounter: T) {
        value = newCounter;
    }

    return [value, Counter];
}

useState<number>(0)
useState<boolean>(true)
useState<string>("Mahabub");

interface User{
    email: string;
    isLoggedIn:boolean;
}

useState<User>({ email: '', isLoggedIn: false })