//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const spiral = Array.from({ length: size }, () => Array(size).fill(0));
  const totalNumbers = size ** 2;
  let currentNumber = 1;
  let topLeft = 0;
  let bottomRight = size - 1;

  while (currentNumber <= totalNumbers) {
    for (let x = topLeft; x <= bottomRight; x++) {
      spiral[topLeft][x] = currentNumber++;
    }

    for (let y = topLeft + 1; y <= bottomRight; y++) {
      spiral[y][bottomRight] = currentNumber++;
    }

    for (let x = bottomRight - 1; x >= topLeft; x--) {
      spiral[bottomRight][x] = currentNumber++;
    }

    for (let y = bottomRight - 1; y > topLeft; y--) {
      spiral[y][topLeft] = currentNumber++;
    }

    topLeft++;
    bottomRight--;
  }

  return spiral;
};
