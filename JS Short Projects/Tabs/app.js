"use strict";

const texts = [
    {
        id:0,
        heading:"History",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, error ut. Officia repudiandae ipsam voluptates ipsa eum veritatis inventore nesciunt vel temporibus atque obcaecati beatae, perferendis veniam explicabo alias nihil!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ex illo eaque vel quidem nihil aliquid earum assumenda maxime tenetur debitis quasi, dolore odit dicta a tempore impedit consequatur possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos natus blanditiis exercitationem illo voluptas a, asperiores impedit nemo, adipisci nesciunt. Illum veritatis autem exercitationem incidunt repellat cupiditate quo eum."
    },
    {
        id:1,
        heading:"Vision",
        text:"Vision ipsum dolor sit amet consectetur adipisicing elit. Doloribus, error ut. Officia repudiandae ipsam voluptates ipsa eum veritatis inventore nesciunt vel temporibus atque obcaecati beatae, perferendis veniam explicabo alias nihil!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ex illo eaque vel quidem nihil aliquid earum assumenda maxime tenetur debitis quasi, dolore odit dicta a tempore impedit consequatur possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos natus blanditiis exercitationem illo voluptas a, asperiores impedit nemo, adipisci nesciunt. Illum veritatis autem exercitationem incidunt repellat cupiditate quo eum."
    },
    {
        id:2,
        heading:"Goals",
        text:"Goals ipsum dolor sit amet consectetur adipisicing elit. Doloribus, error ut. Officia repudiandae ipsam voluptates ipsa eum veritatis inventore nesciunt vel temporibus atque obcaecati beatae, perferendis veniam explicabo alias nihil!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ex illo eaque vel quidem nihil aliquid earum assumenda maxime tenetur debitis quasi, dolore odit dicta a tempore impedit consequatur possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dignissimos natus blanditiis exercitationem illo voluptas a, asperiores impedit nemo, adipisci nesciunt. Illum veritatis autem exercitationem incidunt repellat cupiditate quo eum."
    }
];

const tabs = document.querySelectorAll(".btn")
const heading = document.querySelector(".heading");
const txt = document.querySelector(".txt");

tabs.forEach((tab,idx)=>{
    tab.addEventListener("click",()=>{
        tabs.forEach((item)=>{
            if(item !== tab){
                item.classList.remove("white")
            }
        })
        for(let text of texts){
            if(idx == text.id){
                tab.classList.add("white");
                heading.textContent = text.heading;
                txt.textContent = text.text;
            }
        }
    })
})