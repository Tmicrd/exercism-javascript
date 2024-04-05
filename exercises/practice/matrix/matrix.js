//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n');
  }
  get rows() {
    return this.matrix.map((row) => row.split(' ').map((el) => Number(el)));
  }
  get columns() {
    return this.rows[0].map((_, index) => this.rows.map((row) => row[index]));
  }
}
