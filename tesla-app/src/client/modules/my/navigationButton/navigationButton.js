import { LightningElement, api } from 'lwc';

export default class NavigationButton extends LightningElement {
  @api name = "";

  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: this.name }));
  }
}