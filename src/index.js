import SorterMapper from "./sort/SorterMapper.js";
import "./css/style.scss";

const createListOfSortTypes = () => {
  const list = [];
  for (let sort in SorterMapper) {
    list.push(sort);
  }
  return list;
};

const createOptions = (selectOptions) => {
  const listOfSortTypes = createListOfSortTypes();
  listOfSortTypes.forEach(sort => {
    const option = document.createElement("option");
    option.value = sort;
    option.innerHTML = sort;
    selectOptions.appendChild(option);
  });
}

const startSortBasedOnSelectValue = (selectOptions) => {
  const initButton = document.querySelector("#canvas-init-button");
  initButton.addEventListener("click", () => {
    const sorter = SorterMapper[selectOptions.value];
    sorter.setup();
    sorter.start();
  });
}

window.onload = () => {
  const selectOptions = document.querySelector("#canvas-select");
  createOptions(selectOptions);
  startSortBasedOnSelectValue(selectOptions);
};
