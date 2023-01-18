export const scrollElements: Record<string, HTMLElement | null> = {
  about: document.querySelector("#about"),
  projects: document.querySelector("#projects"),
  contact: document.querySelector("#contact"),
};

const scrollTriggers = document.querySelectorAll(
  "[data-scroll-to]"
) as NodeListOf<HTMLElement>;

scrollTriggers.forEach((trigger) =>
  trigger.addEventListener("click", () => {
    const idOfElement = trigger.dataset.scrollTo;

    if (!idOfElement || !(idOfElement in scrollElements)) return;

    const scrollElement =
      scrollElements[idOfElement as keyof typeof scrollElements];

    if (!scrollElement) return;

    scroll({
      top: scrollElement.offsetTop,
      behavior: "smooth",
    });
  })
);
