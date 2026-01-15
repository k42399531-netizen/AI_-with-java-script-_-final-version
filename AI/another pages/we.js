// 1. البيانات (Data) - تم تنظيمها في كائن واحد لسهولة الوصول
const weData = {
    imagePath: "images/Gemini_Generated_Image_hfhn2uhfhn2uhfhn.png",
    description: "نحن فريق من المطورين الشغوفين بإنشاء تطبيقات ويب سهلة الاستخدام ومفهومة للجميع."
};

// 2. العناصر (DOM Elements)
const mainContent = document.getElementById("main-content");

/**
 * وظيفة لإنشاء وعرض المحتوى
 * تم استخدام الوظائف (Functions) لزيادة كفاءة الكود وسهولة صيانته (المعيار 4)
 */
function renderContent() {
    // إنشاء الحاوية الرئيسية للمحتوى
    const cardDiv = document.createElement("div");
    cardDiv.className = "content-card";

    // إنشاء وعرض الصورة
    const img = document.createElement("img");
    img.src = weData.imagePath;
    img.alt = "Team Logo";
    img.className = "feature-img";

    // إنشاء وعرض النص
    const description = document.createElement("p");
    description.textContent = weData.description;
    description.className = "feature-text";

    // تجميع العناصر (Appending)
    cardDiv.appendChild(img);
    cardDiv.appendChild(description);
    mainContent.appendChild(cardDiv);
}

// تشغيل الوظيفة عند تحميل الصفحة
mainContent.appendChild(renderContent());