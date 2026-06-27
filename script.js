const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");


menuBtn.onclick=()=>{

navLinks.classList.toggle("active");

};



document.querySelectorAll(".nav-link a").forEach(link=>{


link.onclick=function(e){

e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


navLinks.classList.remove("active");


}


});



// scroll reveal

const cards=document.querySelectorAll(".glass");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let top=card.getBoundingClientRect().top;


if(top < window.innerHeight-100){

card.classList.add("active");

}


});


});