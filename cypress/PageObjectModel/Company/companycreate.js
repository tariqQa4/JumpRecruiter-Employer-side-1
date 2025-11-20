class CreateCompany {
  clickCreateCompanyButton() {
    cy.get('a[href="/create-company"]')
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    cy.wait(2000);
  }
  // Tell Us About Your Company

  enterComapnyName() {
    cy.get('input[placeholder="Type company name"]')
      .should("be.visible")
      .type("Testing Company");
    // .then(($input) => {
    //   $input.css("border", "3px solid red");
    // });
  }

  enterEmail() {
    cy.get('input[placeholder="Type company email address"]')
      .should("be.visible")
      .type("testing@gmail.com");
  }

  enterNumber() {
    cy.get('input[type="tel"]').should("be.visible").type("2345678900");
  }

  selectOwnershipType() {
    // Open the dropdown
    // Open the Ownership Type dropdown
    cy.get('input[placeholder="Select ownership type"]')
      .should("be.visible")
      .type("Cooperative")
      .wait(4000);
    cy.contains('li', 'Cooperative').click({ force: true });

    // next continue button
    cy.wait(2000);
    cy.contains("button", "Continue")
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
  }

  selectIndustryType() {
    // Step 1: Click to open the dropdown (use industry or ownership)
    cy.get('input[placeholder="Select industry type"]')
      .scrollIntoView()
      .click({ force: true });

    // Step 2: Select the first <li> option
    cy.get("li.p-2.cursor-pointer")
      .first()
      .should("be.visible")
      .click({ force: true });
  }
  //   Additional Information

  enterNumberOfEmployes() {
    // Open dropdown
    cy.get('input[placeholder="Company size"]')
      .scrollIntoView()
      .click({ force: true });

    // Select first option
    cy.get("li.p-2.cursor-pointer") // or adjust to exact class used
      .first()
      .click({ force: true });
  }

  enterOfficeAddress(CityState) {
    cy.get("").type(CityState);
  }

  enterZipCode(ZipCode) {
    cy.get("").type(ZipCode);
  }

  enterRevenue() {
    cy.get('input[placeholder="Type company\'s revenue"]')
      .scrollIntoView()
      .type("1000000");
  }

  enterOperatingSince() {
    cy.get('input[name="additional_info.operating_since"]')
      .scrollIntoView()
      .type("2020-01-01"); // Format: YYYY-MM-DD
  }

  enterComapnyWebsiteURl(UrL) {
    cy.get('input[name="additional_info.website"]')
      .scrollIntoView()
      .type("https://example.com");

    cy.wait(2000);
    cy.contains("button", "Continue").should("be.visible").click();
    cy.wait(2000);
  }

  // Add locations

  clickAddLocationButton() {
    cy.contains("button", "Add Location").click();
    cy.wait(2000);

    // location name

    cy.get('input[name="locations[0].name"]').type("Main Office, Lahore");

    // country

    cy.get('input[placeholder="Type country name"]').click(); // or type to trigger
    cy.contains("li", "Pakistan").click();

    //city sate
    cy.get('input[id="locations[0].location_id"]').type("Akutan"); // Type partial text to trigger the dropdown
    cy.wait(4000);
    cy.contains("li", "Akutan, AK, 99553").click(); // Select the matching item from dropdown

    //street address

    cy.get('input[name="locations[0].street_address"]').type(
      "123 Gulberg III, Lahore"
    );

    cy.wait(2000);
    cy.contains("button", "Save Change").click();

    cy.wait(2000);
    cy.contains("button", "Continue").should("be.visible").click();
  }

  // Honors and reward section stepper
  ClickAddHonorsAward() {
    cy.contains("button", "Add Honors & Awards").click();
    cy.wait(2000);

    // Fill "Certificate or license"
    cy.get('input[name="awards[0].certificate_license"]').type(
      "Certified Automation Expert"
    );

    // Fill "Issuing organization"
    cy.get('input[name="awards[0].issuing_organization"]').type(
      "International QA Board"
    );

    // Fill "Issue year"
    cy.get('input[name="awards[0].issue_year"]').type("2024-06-01"); // Format: YYYY-MM-DD

    // Fill "Description"
    cy.get('textarea[name="awards[0].description"]').type(
      "Recognized for excellence in automated testing strategies."
    );

    // Optionally trigger file upload (if file input is accessible)
    cy.contains("button", "Upload").click();
    cy.wait(2000);
    cy.contains("button", "Upload Picture").click(); // open file input
    cy.get('input[type="file"]').selectFile(
      "cypress/fixtures/test-logo-570-5785.png",
      { force: true }
    );

    // .attachFile('../fixtures/test-logo-570-5785.png'); // Only triggers click – doesn't upload
    cy.wait(2000);
    cy.contains("Crop & Save").click();
    cy.wait(2000);
    // Click "Save Change"
    cy.contains("button", "Save Change").click();

    cy.wait(2000);
    cy.contains("button", "Continue").should("be.visible").click();
    cy.wait(2000);
  }

  // Finalize your details

  uploadProfile() {
    cy.contains("button", "Upload Logo").click();
    cy.get('input[type="file"]').selectFile(
      "cypress/fixtures/test-logo-570-5785.png",
      { force: true }
    );
    cy.wait(2000);
    cy.contains("Crop & Save").click();
    cy.wait(2000);
  }

  enterComapnyDescription() {
    cy.get('textarea[name="company_description.description"]').type(
      "This is a test description"
    );
  }

  enterSocialLink() {
    cy.get("").click();
    cy.get("").type("");
  }

  enterComapnyBenefits() {
    // Add a benefit
    // cy.get('input[placeholder="Add an option"]')
    //   .type("Life Insurance")
    //   // .should("be.visible")
    //   // .then(($input) => {
    //   //   $input.css("border", "3px solid red");
    //   // });
    // cy.get('input[placeholder="Add an option"]').type("{enter}");


    // cy.get('input[placeholder="Add an option"]')
    //   .should("be.visible");
    cy.get('input[placeholder="Add an option"]').type("Life Insurance");
    cy.get('input[placeholder="Add an option"]').type("{enter}");
    cy.wait(2000);
    cy.get('input[placeholder="Add an option"]').type("Vision Insurance");
    cy.get('input[placeholder="Add an option"]').type("{enter}");

    cy.wait(3000);
    cy.contains("button", "Finish").should("be.visible").click();
  }
}

export default CreateCompany;
