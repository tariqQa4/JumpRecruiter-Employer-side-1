import SignUpPage from "../../PageObjectModel/AuthenticationPage/SignUpPage"
describe('Signup As Empoyer', () => {
      beforeEach(() => {
    cy.viewport(2560, 1392)
    cy.visit('https://qa-employer.jumprecruiter.com/')
       cy.scrollTo('bottom', { duration: 6000 })
    cy.scrollTo('top', { duration: 6000 })
    cy.wait(2000)
  })
 

  it('signup with email', ()=>{
    
    cy.fixture('Signupwithemail').then((data)=>{

     const sp = new SignUpPage()
    sp.clickAsEmployer()
    sp.enterFirstName(data.FirstName)
    sp.enterLastName(data.LastName)
    // sp.enterEmail(data.Email)
    sp.createPassword(data.createpassword)
    sp.confirmPassword(data.confirmpassword)
    sp.clickSignupButton()
    // sp.verifySignup()


    })

    // it create company after signup

    

  })

  //Signup with Google

  // it('signup with Google account', () => {

    

  // })
  
//signup with Apple iD 

  // it('signup with Apple account', () => {
    
    

  // })

  })
