import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  modelS = true;
  model3 = false;
  modelX = false;
  modelY = false;
  account = false;
  buttonClicked = "";

  handleButtonClick(e) {
    this.buttonClicked = e.detail;
    switch (this.buttonClicked) {
      // Model 3 page
      case "model3":
        if (this.modelS != false) {
          this.modelS = false;
        }
        if (this.modelX != false) {
          this.modelX = false;
        }
        if (this.modelY != false) {
          this.modelY = false;
        }
        if (this.account != false) {
          this.account = false;
        }
        if (this.model3 != true) {
          this.model3 = true;
        }
        break;
      // Model X page
      case "modelX":
        if (this.modelS != false) {
          this.modelS = false;
        }
        if (this.model3 != false) {
          this.model3 = false;
        }
        if (this.modelY != false) {
          this.modelY = false;
        }
        if (this.account != false) {
          this.account = false;
        }
        if (this.modelX != true) {
          this.modelX = true;
        }
        break;
      // Model Y page
      case "modelY":
        if (this.modelS != false) {
          this.modelS = false;
        }
        if (this.model3 != false) {
          this.model3 = false;
        }
        if (this.modelX != false) {
          this.modelX = false;
        }
        if (this.account != false) {
          this.account = false;
        }
        if (this.modelY != true) {
          this.modelY = true;
        }
        break;
      // Account
      case "account":
        if (this.modelS != false) {
          this.modelS = false;
        }
        if (this.model3 != false) {
          this.model3 = false;
        }
        if (this.modelX != false) {
          this.modelX = false;
        }
        if (this.modelY != false) {
          this.modelY = false;
        }
        if (this.account != true) {
          this.account = true;
        }
        break;
      // Homepage/Model S page
      default:
        if (this.model3 != false) {
          this.model3 = false;
        }
        if (this.modelX != false) {
          this.modelX = false;
        }
        if (this.modelY != false) {
          this.modelY = false;
        }
        if (this.account != false) {
          this.account = false;
        }
        if (this.modelS != true) {
          this.modelS = true;
        }
    }
  }
}
