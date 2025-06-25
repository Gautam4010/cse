
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const slideOutMenu = document.querySelector('.slide-out-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    function toggleMenu() {
        slideOutMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = slideOutMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on menu items
    const menuItems = document.querySelectorAll('.menu-list a');
    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
    
    // Keyboard Accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && slideOutMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Add animation classes when menu opens
    const menuSections = document.querySelectorAll('.menu-section');
    
    hamburger.addEventListener('click', function() {
        menuSections.forEach((section, index) => {
            section.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        });
    });

        //For slider below the navigation bar
        const slider = document.getElementById('courseSlider');
        const progressBar = document.getElementById('progressBar');

        slider.addEventListener('scroll', () => {
        const scrollLeft = slider.scrollLeft;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const scrollPercent = (scrollLeft / maxScroll) * 100;
        progressBar.style.width = scrollPercent + '%';
        });
    });

      
    document.addEventListener('DOMContentLoaded', function () {
        // 🔍 Real-time Search Filter
        const searchInput = document.getElementById('searchInput');
        const cards = document.querySelectorAll('.course-card');

        searchInput.addEventListener('input', function () {
            const filter = this.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                const desc = card.querySelector('p').innerText.toLowerCase();

                if (title.includes(filter) || desc.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });

        // 🔔 Simulated Notification Badge (show badge if new course exists)
        // Call this function when a new course is added dynamically
        function showNotificationBadge(count = 1) {
            const badge = document.getElementById('notifyBadge');
            badge.innerText = count;
            badge.style.display = 'inline-block';
        }

        // Example: Simulate notification after 5 seconds (for demo)
        setTimeout(() => {
            showNotificationBadge(1); // you can change number
        }, 5000);
    });

        document.addEventListener('DOMContentLoaded', function() {
            // Enhanced Intersection Observer with re-triggering capability
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        // Remove animate class when element leaves viewport
                        // to allow re-animation when scrolled back into view
                        entry.target.classList.remove('animate');
                    }
                });
            }, observerOptions);

            // Observe all course cards with staggered delay
            const cards = document.querySelectorAll('.course-card');
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(card);
            });

            // Enhanced hover effects
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-2px)';
                });
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0)';
                });
            });

            // Reset animations when window is resized
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    cards.forEach(card => {
                        card.classList.remove('animate');
                        observer.unobserve(card);
                        observer.observe(card);
                    });
                }, 250);
            });
      



            var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
            slidesPerView: 2
            },
            1024: {
            slidesPerView: 3
            }
        }
        });

});
    