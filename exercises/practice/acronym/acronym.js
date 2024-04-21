//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const newPhrase = phrase.replace(/[-_]/g, ' ').split(' ');
  return newPhrase
    .map((item) => item.split('')[0])
    .join('')
    .toUpperCase();
};
