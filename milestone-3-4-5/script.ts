document.getElementById('resume-Form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get reference to form elements using their IDs
    const userNameElement = document.getElementById('username') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('workexperience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    // Check if all form elements are present
    if (
        userNameElement &&
        nameElement &&
        emailElement &&
        phoneElement &&
        profilePictureElement &&
        educationElement &&
        experienceElement &&
        skillsElement
) {
        const userName = userNameElement.value;
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Picture elements
        const profilePictureFile = profilePictureElement.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Create resume output
        const resumeOutput = `
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    
        <h1>Personal Information</h1>
        <p><strong>User Name:</strong> ${userName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});