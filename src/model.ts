class Model {
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
    this._expression = "";
    this._firstInput = "";
    this._secondInput = "";
    this._operator = "";
  }

  makeExpression = (): void => {
    this.expression = this.firstInput + this.operator + this.secondInput;
  }

  clickNumber(input: string, render:(expression: string) => void): void {
    if(!this._operator) {
      this._firstInput += input;
      render(this.firstInput);
    } else {
      this._secondInput += input;
      render(this.secondInput);
    }
    this.makeExpression();
  }

  clickOperator(operator: string): void {
    this._operator = operator;
    this.makeExpression();
  }

  clickAllClear(callback: (expression: string) => void) {
    this.expression = "";
    this._firstInput = "";
    this._operator = "";
    this._secondInput = "";
    if(callback) callback(this.expression)
  }

  // clickDelete(render: (expression: string) => void) {
  //   console.log('this', this.expression)
  //   // if(this.secondInput) {
  //   //   this.secondInput = this.secondInput.slice(0, this.secondInput.length - 1)
  //   //   render(this.secondInput);
  //   // } else {
  //   //   this.firstInput = this.firstInput.slice(0, this.firstInput.length - 1);
  //   //   render(this.firstInput);
  //   // }
  //   this.makeExpression()
  // }
  clickDelete(callback: (expression: string) => void) {
    let length = this.expression.length
    this.expression = this.expression.slice(0, length - 1)
    if(callback) callback(this.expression)
  }
}

export default Model;