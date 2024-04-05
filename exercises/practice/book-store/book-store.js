//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let collection = [];
  while (books.length > 0) {
    let newSet = new Set(books);
    newSet.forEach((x) => {
      let index = books.indexOf(x);
      books.splice(index, 1);
    });
    collection.push(newSet);
  }
  if (collection.length === 0) return 0;
  collection.reduce((prev, curr) => {
    if (prev !== undefined && prev.size === 5 && curr.size === 3) {
      Array.from(prev).forEach((num) => {
        if (!curr.has(num) && curr.size !== prev.size) {
          prev.delete(num);
          curr.add(num);
        }
      });
    } else if (prev !== undefined && prev.size === 5 && curr.size === 5) {
      if (collection.filter((x) => x.size === 3).length > 0) {
        let available = collection.filter((x) => x.size === 3)[0];
        Array.from(prev).forEach((num) => {
          if (!available.has(num) && prev.size === 5) {
            prev.delete(num);
            available.add(num);
          }
        });
        if (collection.filter((x) => x.size === 3).length > 0) {
          available = collection.filter((x) => x.size === 3)[0];
          Array.from(curr).forEach((num) => {
            if (!available.has(num) && curr.size === 5) {
              curr.delete(num);
              available.add(num);
            }
          });
        }
      }
    }
  });
  function applyDiscount(length) {
    switch (length) {
      case 2:
        return length * 800 * 0.95;
      case 3:
        return length * 800 * 0.9;
      case 4:
        return length * 800 * 0.8;
      case 5:
        return length * 800 * 0.75;
      default:
        return length * 800;
    }
  }
  return collection.map((x) => applyDiscount(x.size)).reduce((a, b) => a + b);
};
