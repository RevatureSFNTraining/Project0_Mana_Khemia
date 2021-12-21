import { LightningElement, wire } from 'lwc';

export default class App extends LightningElement {
   body = "home"
   body ="our company"

   home = true;
   ourcompany = false;
   services = false;
   opportunities = false;
   contact = false;

   handleNavChange(event) {
    this.body = event.detail;
   
    switch(this.body) {

         case 'Home':
            this.home = true;
            this.ourcompany = false;
            this.services = false;
            this.opportunities = false;
            this.contact = false;
            break;
   
         case 'Our Company':
            this.home = false;
            this.ourcompany = true;
            this.services = false;
            this.opportunities = false;
            this.contact = false;
         break;
   

         case 'Services':
            this.home = false;
            this.ourcompany = false;
            this.services = true;
            this.opportunities = false;
            this.contact = false;
         break;
   

         case 'Opportunities':
            this.home = false;
            this.ourcompany = false;
            this.services = false;
            this.opportunities = true;
            this.contact = false;
         break;
   
         case 'Contact':
            this.home = false;
            this.ourcompany = false;
            this.services = false;
            this.opportunities = false;
            this.contact = true;
            break;

   }

}

}