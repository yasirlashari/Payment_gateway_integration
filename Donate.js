document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('donation-form');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const amount = document.getElementById('amount').value;
        const frequency = document.getElementById('frequency').value;

        // You can add code here to process the donation, e.g., send data to a server

        alert(`Thank you, ${name}, for your ${frequency} donation of $${amount}!`);

        // Clear the form fields
        form.reset();
// go to previous page
        window.history.back();
    });
});
