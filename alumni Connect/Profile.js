// Sample profile data (replace this with your backend/API integration)
let profileData = {
    name: "John Doe",
    email: "john@example.com",
    career: "Software Engineer",
    skills: "JavaScript, Python, HTML, CSS",
    bio: "I am a software engineer with 5 years of experience.",
    collegeID: "ABC123",
    passoutYear: 2020,
    experience: "3 years",
    internship: "Google Internship",
    photo: "default-avatar.png"
};

// Function to display profile data
function displayProfile() {
    document.getElementById('displayName').innerText = profileData.name;
    document.getElementById('displayEmail').innerText = profileData.email;
    document.getElementById('displayCareer').innerText = profileData.career;
    document.getElementById('displaySkills').innerText = profileData.skills;
    document.getElementById('displayBio').innerText = profileData.bio;
    document.getElementById('displayCollegeID').innerText = profileData.collegeID;
    document.getElementById('displayPassoutYear').innerText = profileData.passoutYear;
    document.getElementById('displayExperience').innerText = profileData.experience;
    document.getElementById('displayInternship').innerText = profileData.internship;
    document.getElementById('profilePhoto').src = profileData.photo;
}

// Function to pre-fill the edit form with existing profile data
function fillEditForm() {
    document.getElementById('editName').value = profileData.name;
    document.getElementById('editEmail').value = profileData.email;
    document.getElementById('editCareer').value = profileData.career;
    document.getElementById('editSkills').value = profileData.skills;
    document.getElementById('editBio').value = profileData.bio;
    document.getElementById('editCollegeID').value = profileData.collegeID;
    document.getElementById('editPassoutYear').value = profileData.passoutYear;
    document.getElementById('editExperience').value = profileData.experience;
    document.getElementById('editInternship').value = profileData.internship;
}

// Show edit form and hide profile details
document.getElementById('editButton').addEventListener('click', function () {
    document.getElementById('profileDetails').style.display = 'none';
    document.getElementById('editProfileForm').style.display = 'block';
    fillEditForm(); // Pre-fill the form with current profile data
});

// Save changes and update the profile view
document.getElementById('editProfileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capture the updated profile data
    profileData.name = document.getElementById('editName').value;
    profileData.email = document.getElementById('editEmail').value;
    profileData.career = document.getElementById('editCareer').value;
    profileData.skills = document.getElementById('editSkills').value;
    profileData.bio = document.getElementById('editBio').value;
    profileData.collegeID = document.getElementById('editCollegeID').value;
    profileData.passoutYear = document.getElementById('editPassoutYear').value;
    profileData.experience = document.getElementById('editExperience').value;
    profileData.internship = document.getElementById('editInternship').value;

    // Handle the photo upload if a new photo is chosen
    const photoInput = document.getElementById('editPhoto');
    if (photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            profileData.photo = e.target.result; // Save the new photo as base64 data URL
            displayProfile(); // Update the profile with the new photo
        };
        reader.readAsDataURL(file);
    }

    // Save data (this could be an API call to the backend)
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Hide the edit form and show the updated profile details
    document.getElementById('editProfileForm').style.display = 'none';
    document.getElementById('profileDetails').style.display = 'block';

    // Update the profile display
    displayProfile();
});

// Initialize the profile view on page load
displayProfile();
