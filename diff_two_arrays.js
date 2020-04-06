
//Compare two arrays and return a new array with any items only found in one of the two given arrays,
//but not both. In other words, return the symmetric difference of the two arrays.
//
//You can return the array with its elements in any order.

/* ================================================================================================== */

function diffArray(arr1, arr2) {
  let newArr = [];
  let firstArr = [];
  let secondArr = [];
  let condition = true;

  if(arr1.length > arr2.length){
    firstArr = [...arr1];
    secondArr = [...arr2];
  } else {
    firstArr = [...arr2];
    secondArr = [...arr1];
  }
  firstArr.forEach(num1 =>{
   condition = (secondArr.some(num2 => num2 == num1));
   if(!condition){
    newArr.push(num1);
   }
  });
  secondArr.forEach(num2 =>{
    condition = (firstArr.some(num1 => num1 == num2));
    if(!condition){
      newArr.push(num2);
    }
  });
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));