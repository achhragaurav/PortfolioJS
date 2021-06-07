import Smooth from "smooth-scrolling";
export const smoothScrolling = () => {
  const section = document.querySelector(".smooth-scroll-wrapper");
  const smooth = new Smooth({
    native: true,
    section: section,
    ease: 0.06,
  });
  smooth.init();
};
