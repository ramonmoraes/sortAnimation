import SorterMapper from "../sort/SorterMapper";
import arrayExamples from "./arrayExamples";

const createListOfSortTypes = () => {
  const list = [];
  for (let sort in SorterMapper) {
    list.push(sort);
  }
  return list;
};
const listOfSort = createListOfSortTypes();

SorterMapper.forEach(sortType => {
    arrayExamples.forEach(exampleArray => {
        const sortMethod = SorterMapper[sortType];
        const {sorted, unsorted} = exampleArray;
        sortMethod.setup({array: sorted});
        sortMethod.sort();
        assert(sortMethod.array == sorted);
    })
});
