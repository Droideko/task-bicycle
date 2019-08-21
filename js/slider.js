let swiper = new Swiper('.swiper-container', {
   centeredSlides: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
})