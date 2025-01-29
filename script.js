// Menu
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.menu__btn')
const menuLink = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('menu--active')
    // if (window.innerHeight > 452) {
    //   document.body.classList.toggle('stop-scroll')
    // }
})

menuLink.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('menu--active')
        // document.body.classList.remove('stop-scroll')
    })
})

// header sticky
var header = document.querySelector(".header");
window.onscroll = function () {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}