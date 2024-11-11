document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Retrieve stored credentials from localStorage
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
    } else if (username === storedUsername && password === storedPassword) {
        errorMessage.textContent = ""; 
        alert("Logged in successfully!");
        window.location.href = "index.html";  
    } else {
        errorMessage.textContent = "Invalid username or password.";
        const signupRedirectButton = document.getElementById("signupRedirect");
        signupRedirectButton.onclick = function() {
            window.location.href = "signup.html";
        };
    }
});
