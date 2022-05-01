import { OperatorCode, OperatorType } from './common';

const regexp = /[+\\-×/]/;
export function makeExpression(firstInput: string, operator: string, secondInput: string): string {
  let result:string = firstInput + operator + secondInput;
  return result;
}

// 연산자를 클릭했을 때 이미 연산자가 존재한 경우는 계산을 하고 아닌 경우는 return;
export function checkHasOperator(expression: string): boolean {
  let result = false;
  if(regexp.test(expression)) {
    result = true;
  }
  return result;
}

export function calculateExpression(expression: string): number {
  // let expressionArr: string[] = expression.split("");
  let result = 0;
  const [ firstNumber, secondNumber ] = expression.split(regexp);
  let operator: string[] | number[] | null = expression.match(regexp);

  console.log("firstNumber", firstNumber)
  console.log("secondNumber", secondNumber)
  console.log("operator", operator)
  if(operator && operator[0] === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  }

  return result;
}