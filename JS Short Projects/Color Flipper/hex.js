"use strict"
// Hex colr
const body = document.body;
const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexBtn = document.getElementById("hex-btn");
const colorTxt = document.querySelector(".color");


const ColorGenerator = (col)=>{
    const random = Math.floor(Math.random() * col.length);
    return col[random];
}

hexBtn.addEventListener("click",()=>{
    let hexColor = "#";
    for(let i = 0;i<6;i++){
        const col = ColorGenerator(hex);
        hexColor += col;
    }
    body.style.background = hexColor;
    colorTxt.textContent = hexColor;
});