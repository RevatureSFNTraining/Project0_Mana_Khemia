import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    bodyTab;

    handleTabChange(event) {
        this.bodyTab = event.detail;
        let body = this.template.querySelector("my-body");
        body.handlePageChange();
    }
}
