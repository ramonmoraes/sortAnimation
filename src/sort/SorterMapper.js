import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";

const SorterMapper = {
  BubbleSort: new BubbleSort(),
  InsertionSort: new InsertionSort()
};

export default SorterMapper;