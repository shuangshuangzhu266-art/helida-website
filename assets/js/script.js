// Global Variables
let currentLanguage = 'en';
let currentTheme = 'dark';
let currentSlide = 0;
let currentTestimonial = 0;

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const languageButtons = document.querySelectorAll('.lang-btn');
const body = document.body;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    startAnimations();
    
    // Start date/time update with a slight delay to ensure DOM is ready
    setTimeout(() => {
        startDateTimeUpdate();
    }, 100);
});

// Initialize website functionality
function initializeWebsite() {
    // Load saved language preference (defaults to English for first-time visitors)
    loadSavedLanguage();
    
    // Set initial theme
    updateTheme('dark');
    
    // Initialize sliders
    initializeSliders();
    
    // Initialize counters
    initializeCounters();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize form handlers
    initializeFormHandlers();
    
    // Initialize mobile menu
    initializeMobileMenu();
}

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language buttons
    languageButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            updateLanguage(lang);
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Product card interactions
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', handleProductClick);
    });
    
    // Service card interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', handleServiceHover);
    });
    
    // CTA button
    document.querySelector('.cta-button').addEventListener('click', handleCTAClick);
    
    // WhatsApp button
    document.querySelector('.whatsapp-button a').addEventListener('click', handleWhatsAppClick);
}

// Language Management
function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Save language preference to localStorage
    localStorage.setItem('sinaSteelLanguage', lang);
    
    // Update active language button
    languageButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all text elements with data attributes
    document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update document direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Update font family based on language
    updateFontFamily(lang);
}

// Update font family based on language
function updateFontFamily(lang) {
    const root = document.documentElement;
    switch(lang) {
        case 'ar':
            root.style.fontFamily = "'Noto Sans Arabic', sans-serif";
            break;
        default:
            root.style.fontFamily = "'Inter', sans-serif";
    }
}

// Theme Management
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(currentTheme);
}

function updateTheme(theme) {
    currentTheme = theme;
    
    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
}

// Load saved theme
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        updateTheme(savedTheme);
    }
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('sinaSteelLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        updateLanguage(savedLanguage);
        return savedLanguage;
    }
    // Default to English for first-time visitors
    updateLanguage('en');
    return 'en';
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
}

// Mobile menu management
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

function initializeMobileMenu() {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// Initialize sliders
function initializeSliders() {
    // Manufacturing process slider
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    if (sliderTrack && slides.length > 0) {
        // Auto-rotate slides
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000);
        
        // Touch/swipe support
        let startX = 0;
        let isDragging = false;
        
        sliderTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        sliderTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        sliderTrack.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swipe left - next slide
                    currentSlide = (currentSlide + 1) % slides.length;
                } else {
                    // Swipe right - previous slide
                    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
                }
                sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
        });
    }
    
    // Testimonials slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (testimonialCards.length > 0) {
        setInterval(() => {
            testimonialCards[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            testimonialCards[currentTestimonial].classList.add('active');
        }, 6000);
    }
}

// Initialize counters
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    };
    
    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize form handlers
function initializeFormHandlers() {
    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            scrollToSection('contact');
        });
    }
    
    // Product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const product = card.dataset.product;
            openProductPage(product);
        });
    });
    
    // Contact forms
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    
    // Form validation
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formType = form.dataset.formType || 'general';
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Send to WhatsApp
        sendToWhatsApp(formData, formType);
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
    }, 1000);
}

