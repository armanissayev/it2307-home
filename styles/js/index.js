document.addEventListener("DOMContentLoaded", function() {


const modal = document.getElementById('myModal');
const contactUsBtn = document.getElementById('contactUsBtn');
const closeBtn = document.getElementById('closeFormBtn');

if (contactUsBtn) {
    contactUsBtn.onclick = function() {
        modal.style.display = 'block';
    };
}

if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Показ текущего времени
const timeButton = document.getElementById("show-time");
    const timeDisplay = document.getElementById("time-display");
    let isTimeVisible = false; 
    
    timeButton.addEventListener("click", function() {
        isTimeVisible = !isTimeVisible; 
    
        if (isTimeVisible) {
            const now = new Date().toLocaleTimeString();
            timeDisplay.textContent = "Current time: " + now;
            timeDisplay.style.display = "block"; // Показываем время
        } else {
            timeDisplay.style.display = "none"; // Скрываем время
        }
    });
});


const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggleButton.textContent = "Dark Mode"; 
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggleButton.textContent = "Light Mode"; 
    }
}

const savedTheme = localStorage.getItem("theme") || "light"; // Default is light 
applyTheme(savedTheme);

themeToggleButton.addEventListener("click", function() {
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light"; // Check current theme
    const newTheme = currentTheme === "dark" ? "light" : "dark"; // Determine new theme
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme
});