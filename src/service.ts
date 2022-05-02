const regexp = /[+\\-×/]/;

export function checkHasOperator(operator: string): boolean {
  let result = false;
  if(operator) result = true;
  return result;
}

export function calculateExpression(expression: string): number {
  let result = 0;
  const operator = expression.match(regexp)!;
  const [ firstInput, secondInput ] = expression.split(regexp);

  console.log("expression", expression)

  switch (operator[0]) {
    case "+":
      result = Number(firstInput) + Number(secondInput);
      break;
    case "-":
      result = Number(firstInput) - Number(secondInput);
      break;
    case "×":
      result = Number(firstInput) * Number(secondInput);
      break;
    case "/":
      result = Number(firstInput) / Number(secondInput);
      break;
    default:
      break;
  }
  return result;
}