// find all occurance of a elemtent in array

let arr = [10, 20, 30, 10, 40, 20];

function findIndices(arr, ele) {
  result = [];

  let index;
  let fromIndex = 0;

  do {
    index = arr.indexOf(ele, fromIndex);

    if (index !== -1) {
      result.push(index);
      fromIndex = index + 1;
    }
  } while (index !== -1);
  return result;
}

console.log(findIndices(arr, 20));
