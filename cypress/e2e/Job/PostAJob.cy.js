import "cypress-file-upload";
import Login from "../../PageObjectModel/AuthenticationPage/LoginPage";
import PostAjob from "../../PageObjectModel/Job/PostAjobPage";

describe("Post A job  test suite", () => {
  const login = new Login();
  const postAjob = new PostAjob();
  const filePath =
    "C:Users\tariqOneDriveDesktopJump Recruiter Employeer Sidecypress\fixturesTestResume.pdf";
  const pictureFile =
    "C:Users\tariqOneDriveDesktopJump Recruiter Employeer Sidecypress\fixtures\test-logo-570-5785.png";
  beforeEach(() => {
    cy.viewport(2560, 1392);
    cy.visit("https://qa-employer.jumprecruiter.com/");
    cy.contains("button", "Log In").click();
    cy.fixture("Login").then((data) => {
      // Perform the login
      login.enterEmail(data.Email);
      login.enterPassword(data.Password);
      login.loginButton();
    });
  });

  // Post A job  by new

  it(" post a job by new  ", () => {
    postAjob.clickPostAJobButton();

    // postAjob.postAjobWithNewJob();

    // Baic Information stepper
    cy.fixture("Helper").then((data) => {
      postAjob.enterJobitle(data.JobTitle);
      postAjob.selectIndustryType();
      postAjob.enterNumberofHire(data.NumberOFHire);
      postAjob.selectLocationType();

      // Add Your Basic Information section
      postAjob.enterJobitle(data.JobTitle);
      postAjob.enterNumberofHire(data.NumberOFHire);
      postAjob.selectLocationType();

        // Add Your Job Details section
      postAjob.selectJobType();
      postAjob.selectExperienceLevel();
      postAjob.selectEducation();
      postAjob.selectSchedule();
      postAjob.willingToTravel();
      postAjob.enterJobSkills(data.Skill);
      postAjob.enterLanguagae();
      postAjob.enterLincense();

    //add your pay and benefits section

    postAjob.enterPayByRange();
    postAjob.enterMaximumPaybyRange();
    postAjob.enterMinimumPayByRange();
    postAjob.enterRate();
    postAjob.enterCompensationPackage();
    postAjob.enterOtherBenefits();

    // Description of job section
      postAjob.enterJobDesc();
    //   postAjob.uploadFile(filePath);

    // communication preferences
      postAjob.enterdailyUpdateTo(data.Email);

      // Application preferences
      postAjob.applicationPreferences();

      // Hire Settings
      postAjob.hiresettings();

      // Save as draft and submit job
      postAjob.saveAsDraft();
      postAjob.submitjob();

    });

  
  });


//   it("Add Pay and Benefit by Starting Amount ", () => {
//     postAjob.enterPayBystartingAmount();
//     postAjob.enterCompensationPackage();
//     postAjob.enterOtherBenefits();
//   });

//   it("Add Pay and Benefit by Exact Amount ", () => {
//     postAjob.enterPayByExactAmount();
//     postAjob.enterCompensationPackage();
//     postAjob.enterOtherBenefits();
//   });

});

export default PostAjob;