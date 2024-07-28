class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }

  get isPythagorean() {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }

  get sum() {
    return this.a + this.b + this.c;
  }
}

export function triplets({ minFactor = 1, maxFactor, sum }) {
  const min = minFactor;
  const max = maxFactor || sum - 1;

  const isDesiredTriplet = (triplet) => {
    return triplet.isPythagorean && (!sum || triplet.sum === sum);
  };

  const result = [];
  const squaredMap = new Map();

  for (let a = min; a < max; a++) {
    squaredMap.set(a ** 2, a);
  }

  for (let a = min; a < max - 1; a++) {
    for (let b = a + 1; b < max; b++) {
      const cSquared = a ** 2 + b ** 2;
      if (squaredMap.has(cSquared)) {
        const c = squaredMap.get(cSquared);
        const triplet = new Triplet(a, b, c);
        if (isDesiredTriplet(triplet)) {
          result.push(triplet);
        }
      }
    }
  }

  return result;
}
