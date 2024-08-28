document.addEventListener('DOMContentLoaded', function() {
    
    const changeTextButton = document.getElementById('changeTextButton');
    const message = document.getElementById('message');

    
    changeTextButton.addEventListener('click', function() {
        
        message.textContent = 'The text has been changed!';
    });
});
