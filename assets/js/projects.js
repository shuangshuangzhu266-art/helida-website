// Projects Page JavaScript

// Project data
const projectData = {
    'food-processing-plant': {
        name: {
            en: "Food Processing Plant",
            ar: "مصنع معالجة الأغذية",
            zh: "食品加工厂"
        },
        description: {
            en: "Complete stainless steel solution for food processing facility including processing equipment, storage tanks, and piping systems.",
            ar: "حل فولاذ مقاوم للصدأ كامل لمنشأة معالجة الأغذية يشمل معدات المعالجة وخزانات التخزين وأنظمة الأنابيب.",
            zh: "食品加工设施的完整不锈钢解决方案，包括加工设备、储罐和管道系统。"
        },
        challenge: {
            en: "The client needed a complete stainless steel solution for a new food processing facility that would meet strict hygiene standards and withstand continuous operation in a demanding environment.",
            ar: "كان العميل بحاجة إلى حل فولاذ مقاوم للصدأ كامل لمنشأة معالجة أغذية جديدة تلبي معايير النظافة الصارمة وتتحمل التشغيل المستمر في بيئة متطلبة.",
            zh: "客户需要为新的食品加工设施提供完整的不锈钢解决方案，该方案需要满足严格的卫生标准，并能在苛刻的环境中持续运行。"
        },
        solution: {
            en: "We provided a comprehensive solution using 316L stainless steel for all food-contact surfaces, with specialized surface finishes and custom-designed equipment to meet the specific processing requirements.",
            ar: "قدمنا حلاً شاملاً باستخدام الفولاذ المقاوم للصدأ 316L لجميع الأسطح الملامسة للأغذية، مع إنهاءات سطحية متخصصة ومعدات مصممة خصيصاً لتلبية متطلبات المعالجة المحددة.",
            zh: "我们使用316L不锈钢为所有食品接触表面提供综合解决方案，具有专门的表面处理和定制设备，以满足特定的加工要求。"
        },
        results: {
            en: [
                "100% compliance with food safety standards",
                "30% improvement in processing efficiency",
                "Zero contamination incidents",
                "Reduced maintenance costs by 25%"
            ],
            ar: [
                "100% امتثال لمعايير سلامة الأغذية",
                "30% تحسن في كفاءة المعالجة",
                "صفر حوادث تلوث",
                "25% تقليل في تكاليف الصيانة"
            ],
            zh: [
                "100%符合食品安全标准",
                "加工效率提高30%",
                "零污染事件",
                "维护成本降低25%"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Ra ≤ 0.8 μm",
                "Thickness": "2mm - 10mm",
                "Standards": "FDA, 3-A Sanitary Standards",
                "Capacity": "5000 L/day",
                "Temperature Range": "-20°C to +150°C"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "Ra ≤ 0.8 ميكرومتر",
                "السماكة": "2مم - 10مم",
                "المعايير": "FDA، معايير 3-A الصحية",
                "السعة": "5000 لتر/يوم",
                "نطاق درجة الحرارة": "-20°C إلى +150°C"
            },
            zh: {
                "材料等级": "316L不锈钢",
                "表面处理": "Ra ≤ 0.8 微米",
                "厚度": "2mm - 10mm",
                "标准": "FDA、3-A卫生标准",
                "容量": "5000升/天",
                "温度范围": "-20°C 至 +150°C"
            }
        }
    },
    'pharmaceutical-facility': {
        name: {
            en: "Pharmaceutical Facility",
            ar: "منشأة صيدلانية",
            zh: "制药设施"
        },
        description: {
            en: "Sterile stainless steel components for pharmaceutical manufacturing including clean room equipment, storage systems, and processing vessels.",
            ar: "مكونات فولاذ مقاوم للصدأ معقمة لتصنيع الأدوية تشمل معدات الغرف النظيفة وأنظمة التخزين وأوعية المعالجة.",
            zh: "制药制造的灭菌不锈钢组件，包括洁净室设备、存储系统和加工容器。"
        },
        challenge: {
            en: "The pharmaceutical industry requires the highest level of cleanliness and sterility. The client needed components that would maintain sterility while providing excellent corrosion resistance.",
            ar: "تتطلب صناعة الأدوية أعلى مستوى من النظافة والتعقيم. كان العميل بحاجة إلى مكونات تحافظ على التعقيم مع توفير مقاومة ممتازة للتآكل.",
            zh: "制药行业需要最高水平的清洁和灭菌。客户需要能够保持灭菌同时提供优异耐腐蚀性的组件。"
        },
        solution: {
            en: "We used 316L stainless steel with electropolished surfaces and specialized welding techniques to ensure complete sterility and smooth surfaces that prevent bacterial growth.",
            ar: "استخدمنا الفولاذ المقاوم للصدأ 316L مع أسطح مصقولة كهربائياً وتقنيات لحام متخصصة لضمان التعقيم الكامل والأسطح الملساء التي تمنع نمو البكتيريا.",
            zh: "我们使用316L不锈钢，采用电解抛光表面和专门的焊接技术，确保完全灭菌和防止细菌生长的光滑表面。"
        },
        results: {
            en: [
                "Zero sterility failures",
                "FDA approval achieved",
                "50% reduction in cleaning time",
                "Extended equipment lifespan"
            ],
            ar: [
                "صفر فشل في التعقيم",
                "تم تحقيق موافقة FDA",
                "50% تقليل في وقت التنظيف",
                "إطالة عمر المعدات"
            ],
            zh: [
                "零灭菌失败",
                "获得FDA批准",
                "清洁时间减少50%",
                "延长设备寿命"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Electropolished Ra ≤ 0.25 μm",
                "Welding": "Orbital TIG Welding",
                "Standards": "FDA, USP, GMP",
                "Sterility": "Validated Sterilization",
                "Cleanliness": "Class 100 Clean Room"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مصقول كهربائياً Ra ≤ 0.25 ميكرومتر",
                "اللحام": "لحام TIG مداري",
                "المعايير": "FDA، USP، GMP",
                "التعقيم": "تعقيم معتمد",
                "النظافة": "غرفة نظيفة فئة 100"
            },
            zh: {
                "材料等级": "316L不锈钢",
                "表面处理": "电解抛光 Ra ≤ 0.25 微米",
                "焊接": "轨道TIG焊接",
                "标准": "FDA、USP、GMP",
                "灭菌": "验证灭菌",
                "清洁度": "100级洁净室"
            }
        }
    }
};

