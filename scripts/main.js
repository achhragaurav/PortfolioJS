import { startingAnim } from "./startinganim.js";
import { navBarFunc } from "./navbar/navbarfunc.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { sectionOne } from "./sectionOne/sectionOne.js";
import { smoothScrolling } from "./smoothScrolling.js";
import { sectionZeroAnimations } from "./sectionZero/sectionZeroAnimations.js";
import { cardAdder } from "./SectionTwo/cardAdder.js";
import { sectionThreeForm } from "./sectionThree/sectionThree.js";
import { navbarHoverAnim } from "./navbar/navbarHoverAnim.js";
import { cursor } from "./cursor.js";
import { navbarContentClick } from "./navbar/navbarHoverAnim.js";

gsap.registerPlugin(ScrollTrigger);
const SmallProjects = document.querySelector(".small-projects");
const BigProjects = document.querySelector(".big-projects");
const bigProjectArray = [
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/DLV4vF6/Capture.png",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/f9hmySc/ezgif-com-gif-maker.gif",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/DLV4vF6/Capture.png",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
];
const smallProjectArray = [
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/DLV4vF6/Capture.png",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/DLV4vF6/Capture.png",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
  {
    title: "COVID-19",
    description: "This is full fledged Covid 19 tracker",
    image: "https://i.ibb.co/DLV4vF6/Capture.png",
    linkProject: "https://covid19trackerapplication.firebaseapp.com/",
  },
];

const init = () => {
  cursor();
  startingAnim();
  navbarContentClick();
  sectionOne();
  smoothScrolling();
  sectionZeroAnimations();
  cardAdder(bigProjectArray, BigProjects);
  cardAdder(smallProjectArray, SmallProjects);
  sectionThreeForm();
  navbarHoverAnim();

  var lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        console.log("scrollingdown");
      } else {
        // upscroll code
        console.log("scrollingup");
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );
};
init();

// smoothScroll();

// Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
// let painting = false;

//     function startPosition() {
//       painting = true;
//       console.log(true);
//     }
//     function finishedPosition() {
//       painting = false;
//       console.log(false);
//     }
//     function draw(e) {
//       if (!painting) {
//         console.log("draw");
//         return;
//       }
//       console.log("drawing");

//       context.lineWidth = 10;
//       context.lineCap = "round";
//       context.lineTo(100, 50);
//       context.stroke();
//     }

//     canvass.addEventListener("mousedown", startPosition);
//     canvass.addEventListener("mouseup", finishedPosition);
//     canvass.addEventListener("mousemove", draw);
//   };
