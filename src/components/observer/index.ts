const callback = (entries: IntersectionObserverEntry[]) =>
  entries.forEach((entry) =>
    entry.isIntersecting
      ? entry.target.classList.add("aos")
      : entry.target.classList.remove("aos")
  );

export const intersectionObserver = new IntersectionObserver(callback, {
  rootMargin: "130px",
  threshold: 0.5,
});

const animateEntries = document.querySelectorAll("[data-aos]");

animateEntries.forEach((entry) => intersectionObserver.observe(entry));
