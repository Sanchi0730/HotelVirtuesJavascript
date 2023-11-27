var c=d=e=f=g=h=0;
// var radioclick=document.querySelectorAll("input[type='radio'][name='Laundary']");
// console.log(radioclick[0])
// console.log(c)
// // radioclick.checked=false;
// // radioclick.onclick=function(){
// if (c==0){
//     radioclick[0].checked=true;
//     console.log("checked")
//     c=1;
// }
// else{
//     radioclick.checked=false;
// }

// if (document.getElementsByName("Laundary").cheked==true){
//     console.log("it is checked")
// }

// else{
//     console.log("it is not checked")
// }
document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities');
    radioButton.addEventListener('click', function () {
        if (c==0){
            radioButton.checked=true;
            // console.log("checked")
            c=1;
        }
        else{
            radioButton.checked=false;
            c=0
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities2');
    radioButton.addEventListener('click', function () {
        if (d==0){
            radioButton.checked=true;
            // console.log("checked")
            d=1;
        }
        else{
            radioButton.checked=false;
            d=0
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities3');
    radioButton.addEventListener('click', function () {
        if (e==0){
            radioButton.checked=true;
            // console.log("checked")
            e=1;
        }
        else{
            radioButton.checked=false;
            e=0
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities4');
    radioButton.addEventListener('click', function () {
        if (f==0){
            radioButton.checked=true;
            // console.log("checked")
            f=1;
        }
        else{
            radioButton.checked=false;
            f=0
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities5');
    radioButton.addEventListener('click', function () {
        if (g==0){
            radioButton.checked=true;
            // console.log("checked")
            g=1
        }
        else{
            radioButton.checked=false;
            g=0
        }
    });
});document.addEventListener('DOMContentLoaded', function () {
    var radioButton = document.getElementById('Facilities6');
    radioButton.addEventListener('click', function () {
        if (h==0){
            radioButton.checked=true;
            // console.log("checked")
            h=1;
        }
        else{
            radioButton.checked=false;
            h=0
        }
    });
});