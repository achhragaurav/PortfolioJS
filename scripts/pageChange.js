import gsap from "gsap/gsap-core";

const pageChangeOne = document.querySelector(".page-change-one");
const pageChangeTwo = document.querySelector(".page-change-two");
const pageChangeThree = document.querySelector(".page-change-three");
export const pageChangeStart = () => {
  const tl = gsap.timeline();

  return new Promise((res, rej) => {
    res(
      tl.to(".pageChange", {
        x: "0vw",
        stagger: 0.2,
        delay: 0.2,
      })
    );
  });
};

export const pageChangeEnd = () => {
  const tl = gsap.timeline();
  return new Promise((res, rej) => {
    res(
      tl.to(".pageChange", {
        x: "-100vw",
        stagger: -0.2,
        delay: 0.2,
      })
    );
  });
};
