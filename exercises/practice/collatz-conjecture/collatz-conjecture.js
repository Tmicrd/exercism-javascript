//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  const iterate = (number, step = 0) => {
    while (number !== 1) {
      number = number % 2 === 0 ? number / 2 : 3 * number + 1;
      step++;
    }
    return step;
  };

  return iterate(n);
};
