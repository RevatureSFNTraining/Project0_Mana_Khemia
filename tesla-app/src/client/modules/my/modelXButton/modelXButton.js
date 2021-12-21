import { LightningElement } from 'lwc';

export default class ModelXButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: "modelX" }));
  }
}