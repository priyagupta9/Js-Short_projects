"use strict";

const Btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".ques-ans");
// Btns.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-ans");
//     })
// })

questions.forEach(ques => {
    const btn = ques.querySelector(".btn");
    btn.addEventListener("click",()=>{
        questions.forEach(item=>{
            if(item !== ques){
                item.classList.remove("show-ans");
            }
        })
        ques.classList.toggle("show-ans");
    })
});