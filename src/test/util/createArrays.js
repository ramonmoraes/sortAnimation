const fs = require("fs");
const sorter = require("./sorter");

const createRandomArr = (arrayLength = 10) => {
  let newArr = [];
  for (let i = 0; i < arrayLength; i++) {
    newArr.push(Math.floor(Math.random() * 1000 + 1));
  }
  return newArr;
};

const creatEqualArray = (arrayLength = 10, number = 0) => {
    let newArr = [];
    for (let i = 0; i < arrayLength; i++) {
      newArr.push(number);
    }
    return newArr;
}

const arrayToString = array => {
  let str = "[";
  array.forEach((element, i) => {
    str += element;
    if (i != array.length - 1) {
      str += ",";
    }
  });
  return str + "]";
};

const array = creatEqualArray(10, 1);
const text = arrayToString(array) + "\n" + arrayToString(sorter(array));

fs.writeFile("./exampleArray.js", text, err => {
  if (err) throw err;
});


