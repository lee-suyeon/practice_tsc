import { OperatorCode, OperatorType } from './common';

class Service {
  private result: number;

  constructor() {
    this.result = 0;
  }

  makeExpression(firstInput: string, operator: string, secondInput: string): string {
    let result:string = firstInput + operator + secondInput;
    return result;
  }

  checkOperator(input: string): boolean {
    const operatorObj: OperatorType = OperatorCode;
    let result = false;
    if(Object.values(operatorObj).includes(input)) {
      result = true;
    }
    return result;
  }

  calculateExpression(expression: string): string {
    let numberStack: String[] = [];
    let operateStack: String[] = [];
    let expressionArray = expression.split("");
    
    expressionArray.forEach(exp => {
      if(this.checkOperator(exp)) {
        operateStack.push(exp)
      } else {
        numberStack.push(exp)
      }
    });
    
    console.log("operateStack", operateStack)
    console.log("numberStack", numberStack)

    return expression;
  }

}

export default Service;