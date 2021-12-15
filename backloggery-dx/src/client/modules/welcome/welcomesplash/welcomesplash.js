import { LightningElement } from 'lwc';

export default class WelcomeSplash extends LightningElement {
    dontShow = null;
    dontShowCheckbox = null;
    initialize() {
        this.dontShow = JSON.parse(localStorage.getItem('dontShowSplash'));
        this.dontShowCheckbox = document.getElementById('dontshow');
    }
    initializer = window.addEventListener("load", (event) => {
        console.log('DOM fully loaded');
        this.initialize();
    });
    


    dontShowIsChecked() {
        console.log(this.dontShowCheckbox);
        // handles first time initialization
        if(this.dontShow === null) {
            localStorage.setItem('dontShowSplash', true);
        }
        //localStorage.setItem('dontShowSplash', this.dontShowCheckbox.checked);
    }

    getStartedClick(event) {
        this.dispatchEvent(new CustomEvent('getstartedclicked', {detail: event.target.value}));
    }

    closeClick(event) {
        this.dispatchEvent(new CustomEvent('closesplashclicked', {detail: event.target.value}));
    }
}
