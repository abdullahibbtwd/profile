const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0)
})

let menu = document.querySelector("#menubtn");
let navmenu = document.querySelector(".navmenu");
 menu.onclick = () => {
     
    menu.classList.toggle('bx-x');
     navmenu.classList.toggle('open');
 }
 let ab = document.querySelector("#ab");
 let container1 = document.querySelector(".container1");
 ab.onclick = ()=>{
     ab.classList.toggle('o');
     container1.classList.toggle('ow');
 }
 