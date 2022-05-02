const regexp = /[+\×\-/]/;

export function checkHasOperator(operator: string): boolean {
  let result = false;
  if(operator) result = true;
  return result;
}

export function calculateExpression(expression: string): string {
  let result = 0;
  const matchOperator = expression.match(regexp);
  const operator = matchOperator ? matchOperator[0] : null;
  const [ firstInput, secondInput ] = expression.split(regexp).map(e => Number(e));

  switch (operator) {
    case "+":
      result = firstInput + secondInput;
      break;
    case "-":
      result = firstInput - secondInput;
      break;
    case "×":
      result = firstInput * secondInput;
      break;
    case "/":
      result = firstInput / secondInput;
      break;
    default:
      break;
  }
  return result.toString();
}