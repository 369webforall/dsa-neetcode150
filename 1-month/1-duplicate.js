var containsDuplicate = function (nums) {
  let obj = {};
  for (let n of nums) {
    if (obj[n] !== undefined) {
      return true;
    }
    obj[n] = 1;
  }
  return false;
};

let num1 = [1, 2, 3, 1];
let num2 = [1, 2, 3, 4];
let num3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

containsDuplicate(num1);
containsDuplicate(num2);
containsDuplicate(num3);
