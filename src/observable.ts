import { HeadingView } from "./headingView";

class Observable {
  private observers: any[];

  constructor() {
    this.observers = [];
  }

  addObserver(view: HeadingView): void {
    this.observers.push(view);
  }

  unscribe(func: () => void): void {
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data: string) {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(data));
    }
  }
}

export default Observable;