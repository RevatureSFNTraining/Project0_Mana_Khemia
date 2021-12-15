
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
//import MyApp from 'my/app';
import WelcomeSplash from 'welcome/welcomesplash';


const welcomesplash = createElement('welcome-splash', { is: WelcomeSplash });
//const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
//document.querySelector('#main').appendChild(app);
document.querySelector('#main').appendChild(welcomesplash);