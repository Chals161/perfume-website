// Function to handle intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}

// Setting up Intersection Observer for each header
const headers = document.querySelectorAll('.header-text-love, .header-text-calm, .header-text-energy, .header-text-radiance');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust as needed based on when you want the animation to trigger
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

headers.forEach(header => {
    observer.observe(header);
});

