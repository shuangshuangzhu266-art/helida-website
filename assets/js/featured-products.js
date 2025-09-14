// Featured Products Page JavaScript

// Initialize featured products page
document.addEventListener('DOMContentLoaded', function() {
    initializeFeaturedProductsPage();
});

function initializeFeaturedProductsPage() {
    setupCategoryAnimations();
    setupShowcaseAnimations();
    setupGradeAnimations();
    setupStandardAnimations();
    setupEnhancedInteractions();
}

// Category card animations
function setupCategoryAnimations() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateCategoryCard(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    categoryCards.forEach(card => {
        observer.observe(card);
    });
}

function animateCategoryCard(card) {
    const image = card.querySelector('.category-image');
    const features = card.querySelectorAll('.feature-tag');
    
    if (image) {
        image.style.animation = 'fadeInUp 0.6s ease forwards';
    }
    
    // Animate features with delay
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
}

// Showcase animations
function setupShowcaseAnimations() {
    const showcaseItems = document.querySelectorAll('.showcase-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateShowcaseItem(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    showcaseItems.forEach(item => {
        observer.observe(item);
    });
}

function animateShowcaseItem(item) {
    const image = item.querySelector('.showcase-image');
    const specs = item.querySelectorAll('.spec-item');
    
    if (image) {
        image.style.animation = 'fadeInUp 0.6s ease forwards';
    }
    
    // Animate specs with delay
    specs.forEach((spec, index) => {
        setTimeout(() => {
            spec.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
}

// Grade card animations
function setupGradeAnimations() {
    const gradeCards = document.querySelectorAll('.grade-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateGradeCard(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    gradeCards.forEach(card => {
        observer.observe(card);
    });
}

function animateGradeCard(card) {
    const features = card.querySelectorAll('.grade-features li');
    
    // Animate features with delay
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 100);
    });
}

// Standard animations
function setupStandardAnimations() {
    const standardItems = document.querySelectorAll('.standard-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                animateStandardItem(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    standardItems.forEach(item => {
        observer.observe(item);
    });
}

function animateStandardItem(item) {
    const icon = item.querySelector('.standard-icon');
    
    if (icon) {
        icon.style.animation = 'pulse 0.6s ease';
    }
}

// Enhanced interactions
function setupEnhancedInteractions() {
    const cards = document.querySelectorAll('.category-card, .showcase-item, .grade-card, .standard-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', handleCardHover);
        card.addEventListener('mouseleave', handleCardLeave);
        card.addEventListener('click', createRippleEffect);
    });
}

function handleCardHover(e) {
    const card = e.currentTarget;
    const image = card.querySelector('.category-image, .showcase-image');
    const icon = card.querySelector('.standard-icon');
    
    if (image) {
        image.style.transform = 'scale(1.05)';
    }
    
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.color = 'var(--accent-color)';
    }
}

function handleCardLeave(e) {
    const card = e.currentTarget;
    const image = card.querySelector('.category-image, .showcase-image');
    const icon = card.querySelector('.standard-icon');
    
    if (image) {
        image.style.transform = 'scale(1)';
    }
    
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

// Product comparison functionality
function setupProductComparison() {
    const gradeCards = document.querySelectorAll('.grade-card');
    
    gradeCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            gradeCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
            
            // Show comparison details
            showGradeComparison(card);
        });
    });
}

function showGradeComparison(selectedCard) {
    const grade = selectedCard.querySelector('h3').textContent;
    const features = selectedCard.querySelectorAll('.grade-features li');
    
    // Create comparison modal or update existing comparison section
    console.log(`Selected grade: ${grade}`);
    console.log('Features:', Array.from(features).map(f => f.textContent));
}

// Initialize product comparison
document.addEventListener('DOMContentLoaded', () => {
    setupProductComparison();
});

// Export functions for potential external use
window.FeaturedProducts = {
    setupCategoryAnimations,
    setupShowcaseAnimations,
    setupGradeAnimations,
    setupStandardAnimations,
    setupEnhancedInteractions
};
