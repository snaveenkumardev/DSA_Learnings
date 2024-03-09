class Node {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

function insert(headRef, data) {
    let newNode = new Node(data);
    newNode.next = headRef[0];
    headRef[0] = newNode; 
}

function insertAfter(givenNode, data) {
    let newNode = new Node(data);
    newNode.next = givenNode[0].next;
    givenNode[0].next = newNode; 
}

function insertFromLast(headRef, data) {
    let newNode = new Node(data);
    newNode.next = null;
    let last = headRef[0];
    if (last == null) {
        headRef[0] = newNode;
        return;
    }

    while(last.next != null) { // Traverse untill the last node of the list
        last = last.next;  
    }

    last.next = newNode;
}

function display(headNode) {
    let current = headNode;
    console.log("All nodes are listed");
    while(current != null) {
        console.log("Node ", current.data);
        current = current.next;
    }
    
}

function main() {
    let head = [null];
    insertFromLast(head, 8)
    insert(head, 5);
    insert(head, 4);
    insert(head, 3);
    insert(head, 2);
    insert(head, 1);
    insertAfter(head, 6)
    insertFromLast(head, 7)

    display(head[0]);
      
}

main()