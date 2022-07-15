"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".cross-btn");
const modalOverlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click",()=>{
    modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click",()=>{
    modalOverlay.classList.remove("open-modal");
})

modalOverlay.addEventListener("click",()=>{
    modalOverlay.classList.remove("open-modal");
})