const padNumber = (num: number, size: number): string => {
    let paddedNum = num + '';

    while (paddedNum.length < size) {
        paddedNum = '0' + paddedNum;
    }

    return paddedNum;
}

export {
    padNumber,
}