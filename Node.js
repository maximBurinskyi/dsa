console.log(30);
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(data) {
    if (data instanceof LinkedListNode || data === null) {
      this.next = data;
    } else throw new Error('Data must be a member of LinkedListNode class');
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = LinkedListNode;

// let node = new LinkedListNode('first node');
// let newNode = new LinkedListNode('second node');
// let thirdNode = new LinkedListNode(30);

// node.setNextNode(thirdNode);

// console.log(node);
// console.log(node.getNextNode());
