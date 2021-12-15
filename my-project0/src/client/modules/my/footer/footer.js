import { LightningElement } from 'lwc';

export default class Footer extends LightningElement {
    handlePolicyClick(event) {
        this.dispatchEvent(new CustomEvent("policychange", { detail: event.target.name }));
    }
}
