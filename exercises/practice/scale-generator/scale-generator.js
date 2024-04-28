//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SCALE = {
  sharp: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flat: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
};

const INTERVAL = {
  m: 1,
  M: 2,
  A: 3,
};

export class Scale {
  constructor(tonicMode) {
    const scale = isFlat(tonicMode) ? SCALE.flat : SCALE.sharp;
    const tonic = `${tonicMode[0].toUpperCase()}${tonicMode[1] ?? ''}`;
    const index = scale.indexOf(tonic);
    this.scale = scale.slice(index).concat(scale.slice(0, index));
  }
  chromatic() {
    return [...this.scale];
  }
  interval(intervals) {
    let pos = 0;
    let output = [this.scale[pos]];
    let ints = intervals.split('');
    for (let i = 0; i < ints.length; i++) {
      pos = (pos + INTERVAL[ints[i]]) % this.scale.length;
      output.push(this.scale[pos]);
    }
    return output;
  }
}
function isFlat(tonic) {
  return [
    'F',
    'Bb',
    'Eb',
    'Ab',
    'Db',
    'Gb',
    'd',
    'g',
    'c',
    'f',
    'bb',
    'eb',
  ].includes(tonic);
}
