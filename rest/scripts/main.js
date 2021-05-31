import { navBarFunc } from "./navbar/navbarfunc.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { sectionOne } from "./sectionOne/sectionOne.js";
import { smoothScrolling } from "./smoothScrolling.js";
import { sectionZeroAnimations } from "./sectionZero/sectionZeroAnimations.js";
import { cardAdder } from "./SectionTwo/cardAdder.js";
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
  sectionOne();
  navBarFunc();
  smoothScrolling();
  sectionZeroAnimations();
  cardAdder(bigProjectArray, BigProjects);
  cardAdder(smallProjectArray, SmallProjects);
};
init();

// smoothScroll();

// Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
