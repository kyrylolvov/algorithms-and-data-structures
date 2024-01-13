function findContentChildren(g: number[], s: number[]): number {
  let count: number = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  for (let i = 0; i < g.length; i++) {
    const cookieIndex = s.findIndex((size) => size >= g[i]);

    if (cookieIndex >= 0) {
      s.splice(cookieIndex, 1);
      count++;
    }
  }

  return count;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
