document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");


    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
    } else {
        errorMessage.textContent = ""; 
        alert("Logged in successfully!");
        window.location.href= "index.html";

        
    }
});
