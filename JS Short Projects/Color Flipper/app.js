"use strict";

const Simplebtn = document.getElementById("simple-btn");
const body = document.body;
const colorTxt = document.querySelector(".color");

const colors=["red","green","blue","rgb(133,121,321)","#f15025"]

const ColorGenerator = (col)=>{
    const random = Math.floor(Math.random() * col.length)
    return col[random]
}

Simplebtn.addEventListener("click",()=>{
    const col = ColorGenerator(colors)
    body.style.background = col;
    colorTxt.textContent = col;
})
