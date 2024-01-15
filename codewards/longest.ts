export const longest = (s1: string, s2: string): string => {
  return Array.from(new Set([...s1.split(''), ...s2.split('')].sort())).join('');
};

console.log(longest('aretheyhere', 'yestheyarehere'));
