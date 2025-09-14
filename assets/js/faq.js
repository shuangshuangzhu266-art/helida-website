// FAQ Page JavaScript

// Initialize FAQ page
document.addEventListener('DOMContentLoaded', function() {
    initializeFAQPage();
});

function initializeFAQPage() {
    setupFAQAccordion();
    setupFAQAnimations();
    setupSearchFunctionality();
}

// FAQ Accordion functionality
function setupFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            toggleFAQItem(item);
        });
    });
}

function toggleFAQItem(item) {
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(faqItem => {
        if (faqItem !== item) {
            faqItem.classList.remove('active');
        }
    });
    
    // Toggle current item
    if (isActive) {
        item.classList.remove('active');
    } else {
        item.classList.add('active');
    }
}

// FAQ Animations
function setupFAQAnimations() {
    // Intersection Observer for FAQ items
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
    
    // Observe FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        // Initially pause animation
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Search functionality (optional enhancement)
function setupSearchFunctionality() {
    // Create search input if it doesn't exist
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer && !document.querySelector('.faq-search')) {
        const searchHTML = `
            <div class="faq-search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search FAQs..." data-en-placeholder="Search FAQs..." data-ar-placeholder="البحث في الأسئلة الشائعة..." data-zh-placeholder="搜索常见问题...">
            </div>
        `;
        faqContainer.insertAdjacentHTML('afterbegin', searchHTML);
        
        // Setup search functionality
        const searchInput = document.querySelector('.faq-search input');
        if (searchInput) {
            searchInput.addEventListener('input', handleFAQSearch);
        }
    }
}

function handleFAQSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            item.style.animation = 'fadeInUp 0.3s ease forwards';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show no results message if needed
    showNoResultsMessage(searchTerm, faqItems);
}

function showNoResultsMessage(searchTerm, faqItems) {
    const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
    
    // Remove existing no results message
    const existingMessage = document.querySelector('.no-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Show no results message if no items are visible and search term is not empty
    if (visibleItems.length === 0 && searchTerm.length > 0) {
        const noResultsHTML = `
            <div class="no-results-message">
                <i class="fas fa-search"></i>
                <h3 data-en="No results found" data-ar="لم يتم العثور على نتائج" data-zh="未找到结果">No results found</h3>
                <p data-en="Try searching with different keywords" data-ar="جرب البحث بكلمات مفتاحية مختلفة" data-zh="尝试使用不同的关键词搜索">Try searching with different keywords</p>
            </div>
        `;
        
        const faqContainer = document.querySelector('.faq-container');
        faqContainer.insertAdjacentHTML('beforeend', noResultsHTML);
    }
}

// Keyboard navigation for FAQ items
function setupKeyboardNavigation() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQItem(item);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextItem = faqItems[index + 1];
                if (nextItem) {
                    nextItem.querySelector('.faq-question').focus();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevItem = faqItems[index - 1];
                if (prevItem) {
                    prevItem.querySelector('.faq-question').focus();
                }
            }
        });
    });
}

// Update ARIA attributes when FAQ items are toggled
function updateARIAAttributes(item) {
    const question = item.querySelector('.faq-question');
    const isActive = item.classList.contains('active');
    
    question.setAttribute('aria-expanded', isActive.toString());
}

// Enhanced FAQ functionality
function enhanceFAQFunctionality() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // Add click handler with ARIA updates
        question.addEventListener('click', () => {
            toggleFAQItem(item);
            updateARIAAttributes(item);
        });
    });
}

// Smooth scroll to FAQ items
function scrollToFAQItem(item) {
    const offset = 100; // Account for fixed navbar
    const itemPosition = item.offsetTop - offset;
    
    window.scrollTo({
        top: itemPosition,
        behavior: 'smooth'
    });
}

// FAQ analytics (if needed)
function trackFAQInteraction(question, action) {
    // This would integrate with analytics services
    console.log(`FAQ ${action}: ${question}`);
}

// Initialize enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    setupKeyboardNavigation();
    enhanceFAQFunctionality();
});

// Add CSS for no results message
const noResultsStyle = document.createElement('style');
noResultsStyle.textContent = `
    .no-results-message {
        text-align: center;
        padding: 3rem 2rem;
        color: var(--text-muted);
    }
    
    .no-results-message i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
    }
    
    .no-results-message h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .no-results-message p {
        font-size: 1.1rem;
        color: var(--text-secondary);
    }
`;
document.head.appendChild(noResultsStyle);

// Export functions for potential external use
window.FAQ = {
    toggleFAQItem,
    searchFAQs: handleFAQSearch,
    scrollToFAQItem
};
