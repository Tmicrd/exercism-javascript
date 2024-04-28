//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = series;
  }
  slices(sliceLength) {
    let lastDigit = this.series.length - sliceLength + 1;
    if (this.series.length === 0) {
      throw new Error('series cannot be empty');
    } else if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (lastDigit <= 0) {
      throw new Error('slice length cannot be greater than series length');
    } else {
      let finalArr = [];
      for (let i = 0; i < lastDigit; i++) {
        let innerArr = [];
        for (let j = i; j < i + sliceLength; j++) {
          innerArr.push(parseInt(this.series[j]));
        }
        finalArr.push(innerArr);
      }
      return finalArr;
    }
  }
}
