const regwrapper = document.querySelector('.regwrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');
const btn = document.querySelector('.kvop');
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

btn.addEventListener('click',()=> {
    vopwrapper.classList.add('active-popup'),
    mp.classList.add('active'),
    vm.classList.add('active');
});

const vopwrapper = document.querySelector('.vopwrapper');
const vic = document.querySelector('.vicon-close');
const btnvop = document.querySelector('.btnvop');
const btnotv = document.querySelector('.btnotv');

vic.addEventListener('click',()=> {
    vopwrapper.classList.remove('active-popup'),
    mp.classList.remove('active'),
    vm.classList.remove('active');
});

btnvop.addEventListener('click',()=> {
    vopwrapper.classList.add('popup');
});

btnotv.addEventListener('click',()=> {
    vopwrapper.classList.remove('popup'),
    mp.classList.remove('active'),
    vm.classList.remove('active'),
    vopwrapper.classList.remove('active-popup');
});

const burger = document.querySelector('.burgermenu');
const pmenu = document.querySelector('.pmenu');
const body = document.body;

burger.addEventListener('click',()=> {
    body.classList.toggle('stop-scroll'),
    burger.classList.toggle('active'),
    pmenu.classList.toggle('visible');
});