import Login from "../../PageObjectModel/AuthenticationPage/LoginPage"

describe('Login As Employer', ()=>{

beforeEach(() => {
    cy.viewport(2560, 1392)
    cy.visit('https://employer-stagging.jumprecruiter.us/')
    cy.scrollTo('bottom', { duration: 6000 })
    cy.scrollTo('top', { duration: 6000 })
    cy.wait(2000)
    
    cy.contains('button', 'Log In').click();


})
it('login with email', () =>{

    cy.fixture('Login').then((data)=>{
// cy.visit('')
// cy.viewport(2560, 1392)
        const ln = new Login
 

        ln.enterEmail(data.Email)
        ln.enterPassword(data.Password)
        ln.loginButton()
        // ln.verifyLogin()



        




    })

})
})































