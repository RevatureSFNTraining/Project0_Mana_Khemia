import { LightningElement } from 'lwc';

export default class LeftSidebar extends LightningElement {
    queryTerm;
    search = false;

    handleKeyUp(event) {
        const isEnterKey = event.keyCode === 13;
        if (isEnterKey) {
            this.search = true;
        }
    }

    handleInputChange (event) {
        this.queryTerm = event.target.value;
    }


    handleSearch(event) {
        this.search = true;
    }
}
