function isPerfectPrime(arr) {
    console.log(arr);
    let count = 0;
    for (let i = 1; i < arr.length; i = i + 2) {
        for (let j = 2; j < arr[i]; j++) {
            if ((arr[i]) % j === 0) {
                count++;
            }
        }
    }
    return count === 0;
}
console.log(isPerfectPrime([2, 7, 6, 9]));
console.log(isPerfectPrime([1, 3, 5, 5, 6, 7]));