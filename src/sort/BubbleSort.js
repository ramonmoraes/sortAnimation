"use strict";

export default class BubbleSort {
  constructor(options = {}) {
    Object.assign(this, options);
    this.continuousLoop();
  }
  
  loopOver() {
    return new Promise((resolve, reject) => {
      const { array } = this;
      let swapped = false;
      setTimeout(() => {
        for (let i = 0; i < array.length; i++) {
          if (array[i] > array[i + 1]) {
            this.swapPositions(i);
            this.callAnimation(array);
            swapped = true;
          }
        }
        swapped ? resolve() : reject();
      }, 15);
    });
  }

  async continuousLoop() {
    let swapped = true;
    while (swapped) {
      try {
        await this.loopOver();
      } catch(err) {
        swapped = false;
        console.log(this.array);
      }
    }
  }

  swapPositions(posAnterior) {
    const { array } = this;
    let temp = array[posAnterior];
    array[posAnterior] = array[posAnterior + 1];
    array[posAnterior + 1] = temp;
  }

  callAnimation(array) {
    if (this.requestAnimationCallback) {
      this.requestAnimationCallback(array);
    }
  }
}