document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    const letters = text.split('');

    // Clear existing text content
    heroTitle.textContent = '';

    // Wrap each letter in a span and add to the heroTitle element
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`; // Adjust the delay time as needed
        heroTitle.appendChild(span);
    });
});
