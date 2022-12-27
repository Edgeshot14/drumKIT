var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonH = this.innerHTML;
        makeSound(buttonH);
        doAnimmation(buttonH);
    });
}

document.addEventListener("keypress", function(event){
       var keyHe = event.key;
       makeSound(keyHe);
       doAnimmation(keyHe);
        
});

function makeSound(kay){
switch(kay){
case "w":
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();
break;
case "a":
var tom2 = new Audio("sounds/tom-2.mp3");
tom2.play();
break;
case "s":
var tom3 = new Audio("sounds/tom-3.mp3");
tom3.play();
break;
case "d":
var tom4 = new Audio("sounds/tom-4.mp3");
tom4.play();
break;
case "j": 
var crash = new Audio("sounds/crash.mp3");
crash.play();           
break;
case "k":
var kickBass = new Audio("sounds/kick-bass.mp3");
kickBass.play();
break;
case "l":
var snare = new Audio("sounds/snare.mp3");
snare.play();
break;
default :
alert("Not a valid input");
break;  
    }
}

function doAnimmation(kay){
    var d = document.querySelector("." + kay);
    d.classList.add("pressed");
    setTimeout(function(){d.classList.remove("pressed");},150);
}