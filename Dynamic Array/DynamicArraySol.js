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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */


    function dynamicArray(n, queries) {
    // Write your code here
    let seqList=[...new Array(n)].map(x => []);
    let lastAnswer = 0, index= 0, ans=[], index2;
    for(let i of queries){
        index = (i[1] ^ lastAnswer) % n;
        console.log('index',index)
        if (i[0]===1){
            seqList[index].push(i[2]); 
        }
        else if(i[0]===2){
            index2 = i[2] % (seqList[index].length);
            lastAnswer = seqList[index][index2];
            ans.push(lastAnswer);
        }
    }
return ans
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
