// Quick Contact Page JavaScript

// Initialize quick contact page
document.addEventListener('DOMContentLoaded', function() {
    initializeQuickContactPage();
});

function initializeQuickContactPage() {
    updateCurrentTime();
    setupContactMethods();
    setupQuickForm();
    setupWorkingHours();
    setupContactInfo();
    startTimeUpdate();
}

// Update current time
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeElement.textContent = timeString;
    }
}

// Start time update interval
function startTimeUpdate() {
    setInterval(updateCurrentTime, 1000);
}

// Contact methods interactions
function setupContactMethods() {
    const methodCards = document.querySelectorAll('.method-card');
    
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', handleMethodHover);
        card.addEventListener('mouseleave', handleMethodLeave);
        card.addEventListener('click', createRippleEffect);
    });
}

function handleMethodHover(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.method-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.color = 'var(--accent-color)';
    }
}

function handleMethodLeave(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.method-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '';
    }
}

// Quick form setup
function setupQuickForm() {
    const form = document.querySelector('.quick-form');
    if (form) {
        form.addEventListener('submit', handleQuickFormSubmit);
        
        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handleQuickFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(form)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Send to WhatsApp
        sendToWhatsApp(formData, 'contact');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Message sent successfully!', 'success');
    }, 1000);
}

// Clear form function
function clearForm() {
    const form = document.querySelector('.quick-form');
    if (form) {
        form.reset();
        
        // Clear all field errors
        const errorElements = form.querySelectorAll('.field-error');
        errorElements.forEach(error => error.remove());
        
        // Remove error classes
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => input.classList.remove('error'));
        
        showNotification('Form cleared successfully!', 'info');
    }
}

// Working hours setup
function setupWorkingHours() {
    const hoursRows = document.querySelectorAll('.hours-row');
    
    hoursRows.forEach(row => {
        row.addEventListener('mouseenter', handleHoursHover);
        row.addEventListener('mouseleave', handleHoursLeave);
    });
}

function handleHoursHover(e) {
    const row = e.currentTarget;
    if (!row.classList.contains('closed')) {
        row.style.backgroundColor = 'var(--accent-color)';
        row.style.color = 'var(--primary-color)';
    }
}

function handleHoursLeave(e) {
    const row = e.currentTarget;
    if (!row.classList.contains('closed')) {
        row.style.backgroundColor = '';
        row.style.color = '';
    }
}

// Contact info setup
function setupContactInfo() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', handleInfoHover);
        item.addEventListener('mouseleave', handleInfoLeave);
        item.addEventListener('click', createRippleEffect);
    });
}

function handleInfoHover(e) {
    const item = e.currentTarget;
    const icon = item.querySelector('.info-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.color = 'var(--accent-color)';
    }
}

function handleInfoLeave(e) {
    const item = e.currentTarget;
    const icon = item.querySelector('.info-icon');
    
    if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.color = '';
    }
}

// Ripple effect
function createRippleEffect(e) {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
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
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Form validation
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

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Send to WhatsApp
function sendToWhatsApp(formData, formType) {
    const phoneNumber = '201067902515';
    let message = '';
    
    if (formType === 'contact') {
        message = buildContactMessage(formData);
    } else {
        message = buildGeneralMessage(formData);
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function buildContactMessage(formData) {
    const currentLang = currentLanguage || 'en';
    const messages = {
        en: `Quick Contact Request:
Name: ${formData.get('name') || 'Not provided'}
Phone: ${formData.get('phone') || 'Not provided'}
Email: ${formData.get('email') || 'Not provided'}
Subject: ${formData.get('subject') || 'Not specified'}
Message: ${formData.get('message') || 'No message'}`,
        ar: `طلب اتصال سريع:
الاسم: ${formData.get('name') || 'غير محدد'}
الهاتف: ${formData.get('phone') || 'غير محدد'}
البريد الإلكتروني: ${formData.get('email') || 'غير محدد'}
الموضوع: ${formData.get('subject') || 'غير محدد'}
الرسالة: ${formData.get('message') || 'لا توجد رسالة'}`,
        zh: `快速联系请求:
姓名: ${formData.get('name') || '未提供'}
电话: ${formData.get('phone') || '未提供'}
电子邮件: ${formData.get('email') || '未提供'}
主题: ${formData.get('subject') || '未指定'}
消息: ${formData.get('message') || '无消息'}`
    };
    
    return messages[currentLang] || messages.en;
}

function buildGeneralMessage(formData) {
    const currentLang = currentLanguage || 'en';
    const messages = {
        en: `New Inquiry:
Name: ${formData.get('name') || 'Not provided'}
Phone: ${formData.get('phone') || 'Not provided'}
Email: ${formData.get('email') || 'Not provided'}
Message: ${formData.get('message') || 'No message'}`,
        ar: `استفسار جديد:
الاسم: ${formData.get('name') || 'غير محدد'}
الهاتف: ${formData.get('phone') || 'غير محدد'}
البريد الإلكتروني: ${formData.get('email') || 'غير محدد'}
الرسالة: ${formData.get('message') || 'لا توجد رسالة'}`,
        zh: `新咨询:
姓名: ${formData.get('name') || '未提供'}
电话: ${formData.get('phone') || '未提供'}
电子邮件: ${formData.get('email') || '未提供'}
消息: ${formData.get('message') || '无消息'}`
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

// Export functions for potential external use
window.QuickContact = {
    updateCurrentTime,
    clearForm,
    setupContactMethods,
    setupQuickForm,
    setupWorkingHours,
    setupContactInfo
};
