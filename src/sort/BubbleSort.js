"use strict";
import Sorter from "./Sorter";

export default class BubbleSort extends Sorter {
  constructor() {
    super();
  }

  sort() {
    const { array } = this;
    let swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        this.swap(i, i + 1);
        swapped = true;
      }
    }
  }
}
