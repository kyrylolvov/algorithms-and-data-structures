type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const comparableValue = val;

  return {
    toBe: (val: any) => {
      if (comparableValue === val) return true;

      throw Error('Not Equal');
    },
    notToBe: (val: any) => {
      if (comparableValue !== val) return true;

      throw Error('Equal');
    },
  };
}

console.log(expect(5).toBe(5));

console.log(expect(5).notToBe(5));
