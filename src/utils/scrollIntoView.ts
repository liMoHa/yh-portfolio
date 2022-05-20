export function scrollIntoView(target: HTMLElement): void {
  if (target.nodeName === "LI" || target.nodeName === "BUTTON") {
    const curPosition = document.querySelector(`section[data-id=${target.id}]`);
    curPosition?.scrollIntoView({ behavior: "smooth" });
  }
}
