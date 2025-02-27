
function cleverLily(age, priceWashingMachine, priceToy){
    let money = 0;
    let toyCount = 0;

    let currentMoney = 10;

    for( let i = 1; i <= age; i++){

        if(i % 2 === 0 ){
           money = money + currentMoney;
           currentMoney +=10;
           money--;

        }else{
            toyCount++;
        }
       
    }
    let moneyFromToys = toyCount * priceToy;
    money +=moneyFromToys;
    
    if(money >= priceWashingMachine){
        let diff = money - priceWashingMachine;
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        let diff = priceWashingMachine - money;
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
cleverLily(10,

    170.00,
    
    6);
