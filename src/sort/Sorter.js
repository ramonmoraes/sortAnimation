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

  setup({ arrayLength, array }) {
    this.array = array || this.createRandomArray(arrayLength);
    this.canvas = new CanvasArray({
      array: this.array,
      wrapper: document.querySelector(".canvas-wrapper")
    });
    this.start();
    this.canvas.beginDrawAnimation();
  }

  start() {
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

  appendDrawableArray (arr) {
    this.canvas.appendDrawableArray(arr);
  }
}
