import Model from "./model";
import View from "./view";

class Controller {
  private view: View;
  private model: Model;

  constructor(model: Model, view: View) {
    this.view = view;
    this.model = model;
    view.render()
    view.bindClickNumber(this.clickNumber.bind(this))
    view.bindClickOperator(this.clickOperator.bind(this))
    view.bindClickEqualOperator(this.clickEqualOperator.bind(this))
    view.bindClickAllClear(this.clickAllClear.bind(this))
    view.bindDelete(this.clickDeleteButton.bind(this))
  }

  clickNumber(input: string): void {
    this.model.clickNumber(input, () => this.view.renderResult(this.model.expression));
  }

  clickOperator(operator: string): void {
    this.model.clickOperator(operator, () => this.view.renderResult(this.model.expression));
  }

  clickEqualOperator(): void {
    this.model.clickEqualOperator(() => this.view.renderResult(this.model.result))
  }

  clickAllClear(): void {
    this.model.clickAllClear(() => this.view.renderResult(this.model.expression))
  }

  clickDeleteButton() {
    this.model.clickDelete(() => this.view.renderResult(this.model.expression))
  }
}

export default Controller;