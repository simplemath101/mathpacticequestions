// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and the message paragraph
    const changeTextButton = document.getElementById('changeTextButton');
    const message = document.getElementById('message');

    // Add an event listener to the button
    changeTextButton.addEventListener('click', function() {
        // Change the text content of the paragraph when the button is clicked
        message.textContent = 'The text has been changed!';
    });
});
