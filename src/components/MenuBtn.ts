const menuBtn = "menu-btn";

export default function MenuBtn() {
  return `<i class="${menuBtn} bx bx-menu"></i>`;
}

const eventHandler = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement;
  if (target.classList.contains(menuBtn)) {
    return true;
  }
  return false;
};

export { eventHandler };
