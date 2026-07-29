const readlineSync = require('readline-sync');

function generateFibonacci(n) {
    const sequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

function isFibonacci(num) {
    if (num < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    if (num === a) {
        return true;
    }

    while (a <= num) {
        if (a === num) {
            return true;
        }
        const next = a + b;
        a = b;
        b = next;
    }

    return false;
}

function partA() {
    const n = readlineSync.questionInt('How many terms? ');

    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    const sequence = generateFibonacci(n);
    console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

function partB() {
    const num = readlineSync.questionInt('Enter a number to check: ');

    if (isFibonacci(num)) {
        console.log(`${num} is a Fibonacci number.`);
    } else {
        console.log(`${num} is NOT a Fibonacci number.`);
    }
}

function main() {
    partA();
    partB();
}

main();