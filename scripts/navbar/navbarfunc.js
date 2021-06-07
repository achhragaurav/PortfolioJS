import gsap from "gsap";
const navBarButton = document.getElementById("menuBtn");

export const navBarFunc = () => {
  const actualMenu = document.querySelector(".actual-menu");
  actualMenu.classList.toggle("menu-new");
  document.body.classList.toggle("new-body-navbar");
  document.querySelector("html").classList.toggle("new-body-navbar");
  actualMenu.style.background = "black";
  if (actualMenu.classList.contains("menu-new")) {
    gsap.to("#animnav", {
      ease: "power4.in",
      x: "-5vw",
      stagger: 0.1,
    });

    gsap.to(".navEl", {
      x: -800,
      duration: 0.5,
      delay: 0.8,
      stagger: 0.1,
    });
  } else {
    gsap.to("#animnav", {
      ease: "power3.in",
      x: "100vw",
      stagger: -0.1,
    });

    gsap.to(".navEl", {
      x: 0,
      duration: 0.5,
      stagger: -0.1,
    });
  }
};
navBarButton.addEventListener("click", navBarFunc);
