// function Sum(a,b){
//     return a+b;
// }
// function sub(x,y){
//     return x-y;
// }
// function multiply(x,y){
//     return x*y;
// }
// console.log(Sum(11,9));
// console.log(sub(11,9));
// console.log(multiply(11,9));
// function Sum(a,b){
//     return a+b;
// }
// console.log(Sum(10,5));
// function Sum(a,b){
//     return a+b;
// }
// var a = 10;
// var b = 15;
// console.log(Sum(a,b));
// const sum = (a,b)=>{
//     return a+b;
// };
// console.log(sum(10,20));
function submit2() {
    var husbandDay = document.getElementById("tap3").value;
    var husbandMonth = document.getElementById("tap4").value;
    var husbandYear = document.getElementById("tap5").value;

    console.log(husbandDay, husbandMonth, husbandYear);
}

function submit3() {
    var wifeDay = document.getElementById("tap6").value;
    var wifeMonth = document.getElementById("tap7").value;
    var wifeYear = document.getElementById("tap8").value;

    console.log(wifeDay, wifeMonth, wifeYear);
}

function finalSubmit() {
    var husbandDay = parseInt(document.getElementById("tap3").value);
    var husbandMonth = parseInt(document.getElementById("tap4").value);
    var husbandYear = parseInt(document.getElementById("tap5").value);

    var wifeDay = parseInt(document.getElementById("tap6").value);
    var wifeMonth = parseInt(document.getElementById("tap7").value);
    var wifeYear = parseInt(document.getElementById("tap8").value);

    var c = 0;

    if (husbandDay % 2 === 0 && wifeDay % 2 === 0) {
        c = 1;
    }
    if ((husbandMonth % 2 === 0 && wifeMonth % 2 !== 0) || (husbandMonth % 2 !== 0 && wifeMonth % 2 === 0)) {
        c = 2;
    }
    if ( wifeYear - 4 === husbandYear ||wifeYear - 5 === husbandYear) {
        c = 3;
    }

    console.log(c);
    if (c === 3) {
        alert("accept shadi");
    }
    else{
        alert("dusra dekho")
    }
}

