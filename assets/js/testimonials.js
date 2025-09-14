// Testimonials Page JavaScript

// Initialize testimonials page
document.addEventListener('DOMContentLoaded', function() {
    initializeTestimonialsPage();
});

function initializeTestimonialsPage() {
    setupTestimonialFilters();
    setupTestimonialAnimations();
    setupTestimonialInteractions();
}

// Testimonial filter functionality
function setupTestimonialFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter;
            
            // Filter testimonials with animation
            testimonialCards.forEach((card, index) => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Show card with delay
                    setTimeout(() => {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    }, index * 100);
                } else {
                    // Hide card
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Testimonial animations
function setupTestimonialAnimations() {
    // Intersection Observer for testimonial cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        // Initially pause animation
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
    
    // Observe story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
    
    // Observe stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Enhanced testimonial interactions
function setupTestimonialInteractions() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', handleTestimonialHover);
        card.addEventListener('mouseleave', handleTestimonialLeave);
        
        // Add click effects
        card.addEventListener('click', createRippleEffect);
    });
}

function handleTestimonialHover(e) {
    const card = e.currentTarget;
    const quoteIcon = card.querySelector('.quote-icon');
    
    if (quoteIcon) {
        quoteIcon.style.transform = 'scale(1.1) rotate(5deg)';
        quoteIcon.style.color = 'var(--accent-color)';
    }
}

function handleTestimonialLeave(e) {
    const card = e.currentTarget;
    const quoteIcon = card.querySelector('.quote-icon');
    
    if (quoteIcon) {
        quoteIcon.style.transform = 'scale(1) rotate(0deg)';
        quoteIcon.style.color = '';
    }
}

function createRippleEffect(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(201, 169, 110, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Animate statistics on scroll
function animateStatistics() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(item);
    });
}

function animateCounter(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    const finalNumber = parseInt(numberElement.textContent.replace(/\D/g, ''));
    const suffix = numberElement.textContent.replace(/\d/g, '');
    const duration = 2000; // 2 seconds
    const increment = finalNumber / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalNumber) {
            current = finalNumber;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Initialize statistics animation
document.addEventListener('DOMContentLoaded', () => {
    animateStatistics();
});

// Testimonial rating animation
function animateRatings() {
    const ratings = document.querySelectorAll('.rating');
    
    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.fas.fa-star');
        stars.forEach((star, index) => {
            star.style.animationDelay = `${index * 0.1}s`;
            star.style.animation = 'starGlow 0.5s ease forwards';
        });
    });
}

// Add star glow animation
const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes starGlow {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(starStyle);

// Initialize rating animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateRatings, 1000);
});

// Export functions for potential external use
window.Testimonials = {
    setupTestimonialFilters,
    animateStatistics,
    animateRatings
};
