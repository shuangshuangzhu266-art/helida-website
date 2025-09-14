// Products Page JavaScript

// Product data
const productData = {
    sheets: {
        name: {
            en: "Stainless Steel Sheets",
            ar: "ألواح الفولاذ المقاوم للصدأ",
            zh: "不锈钢板材"
        },
        description: {
            en: "High-quality stainless steel sheets in grades 304, 316, and 201. Perfect for food, pharmaceutical, and chemical industries. All materials are food-grade compliant with international standards.",
            ar: "ألواح فولاذ مقاوم للصدأ عالية الجودة بدرجات 304 و 316 و 201. مثالية لصناعات الأغذية والأدوية والكيماويات. جميع المواد متوافقة مع معايير الأغذية الدولية.",
            zh: "304、316和201等级的高质量不锈钢板材。适用于食品、制药和化学工业。所有材料均符合国际食品级标准。"
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
            },
            zh: {
                "等级": "304、316、201",
                "厚度": "0.5mm - 50mm",
                "宽度": "1000mm - 2000mm",
                "长度": "2000mm - 6000mm",
                "表面处理": "2B、BA、No.4、HL",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    },
    coils: {
        name: {
            en: "Stainless Steel Coils",
            ar: "لفائف الفولاذ المقاوم للصدأ",
            zh: "不锈钢卷材"
        },
        description: {
            en: "Premium stainless steel coils in various grades and dimensions. Ideal for continuous processing and manufacturing applications.",
            ar: "لفائف فولاذ مقاوم للصدأ متميزة بدرجات وأبعاد مختلفة. مثالية للتجهيز المستمر والتطبيقات التصنيعية.",
            zh: "各种等级和尺寸的优质不锈钢卷材。适用于连续加工和制造应用。"
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
            },
            zh: {
                "等级": "304、316、201",
                "厚度": "0.3mm - 6mm",
                "宽度": "1000mm - 2000mm",
                "卷重": "3-20吨",
                "表面处理": "2B、BA",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    },
    angles: {
        name: {
            en: "Stainless Steel Angles",
            ar: "زوايا الفولاذ المقاوم للصدأ",
            zh: "不锈钢角钢"
        },
        description: {
            en: "L-shaped stainless steel angles for structural applications. Available in various sizes and grades for construction and industrial use.",
            ar: "زوايا فولاذ مقاوم للصدأ على شكل L للتطبيقات الهيكلية. متوفرة بأحجام ودرجات مختلفة للبناء والاستخدام الصناعي.",
            zh: "用于结构应用的L型不锈钢角钢。提供各种尺寸和等级，适用于建筑和工业用途。"
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
            },
            zh: {
                "等级": "304、316、201",
                "尺寸": "20x20mm - 200x200mm",
                "厚度": "2mm - 20mm",
                "长度": "6000mm标准",
                "表面处理": "2B、BA",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    },
    flats: {
        name: {
            en: "Stainless Steel Flats",
            ar: "مسطحات الفولاذ المقاوم للصدأ",
            zh: "不锈钢扁钢"
        },
        description: {
            en: "Rectangular stainless steel bars for precision machining and manufacturing applications. High-quality material for various industrial uses.",
            ar: "قضبان فولاذ مقاوم للصدأ مستطيلة للتشغيل الدقيق والتطبيقات التصنيعية. مادة عالية الجودة للاستخدامات الصناعية المختلفة.",
            zh: "用于精密加工和制造应用的矩形不锈钢棒材。适用于各种工业用途的高质量材料。"
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
            },
            zh: {
                "等级": "304、316、201",
                "厚度": "3mm - 50mm",
                "宽度": "10mm - 200mm",
                "长度": "6000mm标准",
                "表面处理": "2B、BA、No.4",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    },
    pipes: {
        name: {
            en: "Stainless Steel Pipes",
            ar: "أنابيب الفولاذ المقاوم للصدأ",
            zh: "不锈钢管材"
        },
        description: {
            en: "Seamless and welded stainless steel pipes for industrial applications. Perfect for fluid transport and structural applications.",
            ar: "أنابيب فولاذ مقاوم للصدأ بدون لحام ومطوية للتطبيقات الصناعية. مثالية لنقل السوائل والتطبيقات الهيكلية.",
            zh: "用于工业应用的无缝和焊接不锈钢管材。适用于流体传输和结构应用。"
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
            },
            zh: {
                "等级": "304、316、201",
                "直径": "6mm - 500mm",
                "壁厚": "0.5mm - 20mm",
                "长度": "6000mm标准",
                "类型": "无缝和焊接",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    },
    bars: {
        name: {
            en: "Stainless Steel Bars",
            ar: "قضبان الفولاذ المقاوم للصدأ",
            zh: "不锈钢棒材"
        },
        description: {
            en: "Round and square stainless steel bars for machining and manufacturing. High precision material for various industrial applications.",
            ar: "قضبان فولاذ مقاوم للصدأ دائرية ومربعة للتشغيل والتصنيع. مادة عالية الدقة للتطبيقات الصناعية المختلفة.",
            zh: "用于加工和制造的圆形和方形不锈钢棒材。适用于各种工业应用的高精度材料。"
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
            },
            zh: {
                "等级": "304、316、201",
                "直径": "5mm - 200mm",
                "长度": "6000mm标准",
                "形状": "圆形和方形",
                "表面处理": "2B、BA、No.4",
                "标准": "ASTM、DIN、EN",
                "食品级": "是 (304/316)",
                "保修": "1年"
            }
        }
    }
};

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
});

function initializeProductsPage() {
    setupFilterButtons();
    setupProductModals();
    setupRFQForms();
}

// Filter functionality
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter;
            
            // Filter products
            productItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Modal functionality
function setupProductModals() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    
    // Open modal
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productItem = btn.closest('.product-item');
            const category = productItem.dataset.category;
            openProductModal(category);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openProductModal(category) {
    const modal = document.getElementById('product-modal');
    const product = productData[category];
    
    if (!product) return;
    
    // Update modal content
    updateModalContent(product, category);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease';
}

function updateModalContent(product, category) {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    // Update product name
    const nameElement = document.getElementById('modal-product-name');
    if (nameElement) {
        nameElement.textContent = product.name[currentLang] || product.name.en;
    }
    
    // Update product description
    const descElement = document.getElementById('modal-product-description');
    if (descElement) {
        descElement.textContent = product.description[currentLang] || product.description.en;
    }
    
    // Update specifications table
    const specsTable = document.getElementById('specs-table');
    if (specsTable && product.specifications) {
        const tbody = specsTable.querySelector('tbody');
        tbody.innerHTML = '';
        
        const specs = product.specifications[currentLang] || product.specifications.en;
        Object.entries(specs).forEach(([key, value]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Update main image
    const mainImage = document.getElementById('modal-main-image');
    if (mainImage) {
        mainImage.src = `https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&category=${category}`;
    }
    
    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.src = `https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop&category=${category}&index=${index}`;
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src.replace('100&h=100', '600&h=400');
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// RFQ Form functionality
function setupRFQForms() {
    const rfqForm = document.getElementById('product-rfq-form');
    
    if (rfqForm) {
        rfqForm.addEventListener('submit', handleRFQSubmit);
    }
}

function handleRFQSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Add product information
    const modal = document.getElementById('product-modal');
    const productName = document.getElementById('modal-product-name');
    if (productName) {
        data.product = productName.textContent;
    }
    
    // Send to WhatsApp
    sendToWhatsApp(data);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    e.target.reset();
    
    // Close modal
    closeModal();
}

function sendToWhatsApp(data) {
    const phoneNumber = '201067902515';
    const message = formatRFQMessage(data);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function formatRFQMessage(data) {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    const messages = {
        en: `RFQ Request:
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email || 'Not provided'}
Product: ${data.product || 'General inquiry'}
Quantity: ${data.quantity || 'Not specified'}
Dimensions: ${data.dimensions || 'Not specified'}
Requirements: ${data.requirements || 'Please provide quote'}`,
        
        ar: `طلب عرض سعر:
الاسم: ${data.name}
الموبايل: ${data.mobile}
البريد الإلكتروني: ${data.email || 'غير محدد'}
المنتج: ${data.product || 'استفسار عام'}
الكمية: ${data.quantity || 'غير محددة'}
الأبعاد: ${data.dimensions || 'غير محددة'}
المتطلبات: ${data.requirements || 'يرجى تقديم عرض سعر'}`,
        
        zh: `询价请求:
姓名: ${data.name}
手机: ${data.mobile}
邮箱: ${data.email || '未提供'}
产品: ${data.product || '一般咨询'}
数量: ${data.quantity || '未指定'}
尺寸: ${data.dimensions || '未指定'}
要求: ${data.requirements || '请提供报价'}`
    };
    
    return messages[currentLang] || messages.en;
}

function showSuccessMessage() {
    const currentLang = window.SinaSteel ? window.SinaSteel.currentLanguage || 'en' : 'en';
    
    const messages = {
        en: 'Quote request sent successfully! We will contact you soon.',
        ar: 'تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً.',
        zh: '询价请求发送成功！我们将很快与您联系。'
    };
    
    const message = messages[currentLang] || messages.en;
    
    // Create and show notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: var(--primary-color);
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
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

// Responsive modal adjustments
function adjustModalForMobile() {
    const modal = document.getElementById('product-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    if (window.innerWidth <= 768) {
        modalBody.style.gridTemplateColumns = '1fr';
        modalBody.style.gap = '1rem';
    } else {
        modalBody.style.gridTemplateColumns = '1fr 1fr';
        modalBody.style.gap = '2rem';
    }
}

// Listen for window resize
window.addEventListener('resize', adjustModalForMobile);

// Initialize modal adjustments
document.addEventListener('DOMContentLoaded', adjustModalForMobile);
