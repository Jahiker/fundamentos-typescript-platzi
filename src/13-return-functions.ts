(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const rta = calcTotal([1, 2, 1, 2]);
  console.log('🚀 ~ file: 13-return-functions.ts:13 ~ rta:', rta);

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(
      '🚀 ~ file: 13-return-functions.ts:12 ~ printTotal ~ rta:',
      rta
    );
  };

  printTotal([1, 5, 4, 8]);
})();
