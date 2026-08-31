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
    cy.visit("https://employer-stagging.jumprecruiter.us/login");
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
    cy.fixture("Helper").then((data) => {

    // postAjob.postAjobWithNewJob();

    // Baic Information stepper
      
       postAjob.clickPostAJobButton();
       postAjob.Addrequirements();
       postAjob.addCompensation();
       postAjob.reviewandpublish();

 

    });

  
  });




});

export default PostAjob;