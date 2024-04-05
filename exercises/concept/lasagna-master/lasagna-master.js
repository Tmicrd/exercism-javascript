/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (timer) => {
  return timer === 0
    ? 'Lasagna is done.'
    : timer > 0
    ? 'Not done, please wait.'
    : 'You forgot to set the timer.';
};

export const preparationTime = (layers, num) => {
  return layers.length * (num ? num : 2);
};

export const quantities = (layers) => {
  return {
    noodles: layers.filter((noodles) => noodles === 'noodles').length * 50,
    sauce: layers.filter((sauce) => sauce === 'sauce').length * 0.2,
  };
};

export const addSecretIngredient = (array1, array2) => {
  array2.push(array1[array1.length - 1]);
};

export const scaleRecipe = (recipe, num) => {
  let scaled = {};
  for (const key in recipe) {
    scaled[key] = (recipe[key] * num) / 2;
  }
  return scaled;
};