// Experience Page JavaScript

// Initialize experience page
document.addEventListener('DOMContentLoaded', function() {
    initializeExperiencePage();
});

function initializeExperiencePage() {
    animateExperienceCounter();
    setupTimelineAnimations();
    setupAchievementAnimations();
    setupExpertiseAnimations();
}

// Animate experience counter
function animateExperienceCounter() {
    const counter = document.getElementById('experience-counter');
    const targetNumber = 5;
    const duration = 2000; // 2 seconds
    const increment = targetNumber / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
            current = targetNumber;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

// Timeline animations
function setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Achievement animations
function setupAchievementAnimations() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateAchievementIcon(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    achievementCards.forEach(card => {
        observer.observe(card);
    });
}

// Animate achievement icons
function animateAchievementIcon(card) {
    const icon = card.querySelector('.achievement-icon');
    if (icon) {
        icon.style.animation = 'bounce 0.6s ease';
    }
}

// Expertise animations
function setupExpertiseAnimations() {
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateExpertiseCard(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    expertiseCards.forEach(card => {
        observer.observe(card);
    });
}

// Animate expertise cards
function animateExpertiseCard(card) {
    const icon = card.querySelector('.expertise-icon');
    const features = card.querySelectorAll('.expertise-features li');
    
    if (icon) {
        icon.style.animation = 'pulse 0.6s ease';
    }
    
    // Animate features with delay
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
}

// Enhanced interactions
function setupEnhancedInteractions() {
    const cards = document.querySelectorAll('.achievement-card, .expertise-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', handleCardHover);
        card.addEventListener('mouseleave', handleCardLeave);
        card.addEventListener('click', createRippleEffect);
    });
}

function handleCardHover(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.achievement-icon, .expertise-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.color = 'var(--accent-color)';
    }
}

function handleCardLeave(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.achievement-icon, .expertise-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '';
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

// Initialize enhanced interactions
document.addEventListener('DOMContentLoaded', () => {
    setupEnhancedInteractions();
});

// Export functions for potential external use
window.Experience = {
    animateExperienceCounter,
    setupTimelineAnimations,
    setupAchievementAnimations,
    setupExpertiseAnimations
};
