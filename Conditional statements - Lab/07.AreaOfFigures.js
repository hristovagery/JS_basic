
function findArea(shape,length1,length2){
    
    let area = "";

    if(shape === 'square'){
        area = length1 * length1;

    }else if(shape === 'rectangle'){
        area = length1 * length2
       
    }else if(shape === 'circle'){
        area = Math.PI * (length1 * length1);

    }else if(shape === 'triangle') {
        area = (length1 * length2 )/2;
    }
    console.log(area.toFixed(3));

}
findArea("rectangle", 7, 2.5);