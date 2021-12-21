import { LightningElement } from 'lwc';

export default class ModelYButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: "modelY" }));
  }
}