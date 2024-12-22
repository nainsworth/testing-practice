const analyzeArray = (arr) => {
  let object = {};
  arr.sort();

  let sum = 0;
  let max = arr[arr.length - 1];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  object.average = average;
  object.length = arr.length;

  object.min = min;
  object.max = max;

  console.log(object);
  return object;
};

module.exports = analyzeArray;
