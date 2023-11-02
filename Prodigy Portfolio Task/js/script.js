// Function to show or hide the "scroll to top" button
function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY >= document.getElementById("sec-half").offsetTop) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

// Event listener to toggle the button's visibility on scroll
window.addEventListener("scroll", toggleScrollToTopButton);

const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav_list');

// Add a click event listener to the burger button
burger.addEventListener('click', () => {
    // Toggle the "active" class on the navigation list
    navList.classList.toggle('active');
});

