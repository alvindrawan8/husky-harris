export function sumAndPlusTen(a, b) {
  return a + b + 10;
}

export function maxNum(a, b) {
  if ((typeof a !== "number") | (typeof b !== "number"))
    throw new Error("All of the arguments must be a number");

  if (b > a) {
    return b;
  } else if (a > b) {
    return a;
  } else {
    return a;
  }
}
