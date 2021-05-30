import gsap from "gsap";

export const sectionOne = () => {
  // Animations of SectionOne
  const startingSectionAnimation = (
    element,
    start,
    end,
    cordinates,
    duration
  ) => {
    let timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        scrub: 1,
        start: `${"0"}`,
        end: `${"50vh"}`,
        markers: false,
      },
    });
    return timeLine.to(element, {
      x: cordinates.x,
      z: cordinates.z,
      y: cordinates.y,
      duration: duration,
    });
  };
  if (window.innerWidth < 500) {
    console.log("Hello");
    startingSectionAnimation(
      ".image-partOne img",
      "0",
      "50vh",
      {
        x: -100,
        z: 80,
        y: 120,
      },
      6
    ).then(".image-partOne img", {
      y: "50vh",
      duration: 10,
    });
    startingSectionAnimation(
      ".image-partTwo img",
      "0",
      "50vh",
      {
        x: 100,
        z: 80,
        y: 120,
      },
      6
    );
  } else {
    startingSectionAnimation(
      ".image-partOne img",
      "0",
      "center",
      {
        x: -450,
        z: 150,
        y: 350,
      },
      4
    );
    startingSectionAnimation(
      ".image-partTwo img",
      "0",
      "center",
      {
        x: 450,
        z: 150,
        y: 350,
      },
      4
    );
  }
  //Animation end
  // who am i
  const whoAmI = document.querySelector(".who-am-i");
  whoAmI.addEventListener("mouseleave", () => {
    whoAmI.children[0].textContent = "Who am I ??";
    whoAmI.children[1].textContent =
      "My name is Gaurav, and I am a self taught Frontend Web Devloper";
  });
  whoAmI.addEventListener("mouseover", () => {
    whoAmI.children[0].textContent = "What do I do??";
    whoAmI.children[1].textContent =
      "I create cool websites, My skillset includes HTML5, CSS3, Javascript, ES6, React, GSAP, Firebase, Wordpress, SASS and looking forward to learn more technologies";
  });
};
