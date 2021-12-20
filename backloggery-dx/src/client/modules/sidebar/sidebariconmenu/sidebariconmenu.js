import { LightningElement } from 'lwc';

export default class SidebarIconMenu extends LightningElement {
    // debug
    //loggedIn = localStorage.setItem('loggedIn', true);
    loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    avatarURL = "../../../resources/avatar.png";
    initializer = document.addEventListener("DOMContentLoaded", (event) => {
        if(!this.loggedIn) {
            this.avatarURL = "../../../resources/sidebaricons/noavatar.png";
        }
    });
}
