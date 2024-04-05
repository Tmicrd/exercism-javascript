//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (!message.trim()) return 'Fine. Be that way!';

  const isAllCaps = /[A-Z]/.test(message) && !/[a-z]/.test(message);
  const isQuestion = /\?$/.test(message.trim());
  if (isAllCaps && isQuestion) return "Calm down, I know what I'm doing!";
  if (isAllCaps && !isQuestion) return 'Whoa, chill out!';
  if (!isAllCaps && isQuestion) return 'Sure.';

  return 'Whatever.';
};
