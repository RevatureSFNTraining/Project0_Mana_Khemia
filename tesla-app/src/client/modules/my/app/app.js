import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  modelS = true;
  model3 = false;
  modelX = false;
  modelY = false;
  account = false;

  handleModelSClick(e) {
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

  handleModel3Click(e) {
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
  }

  handleModelXClick(e) {
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
  }

  handleModelYClick(e) {
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
  }

  handleAccountClick(e) {
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
    /* Used for testing buttons
    alert(
      `Model S: ${this.modelS}
      \nModel 3: ${this.model3}
      \nModel X: ${this.modelX}
      \nModel Y: ${this.modelY}
      \nAccount: ${this.account}
      `
    );
    */
  }
}
