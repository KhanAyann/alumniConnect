// Sample upcoming and previous session data with Zoom, Google Meet, and YouTube Live URLs
const upcomingSessions = [
    {
        title: "AI & Machine Learning Workshop",
        mentor: "John Doe",
        time: "10:00 AM - 11:00 AM",
        platform: "Zoom",
        sessionUrl: "https://zoom.us/j/1234567890",
        calendarLink: "https://calendar.google.com/calendar/r/eventedit/copy...",
        image: "WIN_20240531_15_52_40_Pro.jpg", // Sample image URL
    },
    {
        title: "Career Guidance Webinar",
        mentor: "Jane Smith",
        time: "12:00 PM - 1:00 PM",
        platform: "Google Meet",
        sessionUrl: "https://meet.google.com/abc-defg-hij",
        calendarLink: "https://calendar.google.com/calendar/r/eventedit/copy...",
        image: "WIN_20240531_15_52_40_Pro.jpg", // Sample image URL
    },
];

// Sample previous sessions
const previousSessions = [
    {
        title: "Frontend Development Masterclass",
        mentor: "David Lee",
        platform: "YouTube",
        sessionUrl: "https://www.youtube.com/watch?v=example",
        image: "https://via.placeholder.com/300x150?text=Frontend+Masterclass", // Sample image URL
    },
    {
        title: "Frontend Development Masterclass",
        mentor: "David Lee",
        platform: "YouTube",
        sessionUrl: "https://www.youtube.com/watch?v=example",
        image: "https://via.placeholder.com/300x150?text=Frontend+Masterclass", // Sample image URL
    }
];

// Select containers
const upcomingSessionsContainer = document.getElementById("upcomingSessions");
const previousSessionsContainer = document.getElementById("previousSessions");
const calendarLinkElem = document.getElementById("calendarLink");
const currentSessionTitle = document.getElementById("currentSessionTitle");

// Populate upcoming sessions
upcomingSessions.forEach(session => {
    const sessionCard = document.createElement("div");
    sessionCard.classList.add("session-card");

    sessionCard.innerHTML = `
      <img src="${session.image}" alt="${session.title}">
      <h3>${session.title}</h3>
      <p><strong>Mentor:</strong> ${session.mentor}</p>
      <p><strong>Platform:</strong> ${session.platform}</p>
      <p><strong>Time:</strong> ${session.time}</p>
      <a href="${session.sessionUrl}" target="_blank" class="join-btn">Join on ${session.platform}</a>
    `;

    // Event listener to populate calendar link and session title
    sessionCard.addEventListener("click", () => {
        currentSessionTitle.innerText = session.title;
        calendarLinkElem.href = session.calendarLink;
    });

    upcomingSessionsContainer.appendChild(sessionCard);
});

// Populate previous sessions
previousSessions.forEach(session => {
    const sessionCard = document.createElement("div");
    sessionCard.classList.add("session-card");

    sessionCard.innerHTML = `
      <img src="${session.image}" alt="${session.title}">
      <h3>${session.title}</h3>
      <p><strong>Mentor:</strong> ${session.mentor}</p>
      <p><strong>Platform:</strong> ${session.platform}</p>
      <a href="${session.sessionUrl}" target="_blank" class="join-btn">Watch Recording</a>
    `;

    previousSessionsContainer.appendChild(sessionCard);
});
