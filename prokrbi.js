const anchorlinks = document.querySelectorAll('a[href*="#"]')
for (let anchorlink of anchorlinks) {
	anchorlink.addEventListener("click", function(event) {
		event.preventDefault();
		const IDblock = anchorlink.getAttribute('href')
		document.querySelector('' + IDblock).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
		}
	)
}
const regwrapper = document.querySelector('.regwrapper');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin');

const iconClose = document.querySelector('.icon-close');

const mp = document.querySelector('.menuposle');
const vm = document.querySelector('.vmenu');

registerLink.addEventListener('click',()=> {
    regwrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    regwrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    mp.classList.add('active'),
    vm.classList.add('active'),
    regwrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    mp.classList.remove('active'),
    vm.classList.remove('active'),
    regwrapper.classList.remove('active-popup'),
    vopwrapper.classList.remove('popup');
});

const burger = document.querySelector('.burgermenu');
const pmenu = document.querySelector('.pmenu');
const body = document.body;

burger.addEventListener('click',()=> {
    body.classList.toggle('stop-scroll'),
    burger.classList.toggle('active'),
    pmenu.classList.toggle('visible');
});