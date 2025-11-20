import Login from '../../PageObjectModel/AuthenticationPage/LoginPage';
import PostAjob from '../../PageObjectModel/Job/PostAjobPage';
import HomePage from '../../PageObjectModel/HomePage/HomePage';

describe('Homepage test suite', () => {
    const login = new Login();
    const postAjob = new PostAjob();
    const filePath = 'C:\\Users\\tariq\\OneDrive\\Desktop\\Jump Recruiter Employeer Side\\cypress\\fixtures\\TestResume.pdf'; 
    const pictureFile = 'C:\\Users\\tariq\\OneDrive\\Desktop\\Jump Recruiter Employeer Side\\cypress\\fixtures\\test-logo-570-5785.png'; 

    beforeEach(() => {
        cy.viewport(2560, 1392);
        cy.visit('https://qa-employer.jumprecruiter.com/'); 
        cy.contains('button', 'Log In').click();
        cy.fixture('Login').then((data) => {
            // Perform the login
            login.enterEmail(data.Email);
            login.enterPassword(data.Password);
            login.loginButton();
        });
    });

    it('Home page ', () => {
        const homePage = new HomePage();
        homePage.visit();
        // homePage.PostAjob();
        // homePage.ClickonAboutUs();
        homePage.ClickonContactUs();
        homePage.ClickonProfile();
    });
});