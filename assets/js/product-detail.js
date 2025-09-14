// Product Detail Page JavaScript

// Product data (same as in products.js)
const productData = {
    sheets: {
        name: {
            en: "Stainless Steel Sheets",
            ar: "ألواح الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "High-quality stainless steel sheets in grades 304, 316, and 201. Perfect for food, pharmaceutical, and chemical industries. All materials are food-grade compliant with international standards.",
            ar: "ألواح فولاذ مقاوم للصدأ عالية الجودة بدرجات 304 و 316 و 201. مثالية لصناعات الأغذية والأدوية والكيماويات. جميع المواد متوافقة مع معايير الأغذية الدولية."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Thickness": "0.5mm - 50mm",
                "Width": "1000mm - 2000mm",
                "Length": "2000mm - 6000mm",
                "Surface Finish": "2B, BA, No.4, HL",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "السماكة": "0.5مم - 50مم",
                "العرض": "1000مم - 2000مم",
                "الطول": "2000مم - 6000مم",
                "نهاية السطح": "2B، BA، No.4، HL",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    },
    coils: {
        name: {
            en: "Stainless Steel Coils",
            ar: "لفائف الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "Premium stainless steel coils in various grades and dimensions. Ideal for continuous processing and manufacturing applications.",
            ar: "لفائف فولاذ مقاوم للصدأ متميزة بدرجات وأبعاد مختلفة. مثالية للتجهيز المستمر والتطبيقات التصنيعية."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Thickness": "0.3mm - 6mm",
                "Width": "1000mm - 2000mm",
                "Coil Weight": "3-20 tons",
                "Surface Finish": "2B, BA",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "السماكة": "0.3مم - 6مم",
                "العرض": "1000مم - 2000مم",
                "وزن اللفافة": "3-20 طن",
                "نهاية السطح": "2B، BA",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    },
    angles: {
        name: {
            en: "Stainless Steel Angles",
            ar: "زوايا الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "L-shaped stainless steel angles for structural applications. Available in various sizes and grades for construction and industrial use.",
            ar: "زوايا فولاذ مقاوم للصدأ على شكل L للتطبيقات الهيكلية. متوفرة بأحجام ودرجات مختلفة للبناء والاستخدام الصناعي."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Sizes": "20x20mm - 200x200mm",
                "Thickness": "2mm - 20mm",
                "Length": "6000mm standard",
                "Surface Finish": "2B, BA",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "الأحجام": "20x20مم - 200x200مم",
                "السماكة": "2مم - 20مم",
                "الطول": "6000مم قياسي",
                "نهاية السطح": "2B، BA",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    },
    flats: {
        name: {
            en: "Stainless Steel Flats",
            ar: "مسطحات الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "Rectangular stainless steel bars for precision machining and manufacturing applications. High-quality material for various industrial uses.",
            ar: "قضبان فولاذ مقاوم للصدأ مستطيلة للتشغيل الدقيق والتطبيقات التصنيعية. مادة عالية الجودة للاستخدامات الصناعية المختلفة."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Thickness": "3mm - 50mm",
                "Width": "10mm - 200mm",
                "Length": "6000mm standard",
                "Surface Finish": "2B, BA, No.4",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "السماكة": "3مم - 50مم",
                "العرض": "10مم - 200مم",
                "الطول": "6000مم قياسي",
                "نهاية السطح": "2B، BA، No.4",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    },
    pipes: {
        name: {
            en: "Stainless Steel Pipes",
            ar: "أنابيب الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "Seamless and welded stainless steel pipes for industrial applications. Perfect for fluid transport and structural applications.",
            ar: "أنابيب فولاذ مقاوم للصدأ بدون لحام ومطوية للتطبيقات الصناعية. مثالية لنقل السوائل والتطبيقات الهيكلية."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Diameter": "6mm - 500mm",
                "Wall Thickness": "0.5mm - 20mm",
                "Length": "6000mm standard",
                "Type": "Seamless & Welded",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "القطر": "6مم - 500مم",
                "سماكة الجدار": "0.5مم - 20مم",
                "الطول": "6000مم قياسي",
                "النوع": "بدون لحام ومطوي",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    },
    bars: {
        name: {
            en: "Stainless Steel Bars",
            ar: "قضبان الفولاذ المقاوم للصدأ"
        },
        description: {
            en: "Round and square stainless steel bars for machining and manufacturing. High precision material for various industrial applications.",
            ar: "قضبان فولاذ مقاوم للصدأ دائرية ومربعة للتشغيل والتصنيع. مادة عالية الدقة للتطبيقات الصناعية المختلفة."
        },
        specifications: {
            en: {
                "Grade": "304, 316, 201",
                "Diameter": "5mm - 200mm",
                "Length": "6000mm standard",
                "Shape": "Round & Square",
                "Surface Finish": "2B, BA, No.4",
                "Standards": "ASTM, DIN, EN",
                "Food Grade": "Yes (304/316)",
                "Warranty": "1 Year"
            },
            ar: {
                "الدرجة": "304، 316، 201",
                "القطر": "5مم - 200مم",
                "الطول": "6000مم قياسي",
                "الشكل": "دائري ومربع",
                "نهاية السطح": "2B، BA، No.4",
                "المعايير": "ASTM، DIN، EN",
                "صالح للأغذية": "نعم (304/316)",
                "الضمان": "سنة واحدة"
            }
        }
    }
};

// Initialize product detail page
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference first
    loadSavedLanguageForProductDetail();
    initializeProductDetail();
});

// Load saved language preference for product detail page
function loadSavedLanguageForProductDetail() {
    const savedLanguage = localStorage.getItem('sinaSteelLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        // Update the global currentLanguage variable
        if (window.SinaSteel) {
            window.SinaSteel.currentLanguage = savedLanguage;
        }
        // Update document attributes
        if (savedLanguage === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', savedLanguage);
        }
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === savedLanguage) {
                btn.classList.add('active');
            }
        });
    }
}

