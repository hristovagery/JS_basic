
function onTime(hourExam, minExam, hourArrive, minArrive){

    let timeExam = hourExam * 60 + minExam;
    let timeArrive = hourArrive * 60 + minArrive;

    let diff = Math.abs(timeExam - timeArrive);
    let hours = Math.floor(diff / 60);
    let min = diff % 60;
    if(timeExam > timeArrive && timeExam - timeArrive > 30){
        console.log('Early')
        if (diff >= 60){
            if(min < 10){
                console.log(`${hours}:0${min} hours before the start`);
            }else{
                console.log(`${hours}:${min} hours before the start`);
            }
        }else{
            console.log(`${min} minutes before the start`)
        }
    }else if(timeArrive > timeExam){
        console.log("Late");
        if(diff >= 60){
            if(min < 10){
                console.log(`${hours}:0${min} hours after the start`)
            }else{
                console.log(`${hours}:${min} hours after the start`) 
            }
        }else{
            console.log(`${min} minutes after the start`)
        }
    }else{
        console.log("On time");
        if(min > 0){
            console.log(`${min} minutes before the start`)
        }
    }



}
onTime(9, 30, 9, 50)