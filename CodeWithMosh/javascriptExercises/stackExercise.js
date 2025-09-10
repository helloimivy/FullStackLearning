const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(value) {
    // created const for better readability below
    const items = _items.get(this);

    items.push(value);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("The stack is empty.");

    items.pop();
  }

  peak() {
    // created const for better readability below
    const items = _items.get(this);

    if (items.length === 0) throw new Error("The stack is empty.");

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();
s.push("a");
console.log(s.count);
s.push("b");
s.push("c");
console.log(s.count);
s.pop();
console.log(s.count);
console.log(s.peak());
