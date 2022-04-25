interface IStack {
  push(value: number): void;
  pop(): void;
  readonly size: number;
}

interface StackNode {
  value: number;
  next?: StackNode;
}

class Stack implements IStack {
  private _size : number = 0;
  private head?: StackNode
  private tail?: StackNode

  get size() {
    return this._size;
  }

  push(value: number) {
    const newNode: StackNode = { value };
    if(this._size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if(this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this._size++; 
  }

  pop() {
    if(this._size === 0) {
      throw new Error('underflow')
    }
    if(this._size === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      const next = this.head?.next;
      this.head = next;
    }
    this._size--;
  }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)

export default Stack;