document.getElementById('ticket-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const tickets = document.getElementById('tickets').value;
    alert('您已成功購買 ' + tickets + ' 張票！');
});

window.addEventListener('load', () => {
    const introSection = document.querySelector('.intro-section');
    introSection.style.animationPlayState = 'running';
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// document.addEventListener('DOMContentLoaded', function () {
//     const calendar = document.getElementById('calendar');
//     const eventModal = document.getElementById('event-modal');
//     const eventDetails = document.getElementById('event-details');
//     const closeModal = document.querySelector('.close');

//     closeModal.onclick = function () {
//         eventModal.style.display = "none";
//     }

//     window.onclick = function (event) {
//         if (event.target == eventModal) {
//             eventModal.style.display = "none";
//         }
//     }

//     const now = new Date();
//     const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
//     const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//     const startDate = monthStart.getDay() ? monthStart.getDate() - monthStart.getDay() : monthStart.getDate();

//     for (let day = startDate; day <= monthEnd.getDate(); day++) {
//         const date = new Date(now.getFullYear(), now.getMonth(), day);
//         const dayElement = document.createElement('div');
//         dayElement.className = 'calendar-day';
//         dayElement.textContent = date.getDate();
//         dayElement.onclick = () => {
//             eventDetails.textContent = `Events on ${date.toDateString()}: No events listed.`; // Update this to fetch real events
//             eventModal.style.display = "block";
//         };
//         calendar.appendChild(dayElement);
//     }
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const calendar = document.getElementById('calendar');
//     const eventSidebar = document.getElementById('event-sidebar');
//     const eventDetails = document.getElementById('event-details');
//     const closeSidebar = document.querySelector('.close');
//     const yearDisplay = document.getElementById('calendar-year');
//     const now = new Date();
//     yearDisplay.textContent = now.getFullYear();

//     closeSidebar.onclick = function () {
//         eventSidebar.style.display = "none";
//     }

//     const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
//     const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//     const startDate = monthStart.getDay() ? monthStart.getDate() - monthStart.getDay() : monthStart.getDate();

//     for (let day = startDate; day <= monthEnd.getDate(); day++) {
//         const date = new Date(now.getFullYear(), now.getMonth(), day);
//         const dayElement = document.createElement('div');
//         dayElement.className = 'calendar-day';
//         dayElement.textContent = date.getDate();
//         dayElement.onclick = () => {
//             eventDetails.textContent = `Events on ${date.toDateString()}: No events listed.`; // Update this to fetch real events
//             eventSidebar.style.display = "block";
//         };
//         calendar.appendChild(dayElement);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const eventSidebar = document.getElementById('event-sidebar');
    const eventDetails = document.getElementById('event-details');
    const closeSidebar = document.querySelector('.close');
    const yearDisplay = document.getElementById('calendar-year');
    const now = new Date();
    yearDisplay.textContent = now.getFullYear();

    closeSidebar.onclick = function () {
        eventSidebar.style.display = "none";
    }

    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const startDate = monthStart.getDay() ? monthStart.getDate() - monthStart.getDay() : monthStart.getDate();

    for (let day = startDate; day <= monthEnd.getDate(); day++) {
        const date = new Date(now.getFullYear(), now.getMonth(), day);
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        dayElement.onclick = () => {
            eventDetails.textContent = `Events on ${date.toDateString()}: No events listed.`; // Update this to fetch real events
            eventSidebar.style.display = "block";
        };
        calendar.appendChild(dayElement);
    }
});

// gallery

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表單的預設提交行為
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 簡單的驗證示例
    if (name && email && message) {
        // 此處可以加入更多的驗證邏輯或發送資料到伺服器
        console.log('Form Submitted', { name, email, message });
        alert('感謝您的聯絡，我們將盡快回覆！');
    } else {
        alert('請填寫所有必填欄位！');
    }
});

// 後面
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('input', function () {
        // 更新驗證圖標的可視性
        var icon = this.nextElementSibling;
        if (this.validity.valid) {
            icon.style.display = 'block'; // 顯示圖標
        } else {
            icon.style.display = 'none'; // 隱藏圖標
        }
    });
});
