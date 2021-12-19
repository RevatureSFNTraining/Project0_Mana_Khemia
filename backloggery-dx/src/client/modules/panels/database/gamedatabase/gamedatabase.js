import { LightningElement } from 'lwc';

export default class GameDatabase extends LightningElement {
    mysql = require('../../../../../mysql');
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'backlogbot',
        password: 'backloggerydx',
        database: 'backlog'
    )};
    gameDatabase = {};

    propagate() {
        connection.connect();

    }

    update() {
        
    }
}