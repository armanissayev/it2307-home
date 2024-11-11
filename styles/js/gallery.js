
/*
document.querySelector('input[type="text"]').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(query)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});
*/

const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.getElementById('largeImage');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const newSrc = this.src;

        largeImage.style.opacity = 0;

        setTimeout(() => {
            largeImage.src = newSrc;
            largeImage.style.opacity = 1;
        }, 300);
    });
});



const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

// Function to apply the selected theme
function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggleButton.textContent = "Dark Mode"; // Update button text
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggleButton.textContent = "Light Mode"; // Update button text
    }
}

const savedTheme = localStorage.getItem("theme") || "light"; // Default to light if no theme is saved
applyTheme(savedTheme);

themeToggleButton.addEventListener("click", function() {
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light"; // Check current theme
    const newTheme = currentTheme === "dark" ? "light" : "dark"; // Determine new theme
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme in local storage
});