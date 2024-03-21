//Burger Menu
// const iconMenu = document.querySelector(".menu__icon")
// const menuBody = document.querySelector(".menu__body")
// if (iconMenu) {
//   iconMenu.addEventListener('click', e => {
//     document.body.classList.toggle("_active")
//     iconMenu.classList.toggle("_active")
//     menuBody.classList.toggle("_active")
//   })
// }
new Swiper('.main-slider__container', {
	navigation: {
		prevEl: '.main-slider__prev',
		nextEl: '.main-slider__next',
	},
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	speed: 600,
});
const body = document.body

//BURGER........................................................
const burger = document.querySelector('.header__icon')
const menu = document.querySelector('.header__menu')
console.log(burger);
burger.addEventListener('click', e => {
	burger.classList.toggle('_active')
	body.classList.toggle('lock')
	menu.classList.toggle('_active')
})

