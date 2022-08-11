import { LinkedList, Node } from "./linked-list";

let HEAD = new Node("Head");
const newList = new LinkedList(HEAD);

describe("list methods", () => {
  it("append() should add notes to the list and get the last note's value", () => {
    newList.append("I was appended");
    expect(newList.tail()).toBe("I was appended");
  });

  it("append() re-check", () => {
    newList.append("I am in the end");
    expect(newList.tail()).toBe("I am in the end");
  });

  it("prepend() should insert notes before HEAD and point HEAD at them", () => {
    newList.prepend("I am the new HEAD");
    expect(newList.head()).toBe("I am the new HEAD");
  });

  it("prepend() re-check", () => {
    newList.prepend("NO, I am the new HEAD");
    expect(newList.head()).toBe("NO, I am the new HEAD");
  });

  it("size() should return the size of the list", () => {
    expect(newList.size()).toBe(5);
  });

  it("head() should return HEAD", () => {
    expect(newList.head()).toBe("NO, I am the new HEAD");
  });

  it("head() should return TAIL", () => {
    expect(newList.tail()).toBe("I am in the end");
  });

  it("at() should return value of the element that has given index", () => {
    expect(newList.at(2)).toBe("I am the new HEAD");
  });

  it("pop() should remove HEAD and assign the following node as HEAD", () => {
    newList.pop();
    expect(newList.tail()).toBe("I was appended");
  });

  it("contains() should return boolean value. True if the provided value is met within the list, otherwise -- false ", () => {
    expect(newList.contains("hello")).toBeFalsy();
  });

  it("contains() re-check", () => {
    expect(newList.contains("I was appended")).toBeTruthy();
  });

  it("find() should return index at which the provided value is stored", () => {
    expect(newList.find("I am the new HEAD")).toBe(1);
  });

  it("insertAt() should create a new node with provided value and place it to provided position", () => {
    newList.insertAt("I was inserted", 0);
    expect(newList.find("I was inserted")).toBe(0);
  });

  it("toString() should display all newList nodes", () => {
    expect(newList.toString()).toBe(
      "(I was inserted) -> (NO, I am the new HEAD) -> (I am the new HEAD) -> (Head) -> (I was appended) -> (null)"
    );
  });

  it("removeAt() should remove the node with provided value", () => {
    expect(newList.removeAt(0)).toBe("I was inserted");
  });

  it("removeAt() should remove the node with provided value", () => {
    expect(newList.removeAt(0)).toBe("NO, I am the new HEAD");
  });

  it("removeAt() should remove the node with provided value", () => {
    expect(newList.removeAt(0)).toBe("I am the new HEAD");
  });

  it("toString() re-check", () => {
    expect(newList.toString()).toBe("(Head) -> (I was appended) -> (null)");
  });

  it("toString() re-check", () => {
    newList.prepend("The second node");
    newList.prepend("The first node");
    expect(newList.toString()).toBe(
      "(The first node) -> (The second node) -> (Head) -> (I was appended) -> (null)"
    );
  });
});
