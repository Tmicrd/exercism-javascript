//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  const length = Math.max(0, ...arr.map((item) => item.length));
  return [...Array(length)].map((_, i) =>
    arr.reduceRight((acc, cur) => (cur[i] || (acc ? ' ' : '')) + acc, ''),
  );
};
