
function salary(input){

    let n = Number(input[0]);
    let salary = Number(input[1])
    

    for(i = 2; i< n+2; i++)
        {
            let site = input[i];
    if(site === 'Facebook'){
         salary -= 150;
    }else if(site === 'Instagram'){
       salary -= 100;
    }else if(site === 'Reddit'){
       salary -= 50;
    }
}

if (salary <= 0){
    console.log(`You have lost your salary.`)
    
}else{
    console.log(Math.floor(salary));
}
}

salary(10,

    750,
    
    "Facebook",
    
    "Dev.bg",
    
    "Instagram",
    
    "Facebook",
    
    "Reddit",
    
    "Facebook",
    
    "Facebook");