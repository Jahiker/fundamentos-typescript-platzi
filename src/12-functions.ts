(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductJson("Camisa Azul", new Date(), 20);
  console.log("🚀 ~ file: 12-functions.ts:19 ~ product1:", product1)

})()
