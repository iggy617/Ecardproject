var fwdbutton1 = document.getElementById("Forward_Button_2_")
var fwdbutton2 = document.getElementById("Forward_Button")
var fwdbutton3 = document.getElementById("Forward_Button_4_")
var fwdbutton4 = document.getElementById("Forward_Button_1_")
var fwdbutton5 = document.getElementById("Forward_Button_3_")
var fwdbutton6 = document.getElementById("Forward_Button_5_")

var latomatina = document.getElementById("Title")
var espana = document.getElementById("Flag")
var tomato1 = document.getElementById("Tomato_3_")
var tomato2 = document.getElementById("Tomato_1_")
var tomato3 = document.getElementById("Tomato_2_")
var tomato4 = document.getElementById("Tomato")

var esptit = document.getElementById("SpainTitle")
var eu = document.getElementById("Europe")

var ham = document.getElementById("Ham")
var thirdpage = document.getElementById("Third_Page")

var truck = document.getElementById("Tomatina_Truck") 
var tomatotruck = document.getElementById("Tomato_2_")
var hill = document.getElementById("Layer_7")

var mtntops = document.getElementById("Sign")
var bunolsign = document.getElementById("Mountain_Tops")
var bunolsun = document.getElementById("Sun_1_")
var fifthpage = document.getElementById("Fifth_Page")

var city1 = document.getElementById("Barcelona")
var city2 = document.getElementById("Madrid")
var city3 = document.getElementById("Valencia")
var city4 = document.getElementById("Benidorm")
var city5 = document.getElementById("Malaga")
var city6 = document.getElementById("Bunol")
var espanared = document.getElementById("spain")


var fact1 = document.getElementById("fact1")
var fact2 = document.getElementById("fact2")
var fact3 = document.getElementById("fact3")
var fact4 = document.getElementById("fact4")
var fact5 = document.getElementById("fact5")
var fact6 = document.getElementById("fact6")
var fact7 = document.getElementById("fact7")
var fact8 = document.getElementById("fact8")
var fact9 = document.getElementById("fact9")
var fact10 = document.getElementById("fact10")

tomato1.addEventListener("click", function () {
    fact1.style.opacity = "1";
    fact1.style.animation = "fade-animation 5s 1";
});

fwdbutton1.addEventListener("click", function () {
    latomatina.style.visibility = "hidden";
    tomato1.style.visibility = "hidden";
    espana.style.visibility = "hidden";
    fact1.style.visibility = "hidden";
    fwdbutton1.style.display = "none";
    window.location.href = 'ecardassets/secondpage/p2.html';
});

tomato2.addEventListener("click", function () {
    fact2.style.opacity = "1";
    fact2.style.animation = "fade-animation 5s 1";
    esptit.style.opacity = "1"; 
    esptit.style.animation = "fade-animation 10s 1";
});

fwdbutton2.addEventListener("click", function () {
    eu.style.visibility = "hidden";
    tomato2.style.visibility = "hidden";
    esptit.style.visibility = "hidden";
    fact2.style.visibility = "hidden";
    fwdbutton2.style.display = "none";
    window.location.href = '../thirdpage/p3.html';
});

ham.addEventListener("click", function () {
    fact3.style.opacity = "1";
    fact3.style.animation = "fade-animation 5s 1"; 
});

fwdbutton3.addEventListener("click", function () {
    thirdpage.style.visibility = "hidden";
    fact3.style.visibility = "hidden";
    fwdbutton3.style.display = "none";
    window.location.href = '../fourthpage/p4.html'
});

tomato3.addEventListener("click", function () {
    fact4.style.opacity = "1";
    fact4.style.animation = "fade-animation 5s 1";
});

fwdbutton4.addEventListener("click", function (){
     truck.style.visibility = "hidden";
     tomatotruck.style.visibility = "hidden";
     hill.style.visibility = "hidden";
     fwdbutton4.style.display = "none";
     window.location.href = '../fifthpage/p5.html'
});

mtntops.addEventListener("click", function () {
    fact5.style.animation = "fade-animation 5s 1";
});

bunolsign.addEventListener("click", function () {
     fact6.style.animation = "fade-animation 5s 1";
});
bunolsun.addEventListener("click", function () {
     fact7.style.animation = "fade-animation 5s 1";
});

fwdbutton5.addEventListener("click", function (){
    fifthpage.style.visibility = "hidden";
    window.location.href = '../sixthpage/p6.html'
});

tomato4.addEventListener("click", function () {
    fact8.style.animation = "fade-animation 10s 1";
    tomato4.disabled = "true";
});

tomato4.addEventListener("mouseover", function () {
   tomato4.style.animation = "spin 1s infinite"; 
});

espanared.addEventListener("click", function (){
   fact9.style.animation = "fade-animation 5s 1"; 
    espanared.disabled = "true";
});

fwdbutton6.addEventListener("click", function (){
   fact10.style.animation = "fadein 2s forwards";
   city1.style.animation = "fadein 1s forwards";
   city2.style.animation = "fadein 2s forwards";
   city3.style.animation = "fadein 3s forwards";
   city4.style.animation = "fadein 4s forwards";
   city5.style.animation = "fadein 5s forwards";
   fwdbutton6.style.visibility = "hidden";
   fwdbutton6.style.display = "none";
});














