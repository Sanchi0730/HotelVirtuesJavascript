
function on_load(){
    document.querySelector("#preloader").style.display="none";
    // preloader=document.querySelector("#preloader")
    // preloader.addEventListener("load",function(){
    //     document.body.removeChild("preloader")
    // })
}
function on_mouseover(){
    document.querySelector(".doorknob2").style.transform="rotateZ(15deg)";
    document.querySelector(".doorknob2").style.transition="3s";
    document.querySelector("#doorcontainer").style.transform="rotateY(-75deg)";
    document.querySelector("#doorcontainer").style.transition="3s";
    document.querySelector("#doorcontainer").style.transitionDelay="3s";
    document.querySelector("#doorcontainer2").style.transform="rotateY(75deg)";
    document.querySelector("#doorcontainer2").style.transition="3s";
    document.querySelector("#doorcontainer2").style.transitionDelay="3s";
    document.querySelector("#glitter-image").style.animation="glitterout 11s forwards";
    document.querySelector("#glitter-image0").style.animation="glitterout0 11s forwards";
    document.querySelector("#glitter-image").style.transitionDelay="3s";
    document.querySelector("#glitter-image0").style.transitionDelay="3s";
    document.querySelector(".logo-image2").style.animation="imagein 20s forwards";
    document.querySelector("#welcomebackgroundlogo").style.animation="imagein 25s forwards";
    document.querySelector(".logo-image2").style.transform="scale(0.5) translate3d(0%,-30%,0";
    document.querySelector(".logo-image2").style.transition="3s";
    document.querySelector(".logo-image2").style.transitionDelay="10s";
    document.querySelector("#clickany").style.animation="zoom 2s infinite";

    // document.querySelector("#clickany").style.transitionDelay="10s";

}

function on_click(){
    document.querySelector(".Welcome").style.animation="fade-out 2s forwards";
    document.querySelector(".Welcome").style.transition="3s";
    document.querySelector(".logo-image2").style.transform="scale(1.5)";
    document.querySelector(".logo-image2").style.animation="imagemove 2s forwards";
    welcome.remove();
}
window.addEventListener("load",on_load);
window.addEventListener("mouseover",on_mouseover);
welcome=document.querySelector(".Welcome")
    welcome.addEventListener("click",on_click)
// window.addEventListener("load",on_load);
// window.addEventListener("mouseover",on_mouseover);
// window.addEventListener("click",on_click);
// window.addEventListener("")




