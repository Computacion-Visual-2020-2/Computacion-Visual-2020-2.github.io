export function createArray(h, w) {
  return Array(h)
    .fill()
    .map(() => Array(w).fill())
}
