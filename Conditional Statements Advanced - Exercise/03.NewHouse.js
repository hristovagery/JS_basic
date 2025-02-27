
function newHouse(typeFlowers, countFlowers, budget){

    let sum = 0;
    

    switch(typeFlowers){
        case 'Roses':
            sum = 5 * countFlowers;
            if(countFlowers > 80){
                sum = sum * 0.9;
            }
            break;
        case 'Dahlias':
            sum = 3.8 * countFlowers;
            if(countFlowers > 90){
                sum = sum * 0.85;
            }
            break;
        case 'Tulips':
            sum = 2.8 * countFlowers;
            if(countFlowers > 80){
                sum = sum * 0.85;
            }
            break;
        case 'Narcissus':
            sum = 3.00 * countFlowers;
            if(countFlowers < 120){
                sum = sum * 1.15;
            }
            break;
        case 'Gladiolus':
            sum = 2.5 * countFlowers;
            if(countFlowers < 80){
                sum = sum * 1.20;
            }
            break;                   
        
    }
    let restSum = Math.abs(budget - sum);
    if (budget >= sum){
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${restSum.toFixed(2)} leva left.`);
    }else{

        console.log(`Not enough money, you need ${restSum.toFixed(2)} leva more.`);
    }
}
newHouse("Narcissus",
119,
360
);