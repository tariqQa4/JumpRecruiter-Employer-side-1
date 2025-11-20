class Signup{
    // signup page locator define
    
    //As Employer
    
clickAsEmployer(){
    cy.contains("button", "Log In").click();
    cy.get('input[placeholder="Type email address"]', { timeout: 10000 })
      .should("be.visible")
      .type("qa.tester@mailinator.com")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });

    cy.wait(1000);
    cy.contains("button", "Continue", { timeout: 10000 }).click({
      multiple: true,
    });

    cy.get('a[href="/signup"]').should("be.visible").click();

    const randomEmail = `user_${Date.now()}@example.com`;

    cy.get('input[placeholder="Type email address"]', { timeout: 10000 })
      .should("be.visible")
      .type(randomEmail)
      .then(($input) => {
        $input.css("border", "3px solid red");
      });

    cy.wait(1000);
    cy.contains("button", "Continue", { timeout: 10000 }).click({
      multiple: true,
    });
  }

  enterFirstName(FirstName) {
    cy.get('input[name="first_name"]')
      .type(FirstName)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  enterLastName(LastName) {
    cy.get('input[name="last_name"]')
      .type(LastName)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  createPassword(createPassword) {
    cy.get('input[placeholder="Type Create Password"]', { timeout: 10000 })
      .should("be.visible")
      .type(createPassword)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  confirmPassword(confirmPassword) {
    cy.get('input[placeholder="Type Confirm Password"]', { timeout: 10000 })
      .should("be.visible")
      .type(confirmPassword)
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "3px solid red");
      });
  }

  clickSignupButton(clickSignupButton) {
    cy.contains("button", "Sign up").should("be.visible").click();
    cy.wait(4000);
  }

// verifySignup()
// {
//     cy.get("").should('have.text' , "")
// }

//signup with Google Account
// SignupwithGoogle(SignupwithGoogle)
// {
//     cy.get("").should('have.text' , "").click()
      
        
        
// }








}

export default Signup
