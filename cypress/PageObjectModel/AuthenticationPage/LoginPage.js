class Login{

 enterEmail(Email) {
  
      cy.get('input[placeholder="you@email.com"]', { timeout: 10000 })
        .should('be.visible')
        .type(Email)
        .then($input => {
          $input.css('border', '3px solid red');
        });
  
      cy.wait(1000);
      
    }

 enterPassword(Password) {
        cy.get('input[placeholder="Enter your password"]', { timeout: 10000 })
        .should('be.visible')
        .type(Password)
        .then($input => {
          $input.css('border', '3px solid red');
        });
    }
  
    loginButton() {
      cy.contains('button', 'Login').should('be.visible').click();
      cy.wait(4000);
      
    }
  }



export default Login
















