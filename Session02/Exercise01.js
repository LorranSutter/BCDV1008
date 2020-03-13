difference = (x) => {
    if(x > 13) return (x-13)*2;
    return Math.abs(x-13);
}

console.log(difference(32))
console.log(difference(11))