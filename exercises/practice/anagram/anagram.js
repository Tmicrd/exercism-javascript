//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, wordList) => {
  return wordList
    .filter((item) => word.toLowerCase() != item.toLowerCase())
    .filter(
      (item) =>
        word.toLowerCase().split('').sort().join('') ===
        item.toLowerCase().split('').sort().join(''),
    );
};
