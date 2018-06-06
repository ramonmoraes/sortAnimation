"use strict";
// const arr = [1, 3, 4, 2, 7, 9, 6, 8, 5];
const arr = [4, 3];//, 2, 1, 0];

// export default
class QuickSort2 {
  constructor() {
    this.array = [...arr];
    const sorted = this.sort(this.array);
    console.log(sorted);
  }

  sort(arr) {
    const wall = this.createWall(arr);
    if (wall) {
      const { lower, higher } = wall;
      this.sort(lower);
      this.sort(higher);
    }
    return arr;
  }

  createWall(arr = []) {
    const size = arr.length;
    const pivot = size % 2 === 0 ? size / 2 : (size + 1) / 2;
    const lower = arr.filter(n => n < pivot);
    lower.push(pivot);
    const higher = arr.filter(n => n > pivot);
    const ordered = JSON.stringify(lower.concat(higher)) == JSON.stringify(arr);
    if (ordered) {
      return null;
    }
    return {
      lower,
      higher
    };
  }
}

console.log(new QuickSort2());
