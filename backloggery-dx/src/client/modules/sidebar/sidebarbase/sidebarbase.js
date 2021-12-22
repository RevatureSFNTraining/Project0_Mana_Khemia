import { LightningElement } from 'lwc';
import jquery from '../../../../jquery';

export default class SidebarBase extends LightningElement {

    connectedCallback() {
        window.jquery = require('../../../../jquery');
    }

    renderedCallback() {
        jquery(this.template.querySelector('svg')).attr('height', jquery(document).height());
        jquery(this.template.querySelector('rect')).attr('height', jquery(document).height());
    }
}