//dropmenu

var btn = document.getElementById("btn");
var dropdown_list = document.getElementById("dropdown");
var icon = document.getElementById("icon");
var display = false;
btn.onclick = function(){
    if(display == false ){
         dropdown_list.style.display = 'block';
         icon.setAttribute("class", "uil uil-globe");
         display = true;

    }else {
        dropdown_list.style.display = 'none';
        icon.setAttribute("class", "uil uil-globe");
        display = false;
    }
}

// swiper js
var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
  });

  
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
// show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block' ;
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})
// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}
// add active class to clicked nav item
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () =>{
        changeActiveItem();
        link.classList.add('active');
    })
})



// add box shadow on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)

})


// DARK / LIGHT THEME 

var icon1 = document.getElementById("icon1");

icon1.onclick = function(){
    document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
     icon1.classList ="uil uil-sun";
  }else{
    icon1.classList = "uil uil-moon";
    
  }
}

// PLAY MUSIC
var mySong = document.getElementById("mySong");
var play = document.getElementById("play");

play.onclick = function(){
   if(mySong.paused){
       mySong.play();
       play.classList = "uil uil-pause";

   }else{
       mySong.pause();
       play.classList ="uil uil-play";
   }
}