// Services Page JavaScript

// Initialize services page
document.addEventListener('DOMContentLoaded', function() {
    initializeServicesPage();
});

function initializeServicesPage() {
    setupServiceCards();
    setupServiceAnimations();
    setupServiceButtons();
}

// Service card interactions
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', handleServiceCardHover);
        card.addEventListener('mouseleave', handleServiceCardLeave);
        
        // Add click handler for service buttons
        const serviceBtn = card.querySelector('.service-btn');
        if (serviceBtn) {
            serviceBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handleServiceButtonClick(card);
            });
        }
    });
}

function handleServiceCardHover(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.service-icon');
    
    // Add hover class for additional effects
    card.classList.add('hovered');
    
    // Animate icon
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    }
}

function handleServiceCardLeave(e) {
    const card = e.currentTarget;
    const icon = card.querySelector('.service-icon');
    
    // Remove hover class
    card.classList.remove('hovered');
    
    // Reset icon
    if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
    }
}

function handleServiceButtonClick(card) {
    const serviceType = card.dataset.service;
    const serviceName = card.querySelector('h3').textContent;
    
    // Show service details modal or navigate to contact
    showServiceDetails(serviceType, serviceName);
}

function showServiceDetails(serviceType, serviceName) {
    // Create service details based on type
    const serviceDetails = getServiceDetails(serviceType);
    
    // Show modal or navigate to contact page with pre-filled form
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    const messages = {
        en: `I'm interested in your ${serviceName} service. Please provide more information and a quote.`,
        ar: `أنا مهتم بخدمة ${serviceName} لديكم. يرجى تزويدي بمزيد من المعلومات وعرض سعر.`,
        zh: `我对您的${serviceName}服务感兴趣。请提供更多信息和报价。`
    };
    
    const message = messages[currentLang] || messages.en;
    const phoneNumber = '201067902515';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    window.open(url, '_blank');
}

function getServiceDetails(serviceType) {
    const details = {
        manufacturing: {
            en: {
                title: "Custom Manufacturing",
                description: "Tailored stainless steel manufacturing solutions",
                features: ["Precision cutting", "Custom dimensions", "Quality control"]
            },
            ar: {
                title: "التصنيع المخصص",
                description: "حلول تصنيع فولاذ مقاوم للصدأ مخصصة",
                features: ["قطع دقيق", "أبعاد مخصصة", "مراقبة الجودة"]
            },
            zh: {
                title: "定制制造",
                description: "量身定制的不锈钢制造解决方案",
                features: ["精密切割", "定制尺寸", "质量控制"]
            }
        },
        supply: {
            en: {
                title: "Supply Chain Management",
                description: "Reliable supply chain solutions",
                features: ["Nationwide delivery", "Inventory management", "Real-time tracking"]
            },
            ar: {
                title: "إدارة سلسلة التوريد",
                description: "حلول سلسلة توريد موثوقة",
                features: ["توصيل على مستوى البلاد", "إدارة المخزون", "تتبع في الوقت الفعلي"]
            },
            zh: {
                title: "供应链管理",
                description: "可靠的供应链解决方案",
                features: ["全国配送", "库存管理", "实时跟踪"]
            }
        },
        quality: {
            en: {
                title: "Quality Assurance",
                description: "Comprehensive quality control processes",
                features: ["International standards", "Material testing", "Continuous monitoring"]
            },
            ar: {
                title: "ضمان الجودة",
                description: "عمليات مراقبة جودة شاملة",
                features: ["معايير دولية", "اختبار المواد", "مراقبة مستمرة"]
            },
            zh: {
                title: "质量保证",
                description: "全面的质量控制流程",
                features: ["国际标准", "材料测试", "持续监控"]
            }
        },
        consulting: {
            en: {
                title: "Technical Consulting",
                description: "Expert technical advice and consultation",
                features: ["Material selection", "Project planning", "Technical specifications"]
            },
            ar: {
                title: "الاستشارات التقنية",
                description: "نصائح واستشارات تقنية خبيرة",
                features: ["اختيار المواد", "تخطيط المشاريع", "المواصفات التقنية"]
            },
            zh: {
                title: "技术咨询",
                description: "专业的技术建议和咨询",
                features: ["材料选择", "项目规划", "技术规格"]
            }
        },
        maintenance: {
            en: {
                title: "Maintenance & Support",
                description: "Ongoing maintenance and support services",
                features: ["Regular maintenance", "Emergency support", "Performance optimization"]
            },
            ar: {
                title: "الصيانة والدعم",
                description: "خدمات الصيانة والدعم المستمرة",
                features: ["صيانة منتظمة", "دعم طارئ", "تحسين الأداء"]
            },
            zh: {
                title: "维护和支持",
                description: "持续的维护和支持服务",
                features: ["定期维护", "紧急支持", "性能优化"]
            }
        },
        custom: {
            en: {
                title: "Custom Solutions",
                description: "Bespoke stainless steel solutions",
                features: ["Bespoke design", "Prototype development", "Specialized applications"]
            },
            ar: {
                title: "الحلول المخصصة",
                description: "حلول فولاذ مقاوم للصدأ مخصصة",
                features: ["تصميم مخصص", "تطوير النماذج", "تطبيقات متخصصة"]
            },
            zh: {
                title: "定制解决方案",
                description: "定制不锈钢解决方案",
                features: ["定制设计", "原型开发", "专业应用"]
            }
        }
    };
    
    return details[serviceType] || details.manufacturing;
}

// Service animations
function setupServiceAnimations() {
    // Intersection Observer for service cards
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
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        // Initially pause animation
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
    
    // Observe process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach(step => {
        step.style.animationPlayState = 'paused';
        observer.observe(step);
    });
    
    // Observe industry cards
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

// Service button interactions
function setupServiceButtons() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Handle service selection
            const card = button.closest('.service-card');
            const serviceType = card.dataset.service;
            handleServiceSelection(serviceType);
        });
    });
}

function handleServiceSelection(serviceType) {
    // Track service interest
    console.log(`Service selected: ${serviceType}`);
    
    // You can add analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'service_interest', {
            'service_type': serviceType
        });
    }
}

// Enhanced service card effects
function enhanceServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add ripple effect on click
        card.addEventListener('click', createRippleEffect);
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
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

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    enhanceServiceCards();
});

// Service statistics (if needed for analytics)
function trackServiceInteraction(serviceType, action) {
    const stats = {
        manufacturing: { views: 0, clicks: 0 },
        supply: { views: 0, clicks: 0 },
        quality: { views: 0, clicks: 0 },
        consulting: { views: 0, clicks: 0 },
        maintenance: { views: 0, clicks: 0 },
        custom: { views: 0, clicks: 0 }
    };
    
    // Load existing stats from localStorage
    const existingStats = JSON.parse(localStorage.getItem('serviceStats') || '{}');
    const currentStats = { ...stats, ...existingStats };
    
    if (currentStats[serviceType]) {
        currentStats[serviceType][action]++;
        localStorage.setItem('serviceStats', JSON.stringify(currentStats));
    }
}

// Export functions for potential external use
window.Services = {
    showServiceDetails,
    getServiceDetails,
    trackServiceInteraction
};
