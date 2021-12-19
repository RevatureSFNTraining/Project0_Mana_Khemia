import { LightningElement } from 'lwc';
import Opportunities from '../opportunities/opportunities.html';

export default class Nav extends LightningElement {
    
    handleOpport() {
        return Opportunities;
    }
}
