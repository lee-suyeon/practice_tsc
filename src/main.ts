import Controller from "./controller";
import Model from "./model";
import View from "./view";
import Service from "./service";
import './style.css';

window.addEventListener('DOMContentLoaded', function() {
  console.log("success window onload");
  const model = new Model();
  const view = new View();
  const service = new Service();
  new Controller(model, view, service);
});