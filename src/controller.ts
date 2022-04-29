import Model from "./model";
import View from "./view";
import Service from "./service";

class Controller {
  private view: View;
  private model: Model;
  private service: Service;

  constructor(model: Model, view: View, service: Service) {
    this.view = view;
    this.model = model;
    this.service = service;
    this.view.render();
    this.view.bindClickNumber(this.clickNumber.bind(this))
    this.view.bindClickOperator(this.clickOperator.bind(this))
    this.view.bindClickEqualOperator(this.clickEqualOperator.bind(this))
    this.view.bindClickAllClear(this.clickAllClear.bind(this))
    this.view.bindDelete(this.clickDeleteButton.bind(this))
  }

  clickNumber(input: string): void {
    this.service.makeExpression(
    
    )
    this.model.clickNumber(input, () => this.view.renderResult(this.model.expression));
  }

  clickOperator(operator: string): void {
    this.model.clickOperator(operator, () => this.view.renderResult(this.model.expression));
  }

  clickEqualOperator(): void {
    let result:string = this.service.calculateExpression(this.model.expression)
    this.view.renderResult(result);
    // this.model.clickEqualOperator(() => this.view.renderResult(this.model.result))
  }

  clickAllClear(): void {
    this.model.clickAllClear(() => this.view.renderResult(this.model.expression))
  }

  clickDeleteButton(): void {
    this.model.clickDelete(() => this.view.renderResult(this.model.expression))
  }
}

export default Controller;