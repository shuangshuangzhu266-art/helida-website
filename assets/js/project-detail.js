// Project Detail Page JavaScript

// Project data (expanded from projects.js)
const projectData = {
    'food-processing-plant': {
        name: {
            en: "Industrial Stainless Steel Tanks",
            ar: "خزانات فولاذ مقاوم للصدأ صناعية"
        },
        description: {
            en: "Complete stainless steel tank system for large-scale food processing facility. Custom-designed storage tanks, processing vessels, and piping systems that meet the highest food safety standards. This project involved the design, fabrication, and installation of 12 specialized tanks with a total capacity of 50,000 liters, serving a major food manufacturing plant in Cairo.",
            ar: "نظام خزانات فولاذ مقاوم للصدأ كامل لمنشأة معالجة أغذية واسعة النطاق. خزانات تخزين مصممة خصيصاً وأوعية معالجة وأنظمة أنابيب تلبي أعلى معايير سلامة الأغذية. شمل هذا المشروع تصميم وتصنيع وتركيب 12 خزان متخصص بسعة إجمالية 50,000 لتر، لخدمة مصنع تصنيع أغذية رئيسي في القاهرة."
        },
        challenge: {
            en: "The client required a complete stainless steel tank system for a new food processing facility that would meet strict FDA and HACCP standards. The main challenges included designing tanks that could handle both hot and cold processing (temperatures from -5°C to 95°C), ensuring complete hygiene with smooth, easy-to-clean surfaces, and meeting the facility's space constraints while maximizing storage capacity.",
            ar: "تطلب العميل نظام خزانات فولاذ مقاوم للصدأ كامل لمنشأة معالجة أغذية جديدة تلبي معايير FDA و HACCP الصارمة. التحديات الرئيسية شملت تصميم خزانات يمكنها التعامل مع المعالجة الساخنة والباردة (درجات حرارة من -5°C إلى 95°C)، وضمان النظافة الكاملة مع أسطح ملساء سهلة التنظيف، وتلبية قيود المساحة في المنشأة مع تعظيم سعة التخزين."
        },
        solution: {
            en: "We designed and fabricated 12 custom stainless steel tanks using 316L grade material with electropolished interior surfaces (Ra ≤ 0.4 μm). Each tank features sanitary fittings, CIP (Clean-in-Place) systems, and temperature control jackets. The tanks range from 2,000L to 8,000L capacity and include specialized features like conical bottoms for complete drainage, sight glasses for monitoring, and pressure relief valves for safety.",
            ar: "صممنا وصنعنا 12 خزان فولاذ مقاوم للصدأ مخصص باستخدام مادة درجة 316L مع أسطح داخلية مصقولة كهربائياً (Ra ≤ 0.4 ميكرومتر). كل خزان يتميز بملحقات صحية وأنظمة CIP (التنظيف في المكان) وأغلفة تحكم في درجة الحرارة. تتراوح سعة الخزانات من 2,000 لتر إلى 8,000 لتر وتشمل ميزات متخصصة مثل القيعان المخروطية للتصريف الكامل ونظارات المراقبة وصمامات تخفيف الضغط للأمان."
        },
        results: {
            en: [
                "100% compliance with FDA and HACCP food safety standards",
                "40% increase in production capacity due to improved tank efficiency",
                "Zero contamination incidents in 18 months of operation",
                "50% reduction in cleaning time with CIP systems",
                "25% decrease in maintenance costs through superior material quality",
                "Complete customer satisfaction with on-time delivery"
            ],
            ar: [
                "100% امتثال لمعايير سلامة الأغذية FDA و HACCP",
                "40% زيادة في القدرة الإنتاجية بسبب تحسن كفاءة الخزانات",
                "صفر حوادث تلوث في 18 شهراً من التشغيل",
                "50% تقليل في وقت التنظيف مع أنظمة CIP",
                "25% انخفاض في تكاليف الصيانة من خلال جودة المواد المتفوقة",
                "رضا العملاء الكامل مع التسليم في الوقت المحدد"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Electropolished Ra ≤ 0.4 μm",
                "Tank Capacity": "2,000L - 8,000L per unit",
                "Total System Capacity": "50,000L",
                "Wall Thickness": "3mm - 8mm",
                "Standards": "FDA, 3-A Sanitary, HACCP",
                "Temperature Range": "-5°C to +95°C",
                "Pressure Rating": "Up to 6 bar",
                "Fittings": "Sanitary Tri-Clamp",
                "Cleaning System": "CIP (Clean-in-Place)",
                "Installation": "On-site fabrication and installation",
                "Warranty": "2 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مصقول كهربائياً Ra ≤ 0.4 ميكرومتر",
                "سعة الخزان": "2,000 لتر - 8,000 لتر لكل وحدة",
                "سعة النظام الإجمالية": "50,000 لتر",
                "سماكة الجدار": "3مم - 8مم",
                "المعايير": "FDA، 3-A صحي، HACCP",
                "نطاق درجة الحرارة": "-5°C إلى +95°C",
                "تصنيف الضغط": "حتى 6 بار",
                "الملحقات": "Tri-Clamp صحي",
                "نظام التنظيف": "CIP (التنظيف في المكان)",
                "التركيب": "تصنيع وتركيب في الموقع",
                "الضمان": "سنتان شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=food-processing-plant-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=food-processing-plant-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=food-processing-plant-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=food-processing-plant-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    },
    'pharmaceutical-facility': {
        name: {
            en: "Clean Room Processing Equipment",
            ar: "معدات معالجة الغرف النظيفة"
        },
        description: {
            en: "Complete sterile stainless steel processing equipment for pharmaceutical manufacturing facility. This project involved the design and fabrication of specialized clean room equipment including bioreactors, mixing vessels, and storage systems that meet the strictest pharmaceutical standards. The equipment serves a major pharmaceutical company's new production line for injectable medications.",
            ar: "معدات معالجة فولاذ مقاوم للصدأ معقمة كاملة لمنشأة تصنيع الأدوية. شمل هذا المشروع تصميم وتصنيع معدات غرف نظيفة متخصصة تشمل مفاعلات حيوية وأوعية خلط وأنظمة تخزين تلبي أ strictest المعايير الصيدلانية. تخدم المعدات خط إنتاج جديد لشركة أدوية رئيسية للأدوية القابلة للحقن."
        },
        challenge: {
            en: "The pharmaceutical client required equipment that would maintain Class 100 clean room standards while processing injectable medications. Key challenges included ensuring absolute sterility, preventing contamination, meeting FDA validation requirements, and maintaining precise temperature control throughout the manufacturing process. The equipment needed to be fully cleanable and sterilizable using both chemical and thermal methods.",
            ar: "تطلب العميل الصيدلاني معدات تحافظ على معايير الغرفة النظيفة فئة 100 أثناء معالجة الأدوية القابلة للحقن. التحديات الرئيسية شملت ضمان التعقيم المطلق ومنع التلوث وتلبية متطلبات التحقق من FDA والحفاظ على التحكم الدقيق في درجة الحرارة طوال عملية التصنيع. كان يجب أن تكون المعدات قابلة للتنظيف والتعقيم بالكامل باستخدام الطرق الكيميائية والحرارية."
        },
        solution: {
            en: "We designed and fabricated specialized equipment using 316L stainless steel with mirror-finish electropolished surfaces (Ra ≤ 0.25 μm). All equipment features orbital TIG welding, sanitary Tri-Clamp fittings, and integrated CIP/SIP systems. The bioreactors include jacketed temperature control, pressure monitoring, and automated cleaning cycles. All surfaces are designed to eliminate dead spaces and ensure complete drainage.",
            ar: "صممنا وصنعنا معدات متخصصة باستخدام الفولاذ المقاوم للصدأ 316L مع أسطح مصقولة كهربائياً بلمعة المرآة (Ra ≤ 0.25 ميكرومتر). جميع المعدات تتميز بلحام TIG مداري وملحقات Tri-Clamp صحية وأنظمة CIP/SIP متكاملة. تشمل المفاعلات الحيوية تحكم في درجة الحرارة مبطنة ومراقبة الضغط ودورات تنظيف آلية. جميع الأسطح مصممة لإزالة المساحات الميتة وضمان التصريف الكامل."
        },
        results: {
            en: [
                "Zero sterility failures in 24 months of operation",
                "FDA validation achieved on first inspection",
                "60% reduction in cleaning and sterilization time",
                "100% compliance with USP and GMP standards",
                "30% increase in production efficiency",
                "Extended equipment lifespan by 40%",
                "Complete elimination of contamination risks"
            ],
            ar: [
                "صفر فشل في التعقيم في 24 شهراً من التشغيل",
                "تم تحقيق التحقق من FDA في أول تفتيش",
                "60% تقليل في وقت التنظيف والتعقيم",
                "100% امتثال لمعايير USP و GMP",
                "30% زيادة في كفاءة الإنتاج",
                "إطالة عمر المعدات بنسبة 40%",
                "القضاء الكامل على مخاطر التلوث"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Mirror Electropolished Ra ≤ 0.25 μm",
                "Welding": "Orbital TIG Welding",
                "Standards": "FDA, USP, GMP, ISO 14644",
                "Clean Room Class": "Class 100 (ISO 5)",
                "Sterilization": "Validated Steam & Chemical",
                "Temperature Range": "2°C to 80°C",
                "Pressure Rating": "Up to 3 bar",
                "Fittings": "Sanitary Tri-Clamp 316L",
                "Cleaning System": "CIP/SIP Automated",
                "Validation": "FDA Process Validation",
                "Warranty": "3 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مصقول كهربائياً بلمعة المرآة Ra ≤ 0.25 ميكرومتر",
                "اللحام": "لحام TIG مداري",
                "المعايير": "FDA، USP، GMP، ISO 14644",
                "فئة الغرفة النظيفة": "فئة 100 (ISO 5)",
                "التعقيم": "بخار وكيميائي معتمد",
                "نطاق درجة الحرارة": "2°C إلى 80°C",
                "تصنيف الضغط": "حتى 3 بار",
                "الملحقات": "Tri-Clamp صحي 316L",
                "نظام التنظيف": "CIP/SIP آلي",
                "التحقق": "تحقق عملية FDA",
                "الضمان": "3 سنوات شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=pharmaceutical-facility-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=pharmaceutical-facility-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=pharmaceutical-facility-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=pharmaceutical-facility-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    },
    'chemical-processing-plant': {
        name: {
            en: "Chemical Reactor Vessels",
            ar: "أوعية المفاعلات الكيميائية"
        },
        description: {
            en: "Heavy-duty stainless steel reactor vessels for chemical processing plant. This project involved the design, fabrication, and installation of specialized reactor vessels capable of handling highly corrosive chemicals and extreme operating conditions. The vessels serve a major chemical manufacturing facility producing specialty chemicals for industrial applications.",
            ar: "أوعية مفاعلات فولاذ مقاوم للصدأ ثقيلة لمنشأة المعالجة الكيميائية. شمل هذا المشروع تصميم وتصنيع وتركيب أوعية مفاعلات متخصصة قادرة على التعامل مع المواد الكيميائية شديدة التآكل وظروف التشغيل القاسية. تخدم الأوعية منشأة تصنيع كيميائية رئيسية تنتج مواد كيميائية متخصصة للتطبيقات الصناعية."
        },
        challenge: {
            en: "The chemical processing facility required reactor vessels that could handle highly corrosive acids, bases, and organic solvents at elevated temperatures and pressures. Key challenges included preventing stress corrosion cracking, maintaining dimensional stability under thermal cycling, ensuring leak-tight joints, and meeting strict safety standards for hazardous chemical processing. The vessels needed to operate continuously for extended periods without maintenance.",
            ar: "تطلبت منشأة المعالجة الكيميائية أوعية مفاعلات يمكنها التعامل مع الأحماض والقواعد والمذيبات العضوية شديدة التآكل في درجات حرارة وضغوط مرتفعة. التحديات الرئيسية شملت منع تكسير التآكل الإجهادي والحفاظ على الاستقرار الأبعادي تحت الدورات الحرارية وضمان مفاصل محكمة الإغلاق وتلبية معايير السلامة الصارمة لمعالجة المواد الكيميائية الخطرة. كان يجب أن تعمل الأوعية بشكل مستمر لفترات طويلة بدون صيانة."
        },
        solution: {
            en: "We designed and fabricated heavy-duty reactor vessels using 317L stainless steel with specialized internal linings and reinforced construction. Each vessel features double-wall construction for safety, jacketed heating/cooling systems, and advanced sealing technology. The vessels include pressure relief systems, temperature monitoring, and automated control systems. All welds were stress-relieved and tested to ensure maximum durability.",
            ar: "صممنا وصنعنا أوعية مفاعلات ثقيلة باستخدام الفولاذ المقاوم للصدأ 317L مع بطانة داخلية متخصصة وبناء معزز. كل وعاء يتميز ببناء جدار مزدوج للأمان وأنظمة تسخين/تبريد مبطنة وتكنولوجيا إغلاق متقدمة. تشمل الأوعية أنظمة تخفيف الضغط ومراقبة درجة الحرارة وأنظمة تحكم آلية. تم إزالة الإجهاد من جميع اللحامات واختبارها لضمان أقصى متانة."
        },
        results: {
            en: [
                "60% reduction in maintenance frequency and costs",
                "Extended equipment life by 50% through superior corrosion resistance",
                "Zero safety incidents in 30 months of operation",
                "35% improvement in process efficiency and throughput",
                "100% compliance with chemical industry safety standards",
                "Reduced downtime by 70% through reliable construction",
                "Complete elimination of stress corrosion cracking issues"
            ],
            ar: [
                "60% تقليل في تكرار وتكاليف الصيانة",
                "إطالة عمر المعدات بنسبة 50% من خلال مقاومة التآكل المتفوقة",
                "صفر حوادث أمان في 30 شهراً من التشغيل",
                "35% تحسن في كفاءة العملية والإنتاجية",
                "100% امتثال لمعايير أمان الصناعة الكيميائية",
                "تقليل وقت التوقف بنسبة 70% من خلال البناء الموثوق",
                "القضاء الكامل على مشاكل تكسير التآكل الإجهادي"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "317L Stainless Steel",
                "Corrosion Resistance": "Excellent for acids, bases, solvents",
                "Temperature Range": "-40°C to +350°C",
                "Pressure Rating": "Up to 30 bar",
                "Vessel Capacity": "5,000L - 15,000L per unit",
                "Wall Thickness": "8mm - 15mm",
                "Standards": "ASME VIII, API 650, ASTM A240",
                "Construction": "Double-wall with safety jacket",
                "Heating/Cooling": "Jacketed temperature control",
                "Safety Features": "Pressure relief, temperature monitoring",
                "Welding": "Stress-relieved TIG welding",
                "Warranty": "5 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 317L",
                "مقاومة التآكل": "ممتازة للأحماض والقواعد والمذيبات",
                "نطاق درجة الحرارة": "-40°C إلى +350°C",
                "تصنيف الضغط": "حتى 30 بار",
                "سعة الوعاء": "5,000 لتر - 15,000 لتر لكل وحدة",
                "سماكة الجدار": "8مم - 15مم",
                "المعايير": "ASME VIII، API 650، ASTM A240",
                "البناء": "جدار مزدوج مع غلاف أمان",
                "التسخين/التبريد": "تحكم في درجة الحرارة مبطنة",
                "ميزات الأمان": "تخفيف الضغط، مراقبة درجة الحرارة",
                "اللحام": "لحام TIG مع إزالة الإجهاد",
                "الضمان": "5 سنوات شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=chemical-processing-plant-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=chemical-processing-plant-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=chemical-processing-plant-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=chemical-processing-plant-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    },
    'modern-building': {
        name: {
            en: "Architectural Steel Facade",
            ar: "واجهة فولاذية معمارية"
        },
        description: {
            en: "Stunning architectural stainless steel facade system for a modern commercial building. This project involved the design, fabrication, and installation of a complete exterior cladding system using premium stainless steel panels with custom finishes. The facade features intricate geometric patterns, integrated lighting systems, and weather-resistant construction that enhances the building's aesthetic appeal while providing long-term durability.",
            ar: "نظام واجهة فولاذ مقاوم للصدأ معمارية مذهلة لمبنى تجاري حديث. شمل هذا المشروع تصميم وتصنيع وتركيب نظام تغطية خارجية كامل باستخدام ألواح فولاذ مقاوم للصدأ عالية الجودة مع إنهاءات مخصصة. تتميز الواجهة بأنماط هندسية معقدة وأنظمة إضاءة متكاملة وبناء مقاوم للطقس يعزز الجاذبية الجمالية للمبنى مع توفير متانة طويلة الأمد."
        },
        challenge: {
            en: "The architectural project required a facade system that would provide both structural integrity and stunning visual appeal while withstanding harsh environmental conditions including UV exposure, temperature fluctuations, and pollution. Key challenges included creating complex geometric patterns, ensuring seamless integration with building systems, maintaining consistent surface finishes across large panels, and achieving precise tolerances for the intricate design elements.",
            ar: "تطلب المشروع المعماري نظام واجهة يوفر سلامة هيكلية وجاذبية بصرية مذهلة مع تحمل الظروف البيئية القاسية بما في ذلك التعرض للأشعة فوق البنفسجية وتقلبات درجة الحرارة والتلوث. التحديات الرئيسية شملت إنشاء أنماط هندسية معقدة وضمان التكامل السلس مع أنظمة المبنى والحفاظ على إنهاءات سطحية متسقة عبر الألواح الكبيرة وتحقيق تسامحات دقيقة لعناصر التصميم المعقدة."
        },
        solution: {
            en: "We designed and fabricated a complete facade system using 316L stainless steel with specialized surface treatments including brushed, mirror, and satin finishes. The system features precision-cut panels with complex geometric patterns, integrated LED lighting channels, and advanced weather sealing. Each panel was custom-fabricated using CNC cutting and laser welding technology to ensure perfect fit and finish. The installation included specialized mounting systems for thermal expansion and structural support.",
            ar: "صممنا وصنعنا نظام واجهة كامل باستخدام الفولاذ المقاوم للصدأ 316L مع معالجات سطحية متخصصة تشمل إنهاءات مشطوفة ومرآة ومطفية. يتميز النظام بألواح مقطوعة بدقة مع أنماط هندسية معقدة وقنوات إضاءة LED متكاملة وإغلاق متقدم ضد الطقس. تم تصنيع كل لوحة مخصص باستخدام تقنية القطع CNC واللحام بالليزر لضمان الملاءمة والإنهاء المثالي. شمل التركيب أنظمة تركيب متخصصة للتوسع الحراري والدعم الهيكلي."
        },
        results: {
            en: [
                "Award-winning architectural design with stunning visual impact",
                "Minimal maintenance requirements - only annual cleaning needed",
                "Weather resistance for 25+ years in harsh conditions",
                "40% increase in property value due to premium facade",
                "100% client satisfaction with design and installation",
                "Zero structural issues or material degradation",
                "Perfect integration with building's lighting and HVAC systems"
            ],
            ar: [
                "تصميم معماري حائز على جوائز مع تأثير بصري مذهل",
                "متطلبات صيانة minimal - فقط تنظيف سنوي مطلوب",
                "مقاومة الطقس لأكثر من 25 عاماً في الظروف القاسية",
                "40% زيادة في قيمة العقار بسبب الواجهة المتميزة",
                "100% رضا العملاء عن التصميم والتركيب",
                "صفر مشاكل هيكلية أو تدهور في المواد",
                "تكامل مثالي مع أنظمة الإضاءة والتدفئة والتهوية في المبنى"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Brushed, Mirror, Satin",
                "Panel Thickness": "2mm - 8mm",
                "Panel Dimensions": "Up to 3m x 1.5m",
                "Standards": "ASTM A240, EN 10088, DIN 1.4404",
                "Weather Resistance": "25+ years",
                "UV Resistance": "Excellent",
                "Thermal Expansion": "Compensated mounting system",
                "Lighting Integration": "LED channel system",
                "Installation": "Specialized mounting brackets",
                "Maintenance": "Annual cleaning only",
                "Warranty": "10 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مشطوف، مرآة، مطفى",
                "سماكة اللوحة": "2مم - 8مم",
                "أبعاد اللوحة": "حتى 3م × 1.5م",
                "المعايير": "ASTM A240، EN 10088، DIN 1.4404",
                "مقاومة الطقس": "25+ عاماً",
                "مقاومة الأشعة فوق البنفسجية": "ممتازة",
                "التوسع الحراري": "نظام تركيب معوض",
                "تكامل الإضاءة": "نظام قنوات LED",
                "التركيب": "أقواس تركيب متخصصة",
                "الصيانة": "تنظيف سنوي فقط",
                "الضمان": "10 سنوات شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=modern-building-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=modern-building-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=modern-building-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=modern-building-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    },
    'dairy-processing-facility': {
        name: {
            en: "Dairy Processing Equipment",
            ar: "معدات معالجة الألبان"
        },
        description: {
            en: "Complete food-grade stainless steel processing equipment for dairy manufacturing facility. This project involved the design, fabrication, and installation of specialized dairy processing equipment including pasteurizers, homogenizers, storage tanks, and piping systems. The equipment serves a major dairy company's new production line for fresh milk, yogurt, and cheese products, meeting the highest food safety and hygiene standards.",
            ar: "معدات معالجة فولاذ مقاوم للصدأ صالح للأغذية كاملة لمنشأة تصنيع الألبان. شمل هذا المشروع تصميم وتصنيع وتركيب معدات معالجة ألبان متخصصة تشمل المبسترات والمجانسات وخزانات التخزين وأنظمة الأنابيب. تخدم المعدات خط إنتاج جديد لشركة ألبان رئيسية لمنتجات الحليب الطازج والزبادي والجبن، وتلبي أعلى معايير سلامة الأغذية والنظافة."
        },
        challenge: {
            en: "The dairy processing facility required equipment that could maintain the highest standards of hygiene and food safety while handling both hot and cold processing temperatures. Key challenges included preventing bacterial contamination, ensuring complete cleanability, meeting strict HACCP and FDA standards, maintaining precise temperature control, and designing equipment that could handle the specific requirements of different dairy products (milk, yogurt, cheese) in a single production line.",
            ar: "تطلبت منشأة معالجة الألبان معدات يمكنها الحفاظ على أعلى معايير النظافة وسلامة الأغذية مع التعامل مع درجات حرارة المعالجة الساخنة والباردة. التحديات الرئيسية شملت منع التلوث البكتيري وضمان القابلية الكاملة للتنظيف وتلبية معايير HACCP و FDA الصارمة والحفاظ على التحكم الدقيق في درجة الحرارة وتصميم معدات يمكنها التعامل مع المتطلبات المحددة لمنتجات الألبان المختلفة (الحليب والزبادي والجبن) في خط إنتاج واحد."
        },
        solution: {
            en: "We designed and installed a complete dairy processing system using 316L stainless steel with electropolished surfaces (Ra ≤ 0.4 μm) and sanitary Tri-Clamp fittings. The system includes specialized pasteurizers with precise temperature control, homogenizers for consistent product texture, and storage tanks with CIP (Clean-in-Place) systems. All equipment features smooth, crevice-free surfaces and automated cleaning cycles to ensure optimal hygiene and prevent contamination.",
            ar: "صممنا وتركبنا نظام معالجة ألبان كاملاً باستخدام الفولاذ المقاوم للصدأ 316L مع أسطح مصقولة كهربائياً (Ra ≤ 0.4 ميكرومتر) وملحقات Tri-Clamp صحية. يشمل النظام مبسترات متخصصة مع تحكم دقيق في درجة الحرارة ومجانسات لاتساق قوام المنتج وخزانات تخزين مع أنظمة CIP (التنظيف في المكان). جميع المعدات تتميز بأسطح ملساء خالية من الشقوق ودورات تنظيف آلية لضمان النظافة المثلى ومنع التلوث."
        },
        results: {
            en: [
                "100% compliance with HACCP and FDA food safety standards",
                "45% increase in production capacity with improved efficiency",
                "30% reduction in energy consumption through optimized design",
                "Zero contamination incidents in 20 months of operation",
                "60% reduction in cleaning time with automated CIP systems",
                "Extended equipment lifespan by 35% through superior materials",
                "Complete customer satisfaction with product quality and consistency"
            ],
            ar: [
                "100% امتثال لمعايير سلامة الأغذية HACCP و FDA",
                "45% زيادة في القدرة الإنتاجية مع تحسن الكفاءة",
                "30% تقليل في استهلاك الطاقة من خلال التصميم المحسن",
                "صفر حوادث تلوث في 20 شهراً من التشغيل",
                "60% تقليل في وقت التنظيف مع أنظمة CIP آلية",
                "إطالة عمر المعدات بنسبة 35% من خلال المواد المتفوقة",
                "رضا العملاء الكامل عن جودة واتساق المنتج"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Electropolished Ra ≤ 0.4 μm",
                "Standards": "3-A Sanitary, FDA, HACCP",
                "Temperature Range": "2°C to +95°C",
                "Pressure Rating": "Up to 12 bar",
                "Equipment Types": "Pasteurizers, Homogenizers, Storage Tanks",
                "Capacity": "5,000L - 20,000L per unit",
                "Fittings": "Sanitary Tri-Clamp 316L",
                "Cleaning System": "Automated CIP with validation",
                "Hygiene Design": "Crevice-free, smooth surfaces",
                "Installation": "On-site fabrication and installation",
                "Warranty": "3 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مصقول كهربائياً Ra ≤ 0.4 ميكرومتر",
                "المعايير": "3-A صحي، FDA، HACCP",
                "نطاق درجة الحرارة": "2°C إلى +95°C",
                "تصنيف الضغط": "حتى 12 بار",
                "أنواع المعدات": "مبسترات، مجانسات، خزانات تخزين",
                "السعة": "5,000 لتر - 20,000 لتر لكل وحدة",
                "الملحقات": "Tri-Clamp صحي 316L",
                "نظام التنظيف": "CIP آلي مع التحقق",
                "تصميم النظافة": "أسطح ملساء خالية من الشقوق",
                "التركيب": "تصنيع وتركيب في الموقع",
                "الضمان": "3 سنوات شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=dairy-processing-facility-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=dairy-processing-facility-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=dairy-processing-facility-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=dairy-processing-facility-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    },
    'laboratory-equipment': {
        name: {
            en: "Precision Laboratory Instruments",
            ar: "أدوات مختبر دقيقة"
        },
        description: {
            en: "High-precision stainless steel components for advanced laboratory applications. This project involved the design and fabrication of specialized laboratory instruments including analytical equipment, precision measurement devices, and sterile storage systems. The equipment serves a major research facility conducting pharmaceutical and chemical analysis, requiring the highest levels of accuracy, cleanliness, and reliability.",
            ar: "مكونات فولاذ مقاوم للصدأ عالية الدقة لتطبيقات المختبر المتقدمة. شمل هذا المشروع تصميم وتصنيع أدوات مختبر متخصصة تشمل معدات تحليلية وأجهزة قياس دقيقة وأنظمة تخزين معقمة. تخدم المعدات منشأة بحثية رئيسية تجري تحليلات صيدلانية وكيميائية، تتطلب أعلى مستويات الدقة والنظافة والموثوقية."
        },
        challenge: {
            en: "The laboratory equipment required extreme precision and cleanliness, with components that must maintain accuracy under various chemical and temperature conditions. Key challenges included achieving micron-level tolerances, ensuring complete sterility, preventing contamination, maintaining dimensional stability under thermal cycling, and meeting strict calibration requirements. The equipment needed to operate reliably in clean room environments with minimal maintenance.",
            ar: "تطلبت معدات المختبر دقة ونظافة شديدة، مع مكونات يجب أن تحافظ على الدقة تحت ظروف كيميائية ودرجات حرارة مختلفة. التحديات الرئيسية شملت تحقيق تسامحات على مستوى الميكرون وضمان التعقيم الكامل ومنع التلوث والحفاظ على الاستقرار الأبعادي تحت الدورات الحرارية وتلبية متطلبات المعايرة الصارمة. كان يجب أن تعمل المعدات بموثوقية في بيئات الغرف النظيفة مع صيانة minimal."
        },
        solution: {
            en: "We manufactured precision components using 316L stainless steel with mirror-finish electropolished surfaces (Ra ≤ 0.1 μm) and ultra-tight tolerances (±0.001mm). Each component was custom-fabricated using advanced CNC machining and laser welding technology. The equipment features specialized surface treatments, precision-ground finishes, and integrated cleaning systems. All components underwent rigorous testing and calibration to ensure they meet the strictest laboratory standards.",
            ar: "صنعنا مكونات دقيقة باستخدام الفولاذ المقاوم للصدأ 316L مع أسطح مصقولة كهربائياً بلمعة المرآة (Ra ≤ 0.1 ميكرومتر) وتسامحات ضيقة جداً (±0.001مم). تم تصنيع كل مكون مخصص باستخدام تقنيات التشغيل الآلي CNC المتقدمة واللحام بالليزر. تتميز المعدات بمعالجات سطحية متخصصة وإنهاءات مطحونة بدقة وأنظمة تنظيف متكاملة. خضعت جميع المكونات لاختبارات ومعايرة صارمة لضمان تلبية أ strictest معايير المختبر."
        },
        results: {
            en: [
                "Precision accuracy maintained within ±0.001mm tolerance",
                "Zero contamination issues in 24 months of operation",
                "Extended calibration intervals by 50% due to superior stability",
                "Improved measurement reliability by 40%",
                "100% compliance with ISO 17025 laboratory standards",
                "Reduced maintenance requirements by 60%",
                "Complete elimination of measurement drift issues"
            ],
            ar: [
                "تم الحفاظ على دقة الدقة ضمن تسامح ±0.001مم",
                "صفر مشاكل تلوث في 24 شهراً من التشغيل",
                "إطالة فترات المعايرة بنسبة 50% بسبب الاستقرار المتفوق",
                "تحسين موثوقية القياس بنسبة 40%",
                "100% امتثال لمعايير المختبر ISO 17025",
                "تقليل متطلبات الصيانة بنسبة 60%",
                "القضاء الكامل على مشاكل انحراف القياس"
            ]
        },
        specifications: {
            en: {
                "Material Grade": "316L Stainless Steel",
                "Surface Finish": "Mirror Electropolished Ra ≤ 0.1 μm",
                "Tolerance": "±0.001mm (ultra-precision)",
                "Standards": "ISO 17025, NIST, ASTM E29",
                "Clean Room Class": "Class 10 (ISO 4)",
                "Temperature Stability": "±0.1°C over 24 hours",
                "Calibration": "NIST traceable standards",
                "Equipment Types": "Analytical instruments, measurement devices",
                "Surface Treatment": "Passivation and electropolishing",
                "Welding": "Orbital TIG with full penetration",
                "Testing": "Dimensional, surface finish, cleanliness",
                "Warranty": "5 years comprehensive"
            },
            ar: {
                "درجة المادة": "فولاذ مقاوم للصدأ 316L",
                "إنهاء السطح": "مصقول كهربائياً بلمعة المرآة Ra ≤ 0.1 ميكرومتر",
                "التسامح": "±0.001مم (دقة فائقة)",
                "المعايير": "ISO 17025، NIST، ASTM E29",
                "فئة الغرفة النظيفة": "فئة 10 (ISO 4)",
                "استقرار درجة الحرارة": "±0.1°C على مدى 24 ساعة",
                "المعايرة": "معايير قابلة للتتبع NIST",
                "أنواع المعدات": "أدوات تحليلية، أجهزة قياس",
                "المعالجة السطحية": "التنشيط والتلميع الكهربائي",
                "اللحام": "TIG مداري مع اختراق كامل",
                "الاختبار": "أبعادي، إنهاء السطح، النظافة",
                "الضمان": "5 سنوات شامل"
            }
        },
        images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=laboratory-equipment-1",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=laboratory-equipment-2",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=laboratory-equipment-3",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&project=laboratory-equipment-4"
        ],
        category: {
            en: "Manufacturing",
            ar: "التصنيع"
        },
        year: "2024"
    }
};

// Initialize project detail page
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference first
    loadSavedLanguageForProjectDetail();
    initializeProjectDetail();
});

// Load saved language preference for project detail page
function loadSavedLanguageForProjectDetail() {
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

function initializeProjectDetail() {
    // Get project type from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectType = urlParams.get('project') || 'food-processing-plant';
    
    // Setup language switching
    setupLanguageSwitching();
    
    // Load project data
    loadProjectData(projectType);
    
    // Setup form
    setupQuoteForm();
    
    // Setup image gallery
    setupImageGallery();
    
    // Setup tabs
    setupTabs();
}

// Setup language switching for project detail page
function setupLanguageSwitching() {
    const languageButtons = document.querySelectorAll('.lang-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            switchLanguage(lang);
        });
    });
}

// Switch language function for project detail page
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
    
    // Reload project data with new language
    const urlParams = new URLSearchParams(window.location.search);
    const projectType = urlParams.get('project') || 'food-processing-plant';
    loadProjectData(projectType);
}

function loadProjectData(projectType) {
    const project = projectData[projectType];
    if (!project) {
        console.error('Project not found:', projectType);
        return;
    }
    
    // Get current language from localStorage or default to English
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    // Update page title
    document.getElementById('page-title').textContent = `${project.name[currentLang]} - Sina Steel`;
    
    // Update breadcrumb
    document.getElementById('project-breadcrumb').textContent = project.name[currentLang];
    
    // Update project name
    document.getElementById('project-name').textContent = project.name[currentLang];
    
    // Update project description
    document.getElementById('project-description').textContent = project.description[currentLang];
    
    // Update project category and year
    document.getElementById('project-category').textContent = project.category[currentLang];
    document.getElementById('project-year').textContent = project.year;
    
    // Update project challenge
    document.getElementById('project-challenge').textContent = project.challenge[currentLang];
    
    // Update project solution
    document.getElementById('project-solution').textContent = project.solution[currentLang];
    
    // Update project results
    const resultsList = document.getElementById('project-results');
    resultsList.innerHTML = '';
    project.results[currentLang].forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
    
    // Update technical specifications
    const specsTable = document.getElementById('project-specs');
    const tbody = specsTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    Object.entries(project.specifications[currentLang]).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="spec-label">${key}</td>
            <td class="spec-value">${value}</td>
        `;
        tbody.appendChild(row);
    });
    
    // Update images
    updateProjectImages(project.images);
}

function updateProjectImages(images) {
    const mainImage = document.getElementById('project-main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    if (mainImage && images.length > 0) {
        mainImage.src = images[0];
        mainImage.alt = 'Project Image';
    }
    
    // Update thumbnails
    thumbnails.forEach((thumb, index) => {
        if (images[index]) {
            thumb.src = images[index];
            thumb.alt = `Thumbnail ${index + 1}`;
        }
    });
}

function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('project-main-image');
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumb.src.replace('100&h=100', '600&h=400');
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function setupQuoteForm() {
    const form = document.getElementById('project-quote-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            mobile: formData.get('mobile'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!data.name || !data.mobile || !data.email) {
            showErrorMessage('Please fill in all required fields.');
            return;
        }
        
        // Send to WhatsApp
        sendToWhatsApp(data);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
    });
}

function sendToWhatsApp(data) {
    const phoneNumber = '201067902515';
    const message = formatQuoteMessage(data);
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function formatQuoteMessage(data) {
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: `Project Quote Request:
Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email}
Project Requirements: ${data.message || 'No specific requirements mentioned'}

I'm interested in a similar project. Please provide me with more information and a quote.`,
        ar: `طلب عرض سعر للمشروع:
الاسم: ${data.name}
الهاتف المحمول: ${data.mobile}
البريد الإلكتروني: ${data.email}
متطلبات المشروع: ${data.message || 'لم يتم ذكر متطلبات محددة'}

أنا مهتم بمشروع مماثل. يرجى تزويدي بمزيد من المعلومات وعرض سعر.`
    };
    
    return messages[currentLang] || messages.en;
}

function showSuccessMessage() {
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: 'Quote request sent successfully! We will contact you soon.',
        ar: 'تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً.'
    };
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = messages[currentLang] || messages.en;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openWhatsApp() {
    const phoneNumber = '201067902515';
    const projectName = document.getElementById('project-name').textContent;
    const currentLang = localStorage.getItem('sinaSteelLanguage') || 'en';
    
    const messages = {
        en: `Hello! I'm interested in the ${projectName} project. Please provide me with more information and a quote.`,
        ar: `مرحباً! أنا مهتم بمشروع ${projectName}. يرجى تزويدي بمزيد من المعلومات وعرض سعر.`
    };
    
    const message = messages[currentLang] || messages.en;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openImageModal() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const mainImage = document.getElementById('project-main-image');
    
    modalImage.src = mainImage.src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('image-modal');
    if (e.target === modal) {
        closeImageModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});
