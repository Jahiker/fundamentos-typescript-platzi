(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true];

  // prices.push("Hola");
  // prices.push(true);
  // prices.push({});

  prices.push(10);
  prices = [1, 2, 2];

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = [];

  mixed.push(20);
  mixed.push(false);
  mixed.push('value');
  mixed.push([]);
  mixed.push({});

  let numbers: number[] = [1, 2, 2, 1, 1, 212];
  numbers.map(item => item * 2);
  numbers.map(item => `${item}`);
})();
