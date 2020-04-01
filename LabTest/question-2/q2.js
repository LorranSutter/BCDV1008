const multiplyNumbers = arr => {
    return arr
        .filter(x => typeof x === "number")
        .map(x => x * 5);
};

const mixedArray = ['Matrix', 1, true, 2, false, 3];
console.log(multiplyNumbers(mixedArray));