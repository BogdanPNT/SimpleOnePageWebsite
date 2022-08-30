const creative = document.getElementById("creative");
const creativeRecipies = document.querySelector("div.creativeRecipies");
const recipe = document.querySelectorAll("div.recipe");
const mdGridBreakpoint = 768; //In px

const onResize = () => {
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

if (screenWidth <= mdGridBreakpoint){
    addCarouselClasses();
} else {
    removeCarouselClasses();;
}
};

const addCarouselClasses = () => {
creative.classList.add("carousel");
creative.classList.add("slide");
creativeRecipies.classList.add("carousel-inner");
recipe.forEach((element, index) => {
    if(index === getActiveCarouselIndicatorNumber()){
    element.classList.add("carousel-item");
    element.classList.add("active");
    } else{
    element.classList.add("carousel-item");
    }
});
};

const removeCarouselClasses = () => {
creative.classList.remove("carousel");
creative.classList.remove("slide");
creativeRecipies.classList.remove("carousel-inner");
recipe.forEach((element) => {
    if(element.classList.contains("active") === true){
    element.classList.remove("carousel-item");
    element.classList.remove("active");
    } else{
    element.classList.remove("carousel-item");
    }
});
};

const getActiveCarouselIndicatorNumber = () => {  
const indicators = document.querySelectorAll("ol.carousel-indicators li");
for(let i = 0; i < indicators.length; i++){
    if(indicators[i].classList.contains("active") === true){
    return i;
    }
}
};

//Add the resize event listener to the window on load;
window.addEventListener("resize", onResize);

//Check whatever the screen width at pageload of the script is less than the grid md breakpoint;
if (window.innerWidth <= mdGridBreakpoint){
addCarouselClasses();
}
