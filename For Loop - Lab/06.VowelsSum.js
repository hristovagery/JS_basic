
function vowelsSum(word){
    let sum =0;

for(i=0; i<=word.length; i++){

    let letter = word[i]
    
  if(letter === 'a'){
    sum+=1;
  }else if(letter === 'e'){
    sum+=2;
  }else if(letter === 'i'){
    sum+=3;

  }else if(letter === 'o'){
    sum+=4

  }else if(letter === 'u'){
    sum+=5
  }
    
}

console.log(sum);

}
vowelsSum('hello');