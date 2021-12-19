import { LightningElement } from 'lwc';

export default class ModelSButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick'));
  }
}