document.addEventListener('DOMContentLoaded', function() {
    // Update the time in the status bar
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        // Format time
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        const timeString = `${hours}:${minutes}`;
        document.querySelector('.time').textContent = timeString;
    }
    
    // Call once on load and then update every minute
    updateTime();
    setInterval(updateTime, 60000);

    // Mobile touch effects
    const menuItems = document.querySelectorAll('.settings-menu a');
    menuItems.forEach(item => {
        // Add touch effect
        item.addEventListener('touchstart', function() {
            this.style.backgroundColor = 'rgba(129, 108, 197, 0.1)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.backgroundColor = 'transparent';
            
            // Handle menu item click
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
                const sectionId = this.getAttribute('href').substring(1);
                console.log(`Navigating to ${sectionId} section`);
                // Implement navigation to specific settings section
            }
        });
    });

    // Handle hamburger menu touch
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.addEventListener('touchstart', function() {
        this.classList.add('active');
    });
    
    hamburgerMenu.addEventListener('touchend', function() {
        this.classList.remove('active');
        console.log('Menu clicked');
        // Implement menu toggle functionality
    });

    // Handle Sign Out button
    const signOutBtn = document.getElementById('signout-btn');
    signOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Mobile style alert for sign out confirmation
        const confirmed = confirm('Are you sure you want to sign out?');
        
        if (confirmed) {
            console.log('User signed out');
            // Add sign out functionality here
            // For example: redirect to login page after a brief delay
            document.body.style.opacity = '0.5';
            setTimeout(() => {
                // window.location.href = 'login.html';
                console.log('Redirecting to login page...');
                document.body.style.opacity = '1';
            }, 1000);
        }
    });
    
    // Add ripple effect for better mobile feel
    function createRipple(e) {
        const button = e.currentTarget;
        
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
        circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Add ripple effect to all interactive elements if needed
    // document.querySelectorAll('.settings-menu a').forEach(button => {
    //     button.addEventListener('click', createRipple);
    // });
});