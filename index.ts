const mergeArray = <T>(...arrays: (T | T[])[]): T[] =>
  [].concat(...arrays.map((array) => array ?? []));

const a1 = ['a', 'b'];
const a2 = ['a', 'c'];
const a3 = undefined;

console.log(mergeArray(a1, a2, a3));