// Initialize projects page
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectsPage();
});

function initializeProjectsPage() {
    setupProjectFilters();
    setupProjectAnimations();
}

// Project filter functionality
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter;
            
            // Filter projects with animation
            projectItems.forEach((item, index) => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    // Show item with delay
                    setTimeout(() => {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeInUp 0.5s ease forwards';
                    }, index * 100);
                } else {
                    // Hide item
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Modal functionality removed - now using separate project detail pages

// Project animations
function setupProjectAnimations() {
    // Intersection Observer for project items
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
    
    // Observe project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        // Initially pause animation
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
}

// Enhanced project interactions
function enhanceProjectInteractions() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        // Add hover effects
        item.addEventListener('mouseenter', handleProjectHover);
        item.addEventListener('mouseleave', handleProjectLeave);
        
        // Add click effects
        item.addEventListener('click', createRippleEffect);
    });
}

function handleProjectHover(e) {
    const item = e.currentTarget;
    const image = item.querySelector('.project-image img');
    
    if (image) {
        image.style.transform = 'scale(1.05)';
    }
}

function handleProjectLeave(e) {
    const item = e.currentTarget;
    const image = item.querySelector('.project-image img');
    
    if (image) {
        image.style.transform = 'scale(1)';
    }
}

function createRippleEffect(e) {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
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
    
    item.appendChild(ripple);
    
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
    enhanceProjectInteractions();
});

// Project analytics (if needed)
function trackProjectView(projectName) {
    console.log(`Project viewed: ${projectName}`);
    
    // You can add analytics tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', 'project_view', {
            'project_name': projectName
        });
    }
}

// Export functions for potential external use
window.Projects = {
    openProjectModal,
    closeModal,
    trackProjectView
};
