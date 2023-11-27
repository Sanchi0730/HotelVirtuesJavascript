function on_load(){
    document.querySelector("#preloader").style.display="none";
}

document.addEventListener("mousemove",e => {
    Object.assign(document.documentElement,{
        style:`
        --move-x: ${(e.clientX- window.innerWidth/2) * -0.02}deg;
        --move-y:  ${(e.clientY- window.innerHeight/2) * -0.01}deg;
        `
    })
})

function stopmove(event){
    // layer.remove();
    layer=document.querySelector("#layers")
    layer.addEventListener("mouseover",function(event){
        let x=event.clientX;
        if (x<200 || x>1300){
            console.log(x)
            layer.remove();
        }
    })
    
}
//     if (x==1){
//         document.querySelector("#layers").addEventListener("mouseover",function(){
//             document.querySelector("#layers").remove();
//         })
//     }
// }

window.addEventListener("load",on_load);
// layer=document.querySelector("#layers");
window.addEventListener("mouseover",function(event){
    stopmove(event)
});