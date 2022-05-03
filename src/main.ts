import Controller from "./controller";
import Model from "./model";
import View from "./view";
import { HeadingController } from "./headingController";
import { HeadingModel } from "./headingModel";
import { HeadingView } from "./headingView";
import './style.css';

window.addEventListener('DOMContentLoaded', function() {
  console.log("success window onload");
  // const model = new Model();
  // const view = new View();
  // new Controller(model, view);

  const model = new HeadingModel();
  const controller = new HeadingController(model);
  new HeadingView(controller);
});