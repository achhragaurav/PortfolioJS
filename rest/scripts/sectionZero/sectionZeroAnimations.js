import gsap from "gsap";
export const sectionZeroAnimations = () => {
  const el = document.querySelector(".circle svg g");

  TweenMax.to(el, 8, {
    rotation: "475",
    ease: Linear.easeNone,
    repeat: -1,
    transformOrigin: "center",
  });
};
