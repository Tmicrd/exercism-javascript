//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const array = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = (sentence) =>
  array.every((letter) => sentence.toLowerCase().includes(letter));
