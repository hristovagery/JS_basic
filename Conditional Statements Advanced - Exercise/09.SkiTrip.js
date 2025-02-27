
function skiTrip(days, typeRoom, mark){

    let sum = 0;

    switch(typeRoom){
        case 'room for one person':
            sum = 18 *(days - 1);
            break;
          case 'apartment':
            sum = 25 * (days - 1);
            if(days < 10){
                sum = sum * 0.70;
            }else if(days >= 10 && days <=15){
                sum = sum * 0.65;
            }else if( days > 15){
                sum = sum * 0.50;
            }break;
            case 'president apartment':
                sum = 35 * (days - 1);
                if(days < 10){
                    sum = sum * 0.90;
                }else if(days >= 10 && days <=15){
                    sum = sum * 0.85;
                }else if( days > 15){
                    sum = sum * 0.80;
                }break;
                    
    }
    if(mark === 'positive'){
        sum = sum * 1.25;
      } else{
        sum = sum * 0.9;
      } 
      console.log(sum.toFixed(2));

}
skiTrip(30,
    "president apartment",
    "negative"
    
    );