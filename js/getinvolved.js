// Select the donation form
document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent real form submission

    // Get the input values
    var donorName = document.getElementById("donorName").value.trim();
    var donorEmail = document.getElementById("donorEmail").value.trim();
    var donationAmount = parseFloat(document.getElementById("donationAmount").value);
    var paymentMethod = document.getElementById("paymentMethod").value;

    // Check if fields are empty
    if (donorName === "" || donorEmail === "" || isNaN(donationAmount) || paymentMethod === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Conditional statement: Check donation amount
    if (donationAmount < 10) {
        alert("Minimum donation amount is RM10. Please donate more to help our cause!");
    } else {
        alert("Thank you for your generous donation!");
        this.reset(); // Optional: Reset form after successful donation
    }
});

// When user clicks on Donate Now button
document.getElementById("donateButton").addEventListener("click", function(event) {
    event.preventDefault(); // Stop default link behavior
    alert("Please fill in the donation form below to proceed.");
});



