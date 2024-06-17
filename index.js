 function task0(){
 let myVar = 5;
 if (typeof myVar === "number") {
 console.log("This is a number");
 } else{
     console.log( "This is not a number");
     }
 }

 function task1(){
     let result = prompt("Укажите знак зодиака");
     switch(result){
         case "Телец":
             alert("Вы телец");
             break;
             case "Лев":
                 alert("Вы лев")
                 break;
                 case "Весы":
                     alert("Вы весы")
                     break;
         default:
             alert("Вы неизвестный знак зодиака");
     }
 }    
 //task1();

 //2

 function task2(){
     for(let i=0; i<=40; i++){
         console.log(i);
     }
     let i=1;
     while(i <=40){
         console.log(i);
         i++;
     }
     let j=0;
     do {
         console.log(j);
         j++;
     } while(j <=40);
 }
 //task2();

 //3

 function task3(){
 while(true){
     alert("Бесконечное сообщение");
    }
}
//task3();

//4

function task4(){
    let result = prompt("Введите число больше 5");

if (result === null || isNaN(Number(result)) || Number(result)<=5){
    task4();
    } else {
        alert("Поздравляю!!!");
    }   
}

//task4();

function task5(){
    for(let i=8; i<= 20; i++){
        if (i%2 ===0){
            console.log(i);
        }
    }
}
//task5();

function task6(){
    for(let i=1; i <=7; i ++){
        if (i% 2 !== 0 ){
            console.log(i);
        }
    }
}
//task6();