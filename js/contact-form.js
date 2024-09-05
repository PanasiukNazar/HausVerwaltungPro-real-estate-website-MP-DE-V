const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    event.preventDefault();
});

function sendForm() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}

function sendReview() {
    const newPath = 'thankyou.html';

    // Get the input value
    const emailInput = document.getElementById('email1').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('valid').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('valid').textContent =
            'Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}

function sendRequest() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('info').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('validation').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('validation').textContent =
            'Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}
