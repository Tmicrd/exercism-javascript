export function Forth() {
  let stack = [];
  let commands = basicCommands();

  const evaluate = (program) => {
    const words = program.toLowerCase().split(' ');

    for (let t = 0; t < words.length; t++) {
      const word = words[t];

      if (/^-?\d+$/.test(word)) {
        stack.push(Number(word));
      } else if (word === ':') {
        const semicolon = words.indexOf(';', t);
        if (semicolon === -1) {
          throw new Error('Unterminated definition');
        }
        defineCommand(words[t + 1], words.slice(t + 2, semicolon).join(' '));
        t = semicolon;
      } else {
        const command = commands[word];
        if (!command) {
          throw new Error('Unknown command');
        }
        performCommand(command);
      }
    }
  };

  const defineCommand = (word, subprogram) => {
    if (isKeyword(word)) {
      throw new Error('Invalid definition');
    }

    let execute;
    try {
      const stackSize = stack.length;
      evaluate(subprogram);
      const result = stack.splice(stackSize);
      execute = () => result;
    } catch {
      execute = () => evaluate(subprogram);
    }

    commands[word] = {
      arity: 0,
      execute,
    };
  };

  const performCommand = (command) => {
    if (command.arity > stack.length) {
      throw new Error('Stack empty');
    }

    const args = stack.splice(stack.length - command.arity);
    const vals = command.execute.apply(null, args);
    stack.push(...vals);
  };

  return {
    get stack() {
      return stack;
    },
    evaluate,
  };
}

const isKeyword = (word) => {
  return word === ':' || word === ';' || /^-?\d+$/.test(word);
};

const basicCommands = () => {
  return {
    '+': { arity: 2, execute: (a, b) => [a + b] },
    '-': { arity: 2, execute: (a, b) => [a - b] },
    '*': { arity: 2, execute: (a, b) => [a * b] },
    '/': {
      arity: 2,
      execute: (a, b) => {
        if (b === 0) {
          throw new Error('Division by zero');
        }
        return [Math.floor(a / b)];
      },
    },
    dup: { arity: 1, execute: (a) => [a, a] },
    drop: { arity: 1, execute: () => [] },
    swap: { arity: 2, execute: (a, b) => [b, a] },
    over: { arity: 2, execute: (a, b) => [a, b, a] },
  };
};
