const mobileMenu = document.querySelectorAll(".nutritionMobileMenu div");
const recipies = document.querySelectorAll(".nutritionRecipies div.recipeNutrition");

//Functions
const activatePanel = (elementClicked) => {
let elementClickedIndex;

//Toggle the menu button
mobileMenu.forEach((element, index) => {
    if(element === elementClicked.target){
    element.classList.add("active");
    elementClickedIndex = index;
    } else {
    element.classList.remove("active");
    }
});

//Toggle the panel
recipies.forEach((element, index) => {
    if(index === elementClickedIndex){
    element.classList.add("activeNutrition");
    } else {
    element.classList.remove("activeNutrition");
    }
});
};

//Setting the event listeners
mobileMenu.forEach((element) => {
element.addEventListener("click", activatePanel);
});




