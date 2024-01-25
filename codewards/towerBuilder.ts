export const towerBuilder = (nFloors: number): string[] => {
  return Array.from({ length: nFloors }, (_, i) => {
    const stars = '*'.repeat(i * 2 + 1);
    const spaces = ' '.repeat(nFloors - i - 1);
    return spaces + stars + spaces;
  });
};

console.log(towerBuilder(3));
