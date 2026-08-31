class PostAjob {
  clickPostAJobButton() {
    cy.contains('button', 'Decline').click();
    cy.wait(2000);
   cy.contains('span', 'Post a Job').click();

  cy.wait(5000);
 cy.contains('button', 'Save & Continue').click()

 cy.wait(2000);

  // Add Your Basic Information section
 cy.get('input[placeholder="e.g. Senior Software Engineer"]')
  .click()
  .type('Software Engineer');

cy.contains('[role="option"]', 'Software Engineer')
  .click();
//jobtype
cy.get('input[placeholder="Full-Time / Part-Time / Contract"]').type("Full-Time").click ()
cy.contains('[role="option"]', 'Full-Time').click();


// city sate postal code 

cy.get('input[placeholder="Type city, state, zip code"]')
  .click()
  .type('Lahore, Punjab, 45000');

// cy.get('[role="option"]')
//   .contains('Lahore')
//   .click();
  

 // industry 
 cy.get('input[placeholder="Select industry"]')
  .click()
  .type('Information');

cy.get('[role="option"]')
  .first()
  .click();

  //number of openings

cy.get('input[placeholder="e.g. 2"]')
  .click()
  .type('2');

cy.get('[role="option"]')
  .eq(1)
  .click();

  // decription.  
  cy.get('.ProseMirror')
  .click()
  .type('We are looking for a Software Engineer to join our development team. The ideal candidate should have strong programming skills, experience with software development, debugging, testing, and problem solving. The candidate will work with the team to design, develop, test, and maintain high-quality software applications.');

// applocation  deadline
cy.get('input[name="job_descriptions.application_deadline"]')
  .type('2026-09-15');

  cy.wait(2000);
  cy.contains('button', 'Save & Continue').click();
  cy.wait(3000);



  }

  Addrequirements() {
    // experience level
    cy.get('input[placeholder="e.g. 5+ years"]').type("2 years").click();
cy.get('[role="option"]')
  .eq(2)
  .click();
    cy.wait(2000);
    // education level
    cy.get('input[placeholder="Bachelor\'s / Master\'s / PhD"]')
  .click()
  .type("Bachelor's");


    
    // skills
cy.get('input[placeholder="Add preferred skill..."]')
  .click()
  .type('Web Development');

cy.get('[role="option"]')
  .first()
  .click();
    cy.wait(2000);

    cy.get('div[role="button"][name="job_detail.job_skills.skill_id"]')
  .eq(0)
  .click();

cy.get('div[role="button"][name="job_detail.job_skills.skill_id"]')
  .eq(1)
  .click();

cy.get('div[role="button"][name="job_detail.job_skills.skill_id"]')
  .eq(2)
  .click();

  cy.wait(2000);
    cy.contains('button', 'Save & Continue').click();
    cy.wait(3000);
  }
    
// compensation
addCompensation() {
// salary range
cy.get('input[name="pay_and_benefits.minimum_amount"]')
  .clear()
  .type('100');

cy.get('input[name="pay_and_benefits.maximum_amount"]')
  .clear()
  .type('200');

  cy.wait(2000);
  cy.contains('button', 'Save & Continue').click();
  cy.wait(3000);
}

reviewandpublish() {
  cy.scrollTo('bottom', { duration: 6000 });
 cy.contains('button', 'Save as draft')
  .should('be.visible')
  .click();
  cy.wait(3000);
 cy.contains('span', 'Dashboard')
            .should('be.visible')
            .click();
// publish job

  // cy.contains('button', 'Publish').click();
  // cy.wait(3000);  
  // cy.contains('button', 'Go to Dashboard').click();
}
}
export default PostAjob;
