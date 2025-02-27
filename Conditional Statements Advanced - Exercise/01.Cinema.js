
function cinema(typFilm, countRow, countColumn){

    let ticket = 0;
    let sum = 0;
    switch(typFilm){
        case 'Premiere':
            ticket = 12;
            sum = ticket * countRow * countColumn;
            break;
            case 'Normal':
            ticket = 7.5;
            sum = ticket * countRow * countColumn;
            break;
            case 'Discount':
            ticket = 5;
            sum = ticket * countRow * countColumn;
            break;
    }
    console.log(`${sum.toFixed(2)} leva`);

}
cinema("Discount",
12,
30


)