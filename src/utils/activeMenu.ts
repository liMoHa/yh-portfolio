export function activeMenu(targetId: string) {
  if (!targetId) return;
  // 활성상태 메뉴 비활성화시키기
  const activedElement = document.querySelector("li.active");
  activedElement?.classList.remove("active");
  activedElement!.textContent = `<${activedElement?.id} />`;
  // 현재 위치 메뉴 활성화시키기
  const target = document.querySelector(`#${targetId}`);
  target?.classList.add("active");
  target!.textContent = `<${targetId}>`;
}