// Validate form
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    const isRequired = field.hasAttribute('required');
    
    // Clear previous errors
    clearFieldError(e);
    
    // Check if required field is empty
    if (isRequired && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    // Email validation
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Send form data to WhatsApp
function sendToWhatsApp(formData, formType) {
    const phoneNumber = '201067902515';
    let message = '';
    
    // Build message based on form type
    if (formType === 'rfq') {
        message = buildRFQMessage(formData);
    } else {
        message = buildContactMessage(formData);
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Build RFQ message
function buildRFQMessage(formData) {
    const currentLang = currentLanguage;
    const messages = {
        en: `New RFQ Request:
Name: ${formData.get('name') || 'Not provided'}
Email: ${formData.get('email') || 'Not provided'}
Phone: ${formData.get('phone') || 'Not provided'}
Product: ${formData.get('product') || 'Not specified'}
Quantity: ${formData.get('quantity') || 'Not specified'}
Message: ${formData.get('message') || 'No additional message'}`,
        ar: `طلب عرض سعر جديد:
الاسم: ${formData.get('name') || 'غير محدد'}
البريد الإلكتروني: ${formData.get('email') || 'غير محدد'}
الهاتف: ${formData.get('phone') || 'غير محدد'}
المنتج: ${formData.get('product') || 'غير محدد'}
الكمية: ${formData.get('quantity') || 'غير محدد'}
الرسالة: ${formData.get('message') || 'لا توجد رسالة إضافية'}`,
    };
    
    return messages[currentLang] || messages.en;
}

// Build contact message
function buildContactMessage(formData) {
    const currentLang = currentLanguage;
    const messages = {
        en: `New Contact Request:
Name: ${formData.get('name') || 'Not provided'}
Email: ${formData.get('email') || 'Not provided'}
Phone: ${formData.get('phone') || 'Not provided'}
Subject: ${formData.get('subject') || 'Not specified'}
Message: ${formData.get('message') || 'No message'}`,
        ar: `طلب اتصال جديد:
الاسم: ${formData.get('name') || 'غير محدد'}
البريد الإلكتروني: ${formData.get('email') || 'غير محدد'}
الهاتف: ${formData.get('phone') || 'غير محدد'}
الموضوع: ${formData.get('subject') || 'غير محدد'}
الرسالة: ${formData.get('message') || 'لا توجد رسالة'}`,
    };
    
    return messages[currentLang] || messages.en;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Handle product click
function handleProductClick(e) {
    const product = e.currentTarget.dataset.product;
    openProductPage(product);
}

// Open product page (placeholder for now)
function openProductPage(product) {
    // This would typically navigate to a product detail page
    console.log(`Opening product page for: ${product}`);
    // For now, scroll to contact section
    scrollToSection('contact');
}

// Handle service hover
function handleServiceHover(e) {
    const icon = e.currentTarget.querySelector('.service-icon');
    icon.style.animation = 'bounce 0.6s ease';
    
    setTimeout(() => {
        icon.style.animation = '';
    }, 600);
}

// Handle CTA click
function handleCTAClick() {
    scrollToSection('contact');
}

// Handle WhatsApp click
function handleWhatsAppClick(e) {
    e.preventDefault();
    const phoneNumber = '201067902515';
    const message = getWhatsAppMessage();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Get WhatsApp message based on current language
function getWhatsAppMessage() {
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    const messages = {
        en: `Hello! I'm interested in your stainless steel products. Please provide me with more information and a quote.`,
        ar: `مرحباً! أنا مهتم بمنتجاتكم من الفولاذ المقاوم للصدأ. يرجى تزويدي بمزيد من المعلومات وعرض سعر.`,
    };
    return messages[currentLang] || messages.en;
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Start animations
function startAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .service-card, .blog-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Update current date and time
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
        const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
        
        const dateString = now.toLocaleDateString(locale, dateOptions);
        const timeString = now.toLocaleTimeString(locale, timeOptions);
        
        // Get company status
        const companyStatus = getCompanyStatus(now, currentLang);
        
        // Add a brief flash effect when time updates
        const timeElement = dateElement.querySelector('.time-text');
        if (timeElement) {
            timeElement.style.animation = 'timeUpdate 0.5s ease';
            setTimeout(() => {
                timeElement.style.animation = 'pulse 2s infinite';
            }, 500);
        }
        
        dateElement.innerHTML = `
            <div class="date-text">${dateString}</div>
            <div class="time-text">${timeString}</div>
            <div class="company-status">
                <div class="status-indicator ${companyStatus.status}"></div>
                <div class="status-text ${companyStatus.status}">${companyStatus.text}</div>
            </div>
        `;
    } else {
        // Try to find by class name as fallback
        const dateElementByClass = document.querySelector('.date-display');
        if (dateElementByClass) {
            // Update the element by class
            const now = new Date();
            const dateOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            
            const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
            const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
            
            const dateString = now.toLocaleDateString(locale, dateOptions);
            const timeString = now.toLocaleTimeString(locale, timeOptions);
            
            // Get company status
            const companyStatus = getCompanyStatus(now, currentLang);
            
            dateElementByClass.innerHTML = `
                <div class="date-text">${dateString}</div>
                <div class="time-text">${timeString}</div>
                <div class="company-status">
                    <div class="status-indicator ${companyStatus.status}"></div>
                    <div class="status-text ${companyStatus.status}">${companyStatus.text}</div>
                </div>
            `;
        }
    }
}

// Get company status based on current time and day
function getCompanyStatus(now, currentLang = 'en') {
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    // Company hours: Sunday to Thursday 8:00 AM - 6:00 PM, Closed on Friday
    const isSunday = dayOfWeek === 0;
    const isMonday = dayOfWeek === 1;
    const isTuesday = dayOfWeek === 2;
    const isWednesday = dayOfWeek === 3;
    const isThursday = dayOfWeek === 4;
    const isFriday = dayOfWeek === 5;
    const isSaturday = dayOfWeek === 6;
    
    // Business hours in minutes from midnight
    const openTime = 8 * 60; // 8:00 AM
    const closeTime = 18 * 60; // 6:00 PM
    
    let status, text;
    
    if (isFriday) {
        status = 'closed';
        text = currentLang === 'ar' ? 'مغلق - الجمعة' : 'Closed - Friday';
    } else if (isSunday || isMonday || isTuesday || isWednesday || isThursday || isSaturday) {
        if (currentTime >= openTime && currentTime < closeTime) {
            status = 'open';
            if (isSunday) {
                text = currentLang === 'ar' ? 'مفتوح - الأحد (حتى 6:00 م)' : 'Open - Sunday (until 6:00 PM)';
            } else if (isSaturday) {
                text = currentLang === 'ar' ? 'مفتوح - السبت (حتى 6:00 م)' : 'Open - Saturday (until 6:00 PM)';
            } else {
                text = currentLang === 'ar' ? 'مفتوح - حتى 6:00 م' : 'Open - until 6:00 PM';
            }
        } else {
            status = 'closed';
            if (isSunday) {
                text = currentLang === 'ar' ? 'مغلق - الأحد (خارج ساعات العمل)' : 'Closed - Sunday (outside business hours)';
            } else if (isSaturday) {
                text = currentLang === 'ar' ? 'مغلق - السبت (خارج ساعات العمل)' : 'Closed - Saturday (outside business hours)';
            } else {
                text = currentLang === 'ar' ? 'مغلق - خارج ساعات العمل' : 'Closed - Outside business hours';
            }
        }
    } else {
        status = 'closed';
        text = currentLang === 'ar' ? 'مغلق' : 'Closed';
    }
    
    return { status, text };
}

// Update date and time every second
function startDateTimeUpdate() {
    // Clear any existing interval
    if (window.dateTimeInterval) {
        clearInterval(window.dateTimeInterval);
    }
    
    // Initial update
    updateCurrentDate();
    
    // Set up interval for updates
    window.dateTimeInterval = setInterval(() => {
        updateCurrentDate();
    }, 1000);
    
    // Also try to update after a short delay to ensure DOM is ready
    setTimeout(() => {
        updateCurrentDate();
    }, 100);
}

// Form handling for RFQ forms
function handleRFQForm(formData) {
    const phoneNumber = '201067902515';
    const message = formatRFQMessage(formData);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Format RFQ message
function formatRFQMessage(data) {
    const messages = {
        en: `RFQ Request:
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || 'Not provided'}
Product: ${data.product || 'General inquiry'}
Quantity: ${data.quantity || 'Not specified'}
Message: ${data.message || 'Please provide quote'}`,
        
        ar: `طلب عرض سعر:
الاسم: ${data.name}
الموبايل: ${data.mobile}
البريد الإلكتروني: ${data.email || 'غير محدد'}
المنتج: ${data.product || 'استفسار عام'}
الكمية: ${data.quantity || 'غير محددة'}
الرسالة: ${data.message || 'يرجى تقديم عرض سعر'}`,
        
    };
    
    return messages[currentLanguage] || messages.en;
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScroll = debounce(handleNavbarScroll, 10);
window.addEventListener('scroll', debouncedScroll);

// Load saved preferences
document.addEventListener('DOMContentLoaded', () => {
    loadSavedTheme();
});

// Additional fallback for date display
window.addEventListener('load', () => {
    // Ensure date is displayed even if previous attempts failed
    setTimeout(() => {
        updateCurrentDate();
        // Start the interval again if it wasn't started properly
        if (!window.dateTimeInterval) {
            startDateTimeUpdate();
        }
    }, 200);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Manual clock update function for testing
function forceUpdateClock() {
    updateCurrentDate();
}

// Export functions for global access
window.SinaSteel = {
    updateLanguage,
    updateTheme,
    handleRFQForm,
    scrollToSection,
    forceUpdateClock,
    updateCurrentDate
};
