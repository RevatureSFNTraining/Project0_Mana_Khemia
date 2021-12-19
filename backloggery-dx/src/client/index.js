
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
//import MyApp from 'my/app';
import WelcomeSplash from 'welcome/welcomesplash'; //this does not work correctly at the moment. don't use it
import SidebarBase from 'sidebar/sidebarbase';
//import UserInfo from 'panels/userinfo';


const sidebarbase = createElement('sidebar-base', { is: SidebarBase });
const welcomesplash = createElement('welcome-splash', { is: WelcomeSplash });
//const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
//document.querySelector('#main').appendChild(app);
document.querySelector('#welcomesplash').appendChild(welcomesplash);
document.querySelector('#main').appendChild(sidebarbase);