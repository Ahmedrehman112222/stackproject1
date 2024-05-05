var age;
function check(age){
    if (age < 18){
        console.log("sorry, you are under 18");
    }else{
        console.log("welocome");
    }
}
check(19);
for(let i=0; i<10; i++){
    console.log(i);
}
console.log("--------------------");
var i=5;
while(i<20){
    console.log(i);
    i=i+3;
}
console.log("week table");
for(let i=0; i<2; i++){
    for(let j=1; j<7; j++){
        console.log("week" + i +"-----Day" + j);
        
    }
    console.log("   ");
}



for(let i = 1; i < 5; i++) {
    
    if(1 == 1) {
        console.log('Gold medal');
    } else {
        console.log(i);
    }
    if (1 == 1) {
        console.log("Silver medal");
    } else {
        console.log(i);
    }
    if(1 == 1) {
        console.log("Bronze medal");
    }else{
        console.log(i);
    }
    console.log(i);
}
function sum(){
    var x= 2;
    var y = 3;
    let z = x+y;
    console.log(z);
}

for(let i=0; i<10; i++){
    sum();
}
console.log("--------------------------------");
function sum1(a,b){
    var c=a+b;
    console.log(c);
}
sum1(4,5);
console.log("------------------------ ");
var arry = ["wheat","barley","potato","salt"];
for(let i=0; i<4; i++){
    console.log(arry[i]);
}
console.log("-------------------");
function test(){
    let arry1 = ["a","b","c","d","e"];
    for(let i=0; i<5; i++){
        console.log(arry1[i]);
    }
}
test();