"use strict";
import Sorter from './Sorter';

export default class QuickSort extends Sorter {
  constructor() {
    super();
  }

  start() {
    const len = this.array.length;
    this.sort(this.array, 0, len - 1);
  }

  sort(array, left, right) {
    this.partitionLomuto(array, left, right).then(pivot => {
      if (left < pivot - 1) {
        this.sort(array, left, pivot - 1);
      }
      if (right > pivot) {
        this.sort(array, pivot, right);
      }
      return array;
    });
  }

  partitionLomuto(array, left, right) {
    const pivot = right;
    let i = left;
    let j;

    for (j = left; j < right; j++) {
      if (array[j] <= array[pivot]) {
        this.swap(i, j);
        i++;
      }
    }
    this.swap(i, j);
  }
}
