
function toyShop(vacationPrice, countPuzzle, countDoll, countBear, countMinion, countTruck){

    let totalCount = countPuzzle + countDoll + countBear + countMinion + countTruck;
    let totalPrice = (countPuzzle * 2.60) + (countDoll * 3.00) + (countBear * 4.1) +
                   + (countMinion * 8.20) + (countTruck * 2.0);
    let  priceAfterDiscount = "";             

    if ( totalCount >= 50){
      
        priceAfterDiscount = totalPrice - (totalPrice * 0.25);
        priceAfterDiscount = priceAfterDiscount - (priceAfterDiscount * 0.1);
    }else{
        priceAfterDiscount = totalPrice -(totalPrice * 0.1);
    }
    if(priceAfterDiscount >= vacationPrice){

        console.log(`Yes! ${(priceAfterDiscount - vacationPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(vacationPrice - priceAfterDiscount).toFixed(2)} lv needed.`)
    }


}
toyShop(17.91, 1, 1, 1, 1, 1)

    
    
    
    
    
    
    ;