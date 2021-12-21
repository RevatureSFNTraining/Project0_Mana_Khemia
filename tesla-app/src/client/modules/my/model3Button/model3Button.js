import { LightningElement } from 'lwc';

export default class Model3Button extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: "model3" }));
  }
}