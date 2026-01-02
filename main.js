document.addEventListener('DOMContentLoaded', function () {

    /* ================= MOBILE NAV ================= */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* ================= IMAGE CAROUSEL ================= */
/* ================= EVENT CAROUSEL ================= */
const carouselImage = document.getElementById('carouselImage');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventDesc = document.getElementById('eventDesc');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (
    carouselImage &&
    eventTitle &&
    eventDate &&
    eventDesc &&
    prevBtn &&
    nextBtn
) {
    const events = [
        {
            image: 'assets/event1.jpg',
            title: 'Music Festival 2025',
            date: 'Dec 20, 2025',
            desc: 'Live performances from top South Indian artists'
        },
        {
            image: 'assets/event2.jpg',
            title: 'Tech Innovation Meetup',
            date: 'Jan 15, 2026',
            desc: 'AI, Blockchain, and Startup Networking'
        },
        {
            image: 'assets/event3.jpg',
            title: 'Cultural Night',
            date: 'Feb 10, 2026',
            desc: 'Traditional dance and cuisine from Karnataka'
        }
    ];

    let index = 0;

    const updateEvent = () => {
        carouselImage.src = events[index].image;
        eventTitle.textContent = events[index].title;
        eventDate.innerHTML = `<strong>Date:</strong> ${events[index].date}`;
        eventDesc.textContent = events[index].desc;
    };

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % events.length;
        updateEvent();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + events.length) % events.length;
        updateEvent();
    });
}
  

    /* ================= CONTACT FORM ================= */
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.style.color = 'red';
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
                return;
            }

            formMessage.textContent =
                'Thank you! Your message has been submitted successfully.';
            formMessage.style.color = 'green';

            contactForm.reset();
        });
    }

    /* ================= LIGHT / DARK MODE ================= */
    const themeToggle = document.getElementById('themeToggle');

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
    }
});
