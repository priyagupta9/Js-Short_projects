"use strict"

// const { number } = require("joi");

// const decrease = document.querySelector(".decrease") 
// const increase = document.querySelector(".increase") 
// const reset = document.querySelector(".reset")
const counter = document.getElementById("value");

// decrease.addEventListener("click",()=>{
//     let counterVal = counter.textContent;
//     counter.textContent=counterVal-1;
//     counter.style.color="red"
// })
// increase.addEventListener("click",()=>{
//     let counterVal = parseInt(counter.textContent);
//     console.log(counterVal)
//     counter.textContent=counterVal+1;
//     counter.style.color="green";
// })
// reset.addEventListener("click",()=>{
//     counter.textContent=0;
//     counter.style.color="black";
// })


// ----------OR----------------
const btns = document.querySelectorAll(".btn")
let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        const Curclass = e.currentTarget.classList;
        if(Curclass.contains("decrease")){
            count--;
        }
        else if(Curclass.contains("increase")){
            count++;
        }
        else{
            count=0;
        }

        if(count>0){
            counter.style.color="green";
        }
        if(count<0){
            counter.style.color="red";
        }
        if(count===0){
            counter.style.color="black";
        }
    
        counter.textContent=count;
    })
})