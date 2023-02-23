(() => {




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

  addProduct({
    title: 'Medias de caballeros',
    createdAt: new Date(2020, 8, 12),
    stock: 50,
  });

  console.log('Products Cart', products);
})();
