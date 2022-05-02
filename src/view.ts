import { OperatorCode, OperatorType } from './common';
import { addEvent } from './helper';

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

    this.result.innerText = "0"
  }

  bindClickNumber(handler: (input: string) => void) {
    addEvent(this.app, 'click', ({ target }) => {
      this.toggleSelectedOperator();
      const number = target.closest('.number');
      if(number) {
        handler(number.innerHTML);
      }
    })
  } 

  bindClickOperator(handler: (input: string) => void) {
    addEvent(this.app, 'click', ({ target }) => {
      const operator = target.closest('.operator')
      const operatorObj: OperatorType = OperatorCode;
      if(operator) {
        const dataset = operator.dataset.set!
        this.toggleSelectedOperator(dataset);
        handler(operatorObj[dataset]);
      }
    })
  }

  toggleSelectedOperator(operator?: string) {
    if(operator && operator !== "equal") {
      const selected = this.operators.querySelector(`[data-set="${operator}"]`); // 선택한 연산자
      if (!selected) {
        return;
      }
      selected.classList.add('selected');
    } else {
      this.operators.querySelectorAll("li.selected").forEach(li => {
        li.classList.remove('selected');
      })
    }
    
  }

  renderResult(display: string) {
    let length = display.length;
    let result = display;
    if(length === 0) {
      result = "0";
    }
    if(length > 20) {
      this.result.classList.add("small");
    }
    this.result.innerHTML = `${result}`;
  }

  bindClickAllClear(handler: () => void) {
    addEvent(this.app, 'click', ({ target }) => {
      const allClear = target.closest('.all-clear');
      if(allClear) {
        handler()
      }
    })
  }

  bindDelete(handler: () => void) {
    addEvent(this.app, 'click',  ({ target}) => {
      const deleteBtn = target.closest('.delete');
      if(deleteBtn) {
        handler();
      }
    })
  }
}

export default View;