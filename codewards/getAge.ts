export function get_age(age: string): number {
  return Number(age.split(' ').find((s) => parseInt(s)));
}

console.log(get_age('4 years old'));
