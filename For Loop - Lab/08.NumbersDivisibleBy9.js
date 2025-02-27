
function numsDivisibleBy9(startNum, endNum){
let sum = 0;
let allNums = '';

for(let currentNum = startNum; currentNum <=endNum; currentNum++){
    if(currentNum % 9 === 0){
        allNums +=currentNum + '\n';
        sum +=currentNum;
    }
}
console.log(`The sum: ${sum}`);
console.log(allNums);



}
numsDivisibleBy9(100, 200)