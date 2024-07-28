//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const count = (str, nuc) =>
  [...str].filter((nucleotide) => nucleotide === nuc).length;

export function countNucleotides(strand) {
  const validNucleotides = 'ACGT';
  const counts = { A: 0, C: 0, G: 0, T: 0 };

  for (let char of strand) {
    if (!validNucleotides.includes(char)) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[char]++;
  }

  return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
}
