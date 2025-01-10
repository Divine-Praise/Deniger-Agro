//onscroll
document.addEventListener('scroll', () =>{
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});

// Questions dropdown
const icone1 = document.querySelector('.dropdown-icon1');
const icone2 = document.querySelector('.dropdown-icon2');
const icone3 = document.querySelector('.dropdown-icon3');
const content1 = document.querySelector('#text1');
const content2 = document.querySelector('#text2');
const content3 = document.querySelector('#text3');

// functions
icone1.addEventListener('click', function(){
    content1.classList.toggle("active2");
    content2.classList.remove("active2");
    content3.classList.remove("active2");
});
icone2.addEventListener('click', function(){
    content1.classList.remove("active2");
    content2.classList.toggle("active2");
    content3.classList.remove("active2");
});
icone3.addEventListener('click', function(){
    content1.classList.remove("active2");
    content2.classList.remove("active2");
    content3.classList.toggle("active2");
});


// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    loop: true,
    speed: 1000,
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    autoplay:{
        delay: 6000,
        disableOnInteraction: false,
    }
});

// Initialize Swiper2
var swiper = new Swiper(".mySwiper2", {
    grabCursor: true,
    loop: true,
    speed: 1000,
    slidesPerView: 1, // Only one slide at a time
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Enable clickable pagination bullets
        dynamicBullets: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// Map integration
const map = L.map('mapBox').setView([6.6018, 3.3515], 13); // Centered on Ikeja, Nigeria

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
L.marker([6.6018, 3.3515]).addTo(map)
    .bindPopup('Ikeja, Lagos, Nigeria') // Popup text
    .openPopup();
