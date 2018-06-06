"use strict";
// const arr = [11, 9, 5, 2, 7, 4, 12, 17, 3, 8, 6, 0, 100, 1];
// const arr = [1, 3, 5, 2, 7, 9, 6, 8, 4, 11, 23, 44,213,54,43,21,10];

// const arr = [4, 3, 2, 1, 0];
  const arr = [3,2,2,1];
// export default
class QuickSort {
  constructor() {
    this.array = [...arr];
    const len = this.array.length;
    const sorted = this.sort(this.array, 0, len - 1);
  }

  sort(array, begin, end) {
    const pivot = end;
    let i = begin - 1;
    let j = begin;
    let sorting = true;
    if (array.length === 1 || begin >= end) {
      return array;
    }

    while (sorting) {
      if (array[j] < array[pivot]) {
        i++;
        this.swap(i, j);
      }
      j++;
      if (j === end + 1) {
        sorting = false;
      }
    }
    this.swap(i + 1, pivot);
    this.sort(this.array, begin, i);
    this.sort(this.array, i + 1, end);
    console.log(this.array);
    // const smallerArray = this.array.slice(begin, i + 2);
    // const biggerArray = this.array.slice(i + 2, end);
    // console.log(smallerArray);
    // console.log(biggerArray)
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
}
const qt = new QuickSort();
