const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    speed: 750,
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds
      disableOnInteraction: false, // Allow user interaction to pause auto-swiping
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
