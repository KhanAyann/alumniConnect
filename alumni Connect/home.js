// This script would update the greeting with the user's name or other dynamic content
document.addEventListener('DOMContentLoaded', () => {
    const userName = "John Doe"; // Example user name, replace with dynamic user data
    const greetingSection = document.querySelector('.greeting-section h2');

    greetingSection.textContent = `Welcome Back, ${userName}!`;
});

let currentIndex = 0;
const newsInterval = 5000; // 5 seconds

function moveSlider(step) {
    const newsWrapper = document.querySelector('.news-wrapper');
    const newsItems = document.querySelectorAll('.news-item');
    const totalItems = newsItems.length;

    currentIndex = (currentIndex + step + totalItems) % totalItems;
    const offset = -currentIndex * 100;
    newsWrapper.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    setInterval(() => {
        moveSlider(1);
    }, newsInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
});
