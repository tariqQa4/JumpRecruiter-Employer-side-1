import 'cypress-file-upload'
import Login from '../../PageObjectModel/AuthenticationPage/LoginPage';
import CreateCompany from '../../PageObjectModel/Company/companycreate';

describe('Create Company test suite', () => {
    const login = new Login();
    const createcomp = new CreateCompany();
    beforeEach(() => {
        cy.viewport(2560, 1392)
        cy.visit('https://qa-employer.jumprecruiter.com/'); 
         cy.scrollTo('bottom', { duration: 6000 })
    cy.scrollTo('top', { duration: 6000 })
    cy.wait(2000)
         cy.contains('button', 'Log In').click();
        cy.fixture('Login').then((data) => {
            // Perform the login
            login.enterEmail(data.Email);
            login.enterPassword(data.Password);
            login.loginButton();
        }
        );
    });

   
      

    // Create Company

    it(' create Company ',()=>{
        cy.fixture('Helper').then((data)=>{
        const createcomp = new CreateCompany()
        createcomp.clickCreateCompanyButton()


        // Tell Us About Your Company stepper
        createcomp.enterComapnyName()
        // createcomp.enterEmail()
        createcomp.enterNumber()
         createcomp.selectIndustryType()
        createcomp.selectOwnershipType()
       
        
        // Additional Information stepper
        createcomp.enterNumberOfEmployes()
        // createcomp.enterOfficeAddress(data.CityState)
        // createcomp.enterZipCode(data.ZipCode)
        createcomp.enterRevenue()
        createcomp.enterOperatingSince()
        createcomp.enterComapnyWebsiteURl()

            //Add location

        createcomp.clickAddLocationButton()
      
    
        // honors and awards stepper
        createcomp.ClickAddHonorsAward();

        // finialiize your details stepper

        createcomp.uploadProfile()
        createcomp.enterComapnyDescription()
        // createcomp.enterSocialLink()
        createcomp.enterComapnyBenefits()
    })
    })
});

export default CreateCompany

