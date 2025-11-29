document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('bookingForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Get Form Values
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const service = document.getElementById('service').value;

            // Clear previous errors
            document.querySelectorAll('.error').forEach(e => e.style.display = 'none');

            // Validate Name
            if (name === "") {
                document.getElementById('nameError').textContent = "Full Name is required.";
                document.getElementById('nameError').style.display = "block";
                isValid = false;
            }

            // Validate Email
            if (email === "" || !email.includes('@')) {
                document.getElementById('emailError').textContent = "Please enter a valid email.";
                document.getElementById('emailError').style.display = "block";
                isValid = false;
            }

            // Validate Phone
            if (phone === "") {
                document.getElementById('phoneError').textContent = "Phone number is required.";
                document.getElementById('phoneError').style.display = "block";
                isValid = false;
            }

            // Validate Date
            if (date === "") {
                document.getElementById('dateError').textContent = "Please select a date.";
                document.getElementById('dateError').style.display = "block";
                isValid = false;
            }

            // Validate Service Selection
            if (service === "") {
                document.getElementById('serviceError').textContent = "Please select a reason for the visit.";
                document.getElementById('serviceError').style.display = "block";
                isValid = false;
            }

            // Prevent submission if invalid
            if (!isValid) {
                event.preventDefault(); // Stop form from sending 
            } else {
                alert("Thank you! Your booking request has been validated.");
            }
        });
    }
});