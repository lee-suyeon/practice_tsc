interface IModel {
  
  clickNumber(input: string, callback: (input: string) => void): void;
}

class Model implements IModel{
  private _input: string = "";

  get input() {
    return this._input;
  }

  set input (input: string) {
    this._input += input;
  }

  // private secondNumber: string;
  // private operator: string;
  // private result: number;

  constructor() {
    this._input = "";
  }
  
  clickNumber(input: string, callback: (input: string) => void) {
    this._input += input;

    if(callback) {
      callback(this._input)
    } 
  }
}

export default Model;