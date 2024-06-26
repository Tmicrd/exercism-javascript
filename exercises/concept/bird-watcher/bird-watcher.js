// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
  const weekIndex = (week - 1) * 7;
  return totalBirdCount(birdsPerDay.slice(weekIndex, weekIndex + 7));
}

// Another solution
// export function birdsInWeek(birdsPerDay, week) {
//   let weeks = [];

//   for (let i = 0; i < birdsPerDay.length; i += 7) {
//     let sum = 0;

//     for (let j = i; j < i + 7 && j < birdsPerDay.length; j++) {
//       sum += birdsPerDay[j];
//     }

//     weeks.push(sum);
//   }

//   return weeks[week-1]
// }

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }
  return birdsPerDay;
}
