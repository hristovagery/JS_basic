
function tradeCommissions(city, sales){

    let commission = 0;

    if(sales >= 0 && sales <= 500 && (city === 'Sofia' || city === 'Varna' || city === 'Plovdiv')){
        switch(city){
            case 'Sofia':
                commission = sales * 0.05;
                break;
            case 'Varna':
                commission = sales * 0.045;
                break;
            case 'Plovdiv':
                commission = sales * 0.055;
                break;            
        }
        console.log(commission.toFixed(2));
    }else if(sales > 500 && sales <= 1000 && (city === 'Sofia' || city === 'Varna' || city === 'Plovdiv')){
        switch(city){
            case 'Sofia':
                commission = sales * 0.07;
                break;
            case 'Varna':
                commission = sales * 0.075;
                break;
            case 'Plovdiv':
                commission = sales * 0.08;
                break;            
        }
        console.log(commission.toFixed(2));
    }else if(sales > 1000 && sales <= 10000 && (city === 'Sofia' || city === 'Varna' || city === 'Plovdiv')){
        switch(city){
            case 'Sofia':
                commission = sales * 0.08;
                break;
            case 'Varna':
                commission = sales * 0.1;
                break;
            case 'Plovdiv':
                commission = sales * 0.12;
                break;            
        }
        console.log(commission.toFixed(2));
    }else if(sales > 10000 && (city === 'Sofia' || city === 'Varna' || city === 'Plovdiv')){
        switch(city){
            case 'Sofia':
                commission = sales * 0.12;
                break;
            case 'Varna':
                commission = sales * 0.13;
                break;
            case 'Plovdiv':
                commission = sales * 0.145;
                break;            
        }
        console.log(commission.toFixed(2));
    }else{
        console.log('error')
    }



}
tradeCommissions("Kaspichan", 500);