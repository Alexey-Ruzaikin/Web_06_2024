function task1(){
    let arr1=[];
    let arr2= new Array();
    let arr3 = Array.from("Hello");
    console.log(arr1, arr2,arr3);
}
//task1();


function task2(){
    let arr = [1,2,3,4,5,6,7];
    console.log(arr[4]);
    arr[4] = 10;
    console.log([arr[4]]);
}
//task2();

function task3() {
    let arr = [1,2,3,4,5,6,7];
    const button= document.getElementById("button");

    button.addEventListener("mouseenter", function() {
        console.log(arr.length);
    });
}
//task3();
function task4(){
    let arr = [1,2,3,4,5,6,7];
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

//task4();
function task5(){
    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,8];
    //let arr3 =arr1.concat(arr2);
    //let arr3 = [...arr1, ...arr2];
    arr1.push(...arr2);
    console.log(arr1);
}
//task5();

function task6(){
    let arr1 =[1,2,3,4];
    let arr2 =[1,2,3,4];

    let firstElem = arr1.shift();
    console.log(firstElem, arr1);

    let lastElem = arr2.pop();
    console.log(lastElem,arr2);
}
//task6();

function task7(){
    let arr1 =[1,2,3,4];
    let lastElem = arr1.pop();
    console.log(lastElem,arr1);
}
//task7();

function task8(){
    let arr1 =[1,2,3,4];
    arr1.unshift(0);
    console.log(arr1);
}
//task8();

function task9(){
    let date= new Date();
    console.log(date);
}
//task9();

function task10(){
    let date = new Date();
    const months = ["января","февраля","марта"," апреля", "мая", "июня","июля", "августа", "сентября", "октября","ноября","декабря"];

    const stringDate = `${date.getDate()
    } ${ months[date.getMonth()]
    } ${date.getFullYear()} года`
        ; 
        console.log(stringDate);
}
//task10();

function task11(num1,num2){
    if(num1<0 || num1>50 || num2<0 || num2> 50){
        return;
    } 
        return num1*num2;
    
}
console.log(task11(10,20));