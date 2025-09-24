// script.js - submits form to save.php and redirects to the Instagram reel
const form = document.getElementById('main-form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const fd = new FormData(form);

    try {
        const res = await fetch('save.php', { method: 'POST', body: fd });
        const json = await res.json();
        if (json.ok) {
            // redirect to reel after short delay
            setTimeout(() => {
                window.location.href = 'https://www.instagram.com/reel/DO84Dd0CKAA/?igsh=MTVwZDJibzF1bTAwOQ==';
            }, 700);
        } else {
            alert('Server error: ' + (json.error || 'Unknown'));
        }
    } catch (err) {
        alert('Network error: ' + err.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }
});
