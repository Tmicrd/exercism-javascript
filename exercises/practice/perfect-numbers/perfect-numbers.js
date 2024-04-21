//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getSum = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    num % i === 0 ? (sum += i) : null;
  }
  return sum;
};

export const classify = (num) => {
  if (num <= 0)
    throw new Error('Classification is only possible for natural numbers.');
  const sum = getSum(num);
  return sum === num ? 'perfect' : sum > num ? 'abundant' : 'deficient';
};
