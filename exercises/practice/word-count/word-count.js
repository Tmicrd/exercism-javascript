//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  const newStr = str
    .toLowerCase()
    .replace(/[^\w\s']+/g, ' ')
    .match(/\S+/g);
  const getNewWords = () => {
    return newStr.map((str) => {
      return str.replace(/^'|'$/g, '');
    });
  };

  const words = getNewWords();

  return words.reduce((pre, cur) => {
    pre[cur] = pre[cur] ? pre[cur] + 1 : 1;
    return pre;
  }, {});
};
