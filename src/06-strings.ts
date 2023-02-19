(() => {
  let productTitle = 'My product';
  // productTitle = null;
  // productTitle = () => {};
  productTitle = 'My new product';
  console.log('🚀 ~ file: 06-strings.ts:6 ~ productTitle', productTitle);

  const productDescription = 'Esta es la descripcion de mi producto';
  console.log(
    '🚀 ~ file: 06-strings.ts:9 ~ productDescription',
    productDescription
  );

  let isNew: boolean = true;
  let myProductPrice: number = 100;

  const summary: string = `
    title: ${productTitle},
    description: ${productDescription},
    price: ${myProductPrice},
    isNew: ${isNew}
  `;
  console.log('🚀 ~ file: 06-strings.ts:24 ~ summary', summary);
})();
