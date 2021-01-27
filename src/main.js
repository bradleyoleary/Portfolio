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

/*===== Scroll, Active, & Remove Menu =====*/
const links = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

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
sr.reveal(".home__title", { reset: false });
sr.reveal(".scroll-downs", { delay: 300, reset: false });
sr.reveal(".button", { delay: 100, reset: false });
sr.reveal(".home__social-icon", { interval: 200, reset: false });
sr.reveal(".section-title", { reset: false });

/*Scroll About Animation*/
sr.reveal(".about__img", { reset: false });
sr.reveal(".about__subtitle", { delay: 300, reset: false });
sr.reveal(".about__text", { delay: 300, reset: false });

/*Scroll Skills Animation*/
sr.reveal(".section-title-two", { reset: false });
sr.reveal(".skill-title", { reset: false });
sr.reveal(".skill-dec", { reset: false });
sr.reveal(".skills-transition", { interval: 200, reset: false });
sr.reveal(".icon-container", { interval: 400, reset: false });

/*Scroll Portfolio Animation*/
sr.reveal(".portfolio-left", { interval: 200, reset: false });
sr.reveal(".portfolio-container", { interval: 300, reset: false });
