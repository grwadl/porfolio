export const textLinesNodes: NodeListOf<HTMLSpanElement> =
  document.querySelectorAll(".main__welcome-section-text-line");

const [first, second, third] = textLinesNodes;

setTimeout(() => {
  first?.classList.remove("invisible");
}, 200);

setTimeout(() => {
  first?.classList.remove("animated");
  second?.classList.remove("invisible");
  second?.classList.add("animated");
}, 700);

setTimeout(() => {
  second?.classList.remove("animated");
  third?.classList.remove("invisible");
  third?.classList.add("animated");
}, 2000);
