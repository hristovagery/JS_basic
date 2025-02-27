
function shopping(budget, videoCardCount, procesorCount, ramMemoryCount){

    let sumVideoCards = videoCardCount * 250;
    let processor = sumVideoCards * 0.35;
    let ramMemmory = sumVideoCards * 0.10;
    let totalSum = sumVideoCards + (processor * procesorCount) + (ramMemmory * ramMemoryCount);

    if( videoCardCount > procesorCount){
        totalSum = totalSum * 0.85;
    }
    if(budget >= totalSum){
        let diff = Math.abs(budget - totalSum)
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }else{
        let diff = Math.abs(budget - totalSum);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
        
    }
}
shopping(920.45, 3, 1, 1);