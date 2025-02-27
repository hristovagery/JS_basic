
function operationBetweenNumbers(num1, num2, operator){

    let sum = 0;
    let text = '';
    if(operator === '+'){
        sum = num1 + num2;
        if(sum % 2 === 0){
            text = 'even'
        console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
    }else{
        console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
    }
}else if (operator === '-' ){
    sum = num1 - num2;
    if(sum % 2 === 0){
        text = 'even'
    console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
}else{
    text = 'odd'
    console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
}
}else if (operator === '*' ){
    sum = num1 * num2;
    if(sum % 2 === 0){
        text = 'even'
    console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
}else{
    text = 'odd'
    console.log(`${num1} ${operator} ${num2} = ${sum} - ${text}`);
}
}else if(operator === '%'){
    if(num2 === 0){
        console.log(`Cannot divide ${num1} by zero`)
    }else{
        sum = num1 % num2;
        console.log(`${num1} % ${num2} = ${sum}`)
    }
 
}else if(operator === '/'){
    if(num2 === 0){
        console.log(`Cannot divide ${num1} by zero`)
    }else{
        sum = num1 / num2;
        console.log(`${num1} / ${num2} = ${sum.toFixed(2)}`) 
    }
    
   
}
}
operationBetweenNumbers(10, 0, '%');