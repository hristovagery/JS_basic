
function localStore(product, city, quantity){

    let price = 0;

    if(city === 'Sofia'){

        switch(product){
            case 'coffee':
                price = quantity * 0.5;
                break;
            case 'water':
                price = quantity * 0.8;
                break;
            case 'beer':
                price = quantity * 1.2;
                break;
            case 'sweets':
                price = quantity * 1.45;
                break;
            case 'peanuts':
                price = quantity * 1.60;
                break;          
        }

    }else if (city === 'Plovdiv'){
        switch(product){
            case 'coffee':
                price = quantity * 0.4;
                break;
            case 'water':
                price = quantity * 0.7;
                break;
            case 'beer':
                price = quantity * 1.15;
                break;
            case 'sweets':
                price = quantity * 1.30;
                break;
            case 'peanuts':
                price = quantity * 1.5;
                break;          
        }

    }else if (city === 'Varna'){
        switch(product){
            case 'coffee':
                price = quantity * 0.45;
                break;
            case 'water':
                price = quantity * 0.7;
                break;
            case 'beer':
                price = quantity * 1.1;
                break;
            case 'sweets':
                price = quantity * 1.35;
                break;
            case 'peanuts':
                price = quantity * 1.55;
                break;          
        }

    }
    console.log(price);

}
localStore("peanuts", "Plovdiv", 1);