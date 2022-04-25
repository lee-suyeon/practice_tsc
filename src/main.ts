import Controller from "./controller";
import Model from "./model";
import View from "./view";
import './style.css';

window.addEventListener('DOMContentLoaded', function() {
  console.log("success window onload");
  const model = new Model();
  const view = new View();
  new Controller(model, view);
});