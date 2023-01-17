export const burgerMenu = document.querySelector(
  ".burger-menu"
) as HTMLDivElement;

const navigationPanel = document.querySelector(".header") as HTMLDivElement;

burgerMenu.addEventListener("click", () => {
  if (window.screen.width > 440) return;

  navigationPanel.classList.toggle("nav-opened");
  document.body.classList.toggle("nav-opened");
});
