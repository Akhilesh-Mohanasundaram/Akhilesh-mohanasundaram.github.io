function showSuccessMessage(event) {
    event.preventDefault(); 
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 3000);

    setTimeout(function () {
        document.querySelector('form').reset();
    }, 1000);
}
