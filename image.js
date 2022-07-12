var increaseButton = document.getElementById("inc");
var decreaseButton = document.getElementById("dec");
var image = document.querySelector("img");

increaseButton.addEventListener("click", increase);

function increase(){
    var currentWidth = image.width;
    if(currentWidth < 700){
        image.style.width = (currentWidth + 20) + 'px';
        console.log(currentWidth);
    }
}

decreaseButton.addEventListener("click" , decrease);

function decrease(){
    var currentWidth = image.width;
    if(currentWidth > 400)
     image.style.width = (currentWidth - 20) + 'px';
     console.log(currentWidth);
}