function initializeProductDetail() {
    // Get product type from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('product') || 'sheets';
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Load product data
    loadProductData(productType);
    
    // Setup form
    setupQuoteForm();
    
    // Setup image gallery
    setupImageGallery();
}

// Setup language switching for product detail page
function setupLanguageSwitching() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            switchLanguage(lang);
        });
    });
}

// Switch language function for product detail page
function switchLanguage(lang) {
    // Save language preference
    localStorage.setItem('sinaSteelLanguage', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update document direction and language
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
    
    // Update all text elements with data attributes
    document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Reload product data with new language
    const urlParams = new URLSearchParams(window.location.search);
    const productType = urlParams.get('product') || 'sheets';
    loadProductData(productType);
}

function loadProductData(productType) {
    const product = productData[productType];
    if (!product) {
        console.error('Product not found:', productType);
        return;
    }
    
    // Get current language from localStorage or default to English
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    // Update page title
    document.getElementById('page-title').textContent = `${product.name[currentLang]} - Sina Steel`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name[currentLang];
    
    // Update product name
    document.getElementById('product-name').textContent = product.name[currentLang];
    
    // Update product description
    document.getElementById('product-description').textContent = product.description[currentLang];
    
    // Update specifications table
    updateSpecificationsTable(product.specifications[currentLang] || product.specifications.en);
    
    // Update images
    updateProductImages(productType);
}

function updateSpecificationsTable(specifications) {
    const tbody = document.getElementById('specifications-table');
    tbody.innerHTML = '';
    
    Object.entries(specifications).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="spec-label">${key}</td>
            <td class="spec-value">${value}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateProductImages(productType) {
    const baseImageUrl = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12';
    
    // Update main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = `${baseImageUrl}?w=600&h=400&fit=crop&category=${productType}`;
    mainImage.alt = `${productType} main image`;
    
    // Update thumbnails
    for (let i = 1; i <= 4; i++) {
        const thumb = document.getElementById(`thumb-${i}`);
        if (thumb) {
            thumb.src = `${baseImageUrl}?w=100&h=100&fit=crop&category=${productType}&index=${i}`;
            thumb.alt = `${productType} thumbnail ${i}`;
        }
    }
}

function setupImageGallery() {
    // Thumbnail click handlers are set via onclick in HTML
}

function changeMainImage(thumbnail) {
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Update main image
    const mainImage = document.getElementById('main-product-image');
    const thumbImage = thumbnail.querySelector('img');
    mainImage.src = thumbImage.src.replace('100&h=100', '600&h=400');
}

function openImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const mainImage = document.getElementById('main-product-image');
    
    modalImage.src = mainImage.src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupQuoteForm() {
    const form = document.getElementById('product-quote-form');
    if (form) {
        form.addEventListener('submit', handleQuoteSubmit);
    }
}

function handleQuoteSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add product information
    const productName = document.getElementById('product-name').textContent;
    data.product = productName;
    
    // Send to WhatsApp
    sendToWhatsApp(data);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    e.target.reset();
}

function sendToWhatsApp(data) {
    const phoneNumber = '201067902515';
    const message = formatRFQMessage(data);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function formatRFQMessage(data) {
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: `RFQ Request:
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || 'Not provided'}
Product: ${data.product || 'General inquiry'}
Quantity: ${data.quantity || 'Not specified'}
Requirements: ${data.requirements || 'Please provide quote'}`,
        
        ar: `طلب عرض سعر:
الاسم: ${data.name}
الموبايل: ${data.mobile}
البريد الإلكتروني: ${data.email || 'غير محدد'}
المنتج: ${data.product || 'استفسار عام'}
الكمية: ${data.quantity || 'غير محددة'}
المتطلبات: ${data.requirements || 'يرجى تقديم عرض سعر'}`
    };
    
    return messages[currentLang] || messages.en;
}

function showSuccessMessage() {
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: 'Quote request sent successfully! We will contact you soon.',
        ar: 'تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً.'
    };
    
    const message = messages[currentLang] || messages.en;
    
    // Create and show notification
    const notification = document.createElement('div');
    notification.className = 'notification notification-success';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openWhatsApp() {
    const phoneNumber = '201067902515';
    const productName = document.getElementById('product-name').textContent;
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: `Hello! I'm interested in ${productName}. Please provide me with more information and a quote.`,
        ar: `مرحباً! أنا مهتم بـ ${productName}. يرجى تزويدي بمزيد من المعلومات وعرض سعر.`
    };
    
    const message = messages[currentLang] || messages.en;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Close image modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('image-modal');
    if (e.target === modal) {
        closeImageModal();
    }
});

// Close image modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});
