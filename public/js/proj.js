const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});