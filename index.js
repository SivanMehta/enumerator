class Tree {
  constructor(value) {
    this.value = value;
  }

  get leaf() {
    return typeof this.nodes === 'undefined';
  }

  add(arr) {
    if (this.leaf) {
      this.nodes = arr.map(e => new Tree(e));
    } else {
      this.nodes.forEach(n => n.add(arr));
    }
  }

  combine() {
    if (this.leaf) {
      return this.value;
    }

    const leafCombinations = this.nodes.map(n => n.combine());
    const treeCombinations = leafCombinations.map(l => {
      return Array.isArray(l) ?
        l.map(c => { return { ...this.value, ...c }; }) :
        { ...this.value, ...l };
    });

    // flatten final array
    return [].concat.apply([], treeCombinations);
  }
}

export function enumerate (opts) {
  const tree = new Tree();

  Object.entries(opts).forEach(([key, value]) => {
    const objects = Array.isArray(value) ?
      value.map(v => { return { [key]: v }; }) :
      [{ [key]: value }];

    tree.add(objects);
  });

  return tree.combine();
};