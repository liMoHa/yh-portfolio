export function scrollIntoView(target: HTMLElement): void {
  if (target.nodeName !== "LI") return;
  // 해당 위치로 이동
  const curPosition = document.querySelector(`section[data-id=${target.id}]`);
  curPosition?.scrollIntoView({ behavior: "smooth" });
}
