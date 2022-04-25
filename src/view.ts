interface IView {
  render(): void;
  bindClickNumber(handler: (input: string) => void): void;
  clickNumber(input: string): void;
}

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

    let operators: Array<string> = ["+", "-", "x", "/", "="];
    let operator = 
    operators.map((v) => {
      return (
        `<li class="operator">${v}</li>`
      )}
    )
    this.numbers.innerHTML = number.join("\n")
    this.operators.innerHTML = operator.join("\n");
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
}

export default View;