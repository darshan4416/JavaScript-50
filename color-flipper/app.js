
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");


btn.addEventListener("click",function(){
    
    let randomNum = getRandomNumber();
    document.body.style.background = colors[randomNum];
    color.innerHTML = colors[randomNum];
     
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
