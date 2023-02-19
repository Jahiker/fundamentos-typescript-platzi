(() => {
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = false;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = 'Hola';
  console.log('🚀 ~ file: 08-any.ts:8 ~ myDinamicVar', myDinamicVar);

  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log('🚀 ~ file: 08-any.ts:10 ~ rta', rta);

  myDinamicVar = 1254;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log("🚀 ~ file: 08-any.ts:15 ~ rta2", rta2)

})();
