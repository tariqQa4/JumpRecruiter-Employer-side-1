import 'cypress-file-upload'
import Login from '../../PageObjectModel/AuthenticationPage/LoginPage';
import SponsarJob from '../../PageObjectModel/Job/SponsarJobPage';

describe('Sponsar job ', () => {
    const login = new Login()
    const sponsarjob = new SponsarJob()
    // const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter Employeer Side\cypress\fixtures\TestResume.pdf'; 
    // const pictureFile = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter Employeer Side\cypress\fixtures\test-logo-570-5785.png'; 
    beforeEach(() => {
        cy.viewport(2560, 1392)
        cy.visit('www.google.com'); 
       
        cy.fixture('Helper').then((data)=>{
        // Perform the login
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()

        // Navigate to the Resume Builder landing page after login
        cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    })

    // Post A job  by new 

    it('Add Sponsar Job',()=>{

       sponsarjob.addSponsarJob()
       sponsarjob.addDuration()
       sponsarjob.addBudget()
      
    })
})