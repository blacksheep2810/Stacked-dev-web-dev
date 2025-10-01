window.onload = function() {
    const box = document.getElementById('messageBox');

    // Uses 5 navigator properties displayed to the user
    const browserName = navigator.appName;       // Browser name
    const codeName = navigator.appCodeName;      // Browser code name
    const userAgent = navigator.userAgent;       // Full user agent string
    const platform = navigator.platform;         // Operating system/platform
    const language = navigator.language;         // Browser language
    const location = navigator.geolocation;
    // Build the message
    box.innerHTML = `
        <strong>Browser Info:</strong><br>
        Name: ${browserName}<br>
        Code Name: ${codeName}<br>
        Platform: ${platform}<br>
        Language: ${language}<br>
        User Agent: ${userAgent}<br>
        <span id='closeBtn'>Close</span>
	<small>Thank you for using our site :) </small>
    `;

    // Show the box
    box.style.display = 'block';

    // Close button functionality
    document.getElementById('closeBtn').onclick = function() {
        box.style.display = 'none';
    };
};
