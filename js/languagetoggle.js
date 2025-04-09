// Function to set the language
function setLanguage(language) {
    localStorage.setItem('preferredLang', language);
}

// Event listeners for the language buttons
document.getElementById('nl-link').addEventListener('click', function() {
    setLanguage('nl');
});

document.getElementById('en-link').addEventListener('click', function() {
    setLanguage('en');
});