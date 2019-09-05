function Problem14() {
    let counter = 0;
    let longestChain = 0;
    let ans = 0;

    for (let i=2; i < 1000000; i++) {
        let val = i;
        while (val > 1) {
            val = (val % 2 === 0)? (val / 2) : (3 * val) + 1;
            counter++
            console.log('val: ', val);
        }
        if (counter > longestChain) {
            longestChain = counter;
            ans = val;
        }
    }
    

    return `#14 Answer: ${ans}`;
}

export default Problem14;