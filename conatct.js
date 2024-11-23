document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('contact-form');

    // Add event listener to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // You can integrate EmailJS here for sending email functionality.
        // Assuming you are using EmailJS, this is how you can proceed:

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                // Show a success message
                alert('Your message has been sent successfully!');
                // Optionally, reset the form
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                // Show an error message
                alert('Oops! Something went wrong. Please try again later.');
            });
    });
});
