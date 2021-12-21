import { LightningElement } from 'lwc';


export default class Nav extends LightningElement {
    handleNavClick(event) {
        this.dispatchEvent(new CustomEvent("navchange", {detail:event.target.name}));
    }
}