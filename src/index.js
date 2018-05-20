import CanvasGraphArray from "./util/canvas-graph-array.js";
import createRandomArray from "./util/create-random-array";
import Sorter from './sort/Sorter.js'

const startSorting = () => {
  const sortType = getSortType();
  const array = getRandomArray();

  const canvas = new CanvasGraphArray({
    wrapper: document.querySelector(".canvas-wrapper"),
    array
  });

  const requestAnimationCallback = array => {
    canvas.drawArray(array);
  };

  new Sorter({
    sortType,
    requestAnimationCallback,
    array
  });
};

const getRandomArray = ()=> {
  const numberInArray = document.querySelector('#canvas-number-input').value;
  return createRandomArray(numberInArray);
}

const getSortType = () => {
  const listOfInputs = [
    ...document.querySelectorAll(".canvas-setup-type input")
  ];
  const checkedInput = listOfInputs.filter(input => input.checked)[0].id;
  return checkedInput;
};

window.onload = () => {
  const initButton = document.querySelector("#canvas-init-button");
  initButton.addEventListener("click", startSorting);
};
