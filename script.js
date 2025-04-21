// Helper functions
const createElement = (tag, className, innerHTML = '') => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
};

// Create dynamic background grid for hero section
const createBackdropGrid = () => {
    const backdropGrid = document.querySelector('.backdrop-grid');
    
    // Create 15 backdrop cards (5x3 grid)
    for (let i = 0; i < 15; i++) {
        const backdropCard = createElement('div', 'backdrop-card');
        backdropCard.style.backgroundImage = `url('./assets/images/trend-${i % 5 + 1}.jpg')`;
        backdropGrid.appendChild(backdropCard);
    }
};

// Simulate image loading
const preloadImages = () => {
    // Array of image paths that would be used in a real implementation
    const imagePaths = [
        './assets/images/logo.png',
        './assets/images/logo-small.png',
        './assets/images/hero-woman.png',
        './assets/images/card1.jpg',
        './assets/images/card2.jpg',
        './assets/images/card3.jpg',
        './assets/images/card4.jpg',
        './assets/images/card5.jpg',
        './assets/images/user1.jpg',
        './assets/images/user2.jpg',
        './assets/images/user3.jpg',
        './assets/images/trend-1.jpg',
        './assets/images/trend-2.jpg',
        './assets/images/trend-3.jpg',
        './assets/images/trend-4.jpg',
        './assets/images/trend-5.jpg'
    ];

    // In a real implementation, we would actually preload these images
    console.log('Preloading images...');
};

// Scroll animation for trend cards
const initTrendCardScrollAnimation = () => {
    const trendCards = document.querySelector('.trend-cards');
    const cards = trendCards.querySelectorAll('.trend-card');
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    trendCards.addEventListener('mousedown', (e) => {
        isDown = true;
        trendCards.classList.add('active');
        startX = e.pageX - trendCards.offsetLeft;
        scrollLeft = trendCards.scrollLeft;
    });
    
    trendCards.addEventListener('mouseleave', () => {
        isDown = false;
        trendCards.classList.remove('active');
    });
    
    trendCards.addEventListener('mouseup', () => {
        isDown = false;
        trendCards.classList.remove('active');
    });
    
    trendCards.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - trendCards.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        trendCards.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    trendCards.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - trendCards.offsetLeft;
        scrollLeft = trendCards.scrollLeft;
    });
    
    trendCards.addEventListener('touchend', () => {
        isDown = false;
    });
    
    trendCards.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - trendCards.offsetLeft;
        const walk = (x - startX) * 2;
        trendCards.scrollLeft = scrollLeft - walk;
    });
};

// Animate elements on scroll
const initScrollAnimations = () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .testimonial, .trend-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9 && elementBottom > 0) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .feature, .testimonial, .trend-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    setTimeout(animateOnScroll, 100);
};

// Handle download button clicks
const initDownloadButtons = () => {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Download coming soon! Thanks for your interest in Lit Vibes.');
        });
    });
};

// Initialize mobile menu
const initMobileMenu = () => {
    // This would be implemented if there was a mobile menu in the design
    console.log('Mobile menu initialized');
};

// Initialize video previews (simulated)
const initVideoPreviews = () => {
    const trendCards = document.querySelectorAll('.trend-card');
    
    trendCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Video preview coming soon! Stay tuned for trending content.');
        });
    });
};

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    createBackdropGrid();
    preloadImages();
    initTrendCardScrollAnimation();
    initScrollAnimations();
    initDownloadButtons();
    initMobileMenu();
    initVideoPreviews();
    
    console.log('Lit Vibes App initialized successfully!');
});