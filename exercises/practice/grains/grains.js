/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Gets the number of grains on the nth square
 *
 * @param {Number} num Number to compute its square
 *
 * @return {BigInt} Square of num
 */
export const square = (num) => {
  if (num < 1 || num > 64) {
    throw new Error('square must be between 1 and 64');
  }
  return BigInt(2) ** BigInt(num - 1);
};

/**
 * Gets the total number of grains on all squares
 *
 * @return {BigInt} Sum of all squares
 */
export const total = () => {
  let result = BigInt(0);

  for (let squareNum = 1; squareNum <= 64; squareNum++) {
    result += square(squareNum);
  }

  return result;
};
