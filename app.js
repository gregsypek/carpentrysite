const burger = document.querySelector('.menu__burger-icons');

const nav = document.querySelector('.menu__burger-nav');
const iconBars = document.querySelector('.fa-bars');
const iconTimes = document.querySelector('.fa-times');

burger.addEventListener('click', function () {
    iconBars.classList.toggle("on");
    iconTimes.classList.toggle("on");
    nav.classList.toggle("on");
})