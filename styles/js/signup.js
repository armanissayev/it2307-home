document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        errorMessage.textContent = ""; 
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Account created successfully!");
        window.location.href = "login.html";
    }
});

document.getElementById("loginRedirect").addEventListener("click", function() {
    window.location.href = "login.html"; 
});
