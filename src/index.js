import CanvasGraphArray from "./util/canvas-graph-array.js";
import createRandomArray from "./util/create-random-array";

const startSorting = () => {
  const numberInArray = document.querySelector('#canvas-number-input').value;
  const sortType = getSortType();
  
};

const getSortType = () => {
  const listOfInputs = [
    ...document.querySelectorAll(".canvas-setup-type input")
  ];
  const checkedInput = listOfInputs.filter(input => input.checked)[0];
  return checkedInput;
};

window.onload = () => {
  const initButton = document.querySelector("#canvas-init-button");
  initButton.addEventListener("click", startSorting);
};
