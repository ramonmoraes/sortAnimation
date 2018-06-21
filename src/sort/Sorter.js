"use strict";
import CanvasArray from "../canvas/CanvasArray.js";

export default class Sorter {
  createRandomArray(arrayLength = 200) {
    let newArr = [];
    for (let i = 0; i < arrayLength; i++) {
      newArr.push(Math.floor(Math.random() * 1000 + 1));
    }
    return newArr;
  }

  setup(arrayLength) {
    this.array = this.createRandomArray(arrayLength);
    this.canvas = new CanvasArray({
      array: this.array,
      wrapper: document.querySelector(".canvas-wrapper")
    });
  }

  start(args) {
    throw new Error("You should implement start");
  }

  sort() {
    throw new Error("You should implement sort");
  }

  swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  async drawedArray (array) {
    const animation = () => this.canvas.drawArray(array);
    await animation();
  }
}
