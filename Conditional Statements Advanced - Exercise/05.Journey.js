
function journey(arg1, arg2){

    let budget = Number(arg1);
    let season = arg2;

    if(budget <= 100){
        console.log(`Somewhere in Bulgaria `);
        if(season === 'summer'){
            let money = budget * 0.30;
            console.log(`Camp - ${money.toFixed(2)}`);
        }else{
            let money = budget * 0.70;
            console.log(`Hotel - ${money.toFixed(2)}`);
        }
    }else if(budget <= 1000){
        console.log(`Somewhere in Balkans `);
        if(season === 'summer'){
            let money = budget * 0.40;
            console.log(`Camp - ${money.toFixed(2)}`);
        }else{
            let money = budget * 0.80;
            console.log(`Hotel - ${money.toFixed(2)}`);
        }
    }else{
        console.log(`Somewhere in Europe `);
        let money = budget * 0.90;
        console.log(`Hotel - ${money.toFixed(2)}`);

    }
}
journey(1500, 'summer');