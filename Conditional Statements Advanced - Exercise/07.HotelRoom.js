
function hotelRoom(month, countNights){
    let studioMoney = 0;
    let apartMoney = 0;
    let sumStudio = '';
    let sumApart = '';
        
switch(month){
    case 'May':
    case 'October':
        sumStudio = 50 * countNights;
        sumApart = 65 * countNights;
    if(countNights >= 14){
        sumStudio = sumStudio * 0.70;
        sumApart = sumApart * 0.90;
        console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
        console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
    }else if(countNights >= 7){
        sumStudio = sumStudio * 0.95;
        console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
        console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)    
    }  break;
    case 'June':
    case 'September':
        sumStudio = 75.20 * countNights;
        sumApart = 68.70 * countNights;
        if(countNights >14){
            sumStudio = sumStudio * 0.80;
            sumApart = sumApart * 0.90;
            console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
        } else{
            console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)  
        } break;
        case 'August':
        case 'July' :
            sumStudio = 76 * countNights;
            sumApart = 77 * countNights; 
            if(countNights > 14){
                sumApart = sumApart * 0.90;
                console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
                console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
            } else{
                console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
            console.log(`Studio: ${sumStudio.toFixed(2)} lv.`)
            }  break;  

}
}
hotelRoom("May", 15);