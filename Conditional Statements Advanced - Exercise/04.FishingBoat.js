
function fishingBoat(budget, season, countFisher){

    let rent = 0;
    switch(season){
        case 'Spring':
            rent = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;       
    }
    if(countFisher <= 6){
        rent = rent * 0.9;
    }else if(countFisher >= 7 && countFisher <= 11){
        rent = rent * 0.85;
    }else if(countFisher > 12){
        rent = rent * 0.75;
    }
    if(countFisher % 2 === 0){
        if(season !== 'Autumn'){
            rent = rent * 0.95;
        }
    }
    let diff = Math.abs(budget - rent);
    if (budget > rent){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
fishingBoat(3000,
    "Summer",
    12
    
    
    );