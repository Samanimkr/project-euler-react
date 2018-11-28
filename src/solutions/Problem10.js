function isPrimeFunc(num) {
    if (num <= 1) {
        return true
    } else if (num <= 3) {
        return true
    } else if (num%2 === 0 || num%3 === 0) {
        return false
    }

    let i = 5
    while (i*i <= num) {
        if (num%i === 0 || num%(i+2) === 0) {
            return false
        }
        i += 6
    }
    return true
}

function Problem10(input) {
    if (input === '') return 'Please enter a number';
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