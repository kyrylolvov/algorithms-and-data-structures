type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}

const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
const fn = (d) => d.x;

console.log(sortBy(arr, fn));
