
function timeAfter15Minutes(arg1,arg2){

    let h= Number(arg1);
    let m = Number(arg2);
    m = m + 15;

    if(m >=60) {
        h = h + 1;
        m = m - 60;
    }
    if(h > 23){
        h = 0;
    }
    if(m < 10){
        console.log(`${h}:0${m}`);
    }else{
    console.log(`${h}:${m}`);

    }


}
timeAfter15Minutes(23, 46);