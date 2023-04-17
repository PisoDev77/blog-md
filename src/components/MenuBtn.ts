const id = "menu-btn";
export default function MenuBtn() {
  return `<button id="${id}">menu show</button>`;
}

const eventHandler = (event: MouseEvent) => {
  const target = event.target as HTMLButtonElement;
  if (target.id === id) {
    return true;
  }
  return false;
};

export { eventHandler };
