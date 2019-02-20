function calculateFactors(number) {
    const half = Math.floor(number / 2);
    let numOfFactors = 1;

    for (let i=1; i <= half; i++) {
        if (number%i === 0) numOfFactors++;
    }
    return numOfFactors;
}

function Problem12() {
    let val = 0;
    let counter = 1;
    let factors = 1;
    while (factors <= 500)  {
        val += counter;
        counter++;
        console.log('val: ', val);
        factors = calculateFactors(val);
        console.log('factors: ', factors);
    }

    return `Problem #10 Answer: ${val}`;
}

export default Problem12;