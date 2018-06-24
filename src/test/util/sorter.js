const sorter = arr => {
  this.array = arr;
  const swap = (i, j) => {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  };

  const sort = () => {
    for (let i = 0; i < this.array.length; i++) {
      let value = this.array[i];
      let j = i - 1;
      while (j > -1 && this.array[j] > value) {
        swap(j, j + 1);
        j--;
      }
      this.array[j + 1] = value;
    }
  };

  sort();
  return this.array;
};

module.exports = sorter;
