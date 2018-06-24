"use strict";
import Sorter from "./Sorter";

export default class BubbleSort extends Sorter {
  constructor() {
    super();
  }

  start() {
    this.sort();
    console.log(this.array);
  }

  sort() {
    const { array } = this;
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          super.swap(i, i + 1);
          super.drawedArray(array);
          swapped = true;
        }
      }
    }
  }
}
