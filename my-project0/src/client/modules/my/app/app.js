import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    body = "home";

    homePage = true;
    productsPage = false;
    salesPage = false;
    contactUsPage = false;
    returnPolicyPage = false;
    privacyPolicyPage = false;

    handleBodyChange(event) {
        this.body = event.detail;

        switch (this.body) {
            case 'home':
                this.homePage = true;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = false;
                break;
            case 'products':
                this.homePage = false;
                this.productsPage = true;
                this.salesPage = false;
                this.contactUsPage = false;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = false;
                break;
            case 'sales':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = true;
                this.contactUsPage = false;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = false;
                break;
            case 'contactUs':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = true;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = false;
                break;
            case 'returnPolicy':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
                this.returnPolicyPage = true;
                this.privacyPolicyPage = false;
                break;
            case 'privacyPolicy':
                this.homePage = false;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = true;
                break;
            default:
                this.homePage = true;
                this.productsPage = false;
                this.salesPage = false;
                this.contactUsPage = false;
                this.returnPolicyPage = false;
                this.privacyPolicyPage = false;
        }
    }
}
