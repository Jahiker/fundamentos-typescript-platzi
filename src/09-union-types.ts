(() => {
  let userId: string | number;
  userId = 216516;
  userId = '165165';
  console.log('🚀 ~ file: 09-union-types.ts:5 ~ userId', userId);

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(2)}`);
    }
  }

  greeting(51541.61819);
  greeting('16156');
})();
