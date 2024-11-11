async function checkEmail(email) {
  try {
    const response = await fetch(`https://api.emailvalidation.io/v1/info?apikey=ema_live_vIWmWjgeIXvlvqulTyw1Z3L5o1wIEiH2NiL79R8l&email=${email}`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    console.log(data);

    if (!data.smtp_check) return false;
    else return true;

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return false;
  }
}

document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 
    
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");

    let res = await checkEmail(email);

    if (!res) {
        alert("Email is not correct!");
        return;
    }

    if (firstName === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields are required.";
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        errorMessage.textContent = ""; 
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("password", password);
        alert("Account created successfully!");
        window.location.href = "login.html";
    }
});

document.getElementById("loginRedirect").addEventListener("click", function() {
    window.location.href = "login.html"; 
});
