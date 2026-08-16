interface Response<T> {
    data: T,
    status: 401 //not found
}

const transactionAmount: Response<number> = {
    data: 50000,
    status: 401
}

const userIsactive: Response<boolean> = {
    data: true,
    status: 401
}

function getLength<T>(array: T[]): number {
    return array.length;
}