import { LinkedList, Node } from "./linked-list";


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
const newList = new LinkedList();
