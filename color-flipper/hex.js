const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){

    let colortext = "#";
    
    for(let i=0; i<6; i++){
        colortext += hex[getRandomNum()];
    }

    document.body.style.backgroundColor = colortext;
    color.innerHTML = colortext;
    

});

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}
