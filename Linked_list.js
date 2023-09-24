const LinkedListNode = require('./Node');

let node = new LinkedListNode('hello world');
console.log(node);

class LinkedList {
  constructor() {
    this.head = null;
  }

  addHead(data) {
    const newHead = new LinkedListNode(data); // creating a variable that is instantiated member of LinkedListNode
    const currentHead = this.head; // creating a currentHead variable and storing an old head there
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead); // updating newHead's pointer to the old head
    }
  }

  addTail(data) {
    const tail = new LinkedListNode(data);
    let currentNode = this.head;
    if (!currentNode) {
      this.addHead(tail);
    } else {
      while (currentNode.getNextNode()) {
        currentNode = currentNode.getNextNode();
      }
      currentNode.setNextNode(tail);
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!this.head) {
      console.log('no head to remove!');
      return;
    }
    this.head = this.head.getNextNode();
    return removedHead;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode) {
      output += currentNode.data + ' --> ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

let linkedList = new LinkedList();
linkedList.addHead('hello world');
linkedList.addTail('This is a tail');
linkedList.addHead('This is now a new head');
linkedList.removeHead();

linkedList.printList();
