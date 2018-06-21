"use strict";
import Sorter from "./Sorter";

export default class InsertionSort extends Sorter {
  constructor() {
    super();
  }

  start() {
    this.sort();
    console.log(this.array);
  }

  sort() {
    const { array } = this;
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      let j = i - 1;
      while (j > -1 && array[j] > value) {
        super.swap(j, j + 1);
        j--;
      }
      array[j + 1] = value;
    }
  }
}
