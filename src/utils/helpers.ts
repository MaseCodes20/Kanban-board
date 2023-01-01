const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];

export function pickRandomColor(varient = "") {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return `bg-${color}${varient}`;
}

export function swap<T>(arr: T[], i: number, j: number) {
  const copy = [...arr];
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}
