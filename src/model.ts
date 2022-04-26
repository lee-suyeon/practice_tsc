import { OperatorCode, OperatorType } from './view';

class Model {
  private firstInput: string = "";
  private secondInput: string = "";
  private operator: string = "";
  private _expression: string = "";

  get expression() {
    return this._expression;
  }

  set expression (expression: string) {
    this._expression = expression;
  }

  constructor() {
    this.firstInput = "";
    this.secondInput = "";
    this.operator = "";
    this._expression = "";
  }

  clickNumber(input: string, callback: (input: string) => void) {
    if(!this.operator) { // 연산자가 없으면
      this.firstInput += input; // 첫번째 input
    } else { // 연산자가 있으면 
      this.secondInput += input; // 두번째 인풋
    }
    this._expression = this.firstInput + this.operator + this.secondInput;
    if(callback) {
      callback(this._expression)
    } 
  }

  addition(a: string, b: string): string {
    let result = Number(a) + Number(b);
    return result.toString()
  }

  subtraction(a: string, b: string): string {
    let result = Number(a) - Number(b);
    return result.toString()
  }
  
  mulitplication(a: string, b: string): string {
    let result = Number(a) * Number(b);
    return result.toString()
  }
  
  division(a: string, b: string): string {
    let result = Number(a) / Number(b);
    return result.toFixed(5).toString();
  }

  clickOperator(operator: string, callback: (input: string) => void) {
    let operatorObj: OperatorType = OperatorCode;
    if(operator == 'equal') {
      let result = Object.keys(OperatorCode).find(k => {
        return OperatorCode[k] === this.operator;
      })
      this._expression = this[result](this.firstInput, this.secondInput);    
      this.firstInput = this._expression;
      this.secondInput = "";
      this.operator = "";
    } else {
      this.operator = operatorObj[operator];
      this._expression = this.firstInput + this.operator;
    }
    if(callback) {
      callback(this._expression)
    }
  }
}

export default Model;