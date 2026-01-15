// اظهار واخفاء كلمة السر 
let button=document.getElementById("togglePassword")
let input = document.getElementById("password")
button.addEventListener("click", function(){
         if (input.type == "password"){
             input.type= "text"
         }else{
                  input.type = "password"
         }
})
// 1. تعريف العناصر
const btn = document.getElementById("bti");
const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");

btn.addEventListener("click", function() {
    // جلب القيم وتجريدها من المسافات الزائدة
    const nameValue = inputName.value.trim();
    const emailValue = inputEmail.value.trim();
    const passwordValue = inputPassword.value;

    // 2. التسلسل المنطقي للتحقق
    
    // التحقق من الاسم: ليس فارغاً ولا يتجاوز 20 حرفاً
    if (nameValue === "" || nameValue.length > 20) {
        alert("The name must not exceed 20 characters and cannot be empty.");
        return; // توقف عن التنفيذ في حال وجود خطأ
    }

    // التحقق من الإيميل: التأكد من وجود علامة @ (بشكل بسيط)
    if (!emailValue.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // التحقق من كلمة المرور: الطول أكبر من 7
    if (passwordValue.length <= 7) {
        alert("The password must be longer than 7 characters.");
        return;
    }

    // إذا وصل الكود إلى هنا، يعني أن البيانات صحيحة
    console.log("Form Submitted Successfully!");
});