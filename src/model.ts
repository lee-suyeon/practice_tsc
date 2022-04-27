import { OperatorCode, OperatorType } from './view';

class Model {
  private _expression: string = "";
  private _result: number = 0;

  get expression() {
    return this._expression;
  }

  set expression (expression: string) {
    this._expression = expression;
  }

  get result() {
    return this._result;
  }

  set result (result: number) {
    this._result = result;
  }

  constructor() {
    this._expression = "";
    this._result = 0; 
  }

  clickNumber(input: string, callback: (input: string) => void) {
    this.expression += input; 
    if(callback) {
      callback(this.expression)
    } 
  }

  clickOperator(operator: string, callback: (input: string) => void) {
    let operatorObj: OperatorType = OperatorCode;
    if(operator == 'equal') return;
    if(Object.values(operatorObj).includes(this.expression[this.expression.length - 1])) {
      let length = this.expression.length
      this.expression = this.expression.slice(0, length - 1)
    }
    this.expression += operatorObj[operator];
    if(callback) {
      callback(this.expression)
    }
  }

  clickEqualOperator(callback: (result: number) => void) {
    this.result = eval(this.expression.replace('×', '*'));
    this.expression = this.result.toString();
    if(callback) {
      callback(this.result);
    }
  }

  clickAllClear(callback: (expression: string) => void) {
    this.expression = "";
    if(callback) callback(this.expression)
  }

  clickDelete(callback: (expression: string) => void) {
    let length = this.expression.length
    this.expression = this.expression.slice(0, length - 1)
    if(callback) callback(this.expression)
  }
}

export default Model;