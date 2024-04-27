//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (str) => {
  str = str.replace(/[() -.]|/g, '');
  str = str.length === 10 ? '1' + str : str;
  switch (true) {
    case Boolean(str.match(/[@:!]/)):
      throw new Error('Punctuations not permitted');
    case Boolean(str.match(/[a-z]/)):
      throw new Error('Letters not permitted');
    case str.length < 11:
      throw new Error('Incorrect number of digits');
    case str.length > 11:
      throw new Error('More than 11 digits');
    case str[0] !== '1':
      throw new Error('11 digits must start with 1');
    case str[1] === '0':
      throw new Error('Area code cannot start with zero');
    case str[1] === '1':
      throw new Error('Area code cannot start with one');
    case str[4] === '0':
      throw new Error('Exchange code cannot start with zero');
    case str[4] === '1':
      throw new Error('Exchange code cannot start with one');
  }
  return str.slice(1);
};
