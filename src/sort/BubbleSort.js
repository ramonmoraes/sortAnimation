"use strict";
import Sorter from "./Sorter.js";

export default class BubbleSort extends Sorter {
  loopOver() {
    return new Promise((resolve, reject) => {
      const { array } = this;
      let swapped = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          this.swap(i, i + 1);
          swapped = true;
        }
      }
      swapped ? resolve() : reject();
    });
  }

  async sort() {
    let swapped = true;
    while (swapped) {
      try {
        await this.loopOver();
      } catch (err) {
        swapped = false;
        console.log(this.array);
      }
    }
  }
}
