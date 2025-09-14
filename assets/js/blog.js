// Blog Page JavaScript

// Initialize blog page
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogPage();
});

function initializeBlogPage() {
    setupBlogFilters();
    setupBlogSearch();
    setupBlogAnimations();
    setupNewsletterForm();
    setupLoadMore();
}

// Blog filter functionality
function setupBlogFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter;
            
            // Filter posts with animation
            blogPosts.forEach((post, index) => {
                const category = post.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Show post with delay
                    setTimeout(() => {
                        post.classList.remove('hidden');
                        post.style.animation = 'fadeInUp 0.5s ease forwards';
                    }, index * 100);
                } else {
                    // Hide post
                    post.classList.add('hidden');
                }
            });
        });
    });
}

// Blog search functionality
function setupBlogSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Show all posts
            blogPosts.forEach(post => {
                post.classList.remove('hidden');
            });
            return;
        }
        
        // Search in post titles and excerpts
        blogPosts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    }
    
    // Search on input
    searchInput.addEventListener('input', performSearch);
    
    // Search on button click
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
}

// Blog animations
function setupBlogAnimations() {
    // Intersection Observer for blog posts
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
    
    // Observe blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        // Initially pause animation
        post.style.animationPlayState = 'paused';
        observer.observe(post);
    });
}

// Newsletter form functionality
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                subscribeToNewsletter(email);
                emailInput.value = '';
                showNotification('Successfully subscribed to newsletter!', 'success');
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscribeToNewsletter(email) {
    // In a real application, you would send this to your backend
    console.log('Newsletter subscription:', email);
    
    // You can add analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', {
            'email': email
        });
    }
}

// Load more functionality
function setupLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMorePosts();
        });
    }
}

function loadMorePosts() {
    const blogPosts = document.querySelectorAll('.blog-post');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    // Simulate loading more posts
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        // In a real application, you would fetch more posts from an API
        const newPosts = createMockPosts();
        const blogPostsContainer = document.querySelector('.blog-posts');
        
        newPosts.forEach(post => {
            blogPostsContainer.appendChild(post);
        });
        
        loadMoreBtn.textContent = 'Load More Articles';
        loadMoreBtn.disabled = false;
        
        // Re-observe new posts for animations
        setupBlogAnimations();
    }, 1000);
}

function createMockPosts() {
    const mockPosts = [
        {
            title: 'Advanced Welding Techniques',
            category: 'Technical',
            date: 'Nov 10, 2023',
            readTime: '6 min read',
            excerpt: 'Learn about the latest welding techniques for stainless steel applications.'
        },
        {
            title: 'Market Analysis Report',
            category: 'Industry News',
            date: 'Nov 5, 2023',
            readTime: '4 min read',
            excerpt: 'Comprehensive analysis of the stainless steel market trends and forecasts.'
        }
    ];
    
    return mockPosts.map((post, index) => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.dataset.category = post.category.toLowerCase().replace(' ', '-');
        
        article.innerHTML = `
            <div class="post-image">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop&index=${index}" alt="${post.title}">
                <div class="post-category">${post.category}</div>
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-read-time">${post.readTime}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        return article;
    });
}

// Enhanced blog interactions
function enhanceBlogInteractions() {
    const blogPosts = document.querySelectorAll('.blog-post');
    
    blogPosts.forEach(post => {
        // Add hover effects
        post.addEventListener('mouseenter', handlePostHover);
        post.addEventListener('mouseleave', handlePostLeave);
        
        // Add click effects
        post.addEventListener('click', createRippleEffect);
    });
}

function handlePostHover(e) {
    const post = e.currentTarget;
    const image = post.querySelector('.post-image img');
    
    if (image) {
        image.style.transform = 'scale(1.05)';
    }
}

function handlePostLeave(e) {
    const post = e.currentTarget;
    const image = post.querySelector('.post-image img');
    
    if (image) {
        image.style.transform = 'scale(1)';
    }
}

function createRippleEffect(e) {
    const post = e.currentTarget;
    const rect = post.getBoundingClientRect();
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
    
    post.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Blog analytics (if needed)
function trackBlogInteraction(action, details = {}) {
    console.log(`Blog interaction: ${action}`, details);
    
    // You can add analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'blog_interaction', {
            'action': action,
            'details': JSON.stringify(details)
        });
    }
}

// Initialize enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    enhanceBlogInteractions();
});

// Export functions for potential external use
window.Blog = {
    performSearch,
    subscribeToNewsletter,
    loadMorePosts,
    trackBlogInteraction
};
