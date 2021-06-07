export const sectionThreeForm = () => {
  const formbutton = document.getElementById("submit-form");
  const thankYouModal = document.querySelector(".thank-you");
  const goBackBtn = document.querySelector(".thank-you-content button");

  const openOverlay = () => {
    thankYouModal.classList.toggle("thank-you-new");
    document.body.classList.toggle("new-body-navbar");
    document.querySelector("html").classList.toggle("new-body-navbar");
  };
  formbutton.addEventListener("click", (e) => {
    openOverlay();
  });
  goBackBtn.addEventListener("click", () => {
    openOverlay();
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("message").value = null;
  });
};
