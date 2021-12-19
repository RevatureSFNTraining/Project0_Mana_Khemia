import { LightningElement } from 'lwc';

export default class AccountButton extends LightningElement {
  handleClick() {
    this.dispatchEvent(new CustomEvent('buttonclick'));
  }
}