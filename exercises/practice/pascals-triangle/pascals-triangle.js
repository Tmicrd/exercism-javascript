//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (num) => {
  if (num === 0) return [];

  const triangle = new Array(num)
    .fill([])
    .reduce((cur) => [...cur, createNewRow(cur[cur.length - 1])], []);
  return triangle;
};

const createNewRow = (subArr) => {
  if (!subArr) subArr = [];
  let newRow = Array.from(
    { length: subArr.length + 1 },
    (el, i) => subArr[i - 1] + subArr[i] || 1,
  );

  return newRow;
};
