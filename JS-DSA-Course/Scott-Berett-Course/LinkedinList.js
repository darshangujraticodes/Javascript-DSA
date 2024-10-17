// why we are creating 2 class because create new Node is common code use in all push, insert and unshift and LinkedList direct code

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
}

let linkedList = new LinkedList(5);
linkedList.push(45);
linkedList.push(56);
// linkedList.push(86);

console.log(linkedList);
