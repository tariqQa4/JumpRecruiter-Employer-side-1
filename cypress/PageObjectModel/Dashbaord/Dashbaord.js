class Dashboard {
  visit() {
    cy.visit('https://employer-stagging.jumprecruiter.us/login');
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  ClickonPostAJob() {
    cy.contains("span", "Post a Job")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
  }
  clickPostAJobButton() {
    cy.get('a[href="/job-post"]').click({multiple: true});

    cy.wait(2000);
    cy.contains('button', 'Post a New Job').click();

    cy.wait(2000);
    cy.contains('button', 'Continue').click();

  }

    postAjob(){
       cy.contains('a', 'Post a Job').click();
        cy.get('a[href="/dashboard"]').click();
        cy.wait(2000);
    }
}

export default Dashboard;