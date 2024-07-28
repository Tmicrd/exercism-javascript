//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (n) => {
  let result = '';

  const mappings = [
    { divisor: 3, sound: 'Pling' },
    { divisor: 5, sound: 'Plang' },
    { divisor: 7, sound: 'Plong' },
  ];

  mappings.forEach(({ divisor, sound }) => {
    if (n % divisor === 0) {
      result += sound;
    }
  });

  return result || n.toString();
};
