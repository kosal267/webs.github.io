const Header = document.querySelector("header");

window.addEventListener ("scroll",function(){
Header.classList.toggle("sticky", this.window.scrollY > 0);
})

let men = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');
men.onclick = () => {
    men.classList.toggle('bx-x')
    menu.classList.toggle('open');
}