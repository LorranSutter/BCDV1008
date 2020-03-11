function exercise05(arr, n) {
    if(arr == [] || n <= 0) return arr;

    let maxSum = Number.NEGATIVE_INFINITY;
    let sum;
    for(let i = 0; i < arr.length-n+1; i++) {
        sum = 0;
        for(let j = i; j < i+n; j++){
        sum += arr[j];
        }    

        if(sum > maxSum)
        maxSum = sum;
    }

    return maxSum;
}