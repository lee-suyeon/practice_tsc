export interface OperatorType {
  [key: string]: string;
}

export const OperatorCode = {
  addition: "+",
  subtraction: "-",
  mulitplication: "×",
  division: "/",
  equal: "="
} as const;

class View {
  private app: HTMLDivElement;
  private result: HTMLDivElement;
  private numbers: HTMLElement;
  private operators: HTMLUListElement;

  constructor() {
    this.app = document.getElementById('app') as HTMLDivElement;
    this.result = document.querySelector('.result') as HTMLDivElement;
    this.numbers = document.querySelector(".numbers") as HTMLUListElement;
    this.operators = document.querySelector(".operators") as HTMLUListElement;
  }

  render() {
    let numbers: Array<number | string> = ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let number = 
    numbers.reverse().map(n => {
      return(
        `<li class="number">${n}</li>`
      )
    })

    let operatorObj: OperatorType = OperatorCode;
    let operator = 
    (Object.keys(OperatorCode) as ['Addition', 'Subtraction', 'Mulitplication', 'Division', 'Equal']).map((v) => {
      return (
        `<li class="operator ${v}" data-set=${v}>${operatorObj[v]}</li>`
      )}
    )
    this.numbers.innerHTML = number.join("\n")
    this.operators.innerHTML = operator.join("\n");

    let allClear = document.createElement('li');
    allClear.classList.add("all-clear");
    allClear.innerText = "AC"
    this.numbers.prepend(allClear);

    let back = document.createElement('li');
    back.classList.add("delete");
    back.innerText = "CE"
    this.numbers.appendChild(back);
  }

  bindClickNumber(handler: (input: string) => void) {
    this.app.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(target.className !== "number") return;
      let number = target.closest('.number')
      if(number) {
        handler(number.innerHTML)
      }
    })
  } 

  bindClickEqualOperator(handler: () => void) {
    this.app.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(!target.className.includes("equal")) return;
      let equal = target.closest('.equal');
      if(equal) {
        handler()
      }
    })
  }

  bindClickOperator(handler: (input: string) => void) {
    this.app.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(!target.className.includes("operator")) return;
      let operator = target.closest('.operator') as HTMLElement;
      let operatorObj: OperatorType = OperatorCode;
      if(operator) {
        let dataset = operator.dataset.set!
        handler(operatorObj[dataset])
      }
    })
  }

  renderResult(display: string | number) {
    if(display.toString().length > 15) {
      this.result.classList.add("small");
    }
    this.result.innerHTML = `${display}`;
  }

  bindClickAllClear(handler: () => void) {
    this.app.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(target.className !== "all-clear") return;
      let allClear = target.closest('.all-clear');
      if(allClear) {
        handler()
      }
    })
  }

  bindDelete(handler: () => void) {
    this.app.addEventListener('click', (event) => {
      let target = event.target as HTMLElement;
      if(target.className !== "delete") return;
      let deleteBtn = target.closest('.delete');
      if(deleteBtn) {
        handler()
      }
    })
  }
}

export default View;