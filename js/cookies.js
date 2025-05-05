document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        banner.classList.remove('d-none');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.add('d-none');
        // dispatch event
        const event = new Event('cookieConsentGiven');
        document.dispatchEvent(event);
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        banner.classList.add('d-none');
    });

});
