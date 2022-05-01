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
    // this.view.bindClickEqualOperator(this.clickEqualOperator.bind(this))
    this.view.bindClickAllClear(this.clickAllClear.bind(this))
    this.view.bindDelete(this.clickDeleteButton.bind(this))
  }

  clickNumber(input: string): void {
    this.model.clickNumber(input, () => this.view.renderResult(this.model.expression));
  }

  clickOperator(operator: string): void {
    this.model.clickOperator(operator, () => this.view.renderResult(this.model.expression));
  }

  // clickEqualOperator(): void {
  //   let result:string = calculateExpression(this.model.expression)
  //   this.view.renderResult(result);
  //   // this.model.clickEqualOperator(() => this.view.renderResult(this.model.result))
  // }

  clickAllClear(): void {
    this.model.clickAllClear(() => this.view.renderResult(this.model.expression))
  }

  clickDeleteButton(): void {
    this.model.clickDelete(() => this.view.renderResult(this.model.expression))
  }
}

export default Controller;