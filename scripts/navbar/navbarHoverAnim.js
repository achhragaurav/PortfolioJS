import gsap from "gsap";
import { pageChangeStart } from "../pageChange.js";
import { pageChangeEnd } from "../pageChange.js";

import { navBarFunc } from "./navbarfunc.js";
const listItem = document.querySelectorAll(".navEl");
const actualMenu = document.querySelector(".actual-menu");

export const navbarHoverAnim = () => {
  for (let index = 0; index < listItem.length; index++) {
    const element = listItem[index];
    element.addEventListener("mouseover", () => {
      gsap.to(actualMenu, {
        duration: 0,
        background: `url(../image${index}.jpg) center/cover no-repeat`,
      });
      gsap.to(actualMenu, {
        duration: 0.4,
        ease: "power3.inOut",
      });
      gsap.from(actualMenu, {
        duration: 0.4,
        transformOrigin: "right top",
      });
    });
  }
};
export const navbarContentClick = () => {
  const navEl = document.querySelector(".navEl").parentElement;

  navEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("home")) {
      pageChangeStart()
        .then(() => {
          navBarFunc();
          setTimeout(() => {}, 1000);
        })
        .then(() => {
          pageChangeEnd();
        });
    } else if (e.target.classList.contains("about")) {
      pageChange();
    } else if (e.target.classList.contains("contact")) {
      pageChange();
    } else if (e.target.classList.contains("work")) {
      pageChange();
    }
  });
};
