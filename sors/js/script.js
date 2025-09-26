// script.js
// الانتظار حتى يتم تحميل محتويات الصفحة بالكامل قبل تنفيذ أي كود
document.addEventListener('DOMContentLoaded', function() {
    // تحديد النموذج (الفورم) الخاص بالحجز
    const bookingForm = document.querySelector('form');
    
    // إضافة مستمع الحدث عند إرسال النموذج
    bookingForm.addEventListener('submit', function(event) {
        // الحصول على قيم تاريخ الوصول والمغادرة
        let checkInDate = document.getElementById('check-in').value;
        let checkOutDate = document.getElementById('check-out').value;

        // التحقق مما إذا كان تاريخ المغادرة قبل أو في نفس تاريخ الوصول
        if (new Date(checkInDate) >= new Date(checkOutDate)) {
            alert('Departure date must be after arrival date'); // عرض تنبيه إذا كان تاريخ المغادرة غير صالح
            event.preventDefault(); // إلغاء إرسال النموذج
        } else {
            alert('Your reservation has been confirmed successfully!'); // عرض تنبيه بنجاح الحجز
        }
    });
});

// إضافة مستمع الحدث لنموذج الحجز من أجل إظهار رسالة التأكيد بعد إرسال النموذج
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج

    // تحديث رسالة التأكيد وإظهارها للمستخدم
    document.getElementById("confirmation-message").textContent = "Your reservation has been confirmed successfully! We will contact you shortly.";
    document.getElementById("confirmation-message").style.display = "block"; // إظهار الرسالة
    document.getElementById("booking-form").reset(); // إعادة تعيين النموذج بعد الإرسال
});

// تحديد جميع مربعات الغرف 
const roomBoxes = document.querySelectorAll('.room-pricing');

// إضافة تأثيرات التمرير على مربعات الغرف
roomBoxes.forEach(box => {
    // عند التمرير فوق صندوق الغرفة
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)'; // تكبير الصندوق قليلاً
        box.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)'; // إضافة ظل أكبر
    });

    // عند التمرير خارج صندوق الغرفة
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)'; // إعادة حجم الصندوق إلى حجمه الطبيعي
        box.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // تقليل الظل
    });
});

// تحديد عنصر الصوت الخلفي
var audio = document.getElementById('background-music');

// الانتظار حتى يتم تحميل الصفحة بالكامل، ثم إعداد الصوت
window.addEventListener('load', function() {
    audio.muted = false; // التأكد من أن الصوت غير مكتوم
    audio.volume = 0.2; // تعيين مستوى الصوت إلى 20%
});

// تحديد زر تبديل الموسيقى وإضافة مستمع الحدث له
var toggleMusicBtn = document.getElementById('toggle-music-btn');
toggleMusicBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play(); // تشغيل الموسيقى إذا كانت متوقفة
    } else {
        audio.pause(); // إيقاف الموسيقى إذا كانت قيد التشغيل
    }
});

// إضافة مستمع الحدث لنموذج التقييم
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج
    
    // الحصول على نص التقييم من الحقل النصي
    const reviewText = document.getElementById('review').value;
    
    // التحقق إذا كان التقييم فارغًا
    if (reviewText.trim() === "") {
        alert("Please enter your rating before submitting."); // إظهار تنبيه إذا كان التقييم فارغًا
        return;
    }

    // تحديد قائمة التقييمات
    const reviewList = document.getElementById('reviews-list');
    
    // إنشاء عنصر جديد لعرض التقييم
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.textContent = reviewText;

    // إضافة التقييم الجديد إلى بداية القائمة
    reviewList.insertBefore(newReview, reviewList.firstChild);

    // مسح الحقل النصي بعد إرسال التقييم
    document.getElementById('review').value = '';

    // إضافة تأثير تدريجي لظهور التقييم الجديد
    newReview.classList.add('fade-in');
    
    // إزالة تأثير fade-in بعد مدة قصيرة
    setTimeout(function() {
        newReview.classList.remove('fade-in');
    }, 1000);
});


