import { LightningElement } from 'lwc';

export default class Home extends LightningElement
{
    showServices = false;
  
    homePageObj = {
        welcome: "Welcome to HopeConnections!",
        welcomeSummary: "HopeConnections is a dedicated education and career consulting " +
        "firm. We strive to connect our clients with the " +
        "guidance and resources they  to be successful in their educational and career journeys."

    };

    servicesArray = [
        {
            Id: 1,
            Name: 'Study Abroad Consulting'
        },

        {
            Id: 2,
            Name: 'Career Coaching',
        },

        {
            Id: 3,
            Name: 'Curriculum Designing',
        },

        {
            Id: 4,
            Name: 'Tutoring',
        },

        {
            Id: 5,
            Name: 'Seminar Hosting',
        },

        {
            Id: 5,
            Name: 'Scholarship Search',
        },

        

    ]
    
    handleChange(event) {
        this.showServices = event.target.checked;
    }
}
