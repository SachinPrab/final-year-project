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

  /* ================= EVENT CAROUSEL ================= */
  const eventCarouselImage = document.getElementById('carouselImage');
  const eventTitle = document.getElementById('eventTitle');
  const eventDate = document.getElementById('eventDate');
  const eventDesc = document.getElementById('eventDesc');
  const eventPrevBtn = document.getElementById('prevBtn');
  const eventNextBtn = document.getElementById('nextBtn');

  if (eventCarouselImage && eventTitle && eventDate && eventDesc && eventPrevBtn && eventNextBtn) {
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

    const updateEventCarousel = () => {
      const e = events[index];
      eventCarouselImage.src = e.image;
      eventTitle.textContent = e.title;
      eventDate.innerHTML = `<strong>Date:</strong> ${e.date}`;
      eventDesc.textContent = e.desc;
    };

    eventNextBtn.addEventListener('click', () => {
      index = (index + 1) % events.length;
      updateEventCarousel();
    });

    eventPrevBtn.addEventListener('click', () => {
      index = (index - 1 + events.length) % events.length;
      updateEventCarousel();
    });

    // initialize
    updateEventCarousel();
  }

  /* ================= GALLERY CAROUSEL ================= */
  const galleryCarouselImage = document.getElementById('galleryCarouselImage');
  const galleryCaption = document.getElementById('galleryCaption');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');

  if (galleryCarouselImage && galleryCaption && galleryPrevBtn && galleryNextBtn) {
    const galleryItems = [
      { src: 'assets/gallery1.jpg', title: 'Gallery Image 1', desc: 'Memories from Event 1' },
      { src: 'assets/gallery2.jpg', title: 'Gallery Image 2', desc: 'Memories from Event 2' },
      { src: 'assets/gallery3.jpg', title: 'Gallery Image 3', desc: 'Memories from Event 3' },
      { src: 'assets/event1.jpg', title: 'Event 1', desc: 'Music Festival 2025' },
      { src: 'assets/event2.jpg', title: 'Event 2', desc: 'Tech Innovation Meetup' },
      { src: 'assets/event3.jpg', title: 'Event 3', desc: 'Cultural Night 2026' }
    ];

    let gIndex = 0;

    const updateGalleryCarousel = () => {
      const item = galleryItems[gIndex];
      galleryCarouselImage.src = item.src;
      galleryCaption.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
    };

    galleryNextBtn.addEventListener('click', () => {
      gIndex = (gIndex + 1) % galleryItems.length;
      updateGalleryCarousel();
    });

    galleryPrevBtn.addEventListener('click', () => {
      gIndex = (gIndex - 1 + galleryItems.length) % galleryItems.length;
      updateGalleryCarousel();
    });

    // initialize
    updateGalleryCarousel();
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
