class Dashboard {

    visit() {

        cy.visit('https://employer-stagging.jumprecruiter.us/login');
cy.contains('button', 'Decline').click();
        cy.scrollTo('bottom', {
            duration: 6000
        });

        cy.scrollTo('top', {
            duration: 6000
        });
    }

    ClickonPostAJob() {

        cy.contains('span', 'Post a Job')
            .should('be.visible')
            .click();
    }

    clickPostAJobButton() {

        cy.get('a[href="/job-post"]')
            .should('be.visible')
            .click({ multiple: true });

        cy.wait(2000);

        // cy.contains('button', 'Save & Continue')
        //     .should('be.visible')
        //     .click();

        cy.wait(2000);
    }

    clickoncompanyProfile() {

        cy.contains('span', 'Company Profile')
            .should('be.visible')
            .click();

        cy.wait(2000);

        cy.scrollTo('bottom', {
            duration: 6000
        });

        cy.scrollTo('top', {
            duration: 6000
        });
    }

    clickonQuickLinks() {

        cy.contains('span', 'Dashboard')
            .should('be.visible')
            .click();

        cy.wait(2000);
        cy.contains('a', 'Search Candidates').click()
        cy.wait(2000);
        cy.scrollTo('bottom', {
            duration: 6000
        });

        cy.scrollTo('top', {
            duration: 6000
        });

      cy.go('back');
      cy.wait(2000);
      cy.get('a[href="/job"]').click()
      cy.wait(2000);
     
    cy.go('back');
    cy.wait(2000);
  cy.contains('div', 'Upgrade Plan')  .should('be.visible').click();
  cy.wait(2000);
  cy.scrollTo('bottom', {
    duration: 6000
  });
  cy.scrollTo('top', {
    duration: 6000
  });
  cy.wait(2000);
  cy.go('back');
//  cy.contains('a', 'Why Choose Us')  .should('be.visible').click();
//   cy.wait(2000);
//   cy.scrollTo('bottom', {
//     duration: 6000
//   });
//   cy.scrollTo('top', {
//     duration: 6000
//   });
//   cy.go('back');
//   cy.contains('div', 'review')  .should('be.visible').click();
//    cy.scrollTo('bottom', {
//     duration: 6000
//   });
//   cy.scrollTo('top', {
//     duration: 6000
//   });
//   cy.wait(2000);
//   cy.go('back');

    
}
}

export default Dashboard;