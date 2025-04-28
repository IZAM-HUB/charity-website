// Select the form by ID
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop the form from submitting automatically

    // Get form field values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all the fields before submitting.");
        return;
    }

    // Success alert
    alert("Thank you for contacting us! We will get back to you soon.");

    // Optionally, you can reset the form after success
    this.reset();
});
