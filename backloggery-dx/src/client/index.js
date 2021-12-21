
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
//import MyApp from 'my/app';
import WelcomeSplash from 'welcome/welcomesplash'; //this does not work correctly at the moment. don't use it
import SidebarBase from 'sidebar/sidebarbase';
import UserInfo from 'panels/userinfo';
import SystemDatabase from 'panels/systemdatabase';


const sidebarbase = createElement('sidebar-base', { is: SidebarBase });
const welcomesplash = createElement('welcome-splash', { is: WelcomeSplash });
const userinfo = createElement('user-info', { is: UserInfo });
const systemdatabase = createElement('system-database', { is: SystemDatabase });
//const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
//document.querySelector('#main').appendChild(app);
document.querySelector('#welcomesplash').appendChild(welcomesplash);
document.querySelector('#sidebar').appendChild(sidebarbase);
document.querySelector('#userinfo').appendChild(userinfo);
document.querySelector('#systemdatabase').appendChild(systemdatabase);