import { LightningElement, api } from 'lwc';

export default class Body extends LightningElement {
    @api bodyPage;
    homePage = true;
    productsPage = false;
    salesPage = false;
    contactUsPage = false;

    @api handlePageChange() {
        switch (this.bodyPage) {
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
                
        console.log(this.bodyPage);
        // console.log(this.homePage);
        // console.log(this.productsPage);
        // console.log(this.salesPage);
        // console.log(this.contactUsPage);
    }
}
