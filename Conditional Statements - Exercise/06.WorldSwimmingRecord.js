
function swimmingPool(record, distance, time){

    let swimTimeSeconds = distance * time;
    let addSeconds = (Math.floor(distance / 15)) * 12.5;
    let totalTime = swimTimeSeconds + addSeconds;
   // let diff = Math.abs(record - totalTime);

    if(record <= totalTime){
        let diff = Math.abs(record - totalTime);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }else{
        let diff = Math.abs(record - totalTime);
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)

    }
}
swimmingPool(10464,

    1500,
    
    20);