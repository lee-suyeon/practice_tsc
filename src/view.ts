interface IView {
  render(): void;
  bindClickNumber(handler: (input: string) => void): void;
  clickNumber(input: string): void;
  bindClickOperator(handler: (input: string) => void): void;
  clickOperator(operator: string): void;
}

export interface OperatorType {
  [key: string]: string;
}

export const OperatorCode = {
  addition: "+",
  subtraction: "-",
  mulitplication: "x",
  division: "/",
  equal: "="
} as const;

class View implements IView {
  private app: HTMLDivElement;
  private result: HTMLDivElement;
  private keyPad: HTMLDivElement;
  private numbers: HTMLElement;
  private operators: HTMLUListElement;

  constructor() {
    this.app = document.getElementById('#app') as HTMLDivElement;
    this.result = document.querySelector('.result') as HTMLDivElement;
    this.keyPad = document.querySelector(".key-pad") as HTMLDivElement;
    this.numbers = document.querySelector(".numbers") as HTMLUListElement;
    this.operators = document.querySelector(".operators") as HTMLUListElement;
  }

  render() {
    let numbers: Array<number> = Array(10).fill(null).map((v, i) => i);
    let number = 
    numbers.reverse().map(n => {
      return(
        `<li class="number" data-set=${n}>${n}</li>`
      )
    })

    let operator = 
    (Object.keys(OperatorCode) as ['Addition', 'Subtraction', 'Mulitplication', 'Division', 'Equal']).map((v) => {
      return (
        `<li class="operator" data-set=${v}>${OperatorCode[v]}</li>`
      )}
    )
    this.numbers.innerHTML = number.join("\n")
    this.operators.innerHTML = operator.join("\n");
    let back = document.createElement('li');
    back.classList.add("number");
    back.innerText = "⬅️"
    this.numbers.appendChild(back);
  }

  bindClickNumber(handler: (input: string) => void) {
    this.keyPad.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(target.className !== "number") return;
      let number = target.closest('.number')
      if(number) {
        handler(number.dataset.set)
      }
    })
  }

  clickNumber(input: string) {
    this.result.innerHTML = input;
  }

  bindClickOperator(handler: (input: string) => void) {
    this.keyPad.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(target.className !== "operator") return;
      let operator = target.closest('.operator')
      if(operator) {
        handler(operator.dataset.set)
      }
    })
  }

  clickOperator(operator: string) {
    this.result.innerHTML = operator;
  }

  renderResult(expression: number | string) {
    this.result.innerHTML = `${expression}`;
  }
}

export default View;