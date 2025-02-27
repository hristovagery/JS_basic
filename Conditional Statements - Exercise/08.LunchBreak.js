
function luchBreak(serialName, durationEpisode, durationBreak ){

    let lunchTime = durationBreak / 8;
    let restTime = durationBreak / 4;
    let durationBreakRest = durationBreak - lunchTime - restTime;

    if(durationEpisode <= durationBreakRest){
        let diff = Math.ceil(durationBreakRest - durationEpisode)
        console.log(`You have enough time to watch ${serialName} and left with ${diff} minutes free time.`)
    }else{
        let diff = Math.ceil(durationEpisode - durationBreakRest);
        console.log(`You don't have enough time to watch ${serialName}, you need ${diff} more minutes.`)
    }



}
luchBreak("Teen Wolf", 48, 60);