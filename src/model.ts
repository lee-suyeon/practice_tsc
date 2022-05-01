import { OperatorCode, OperatorType } from './common';
import { checkHasOperator, calculateExpression } from './service'; 

class Model {
  private _expression: string = "";

  get expression() {
    return this._expression;
  }

  set expression (expression: string) {
    this._expression = expression;
  }

  constructor() {
    this._expression = "";
  }

  clickNumber(input: string, render:(expression: string) => void): void {
    if(checkHasOperator(this.expression)) {
      this.expression += input;
      let result = calculateExpression(this.expression);
      this.expression = result.toString();
    } else {
      let currentExpression: string = this.expression;
      currentExpression += input;
      this.expression = currentExpression;
    }
    
    if(render) {
      render(this.expression)
    }
  }

  // 연산자를 누르면 바로 계산
  clickOperator(operator: string, render:(expression: string) => void): void {
    this.expression += operator;
    // if(!checkHasOperator(this.expression)) {
    // } else {
    //   let result = calculateExpression(this.expression);
    //   this.expression = result.toString();
    // }
    
    if(render) {
      render(this.expression)
    }
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
    // this.result = eval(this.expression.replace('×', '*'));
    // this.expression = this.result.toString();
    // if(callback) {
    //   callback(this.result);
    // }
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