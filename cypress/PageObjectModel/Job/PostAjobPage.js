class PostAjob {
  clickPostAJobButton() {
    cy.contains('span', 'Post a Job').click()
      .should("be.visible")
      .click()
      .should("be.visible")
      .then(($input) => {
        $input.css("border", "4px solid red");
      });
    // cy.get('a[href="/job-post"]').click({ force: true });

    cy.wait(2000);
    cy.contains("button", "Post a Job").click();

    cy.wait(2000);
    cy.contains("button", "Continue").click();
  }

  // postAjob(){
  //    cy.contains('a', 'Post a Job').click();

  // }

  // postAjobWithNewJob(){
  //     cy.get('').click()
  //     cy.get('').click()
  // }

  // Add Your Basic Information section

  enterJobitle() {
    cy.get('input[name="basic_info.job_title_id"]').type("Software Engineer");
  }

  selectIndustryType() {
    cy.get('div[tabindex="0"]').find('input[placeholder="Add an option"]').eq(0).click({multiple: true});
cy.get('li.p-2.cursor-pointer').first().should("be.visible").click();
    // Click to open the dropdown   
   cy.wait("3000");
  }
  enterNumberofHire() {
  // Step 1: Click the dropdown to open options
cy.get('input[placeholder="Select Option"]').should("be.visible").click({ force: true });

// Step 2: Select the first <li> option (e.g., "1–10 employees")
cy.get('li.p-2.cursor-pointer').first().click();


  }

  selectLocationType() {
    cy.get('input[type="radio"][value="in-person"]').click();
  }

  enterCityStaeZip(City, State, Zip) {
    cy.contains("label", "City, State, Postal Code")
      .next()
      .find('input[placeholder="Add an option"]');
    cy.get('input[name="basic_info.city"]').type("Akutan,AK, 99553");
  }
  enterStreetAddress(StreetAddress) {
    cy.get('input[name="basic_info.street_address"]');
    cy.get('input[name="basic_info.street_address"]').type(StreetAddress);
    cy.get('input[name="basic_info.street_address"]').click();
    cy.contains("button", "Continue").click();
    cy.wait("2000");
  }

  // Add your Job Details

  selectJobType() {
    cy.get("").click();
  }

  selectExperienceLevel() {
    cy.get("").click();
  }

  selectEducation() {
    cy.get("").click();
    cy.get("").click();
  }

  selectSchedule() {
    cy.get().click();
    cy.get().click();
  }

  willingToTravel() {
    cy.get("").click();
  }

  enterJobSkills(Skill) {
    cy.get("").type(Skill);
    cy.get("").click();
    cy.get("").click();
  }

  enterLanguagae() {
    cy.get("").type("English");
    cy.get("").click();
  }

  enterLincense() {
    cy.get("").type("WDLJK00580GF");
    cy.get("").click();
  }

  // Add Pay and Benefits section

  //Pay By Range

  enterPayByRange() {
    cy.get("").click();
  }

  enterMinimumPayByRange() {
    cy.get("").type("1285");
  }

  enterMaximumPaybyRange() {
    cy.get("").type("1385");
  }

  enterRate() {
    cy.get("").click();
    cy.get("").click();
  }

  enterCompensationPackage() {
    cy.get("").click();
    cy.get("").click();
  }

  enterOtherBenefits() {
    cy.get("").click();
    cy.get("").click();

    // save and continue

    cy.get("").click();
  }

  enterPayBystartingAmount() {
    cy.go("back)");
    cy.get("").click();
    cy.get("").type("5000");
    cy.get("").click();
    cy.get("").click();
  }

  enterPayByExactAmount() {
    cy.go("back)");
    cy.get("").click();
    cy.get("").type("5000");
    cy.get("").click();
    cy.get("").click();
  }

  // DESCRIB Job Description

  enterJobDesc() {
    cy.get("").type("");
    cy.get("").click();
  }
  // uploadFile(){
  //     cy.get('').attachFile(filePath)
  //     cy.get('').click()
  // }

  // set preferences section

  // communiction Preferences

  enterdailyUpdateTo(Email) {
    cy.get("").type(Email);
    // plus send individual emil
    cy.get("").click();

    // let potenitial check
    cy.get("").click();
  }

  // Appliction Preferences

  applicationPreferences() {
    // resume require or not
    cy.get("").click();

    // street address display on job post

    cy.get("").click();

    // Does Background require check

    cy.get("").click();
  }

  hiresettings() {
    // timeline for hire settingss

    cy.get("").click();
    // save and continue

    cy.get("").click();
    cy.wait("2000");
  }

  saveAsDraft() {
    // save as draft
    cy.get("").click();
  }

  submitjob() {
    cy.get("").click();
  }
}

export default PostAjob;
