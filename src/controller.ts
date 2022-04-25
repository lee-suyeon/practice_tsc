import Model from "./model";
import View from "./view";

interface IController {
  clickNumber: (input: string) => void;
}

class Controller implements IController {
  private view: View;
  private model: Model;

  constructor(model: Model, view: View) {
    this.view = view;
    this.model = model;
    view.render()
    view.bindClickNumber(this.clickNumber.bind(this))
  }

  clickNumber(input: string) {
    this.model.clickNumber(input, () => this.view.clickNumber(this.model.input));
  }
}

export default Controller;