import { LightningElement } from 'lwc';

export default class WelcomeSplash extends LightningElement {
    dontShow = JSON.parse(localStorage.getItem('dontShowSplash'));
    dontShowCheckbox = document.getElementById('dontshow');

    dontShowIsChecked() {
        console.log(this.dontShowCheckbox);
        // handles first time initialization
        if(this.dontShow === null) {
            localStorage.setItem('dontShowSplash', false);
        }
        localStorage.setItem('dontShowSplash', this.dontShowCheckbox.checked);
    }

    getStartedClick(event) {
        this.dispatchEvent(new CustomEvent('getstartedclicked', {detail: event.target.value}));
    }

    closeClick(event) {
        this.dispatchEvent(new CustomEvent('closesplashclicked', {detail: event.target.value}));
    }
}
