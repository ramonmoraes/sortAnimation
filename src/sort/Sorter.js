'use strict';
import BubbleSort from './BubbleSort';
import QuickSort from './QuickSort';

export default class Sorter {
  constructor(options = {}) {
    Object.assign(this, options);
    this.array = this.cleanArray();
    this.selectSort();
  }

  cleanArray() {
    return this.array.filter(number => typeof number === 'number');
  }

  selectSort() {
    const { sortType, array, requestAnimationCallback } = this;
    const sortObject = {
      array,
      requestAnimationCallback,
    };
    switch (sortType) {
      case 'bubbleSort':
        new BubbleSort(sortObject);
        break;
      case 'quickSort':
        new QuickSort(sortObject);
        break;
      default:
        new QuickSort(sortObject);
        break;
    }
  }
}
