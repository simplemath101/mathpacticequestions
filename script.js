document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all select elements
    const selects = document.querySelectorAll('.dropdown-select');
    
    selects.forEach(select => {
        select.addEventListener('change', function(e) {
            const selectedTopic = e.target.value;
            const selectId = e.target.id;
            
            // Handle the selection based on which dropdown was used
            if (selectId === 'videoLectures') {
                if (selectedTopic === 'algebra') {
                    window.location.href = 'https://videolectures101.github.io/videolectures/';
                } else if (selectedTopic === 'geometry') {
                    window.location.href = 'https://videolectures101.github.io/geometryvideo/';
                } else if (selectedTopic === 'arithmetic') {
                    window.location.href = 'https://videolectures101.github.io/arithmetic/';
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
