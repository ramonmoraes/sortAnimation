const createRandomArray = (arrayLength = 200) => {
  let newArr = [];
  for (let i = 0; i < arrayLength; i++) {
    newArr.push(Math.floor(Math.random() * 1000 + 1));
  }
  return newArr;
};

export default createRandomArray;