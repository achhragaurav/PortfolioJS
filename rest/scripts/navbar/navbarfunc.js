export const navBarFunc = () => {
  const navBarButton = document.getElementById("menuBtn");
  const menu = document.querySelector(".actual-menu");
  navBarButton.addEventListener("click", () => {
    menu.classList.toggle("menu-new");
    document.body.classList.toggle("new-body-navbar");
    document.querySelector("html").classList.toggle("new-body-navbar");
  });
};
