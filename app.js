// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

window.onscroll=()=>{
  if(window.pageYOffset>450){
    navBtn.style.color=' #617d98';
  }else{
    navBtn.style.color='white'
  }
}
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
//setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
