
function workingHours(hours, dayOfWeek){
    switch(dayOfWeek){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
        if(hours >= 10 && hours < 18){
            console.log('open')
        }else{
            console.log('closed')
        }break;
        default:
            console.log('closed');
    }

}
workingHours(11, "Sunday");