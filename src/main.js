/*===== Show Menu =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== Active & Remove Menu =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== Scroll Reveal Animation =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*Scroll Home Animation*/
sr.reveal(".home__title", {});
sr.reveal(".scroll-downs", { delay: 400 });
sr.reveal(".button", { delay: 200 });
// sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*Scroll About Animation*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*Scroll Skills Animation*/
sr.reveal(".skill-title", {});
sr.reveal(".skill-dec", {});
sr.reveal(".skills-transition", { interval: 200 });
sr.reveal(".icon-container", { interval: 400 });

/*Scroll Portfolio Animation*/
sr.reveal(".portfolio-left", { interval: 200 });
sr.reveal(".portfolio-container", { interval: 300 });

/*Scroll Contact Animation*/
// sr.reveal(".contact__input", { interval: 200 });
