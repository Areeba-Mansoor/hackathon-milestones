var _a;
(_a = document.getElementById('resume-Form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get reference to form elements using their IDs
    var userNameElement = document.getElementById('username');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var profilePictureElement = document.getElementById('profilePicture');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('workexperience');
    var skillsElement = document.getElementById('skills');
    // Check if all form elements are present
    if (userNameElement &&
        nameElement &&
        emailElement &&
        phoneElement &&
        profilePictureElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var userName = userNameElement.value;
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Picture elements
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Create resume output
        var resumeOutput = "\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    \n        <h3>Personal Information</h3>\n        <p><strong>User Name:</strong> ").concat(userName, "</p>\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
