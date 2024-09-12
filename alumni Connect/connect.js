const alumniData = [
    {
        name: "John Doe",
        experience: "5 years",
        currentRole: "Senior Software Engineer at Google",
        specialization: "Artificial Intelligence",
        internships: "Interned at Microsoft and Facebook",
        linkedIn: "https://linkedin.com/in/johndoe",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    },
    {
        name: "Jane Smith",
        experience: "7 years",
        currentRole: "Product Manager at Amazon",
        specialization: "Cloud Computing",
        internships: "Interned at AWS",
        linkedIn: "https://linkedin.com/in/janesmith",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    },
    {
        name: "David Lee",
        experience: "10 years",
        currentRole: "CTO at StartupX",
        specialization: "Blockchain Development",
        internships: "Interned at IBM",
        linkedIn: "https://linkedin.com/in/davidlee",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    },
    {
        name: "Jane Smith",
        experience: "7 years",
        currentRole: "Product Manager at Amazon",
        specialization: "Cloud Computing",
        internships: "Interned at AWS",
        linkedIn: "https://linkedin.com/in/janesmith",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    },
    {
        name: "Jane Smith",
        experience: "7 years",
        currentRole: "Product Manager at Amazon",
        specialization: "Cloud Computing",
        internships: "Interned at AWS",
        linkedIn: "https://linkedin.com/in/janesmith",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    },
    {
        name: "Jane Smith",
        experience: "7 years",
        currentRole: "Product Manager at Amazon",
        specialization: "Cloud Computing",
        internships: "Interned at AWS",
        linkedIn: "https://linkedin.com/in/janesmith",
        photo: "WIN_20240531_15_52_40_Pro.jpg"
    }
];

// Select the alumni grid container
const alumniGrid = document.querySelector('.alumni-grid');

// Loop through alumni data and generate cards
alumniData.forEach(alumni => {
    const card = document.createElement('div');
    card.classList.add('alumni-card');

    card.innerHTML = `
      <img src="${alumni.photo}" alt="Alumni Photo">
      <h3>${alumni.name}</h3>
      <p><strong>Experience:</strong> ${alumni.experience}</p>
      <p><strong>Current Role:</strong> ${alumni.currentRole}</p>
      <p><strong>Specialization:</strong> ${alumni.specialization}</p>
      <p><strong>Internships:</strong> ${alumni.internships}</p>
      <div class="card-buttons">
        <button class="message-btn">Message</button>
        <a href="${alumni.linkedIn}" class="connect-btn" target="_blank">Connect</a>
      </div>
    `;

    alumniGrid.appendChild(card);
});
