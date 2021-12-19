import { LightningElement } from 'lwc';

export default class WelcomeSplash extends LightningElement {
    dontShow = null;
    dontShowTemp = null;
    connectedCallback() {
        window.jquery = require('../../../../jquery');
        this.dontShow = JSON.parse(localStorage.getItem('dontShowSplash'));
    }
    
    dontShowIsChecked() {
        // handles first time initialization
        if(this.dontShow === null) {
            this.dontShowTemp = true;
        } else {
            this.dontShowTemp = !this.dontShowTemp;
        }
        localStorage.setItem('dontShowSplash', this.dontShowTemp);
    }

    getStartedClick(event) {
        //this.dispatchEvent(new CustomEvent('getstartedclicked', {detail: event.target.value}));
        jquery(this.template.querySelector(".welcomesplash")).hide();
    }

    closeClick(event) {
        //this.dispatchEvent(new CustomEvent('closesplashclicked', {detail: event.target.value}));
        jquery(this.template.querySelector(".welcomesplash")).hide();
    }
}
