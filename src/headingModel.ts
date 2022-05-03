import Observable from "./observable";

// class HeadingModel extends Observable {
//   private _heading: string;

//   get heading() {
//     return this._heading;
//   }

//   set heading(input: string) {
//     this._heading = input;
//   }

//   constructor() {
//     super();
//     this._heading = "Hello";
//   }
// }

class HeadingModel extends Observable {
  private _expression: string;
  private _firstInput: string;
  private _secondInput: string;
  private _operator: string;

  get expression() {
    return this._expression;
  }

  set expression (expression: string) {
    this._expression = expression;
  }

  get firstInput() {
    return this._firstInput;
  }

  set firstInput(input: string) {
    this._firstInput = input;
  }

  get secondInput() {
    return this._secondInput;
  }

  set secondInput(input: string) {
    this._secondInput = input;
  }

  get operator() {
    return this._operator;
  }

  set operator(operator: string) {
    this._operator = operator;
  }

  constructor() {
    super();
    this._heading = "Hello";
  }
}

export { HeadingModel };