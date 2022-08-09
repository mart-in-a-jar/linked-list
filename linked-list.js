import "./style.css";

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let HEAD = new Node("Head");

class LinkedList {
  constructor(someNode) {
    HEAD.nextNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    let temp = HEAD;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = newNode;
  }

  prepend(value) {
    let newHead = new Node(value);
    newHead.nextNode = HEAD;
    HEAD = newHead;
  }

  size() {
    let count = 0;
    let temp = HEAD;
    while (temp != null) {
      temp = temp.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return HEAD.value;
  }

  tail() {
    let temp = HEAD;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp.value;
  }

  at(index) {
    let temp = HEAD;
    let count = 1;
    while (temp.nextNode != null && count !== index) {
      temp = temp.nextNode;
      count++;
    }
    return temp.value;
  }

  pop() {
    let temp = HEAD;
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }

  contains(value) {
    let temp = HEAD;
    while (temp != null && temp.value !== value) {
      temp = temp.nextNode;
    }
    return temp == null ? false : true;
  }

  find(value) {
    let temp = HEAD;
    let index = 0;
    while (temp != null) {
      index++;
      if (temp.value == value) return index;
      temp = temp.nextNode;
    }
    return null;
  }

  toString() {
    let temp = HEAD;
    let string = "";
    while (temp != null) {
      string += `(${temp.value}) -> `;
      temp = temp.nextNode;
    }
    string += "(null)";
    console.log(string);
  }

  insertAt(value, index) {
    let temp = HEAD;
    let tempNext;
    let count = 1;
    let newNode = new Node(value);

    if (index == 0) {
      newNode.nextNode = temp;
      HEAD = newNode;
      return;
    }

    while (temp != null) {
      if (count == index) {
        tempNext = temp.nextNode;
        temp.nextNode = newNode;
        newNode.nextNode = tempNext;
        return;
      }
      count++;
      temp = temp.nextNode;
    }
  }

  removeAt(index) {
    let temp = HEAD;
    let count = 0;
    while (temp != null) {
      if (index == count) {
        temp.nextNode = temp.nextNode.nextNode;
        return;
      }
      temp = temp.nextNode;
      count++;
    }
  }
}

const newList = new LinkedList();

newList.append("hello");
newList.prepend("I am the new HEAD");
newList.prepend("NO, I am the new HEAAD");
newList.append("LOL i am in the end");

console.log("Size:", newList.size());
console.log("------------------");

console.log("Head:", newList.head());
console.log("------------------");

console.log("Tail:", newList.tail());
console.log("------------------");

console.log("At(2):", newList.at(2));
console.log("------------------");

newList.pop();
console.log("------------------");

console.log("Contains('hello')", newList.contains("hello"));
console.log("------------------");

console.log("Find:", newList.find("hello"));
console.log("------------------");

newList.insertAt("i was inserted", 1);

newList.removeAt(0);
