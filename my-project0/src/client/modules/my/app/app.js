import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    bodyTab = "home";

    homePage = true;
    productsPage = false;
    salesPage = false;
    contactUsPage = false;

    handleTabChange(event) {
        this.bodyTab = event.detail;

        switch (this.bodyTab) {
            case 'home':
                this.homePage = true;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
                break;
            case 'products':
                this.homePage = false;
                this.productsPage = true;
                this.salesPage = false;
                this.contactUsPage = false;
                break;
            case 'sales':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = true;
                this.contactUsPage = false;
                break;
            case 'contactUs':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = true;
                break;
            default:
                this.homePage = true;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
        }
    }
}
