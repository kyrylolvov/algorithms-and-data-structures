export const number = (busStops: [number, number][]): number =>
  busStops.reduce((total, item) => total + item[0] - item[1], 0);
