const Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count == 0) {
      return undefined;
    }

    const result = this.storage[this.count];

    delete this.storage[this.count];

    this.count--;

    return result;
  };

  this.size = function () {
    return this.count;
  };
};

const stack = new Stack();

stack.push(24);

stack.push(35);

console.log(stack.count);

console.log(stack.pop());
