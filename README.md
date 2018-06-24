# Sort Animation

The idea of this repository is to make new programmes contribute to an open source project and learn some dev ops concepts that are used in real-world softwares

## Running the project

After cloning the project run `yarn` </br>
Then run `yarn dev`</br>
Now you can start contributing ;D

## Contributing

<a href="https://github.com/MarcDiethelm/contributing/blob/master/README.md"> How to contribute [Basic guide] </a>

You should create your class as follow the project structure, extending the base Sorter

```js
"use strict";
import Sorter from "./Sorter";

export default class MyNewSortClass extends Sorter {
  constructor() {
    super();
  }
...
}
```

Then add your sorter at ´/src/sort/SorterMapper.js´

```js

import BubbleSort from "./BubbleSort";
import MyNewSortClass from "./MyNewSortClass";

const SorterMapper = {
  BubbleSort: new BubbleSort(),
  MyNewSortClass: new MyNewSortClass()
};
```

