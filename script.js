
document.querySelector(".menu").addEventListener("click",function (){
    var ul = document.querySelector(".ul");
    ul.classList.toggle("menu_block");  
})
 

function elegir (coca){
    var gaseosa = document.querySelector(".gaseosa");
    gaseosa.src = coca;
}

function cambiarfondo (colorfondo){
    var body = document.querySelector(".body");
    body.style.background = colorfondo;
    var ul = document.querySelector(".ul");
    ul.style.background = colorfondo;
}

