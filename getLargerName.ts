const getLargerName = (persone1: string, persone2: string): string => {
    if (persone1.length > persone2.length) {
        return persone1;
    }
    return persone2;
}