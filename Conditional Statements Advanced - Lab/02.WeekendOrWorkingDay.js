function workigDayOrWeekend(dayOfWeek){

    switch(dayOfWeek){
        case "Monday":
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log("Working day");
            break;  
        case 'Saturday':
        case 'Sunday':
            console.log("Weekend");
            break;
        default:
            console.log("Error")
            break;                  

    }

}
days('Mgddgh');