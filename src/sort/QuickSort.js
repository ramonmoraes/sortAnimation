"use strict";

export default class QuickSort {
  constructor(options = {}) {
    this.array = options.array;
    const len = this.array.length;
    console.log(this.array);
    const sorted = this.sort(this.array, 0, len - 1);
    console.log(this.array);
  }

  sort(array, begin, end) {
    const pivot = end;
    let i = begin - 1;
    let sorting = true;

    if (begin >= end) {
      return true;
    }

    while ( begin <= end + 1) {
      if (array[begin] < array[pivot]) {
        i++;
        this.swap(i, begin);
      }
      begin++;
    }

    this.swap(i + 1, pivot);
    this.sort(this.array, begin, i);
    this.sort(this.array, i + 1, end);
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }
}