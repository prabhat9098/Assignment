function submitForm() {
    // Validate form fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if gender is selected
    let gender = '';
    genderElements.forEach((element) => {
        if (element.checked) {
            gender += element.value + ' ';
        }
    });

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        // Display the submission results in a popup
        const popup = document.getElementById('popup');
        const popupResults = document.getElementById('popup-results');
        popup.style.display = 'block';

        // Display the results in the popup
        popupResults.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
    } else {
        alert('Please fill in all required fields.');
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
