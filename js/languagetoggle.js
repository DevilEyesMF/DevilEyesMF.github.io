// Function to set the language
function setLanguage(language) {
    localStorage.setItem('preferredLang', language);
}

// Function to decide the language part of the URL based on the selected language
function getLanguageUrl(language) {
    // Get the current URL path (without the domain)
    const currentUrl = window.location.pathname;

    // Split the current URL into parts (assuming the language is the first part)
    const urlParts = currentUrl.split('/');

    // Replace the first part with the selected language
    urlParts[1] = language;

    // Rebuild the URL with the updated language
    const newUrl = urlParts.join('/');
    return newUrl;
}

// Event listeners for the language buttons
document.getElementById('nl-link').addEventListener('click', function() {
    setLanguage('nl');
    window.location.href = getLanguageUrl('nl');
});

document.getElementById('en-link').addEventListener('click', function() {
    setLanguage('en');
    window.location.href = getLanguageUrl('en');
});