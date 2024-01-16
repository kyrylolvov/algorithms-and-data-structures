export {};

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function <T>(this: Array<T>, callback: (element: T) => string) {
  const grouped: Record<string, T[]> = {};

  this.map((el) => {
    const key = callback(el);

    if (!grouped[key]) grouped[key] = [];

    grouped[key].push(el);
  });

  return grouped;
};
