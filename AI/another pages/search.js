// data
const datas = [
        {
            name: "ChatGPT",
            position: 1,
            company: "OpenAI",
            img: "images/Chat-GPT-logo.webp",
            category:"coding or chat or information or language",
            link:"https://chat.openai.com/",
        },
        {
            name: "Gemini",
            position: 2,
            company: "Google",
            img: "images/gemini.jfif",
            category:"coding or chat or  or language",
            link:"https://ai.google/",
        },
        {
            name: "DeepSeek",
            position: 3,
            company: "DeepSeek",
            img: "images/deep seek.webp",
            category:"coding or language",
            link:"https://www.deepseek.com/"
        },
        {
            name: "Grok",
            position: 4,
            company: "xAI",
            img: "images/grok.png",
            category:"chat or information",
            link:"https://grok.com/"
        },
        {
            name: "Claude",
            position: 5,
            company: "Anthropic",
            img: "images/claude.jpeg",
            category:"language",
            link:"https://claude.ai/",
        },
        {
            name: "Perplexity",
            position: 6,
            company: "Perplexity",
            img: "images/px ai.jfif",
            category:"  chat  language",
            link:"https://www.perplexity.ai/"
        },
        {
            name: "Qwen",
            position: 7,
            company: "Alibaba Cloud",
            img: "images/qwen.jfif",
            category:"coding",
            link:"https://qwen.ai/"
        },
        {
            name: "GigaChat",
            position: 8,
            company: "Sberbank",
            img: "images/ciga.jfif",
            category:"language or chat",
            link:"https://giga.chat/"
        },
        {
            name: "Falcon",
            position: 9,
            company: "TII",
            img: "images/flcon.jfif",
            category:"chat or language",
            link:"https://falconllm.tii.ae/",
            
        },
        {
            name: "Copilot",
            position: 10,
            company: "Microsoft",
            img: "images/Microsoft-Copilot-feature.webp",
            category:"AWS",
            link:"https://copilot.microsoft.com/"
        }
    ];
    // DOM
    let products_place = document.getElementById("products")
    let products_link = document.getElementById("link")
    let input = document.getElementById("input")
    let button = document.getElementById("research")
    // events
    button.addEventListener("click",function(){
    // loading micro-state (for animation / UX)
    document.body.classList.add("is-loading");
        // تخزين قيمة ال input
        let final_input = input.value.toLowerCase()
        // delete results
        products_place.innerHTML = "";
    products_link.innerHTML = "";
        // variables_filters
    let coding = datas.filter((data) => data.category.includes("coding"))
    let chat = datas.filter((data) => data.category.includes("chat"))
    let language = datas.filter((data) => data.category.includes("language"))
    let information = datas.filter((data) => data.category.includes("information"))
    // دالة للعرض
    function printer(input) {
        input.forEach((item) => {
            // 1. إنشاء العناصر
            let image = document.createElement("img");
            let link = document.createElement("a");
    
            // 2. ضبط الخصائص (تصحيح href وإضافة alt للـ SEO)
            image.src = item.img;
            image.alt = item.name; 
            link.href = item.link; // التصحيح هنا
            link.target = "_blank"; // لفتح الموقع في تبويب جديد
            link.className = "result-card";
            image.className = "result-img";
    
            // 3. المنطق السليم: ضع الصورة داخل الرابط
            link.appendChild(image);
    
            // 4. إضافة الرابط (وبداخله الصورة) إلى الصفحة
            products_place.appendChild(link);

            // trigger entrance animation
            requestAnimationFrame(() => link.classList.add("show"));
        }); }
        // if 
    if (final_input == "coding"){
        printer(coding)
            }
        else if(final_input == "chat"){
           printer(chat)
            
        } else if (final_input == "information"){
            printer(information)
        }else if (final_input == "language"){
            printer(language)
      }else{
        products_place.innerHTML="<p>Error! please try again </p>"
    }

    // stop loading state (even though it's instant)
    setTimeout(() => document.body.classList.remove("is-loading"), 150);
    })