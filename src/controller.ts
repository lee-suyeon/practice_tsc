import Model from "./model";
import View from "./view";
import { checkHasOperator, calculateExpression } from './service'; 

class Controller {
  private view: View;
  private model: Model;

  constructor(model: Model, view: View) {
    this.view = view;
    this.model = model;
    this.view.render();
    this.view.bindClickNumber(this.clickNumber.bind(this))
    this.view.bindClickOperator(this.clickOperator.bind(this))
    this.view.bindClickAllClear(this.clickAllClear.bind(this))
    this.view.bindDelete(this.clickDeleteButton.bind(this))
  }

  clickNumber(input: string): void {
    if(!checkHasOperator(this.model.operator)) {
      this.model.clickNumber(input, () => this.view.renderResult(this.model.firstInput));
    } else {
      this.model.clickNumber(input, () => this.view.renderResult(this.model.secondInput));
    }
  }

  clickOperator(operator: string): void {
    if(operator === "=") {
      let result:number = calculateExpression(this.model.expression)
      this.view.renderResult(result);
      this.model.firstInput = result.toString();
      this.model.secondInput = "";
      this.model.expression = this.model.firstInput;
      this.model.operator = "";
    } else {
      this.model.clickOperator(operator);
    }
  }

  clickAllClear(): void {
    this.model.clickAllClear(() => this.view.renderResult(this.model.expression))
  }

  clickDeleteButton(): void {
    this.model.clickDelete(() => this.view.renderResult(this.model.expression))
  }
}

export default Controller;