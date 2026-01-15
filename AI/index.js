// =========================================
// بيانات نماذج الذكاء الاصطناعي (Data Structure)
// مصفوفة من الكائنات (Array of Objects) تحتوي على تفاصيل كل نموذج
// =========================================
const data = [
    {
        name: "ChatGPT",
        position: 1,
        company: "OpenAI",
        img: "images/Chat-GPT-logo.webp"
    },
    {
        name: "Gemini",
        position: 2,
        company: "Google",
        img: "images/gemini.jfif"
    },
    {
        name: "DeepSeek",
        position: 3,
        company: "DeepSeek",
        img: "images/deep seek.webp"
    },
    {
        name: "Grok",
        position: 4,
        company: "xAI",
        img: "images/grok.png"
    },
    {
        name: "Claude",
        position: 5,
        company: "Anthropic",
        img: "images/claude.jpeg"
    },
    {
        name: "Perplexity",
        position: 6,
        company: "Perplexity",
        img: "images/px ai.jfif"
    },
    {
        name: "Qwen",
        position: 7,
        company: "Alibaba Cloud",
        img: "images/qwen.jfif"
    },
    {
        name: "GigaChat",
        position: 8,
        company: "Sberbank",
        img: "images/ciga.jfif"
    },
    {
        name: "Falcon",
        position: 9,
        company: "TII",
        img: "images/flcon.jfif"
    },
    {
        name: "Copilot",
        position: 10,
        company: "Microsoft",
        img: "images/Microsoft-Copilot-feature.webp"
    }
];

// الحصول على العنصر الحاوي للبطاقات من ملف HTML
const container = document.getElementById('models-container');

// التحقق من وجود الحاوية قبل البدء في إضافة العناصر لتجنب الأخطاء
if (container) {
    // المرور على كل عنصر في المصفوفة data
    data.forEach(model => {
        // إنشاء عنصر div جديد للبطاقة
        const card = document.createElement('article');
        
        // إضافة الكلاس model-card لتطبيق تنسيقات CSS
        card.className = 'model-card';
        
        // بناء محتوى البطاقة باستخدام Template Literals (``)
        // يتم إدراج البيانات ديناميكياً باستخدام ${model.property}
        card.innerHTML = `
            <div class="card-image">
                <!-- صورة النموذج مع النص البديل لتحسين الوصولية (Accessibility) -->
                <img src="${model.img}" alt="${model.name}">
                <!-- عرض ترتيب النموذج -->
                <span class="rank">#${model.position}</span>
            </div>
            <div class="card-content">
                <!-- اسم النموذج -->
                <h2>${model.name}</h2>
                <!-- اسم الشركة المصنعة مع أيقونة -->
                <p class="company"><i class="fas fa-building"></i> ${model.company}</p>
            </div>
        `;
        
        // إضافة البطاقة المكتملة إلى الحاوية الرئيسية في الصفحة
        container.appendChild(card);
    });
}
