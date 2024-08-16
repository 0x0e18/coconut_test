document.addEventListener('DOMContentLoaded', function() {
    // Clipboard Copy Functionality
    const copyButton = document.getElementById('copy-contract');
    const feedbackMessage = document.createElement('div'); // Create a div for the feedback box
    feedbackMessage.style.position = 'absolute'; // Position it absolutely
    feedbackMessage.style.padding = '8px'; // Padding for the box
    feedbackMessage.style.background = '#f8f9fa'; // Background color
    feedbackMessage.style.border = '1px solid #ccc'; // Border styling
    feedbackMessage.style.borderRadius = '4px'; // Rounded corners
    feedbackMessage.style.display = 'none'; // Initially hide the feedback message
    feedbackMessage.style.zIndex = '1000'; // Ensure it is on top of other elements
    document.body.appendChild(feedbackMessage); // Append to the body to position absolutely

    copyButton.addEventListener('click', function(event) {
        const contractAddress = 'FYzAWUYqmu8kFzERPKkTgVYd4BSbedMjVhYPyLPdpump';
        navigator.clipboard.writeText(contractAddress)
            .then(() => {
                feedbackMessage.textContent = 'Copied!';
                feedbackMessage.style.left = `${event.clientX}px`; // Set the left position
                feedbackMessage.style.top = `${event.clientY + 20}px`; // Set the top position slightly below the cursor
                feedbackMessage.style.display = 'block'; // Show feedback message
                setTimeout(() => { feedbackMessage.style.display = 'none'; }, 2000); // Hide after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                feedbackMessage.textContent = 'Failed to copy';
                feedbackMessage.style.left = `${event.clientX}px`;
                feedbackMessage.style.top = `${event.clientY + 20}px`;
                feedbackMessage.style.display = 'block';
                setTimeout(() => { feedbackMessage.style.display = 'none'; }, 2000);
            });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show'); // Toggle the 'show' class on the navigation menu
    });
});
