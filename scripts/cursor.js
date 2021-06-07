import gsap from "gsap/gsap-core";
let lastMouseY;
export const cursor = () => {
  let mouseCursor = document.querySelector(".cursor");
  const cursorFunction = (e) => {
    if (e.clientX && e.clientY) {
      gsap.to(mouseCursor, {
        x: e.pageX,
        y: e.pageY,
        ease: "power3.out",
      });
      lastMouseY = e.clientY;
    } else {
      const offset = window.pageYOffset;
      gsap.to(mouseCursor, {
        y: lastMouseY + offset,
        stagger: 0.1,
        delay: 0.1,
      });
    }
  };

  const mouseOver = (e) => {
    const getAttr = e.target.getAttribute("data-big");
    console.log(+getAttr);

    if (getAttr === 0 || getAttr === null) {
      gsap.to(mouseCursor, { scale: 1 });
      // mouseCursor.style.width = `50px`;
      // mouseCursor.style.height = `50px`;
    } else {
      gsap.to(mouseCursor, { scale: `${+getAttr}` });
    }
    // mouseCursor.style.width = `${getAttr > 10 ? +getAttr : null}vw`;
    // mouseCursor.style.height = `${getAttr > 10 ? +getAttr : null}vw`;
  };

  window.addEventListener("mousemove", cursorFunction);
  window.addEventListener("mouseover", mouseOver);
  window.addEventListener("scroll", cursorFunction);
};
