//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const handshakeCommands = ['wink', 'double blink', 'close your eyes', 'jump'];

export const commands = (handshake) => {
  if (typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  const shakeWith = handshakeCommands.filter((_, i) => (handshake >> i) & 1);

  if ((handshake >> 4) & 1) shakeWith.reverse();

  return shakeWith;
};
