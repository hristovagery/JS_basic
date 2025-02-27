
function needMoney(budget, countStatist, countPriceClothes){

    let decor = budget * 0.10;
    let sum = "";
    if(countStatist > 150){
        sum = (countStatist * (countPriceClothes * 0.90)) + decor;
    }else{
        sum = (countStatist * countPriceClothes) + decor;
    }
    if(budget >= sum){

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    }
}
needMoney(15437.62,

    186,
    
    57.99);