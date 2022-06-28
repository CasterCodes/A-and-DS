const MySet = function () {
  this.collection = [];
  this.size = 0;

  this.exists = function (element) {
    return this.collection.indexOf(element) !== -1;
  };

  this.add = function (element) {
    if (this.exists(element)) return false;
    this.collection.push(element);
    this.size++;
    return true;
  };

  this.remove = function (element) {
    if (!this.exists(element)) return false;
    elementIndex = this.collection.indexOf(element);
    this.collection.splice(elementIndex, 1);
    this.size--;
    return true;
  };

  this.values = function () {
    return this.collection;
  };

  this.union = function (otherSet) {
    const unionSet = new MySet();
    const otherSetValues = otherSet.values();
    const currentSetValues = this.values();

    otherSetValues.forEach((value) => unionSet.add(value));

    currentSetValues.forEach((value) => unionSet.add(value));

    return unionSet;
  };

  this.intersection = function (otherSet) {
    const intersectionSet = new MySet();

    const firstSetValues = this.values();

    firstSetValues.forEach((value) => {
      if (otherSet.exists(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  };

  this.difference = function (otherSet) {
    const differenceSet = new MySet();

    const firstSetvalues = this.values();

    firstSetvalues.forEach((value) => {
      if (!otherSet.exists(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  };

  this.subset = function (subset) {
    return this.values().every((value) => subset.exists(value));
  };
};

const firstSet = new MySet();

const secondSet = new MySet();

firstSet.add(23);
firstSet.add(24);
firstSet.add(25);
secondSet.add(23);
secondSet.add(24);

// secondSet is a subset of firstSet
console.log(secondSet.subset(firstSet));

// union of the firstSet and the secondSet
secondSet.add(27);
console.log({ union: secondSet.union(firstSet).collection });

// intersection of sets
console.log({ intersection: firstSet.intersection(secondSet).collection });

// difference of the set
console.log({ difference: secondSet.difference(firstSet).collection });
