"use strict"

export default class CanvasArray {
  constructor(options = {}) {
    this.wrapper = options.wrapper;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.referenceArray = options.array;
    this.drawableArrays = [];

    this.setUpCanvas();
    this.setSpaceBetweenLines();
    this.setHeightPercent();
  }

  setUpCanvas() {
    const { wrapper, canvas } = this;
    wrapper.innerHTML = "";
    canvas.id = "canvas";
    canvas.height = wrapper.clientHeight;
    canvas.width = wrapper.clientWidth;
    wrapper.appendChild(canvas);
  }

  setSpaceBetweenLines() {
    const { canvas, referenceArray } = this;
    this.spaceBetween = (canvas.clientWidth - 20) / referenceArray.length;
  }

  setHeightPercent() {
    const { canvas, referenceArray } = this;
    const max = Math.max(...referenceArray);
    this.heightPercent = max / canvas.clientHeight;
  }

  appendDrawableArray(array = []) {
    this.drawableArrays.push(array);
  }

  beginDrawAnimation() {
    this.drawableArrays.forEach(this.drawArray)
  }

  // beginDrawAnimation(count = 0) {
  //   const { drawableArrays } = this;
  //   if (count != drawableArrays.length) {
  //     this.drawArray(drawableArrays[count]);
  //     const animation = () => this.beginDrawAnimation(count);
  //     count++;
  //     window.requestAnimationFrame(animation)
  //   }
  // }

  drawArray(array) {
    const { heightPercent, spaceBetween } = this;
    let posX = 5;
    this.clearCanvas();
    array.forEach(number => {
      this.drawLine(posX, number / heightPercent);
      posX += spaceBetween;
    });
  }

  clearCanvas() {
    const { ctx } = this;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  drawLine(xPos, height) {
    const { ctx, canvas } = this;
    const startHeight = canvas.clientHeight - 5;
    ctx.beginPath();
    ctx.moveTo(xPos, startHeight);
    ctx.lineTo(xPos, startHeight - height);
    ctx.stroke();
  }
}
