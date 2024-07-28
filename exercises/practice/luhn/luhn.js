//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (number) => {
  const trimmed = number.replace(/\s/g, '');
  const digits = Array.from(trimmed, Number);

  const sum = digits
    .map((d, i) => {
      if ((i + digits.length) % 2 === 0) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      return d;
    })
    .reduce((acc, d) => acc + d, 0);

  return digits.length > 1 && sum % 10 === 0;
};
