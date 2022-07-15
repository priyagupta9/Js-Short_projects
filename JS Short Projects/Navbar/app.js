"use strict"

const links = document.querySelector(".links")
const btn=document.querySelector(".nav-toggle");
const social = document.querySelector(".social-icons")

btn.addEventListener("click",()=>{
    links.classList.toggle("show-links")
    social.classList.toggle("show-social")
})