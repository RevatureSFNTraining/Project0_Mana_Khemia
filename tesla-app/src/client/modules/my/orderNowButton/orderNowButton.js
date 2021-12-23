import { LightningElement, api } from 'lwc';

export default class OrderNowButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick', { detail: "Order Now" }));
  }
}
