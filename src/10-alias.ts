(() => {
  // Alias
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = "KNKNJNKNKJN"
  console.log('🚀 ~ file: 10-alias.ts:21 ~ shirtSize:', shirtSize);

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting('651LNKJNJ65165', 'L');
})();
