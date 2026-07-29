const readlineSync = require('readline-sync');

function printTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${num}  x  ${i.toString().padEnd(2, ' ')} =  ${num * i}`);
    }
}

function printTablesUpToN(n) {
    for (let num = 1; num <= n; num++) {
        printTable(num);
        if (num < n) {
            console.log('---------------------------');
        }
    }
}

function partA() {
    const num = readlineSync.questionInt('Enter a number: ');
    printTable(num);
}

function partB() {
    const n = readlineSync.questionInt('Enter N: ');

    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    printTablesUpToN(n);
}

function main() {
    partA();
    console.log();
    partB();
}

main();