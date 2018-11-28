function isPrimeFunc(num) {
    var prime = true;
    var num2 = 2;
    while (prime && num2 < num) {
        if (num % num2 ===0) prime = false;
        num2++;
    }
    return prime;
}

function Problem10(input) {
    const primeNums = [];
    for (var i=2; i < input; i++) {
        const isPrime = isPrimeFunc(i);
        if (isPrime) {
            primeNums.push(i);
        }
    }
    const answer = primeNums.reduce((sum, num) => (sum += num));
    return `Problem #10 Answer: ${answer}`;
}

export default Problem10;