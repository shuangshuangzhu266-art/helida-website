// Contact Page JavaScript

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
});

function initializeContactPage() {
    setupRFQForm();
    setupFormValidation();
    setupSuccessMessage();
}

// Main RFQ Form functionality
function setupRFQForm() {
    const form = document.getElementById('main-rfq-form');
    
    if (form) {
        form.addEventListener('submit', handleMainRFQSubmit);
    }
}

function handleMainRFQSubmit(e) {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        return;
    }
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    showLoadingState();
    
    // Simulate form processing delay
    setTimeout(() => {
        // Send to WhatsApp
        sendToWhatsApp(data);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        resetForm();
        
        // Hide loading state
        hideLoadingState();
    }, 1500);
}

// Form validation
function setupFormValidation() {
    const form = document.getElementById('main-rfq-form');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateForm() {
    const form = document.getElementById('main-rfq-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldGroup = field.closest('.form-group');
    
    // Clear previous errors
    clearFieldError(e);
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        showFieldError(fieldGroup, getErrorMessage('required', field.name));
        return false;
    }
    
    // Validate email format
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(fieldGroup, getErrorMessage('email', field.name));
            return false;
        }
    }
    
    // Validate phone number
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(fieldGroup, getErrorMessage('phone', field.name));
            return false;
        }
    }
    
    return true;
}

function clearFieldError(e) {
    const field = e.target;
    const fieldGroup = field.closest('.form-group');
    
    if (fieldGroup) {
        fieldGroup.classList.remove('error');
        const errorElement = fieldGroup.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
}

function showFieldError(fieldGroup, message) {
    fieldGroup.classList.add('error');
    
    // Remove existing error message
    const existingError = fieldGroup.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    fieldGroup.appendChild(errorElement);
}

function getErrorMessage(type, fieldName) {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    const messages = {
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number'
        },
        ar: {
            required: 'هذا الحقل مطلوب',
            email: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
            phone: 'يرجى إدخال رقم هاتف صحيح'
        },
        zh: {
            required: '此字段为必填项',
            email: '请输入有效的电子邮件地址',
            phone: '请输入有效的电话号码'
        }
    };
    
    return messages[currentLang]?.[type] || messages.en[type];
}

// Success message functionality
function setupSuccessMessage() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span data-en="Quote request sent successfully! We will contact you soon." data-ar="تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً." data-zh="询价请求发送成功！我们将很快与您联系。">Quote request sent successfully! We will contact you soon.</span>
    `;
    
    // Insert after form title
    const formContainer = document.querySelector('.rfq-form-container');
    const formTitle = formContainer.querySelector('h2');
    formTitle.parentNode.insertBefore(successMessage, formTitle.nextSibling);
}

function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.classList.add('show');
        
        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// Loading state
function showLoadingState() {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
        const loadingTexts = {
            en: 'Sending...',
            ar: 'جاري الإرسال...',
            zh: '发送中...'
        };
        
        submitBtn.innerHTML = `
            <i class="fas fa-spinner"></i>
            ${loadingTexts[currentLang] || loadingTexts.en}
        `;
    }
}

function hideLoadingState() {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
        const buttonTexts = {
            en: 'Send Quote Request',
            ar: 'إرسال طلب عرض السعر',
            zh: '发送询价请求'
        };
        
        submitBtn.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            ${buttonTexts[currentLang] || buttonTexts.en}
        `;
    }
}

// Reset form
function resetForm() {
    const form = document.getElementById('main-rfq-form');
    if (form) {
        form.reset();
        
        // Clear all error states
        const fieldGroups = form.querySelectorAll('.form-group');
        fieldGroups.forEach(group => {
            group.classList.remove('error');
            const errorElement = group.querySelector('.form-error');
            if (errorElement) {
                errorElement.remove();
            }
        });
    }
}

// Send to WhatsApp
function sendToWhatsApp(data) {
    const phoneNumber = '201067902515';
    const message = formatMainRFQMessage(data);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function formatMainRFQMessage(data) {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    const messages = {
        en: `New Quote Request from Website:

Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || 'Not provided'}
Company: ${data.company || 'Not provided'}
Product Interest: ${data.product || 'Not specified'}
Grade Preference: ${data.grade || 'Not specified'}
Quantity: ${data.quantity || 'Not specified'}
Dimensions: ${data.dimensions || 'Not specified'}
Additional Requirements: ${data.requirements || 'None'}

Please contact the customer as soon as possible.`,
        
        ar: `طلب عرض سعر جديد من الموقع:

الاسم: ${data.name}
الموبايل: ${data.mobile}
البريد الإلكتروني: ${data.email || 'غير محدد'}
الشركة: ${data.company || 'غير محدد'}
المنتج المطلوب: ${data.product || 'غير محدد'}
تفضيل الدرجة: ${data.grade || 'غير محدد'}
الكمية: ${data.quantity || 'غير محددة'}
الأبعاد: ${data.dimensions || 'غير محددة'}
المتطلبات الإضافية: ${data.requirements || 'لا يوجد'}

يرجى الاتصال بالعميل في أقرب وقت ممكن.`,
        
        zh: `来自网站的新询价请求:

姓名: ${data.name}
手机: ${data.mobile}
邮箱: ${data.email || '未提供'}
公司: ${data.company || '未提供'}
感兴趣的产品: ${data.product || '未指定'}
等级偏好: ${data.grade || '未指定'}
数量: ${data.quantity || '未指定'}
尺寸: ${data.dimensions || '未指定'}
额外要求: ${data.requirements || '无'}

请尽快联系客户。`
    };
    
    return messages[currentLang] || messages.en;
}

// Update form text based on language
function updateFormText() {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    // Update select options
    const selectOptions = document.querySelectorAll('option[data-en]');
    selectOptions.forEach(option => {
        const text = option.getAttribute(`data-${currentLang}`);
        if (text) {
            option.textContent = text;
        }
    });
}

// Listen for language changes
if (window.SinaSteel) {
    // Override the updateLanguage function to include form text updates
    const originalUpdateLanguage = window.SinaSteel.updateLanguage;
    window.SinaSteel.updateLanguage = function(lang) {
        originalUpdateLanguage(lang);
        updateFormText();
    };
}

// Initialize form text on page load
document.addEventListener('DOMContentLoaded', updateFormText);

// Add smooth scrolling for anchor links
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

// Add animation to form elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe form elements
document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('.form-group, .contact-item, .map-container');
    formElements.forEach(el => observer.observe(el));
});

// Add CSS for animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .form-group,
    .contact-item,
    .map-container {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .form-group.animate-in,
    .contact-item.animate-in,
    .map-container.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .form-group:nth-child(1) { transition-delay: 0.1s; }
    .form-group:nth-child(2) { transition-delay: 0.2s; }
    .form-group:nth-child(3) { transition-delay: 0.3s; }
    .form-group:nth-child(4) { transition-delay: 0.4s; }
    .form-group:nth-child(5) { transition-delay: 0.5s; }
    .form-group:nth-child(6) { transition-delay: 0.6s; }
    .form-group:nth-child(7) { transition-delay: 0.7s; }
    .form-group:nth-child(8) { transition-delay: 0.8s; }
    
    .contact-item:nth-child(1) { transition-delay: 0.1s; }
    .contact-item:nth-child(2) { transition-delay: 0.2s; }
    .contact-item:nth-child(3) { transition-delay: 0.3s; }
    .contact-item:nth-child(4) { transition-delay: 0.4s; }
    .contact-item:nth-child(5) { transition-delay: 0.5s; }
`;
document.head.appendChild(animationStyle);
