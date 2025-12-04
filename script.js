// Interactive Ivory Showcase JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Set up event listeners for track selection buttons
    const trackButtons = document.querySelectorAll('.track-button');
    trackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const track = this.getAttribute('data-track');
            showTrack(track);
        });
    });

    // Set up event listeners for back buttons
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            showWelcomeScreen();
        });
    });

    // Set up event listeners for Track A navigation
    setupTrackANavigation();

    // Make track cards clickable
    const trackCards = document.querySelectorAll('.track-card');
    trackCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the button
            if (e.target.classList.contains('track-button')) {
                return;
            }
            const track = this.getAttribute('data-track');
            showTrack(track);
        });
    });
}

function showTrack(track) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show the selected track
    const trackScreen = document.getElementById('track-' + track);
    if (trackScreen) {
        trackScreen.classList.add('active');
        
        // Reset Track A to step 1 if showing Track A
        if (track === 'a') {
            showStep(1);
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function showWelcomeScreen() {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Show welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function setupTrackANavigation() {
    // Next step buttons
    const nextButtons = document.querySelectorAll('.next-step');
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.getAttribute('data-next'));
            showStep(nextStep);
        });
    });

    // Previous step buttons
    const prevButtons = document.querySelectorAll('.prev-step');
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.getAttribute('data-prev'));
            showStep(prevStep);
        });
    });
}

function showStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('#track-a .step');
    steps.forEach(step => {
        step.classList.add('hidden');
    });

    // Show the selected step
    const selectedStep = document.querySelector('#track-a .step[data-step="' + stepNumber + '"]');
    if (selectedStep) {
        selectedStep.classList.remove('hidden');
        
        // Smooth scroll to the step
        selectedStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back to welcome screen
    if (e.key === 'Escape') {
        const welcomeScreen = document.getElementById('welcome-screen');
        if (welcomeScreen && !welcomeScreen.classList.contains('active')) {
            showWelcomeScreen();
        }
    }
});

// Add hover effects for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    const trackCards = document.querySelectorAll('.track-card');
    
    trackCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
