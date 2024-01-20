export const correctTail = (body: string, tail: string): boolean => body.slice(-1) === tail;

console.log(correctTail('Fox', 'x'));
