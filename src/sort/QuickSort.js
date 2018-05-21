"use strict";
// const arr = [1, 3, 4, 2, 7, 9, 6, 8, 5];
const arr = [4,3,2,1,0];

// export default
class QuickSort {
  constructor() {
    this.array = arr;
    const firstPivot = 2 || this.getPivot(arr);
    this.count = 0;
    this.sort(this.array, firstPivot);
  }

  sort(arr, pivot) {
    const { lower, higher } = this.createWall(arr, pivot);
    const lastLowerPos = lower[lower.length - 1];
    const firstHightPos = higher[0];

    
    let newLower = [... lower];
    newLower[newLower.length - 1] = pivot;
    const newPivot = lastLowerPos;
    
    let newArr = [...newLower, ...higher];
    this.sort(newArr, newPivot);
    
    if (lastLowerPos > firstHightPos) {
        return "SORT";
    }
  }

  createWall(array = [], pivot) {
    const lower = array.filter(number => number < pivot);
    const higher = array.filter(number => number > pivot);
    return {
      lower,
      higher
    };
  }

  getPivot(array = []) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }
}
new QuickSort();
