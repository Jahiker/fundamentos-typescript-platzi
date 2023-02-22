(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 15;
  console.log('🚀 ~ file: 11-undefined-null.ts:10 ~ myNumber:', myNumber);

  let myString: string | undefined = undefined;
  myString = 'Hola';
  console.log('🚀 ~ file: 11-undefined-null.ts:14 ~ myString:', myString);

  // function hi(name: string | null) {
  //   let hello = 'Hola';

  //   if (name) {
  //     hello += 'name';
  //   } else {
  //     hello += 'nobody';
  //   }

  //   console.log('🚀 ~ file: 11-undefined-null.ts:18 ~ hi ~ hello:', hello);
  // }

  function hiV2(name: string | null) {
    let hello = 'Hola ';

    hello += name?.toLocaleLowerCase() || 'nobody';

    console.log('🚀 ~ file: 11-undefined-null.ts:18 ~ hi ~ hello:', hello);
  }

  // hi("jahiker");
  // hi(null);

  hiV2("jahiker");
  hiV2(null);

  function hiV3(name: string | null): string {
    return name ? `Hola ${name}` : `Hola nadie`;
  }

  const saludo = hiV3("jahiker");
  console.log("🚀 ~ file: 11-undefined-null.ts:47 ~ saludo:", saludo)

})();
