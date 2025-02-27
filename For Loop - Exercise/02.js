function multiplicationTable(number){
    let result = 0;

    for(i= 1; i<=10; i++){

        result = i * number;
        console.log(`${i} * ${number} = ${result}`)

    }

}
multiplicationTable(5);