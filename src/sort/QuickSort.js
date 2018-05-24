"use strict";

export default class QuickSort {
  constructor(options = {}) {
    Object.assign(this, options);
    const len = this.array.length;
    this.sort(this.array, 0, len - 1);
    console.log(this.array);
  }
  loop() {

  }
  sort(array, left, right) {
    var pivot = this.partitionLomuto(array, left, right); // you can play with both partition

    if (left < pivot - 1) {
      this.sort(array, left, pivot - 1);
    }
    if (right > pivot) {
      this.sort(array, pivot, right);
    }
    return array;
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
    return i;
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
    window.requestAnimationFrame(() => {
      this.callAnimation
    })
  }

  callAnimation() {
    if (this.requestAnimationCallback) {
      setTimeout( ()=> {
        this.requestAnimationCallback(this.array);
      },15)
    }
  }
}
