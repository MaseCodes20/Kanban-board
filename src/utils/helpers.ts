const colors = [
  "bg-red-300",
  "bg-orange-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-teal-300",
  "bg-blue-300",
  "bg-cyan-300",
  "bg-purple-300",
  "bg-pink-300",
];

export function pickRandomColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

export function swap<T>(arr: T[], i: number, j: number) {
  const copy = [...arr];
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}
