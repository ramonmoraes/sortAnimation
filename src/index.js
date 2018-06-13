import SorterMapper from './sort/SorterMapper.js';
import './css/style.scss';

const createListOfSortTypes = () => {
  const list = [];
  for(let sort in SorterMapper) {
    list.push(sort);
  }
  return list;
}

window.onload = () => {
  // const initButton = document.querySelector("#canvas-init-button");
  // initButton.addEventListener("click", startSorting);
  console.log('WOFE');
};
