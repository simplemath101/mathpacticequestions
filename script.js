document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all select elements
    const selects = document.querySelectorAll('.dropdown-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function(e) {
            const selectedTopic = e.target.value;
            const selectId = e.target.id;
            
            // Handle the selection based on which dropdown was used
            if (selectId === 'videoLectures') {
                // Get the URL from the selected option's data-url attribute
                const selectedOption = e.target.querySelector(`option[value="${selectedTopic}"]`);
                const url = selectedOption.getAttribute('data-url');
                
                if (url) {
                    window.location.href = url;
                }
            }
        });
    });

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
```​​​​​​​​​​​​​​​​
