import { LightningElement } from 'lwc';

export default class LeftSidebar extends LightningElement {
    queryTerm;
    tabSelected;
    search = false;

    handleKeyUp(event) {
        const isEnterKey = event.keyCode === 13;
        if (isEnterKey) {
            this.search = true;
        }
    }

    handleInputChange(event) {
        this.queryTerm = event.target.value;
    }

    handleSearch(event) {
        this.search = true;
    }

    handleTabClick(event) {
        this.dispatchEvent(new CustomEvent("tabchange", { detail: event.target.name }));
    }
}
