"use strict";
import CanvasArray from "../canvas/CanvasArray.js";

export default class Sorter {
  constructor(options = {}) {
    Object.assign(this, options);
    this.array = this.createRandomArray();
    this.canvas = new CanvasArray({
      array: this.array,
      wrapper: document.querySelector(".canvas-wrapper")
    });
    console.log(this.canvas)
    this.start()
    .then((msg) =>this.end(msg))
  }

  createRandomArray (arrayLength = 200) {
    let newArr = [];
    for (let i = 0; i < arrayLength; i++) {
      newArr.push(Math.floor(Math.random() * 1000 + 1));
    }
    return newArr;
  };

  async start () {
    await this.sort();
  }

  end(msg) {
    console.log(this.array);
    window.alert(msg);
  }

  swap(i, j) {
    return new Promise(resolve => {
      setTimeout(() => {
        const temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
        this.canvas.drawArray(this.array);
        resolve(true);
      }, 15);
    });
  }
}
