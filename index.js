// while and do-while loops
let i = 0;
while (i < 30) {
  console.log(i);
  i += 2 
}
let j = 5;
do {
    console.log(j);
    j += 2;
} while (j < 8);//executes the first block of code, then continues if the condition is true

let age = 18;
do {
  if (age >= 18){
    console.log("you're eligible");
  }
  else{
    console.log("you're not eligible");
  }
} while (age >= 60);//loop will keeping running if our condition is true, it will stop when condition is no longer true

let number = 76;
do {
    if (number == 86) {
        console.log("correct Number");
    }
    else{
        console.log("guess again");
    }//only "do" loop will run because our condition is not true. it will run continously when the condition of the while loop is true
} while (number >= 100);

//break and continue
for(let h = 0; h < 10; h++){
   if(h === 3){
    continue;
  }
  else{
    console.log(h);
  }
}

for(let b = 0; b <= 8; b++){
    if (b === 4) {
      break;
    }
    else{
      console.log(b);
    }
}