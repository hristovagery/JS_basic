
function sumOfNumbers(n){

    let sum = 0;

    for(let digit of n){
        
    sum += Number(digit);
    }
    console.log(`The sum of the digits is:${sum} `)

}
sumOfNumbers('1234');