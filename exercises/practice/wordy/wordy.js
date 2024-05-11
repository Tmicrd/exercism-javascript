// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (str) => {
  validate(str);
  for (let key in OPERATORS) {
    let regex = new RegExp('\\b' + key + '\\b', 'g');
    str = str.replace(regex, OPERATORS[key]);
  }
  let regex = /-?\d+|[+\-*/]/g;
  let arr = str.match(regex);
  validateArr(arr);
  let example = arr.join(' ');
  return leftToRightCalculation(example);
};

function validate(str) {
  if (!str.startsWith('What') || str.endsWith('cubed?'))
    throw new Error('Unknown operation');
}

function validateArr(arr) {
  if (arr === null || arr.length % 2 === 0) throw new Error('Syntax error');

  let newArr = arr.map((value, index) => {
    if (index % 2 === 0 && Number.isInteger(parseInt(value))) {
      return true;
    } else if (index % 2 === 1 && isNaN(value)) {
      return true;
    } else {
      return false;
    }
  });
  let valid = newArr.every((value) => value === true);
  if (!valid) throw new Error('Syntax error');
}

function leftToRightCalculation(str) {
  let parts = str.split(' ');

  while (parts.length > 1) {
    let operand1 = parseFloat(parts[0]);
    let operator = parts[1];
    let operand2 = parseFloat(parts[2]);
    let result;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
    }

    parts = [result, ...parts.slice(3)];
  }

  return parseInt(parts[0]);
}

const OPERATORS = {
  plus: '+',
  minus: '-',
  'multiplied by': '*',
  'divided by': '/',
};
