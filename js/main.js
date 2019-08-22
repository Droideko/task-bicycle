let mobileBtn = document.querySelector('.header-mobile');
mobileBtn.addEventListener('click', (e) => {
   mobileBtn.classList.toggle('header-mobile_active');
   document.querySelector('.header-main-nav__collapse').classList.toggle('header-main_active');
});