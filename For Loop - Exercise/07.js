function trekkingMania (input){

    let index = 0;
    let n = input[index];
    index++;
    let countMusala = 0;
    let countMonblan = 0;
    let countKilimandjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for(let i = 1; i <= n; i++){
        let people = Number(input[index]);
        index++;
        if(people <= 5){
            countMusala++;
        }else if(people >= 6 && people <= 12){
            countMonblan++;
        }else if(people >= 13 && people <= 25){
            countKilimandjaro++;
        }else if(people >= 26 && people <= 40){
            countK2++;
        }else if(people >= 41){
            countEverest++;
        }

    }
    let musala = countMusala/n * 100;
    let monblan = countMusala/ n * 100; 
    let kilimandjaro = countMusala/n * 100; 
    let k2 = countMusala/n * 100; 
    let everest = countMusala/n * 100; 

    console.log(musala.toFixed(2) + '%');
    console.log(monblan.toFixed(2) + '%');
    console.log(kilimandjaro.toFixed(2) + '%');
    console.log(k2.toFixed(2) + '%');
    console.log(everest.toFixed(2) + '%');

}
trekkingMania((["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"]))