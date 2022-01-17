//https://www.hackerrank.com/challenges/sock-merchant/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    let counter = 0, pairs = 0;
    // Write your code here
   let sortedArray = ar.sort()
   
   for(let i=0; i<sortedArray.length; i++){
       if (sortedArray[i]== sortedArray[i+1]){
           counter++
           console.log('counter', counter)
       }
       else if (sortedArray[i]!= sortedArray[i+1] ){
         pairs = Math.floor(counter/2)  
       }
       
       console.log('pairs', pairs)
   }
        return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
