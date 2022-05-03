import { HeadingModel } from "./headingModel";

// class HeadingController {
//   private _model: HeadingModel;

//   get model() {
//     return this._model;
//   }

//   constructor(model: HeadingModel) {
//     this._model = model;
//   }

//   handleEvent(e) {
//     e.stopPropagation();
//     switch(e.type) {
//       case "click":
//          this.clickHandler(e.target);
//          break;
//        default:
//          console.log(e.target);
//      }
//   }

//   get modelHeading() {
//     return this.model.heading;
//   }

//   clickHandler(target?: HTMLElement) {
//     this.model.heading = "world";
//     this.model.notify(this.model);
//   }
// }

class HeadingController {
  private _model: HeadingModel;

  get model() {
    return this._model;
  }

  constructor(model: HeadingModel) {
    this._model = model;
  }

  handleEvent(e) {
    e.stopPropagation();
    switch(e.type) {
      case "click":
         this.clickHandler(e.target);
         break;
       default:
         console.log(e.target);
     }
  }

  get modelHeading() {
    return this.model.heading;
  }

  clickHandler(target?: HTMLElement) {
    this.model.heading = "world";
    this.model.notify(this.model);
  }
}

export { HeadingController }; 