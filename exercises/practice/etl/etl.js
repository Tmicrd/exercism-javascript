//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  return Object.keys(input).reduce((output, key) => {
    const items = input[key] || [];

    for (const item of items) {
      output[item.toLowerCase()] = Number(key);
    }

    return output;
  }, {});
};
