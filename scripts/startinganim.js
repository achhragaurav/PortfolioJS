import gsap from "gsap";

export const startingAnim = () => {
  // Logo Animation Start
  let logoAnim = document.querySelectorAll("#logoAnim path");
  for (const wordStyle of logoAnim) {
    wordStyle.style.strokeDashoffset = `${wordStyle.getTotalLength() + 70}`;
    wordStyle.style.strokeDasharray = `${wordStyle.getTotalLength() + 70}`;
  }
  setTimeout(() => {
    document.body.classList.toggle("new-body-navbar");
    document.querySelector("html").classList.toggle("new-body-navbar");
    const animDone = new Promise((res, rej) => {
      const tl = gsap.timeline();
      res(
        tl
          .to(logoAnim, {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.5,
            ease: "power0.in",
          })
          .to(".starting", {
            duration: 0.5,
            ease: "power0.in",
            x: 2000,
            stagger: 0.1,
          })
      );
    });
    animDone.then((data) => {
      document.body.classList.toggle("new-body-navbar");
      document.querySelector("html").classList.toggle("new-body-navbar");
    });

    // const childNodes = document.querySelector(".smooth-scroll-wrapper");
    // childNodes.remove(".starting");
  }, 500);

  // Logo Animation End
  // Name Animation start
  var path = document.querySelectorAll("#nameSVG path");
  for (const wordStyle of path) {
    wordStyle.style.strokeDashoffset = `${wordStyle.getTotalLength()}`;
    wordStyle.style.strokeDasharray = `${wordStyle.getTotalLength()}`;
  }
  setTimeout(() => {
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      stagger: 0.1,
      ease: "circ.in",
    });
  }, 1500);
  // Name Animation end
};
