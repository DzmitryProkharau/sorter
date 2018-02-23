class Sorter {
  constructor() {
    this.arr = [];
    function compareFunction(a, b) {
        return a - b;
      }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort(this.compareFunction);
    for (let i = indices.length - 1;i > 0;i--) {
        for (let j = 0; j < i; j++) {
            if (this.arr[indices[j]] > this.arr[indices[j + 1]]) {
                var tmp = this.arr[indices[j]];
                this.arr[indices[j]] = this.arr[indices[j + 1]];
                this.arr[indices[j + 1]] = tmp;
            }
            
        }
    }  
  }

  setComparator(compareFunction) {
    this.arr.sort(compareFunction);
  }
}

module.exports = Sorter;