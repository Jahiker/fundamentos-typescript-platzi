(() => {
  // Forma inferida
  let myProductPrice = 100;
  myProductPrice = 120;
  console.log('🚀 ~ file: 04-numbers.ts:5 ~ myProductPrice', myProductPrice);

  // Forma explicita
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('🚀 ~ file: 04-numbers.ts:9 ~ customerAge', customerAge);

  let productInStock: number;

  if (productInStock > 10) {
    console.log('🚀 ~ file: 04-numbers.ts:15 ~ productInStock', productInStock);
  }

  let discount = parseInt('Hola');
  console.log('🚀 ~ file: 04-numbers.ts:19 ~ discount', discount);

  if (discount <= 200) {
    console.log('Apply discount');
  }

  let hex = 0xfff;
  console.log('🚀 ~ file: 04-numbers.ts:26 ~ hex', hex);

  let bin = 0b1010;
  console.log('🚀 ~ file: 04-numbers.ts:29 ~ bin', bin);
})();
