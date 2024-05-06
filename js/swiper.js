// instantiate a new instance of Swiper
var swiper = new Swiper(".container", {

  slidesPerView: 1,

  // navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // loop
  loop: true,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  //  keyboard nav
  keyboard: {
    enabled: true
  },

  //  autoplay
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  }
});