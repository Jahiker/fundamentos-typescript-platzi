(() => {
  const login = (data: { email: string; password: string }): void => {
    console.log(data);
  };

  login({ email: 'user@email.com', password: '123456798' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const addProduct = (data: Product): void => {
    products.push(data);
  };

  addProduct({
    title: 'Zapatos deportivos',
    createdAt: new Date(),
    stock: 100,
  });

  addProduct({
    title: 'Camisa de caballeros',
    createdAt: new Date(),
    stock: 80,
  });

  console.log('Products Cart', products);
})();
