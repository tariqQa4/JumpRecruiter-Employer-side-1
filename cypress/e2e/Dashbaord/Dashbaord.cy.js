import Login from '../../PageObjectModel/AuthenticationPage/LoginPage';
import Dashboard from '../../PageObjectModel/Dashbaord/Dashbaord';

describe('Dashboard test suite', () => {

    const login = new Login();
    const dashboard = new Dashboard();

    beforeEach(() => {

        cy.viewport(2560, 1392);

        cy.visit('https://employer-stagging.jumprecruiter.us/login', {
            onBeforeLoad(win) {

                win.onbeforeunload = null;

            }
        });

        cy.contains('button', 'Log In').click();

        cy.fixture('Login').then((data) => {

            login.enterEmail(data.Email);
            login.enterPassword(data.Password);
            login.loginButton();

        });
    });

    it('Dashboard', () => {

        dashboard.visit();

        dashboard.ClickonPostAJob();

        dashboard.clickPostAJobButton();

        dashboard.clickoncompanyProfile();

        dashboard.clickonQuickLinks();

    });

});