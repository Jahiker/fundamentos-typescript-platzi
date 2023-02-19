(() => {
  let isEnable = true;
  isEnable = false;
  console.log('🚀 ~ file: 05-booleans.ts:4 ~ isEnable', isEnable);

  let isNew: boolean = true;
  isNew = false;
  console.log('🚀 ~ file: 05-booleans.ts:9 ~ isNew', isNew);

  const random = Math.random();
  console.log('🚀 ~ file: 05-booleans.ts:11 ~ random', random);
  isNew = random >= 0.5;
  console.log('🚀 ~ file: 05-booleans.ts:13 ~ isNew', isNew);

  let myBoolean: boolean;
  console.log('🚀 ~ file: 05-booleans.ts:18 ~ myBoolean', myBoolean);
})();
