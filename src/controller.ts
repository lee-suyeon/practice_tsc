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
  }

  clickNumber(input: string) {
    this.model.clickNumber(input, () => this.view.renderResult(this.model.expression));
  }

  clickOperator(operator: string) {
    this.model.clickOperator(operator, () => this.view.renderResult(this.model.expression));
  }
}

export default Controller;