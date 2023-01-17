document.onreadystatechange = () => {
  if (document.readyState !== "complete") return;

  const textLinesNodes: NodeListOf<HTMLSpanElement> = document.querySelectorAll(
    ".main__welcome-section-text-line"
  );

  const [first, second, third] = textLinesNodes;

  setTimeout(() => {
    first?.classList.remove("invisible");
    first?.classList.add("animated");
  }, 400);

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
};

export {};
