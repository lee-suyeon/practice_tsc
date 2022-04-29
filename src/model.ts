import { OperatorCode, OperatorType } from './common';

class Model {
  private _expression: string = "";
  private _result: number = 0;

  private _firstNumber: string = "";
  private _operator: string = "";
  private _secondNumber: string = "";

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

  get firstNumber() {
    return this._firstNumber;
  }

  get operator() {
    return this._firstNumber;
  }

  get secondNumber() {
    return this._firstNumber;
  }

  constructor() {
    this._expression = "";
    this._result = 0; 
    this._firstNumber = "";
    // 연산자를 클릭했을 때 이미 연산자에 값이 존재할 경우 계산 하고 연산자 값 갱신 
    this._operator = "";
    this._secondNumber = "";
  }

  // clickNumber(input: string, callback: (input: string) => void) {
  //   let currentExpression: string = this.expression;
  //   currentExpression += input;
  //   this.expression = currentExpression;
  //   if(callback) {
  //     callback(this.expression)
  //   } 
  // }

  clickNumber(input: string) {
    if(!this._firstNumber) {
      this._firstNumber += input;
    } else {
      this._secondNumber += input;
    }
  }

  clickOperator(operator: string) {
    this._operator = operator;
  }

  makeExpression = () => {

  }

  // clickOperator(operator: string, callback: (input: string) => void) {
  //   let operatorObj: OperatorType = OperatorCode;

  //   if(operator == 'equal') return; // clickEqualOperator 실행

  //   // 연산자를 클릭하면 
  //   // string -> 배열 길이가 3개인지 체크해서 바로 계산 ?

  //   if(Object.values(operatorObj).includes(this.expression[this.expression.length - 1])) {
  //     let length = this.expression.length
  //     this.expression = this.expression.slice(0, length - 1)
  //   }
  //   this.expression += operatorObj[operator];
  //   if(callback) {
  //     callback(this.expression)
  //   }
  // }

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