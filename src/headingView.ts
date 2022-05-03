import Observable from "./observable";
import { HeadingModel } from "./headingModel";
import { HeadingController } from "./headingController";
import { OperatorCode, OperatorType } from './common';
// class HeadingView extends Observable {
//   private _heading: HTMLDivElement;
//   private controller: HeadingController;

//   get heading() {
//     return this._heading;
//   }

//   constructor(controller: HeadingController) {
//     super();
//     this.controller = controller;
//     this._heading = document.querySelector(".heading") as HTMLDivElement;
//     this.heading.innerText = controller.modelHeading;
//     this.heading.addEventListener("click", controller);
//     this.controller.model.addObserver(this);
//   }

//   update(model: HeadingModel): void {
//     this._heading.innerText = model.heading;
//   }
// }

class HeadingView extends Observable {
  // private _heading: HTMLDivElement;
  private app: HTMLDivElement;
  private _result: HTMLDivElement;
  private numbers: HTMLElement;
  private operators: HTMLUListElement;
  private controller: HeadingController;

  get result() {
    return this._result;
  }

  constructor(controller: HeadingController) {
    super();
    this.controller = controller;
    this.app = document.getElementById('app') as HTMLDivElement;
    this.numbers = document.querySelector(".numbers") as HTMLUListElement;
    this.operators = document.querySelector(".operators") as HTMLUListElement;
    this._result = document.querySelector('.result') as HTMLDivElement;
    this.app.addEventListener("click", controller);
    this._result.innerText = controller.modelHeading;
    this.controller.model.addObserver(this);
    this.render();
  }

  render() {
    let numbers: Array<number | string> = ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let number = 
    numbers.reverse().map(n => {
      return(
        `<li class="number">${n}</li>`
      )
    })

    let operatorObj: OperatorType = OperatorCode;
    let operator = 
    (Object.keys(OperatorCode) as ['Addition', 'Subtraction', 'Mulitplication', 'Division', 'Equal']).map((v) => {
      return (
        `<li class="operator ${v}" data-set=${v}>${operatorObj[v]}</li>`
      )}
    )
    this.numbers.innerHTML = number.join("\n")
    this.operators.innerHTML = operator.join("\n");

    let allClear = document.createElement('li');
    allClear.classList.add("all-clear");
    allClear.innerText = "AC"
    this.numbers.prepend(allClear);

    let back = document.createElement('li');
    back.classList.add("delete");
    back.innerText = "CE"
    this.numbers.appendChild(back);

    this.result.innerText = "0"
  }

  update(model: HeadingModel): void {
    this._result.innerText = model.heading;
  }
}

export { HeadingView };