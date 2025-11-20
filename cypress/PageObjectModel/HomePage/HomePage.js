class HomePage {
  visit() {
    cy.visit("https://qa-employer.jumprecruiter.com/");
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
  }

  PostAjob() {
    cy.contains("span", "Post a Job")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    //     cy.wait(2000);
    //     cy.contains("button", "Post a Job").should("be.visible").click();
    //     cy.wait(2000);
    //    cy.get('img[alt="Logo"]').click();
    //    cy.wait(2000);
  }

  ClickonAboutUs() {
    cy.contains("span", "About Us")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
    cy.wait(2000);
    cy.get('img[alt="Logo"]').click();
  }
  ClickonContactUs() {
    cy.contains("span", "Contact Us")
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
    cy.scrollTo("bottom", { duration: 6000 });
    cy.scrollTo("top", { duration: 6000 });
    cy.wait(2000);
    cy.get('img[alt="Logo"]').click();
  }
  ClickonProfile() {
    // 1. Click the profile icon
    cy.get("div.relative.group svg.cursor-pointer").click();

    // 2. Click the "Dashboard" item from the dropdown
    cy.contains("Dashboard").click();
  }
}

export default HomePage;
