/* eslint-disable no-unused-vars */
import {LightningElement} from 'lwc';
import headerClass from './headerClass.html';
import contactUs from '../contactUs/contactUs.html';
import aboutUs from '../aboutUs/aboutUs.html';
import homePage from '../homePage/homePage.html';
import menuPage from '../menuPage/menuPage.html';

export default class HeaderClass extends LightningElement{
    
    showContactUs = false;
    showAboutUs = false;
    showHomePage = true;
    showMenuPage = false;

    render() {
        //console.log("the value:" + this.showContactUs + this.showAboutUs);
        return headerClass;
    }
    handleContactClick(event){
        this.showContactUs = true;
        this.showAboutUs = false;
        this.showHomePage = false;
        this.showMenuPage = false;

        if(this.showContactUs){
            console.log("the value in handleClick if:" + this.showContactUs);
            console.log("the value of home handleClick in contact if:" + this.showContactUs);
            return contactUs;
        }
            
        return 0;
    }
    handleAboutClick(event){
        this.showAboutUs = true;
        this.showContactUs = false;
        this.showHomePage = false;
        this.showMenuPage = false;

        if(this.showAboutUs){
            console.log("the value in handleClick if:" + this.showAboutUs);
            return aboutUs;
        }
            
        return 0;
    }
    handleHomeClick(event){
        this.showHomePage = true;
        this.showContactUs = false;
        this.showAboutUs = false;
        this.showMenuPage = false;

        if(this.showHomePage){
            console.log("the value in home handleClick if:" + this.showHomePage);
            return homePage;
        }
            
        return 0;
    }

    handleMenuClick(event){
        this.showMenuPage = true;
        this.showHomePage = false;
        this.showContactUs = false;
        this.showAboutUs = false;

        if(this.showMenuPage){
            console.log("the value in home handleClick if:" + this.showMenuPage);
            return menuPage;
        }
            
        return 0;
    }
}