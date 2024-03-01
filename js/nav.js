const btnBar = document.querySelector('.bar__nav');
const navMain = document.querySelector('.nav__main');


btnBar.addEventListener('click', ()=> {
    navMain.classList.toggle('active');
})