//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  isValid() {
    const [s1, s2, s3] = this.sides;
    return (
      s1 > 0 &&
      s2 > 0 &&
      s3 > 0 &&
      s1 + s2 >= s3 &&
      s1 + s3 >= s2 &&
      s2 + s3 >= s1
    );
  }

  get isEquilateral() {
    return this.isValid() && this.sides.every((side) => side === this.sides[0]);
  }

  get isIsosceles() {
    return this.isValid() && new Set(this.sides).size <= 2;
  }

  get isScalene() {
    return this.isValid() && new Set(this.sides).size === 3;
  }
}
