// Function to handle button click (for booking)
document.querySelectorAll('.book-btn').forEach(button => {
    // إضافة مستمع الحدث لكل زر حجز
    button.addEventListener('click', function() {
        // الحصول على معرّف الرحلة أو الحفل من البيانات المخزنة في الزر
        const tripId = this.getAttribute('data-trip');
        const concertId = this.getAttribute('data-concert');
        
        // التحقق من وجود معرّف الرحلة أو الحفل وإظهار رسالة تأكيد
        if (tripId) {
            alert(`Successfully booked for party no ${tripId}`);
        } else if (concertId) {
            alert(`Successfully booked for party no ${concertId}`);
        }
    });
});

// Smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // إضافة مستمع الحدث لرابط التنقل الداخلي
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // منع السلوك الافتراضي للرابط (التنقل الفوري)

        // التمرير بسلاسة إلى العنصر المقصود عند النقر على الرابط
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // تعيين التمرير ليكون سهلًا (smooth)
            block: 'start' // تعيين العنصر ليظهر في بداية الشاشة عند التمرير
        });
    });
});

// Image hover effect for scaling
document.querySelectorAll('.trip img, .concert img').forEach(img => {
    // عند التمرير على الصورة
    img.addEventListener('mouseenter', function() {
        img.style.transform = "scale(1.05)"; // تكبير الصورة بنسبة 5% عند المرور عليها
        img.style.transition = "transform 0.3s ease"; // إضافة تأثير التحول بسلاسة
    });

    // عند مغادرة المؤشر من الصورة
    img.addEventListener('mouseleave', function() {
        img.style.transform = "scale(1)"; // إعادة الصورة إلى حجمها الطبيعي
    });
});

// Get the audio element and the button
const audio = document.getElementById('background-audio'); // تحديد عنصر الصوت
const playPauseBtn = document.getElementById('playPauseBtn'); // تحديد زر التشغيل/الإيقاف

// Play/pause the audio
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // إذا كان الصوت موقوفًا، تشغيله
        playPauseBtn.textContent = 'Turn off the sound'; // تغيير نص الزر إلى "إيقاف الصوت"
    } else {
        audio.pause(); // إذا كان الصوت قيد التشغيل، إيقافه
        playPauseBtn.textContent = 'Play sound'; // تغيير نص الزر إلى "تشغيل الصوت"
    }
});

// Volume control
const volumeControl = document.getElementById('volumeControl'); // تحديد عنصر التحكم في الصوت
volumeControl.addEventListener('input', (event) => {
    audio.volume = event.target.value; // تغيير مستوى الصوت بناءً على القيمة التي يتم إدخالها
});
