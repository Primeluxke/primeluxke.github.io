/* ===========================
   PRIME LUX SCRIPT V2
=========================== */

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "none";
    }
});

// Reveal animation
const revealElements = document.querySelectorAll(
    ".car-card, .fleet-card, .feature, .about"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Book buttons
document.querySelectorAll(".car-btn").forEach(button => {

    button.addEventListener("click", () => {

        const car =
            button.closest(".car-card")?.querySelector("h3")?.innerText ||
            button.closest(".fleet-card")?.querySelector("h4")?.innerText ||
            "Vehicle";

        const phone = "254792214367";

        const message =
            `Hello Prime Lux, I would like to book the ${car}. Please share availability and pricing.`;

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
});

// Fleet image hover zoom
document.querySelectorAll(".car-card img, .fleet-card img")
.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "0.4s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});

// Counter animation
function animateValue(el, start, end, duration){

    let startTimestamp = null;

    const step = (timestamp) => {

        if(!startTimestamp) startTimestamp = timestamp;

        const progress = Math.min(
            (timestamp - startTimestamp) / duration,
            1
        );

        el.innerHTML =
            Math.floor(progress * (end - start) + start);

        if(progress < 1){
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

// Optional statistics section
document.querySelectorAll(".counter").forEach(counter => {

    const end = parseInt(counter.dataset.target);

    animateValue(counter, 0, end, 2000);
});

// Console branding
console.log(`
====================================
 PRIME LUX CAR RENTALS
 Luxury Fleet Booking System
 Nairobi, Kenya
 WhatsApp: +254 792 214367
====================================
`);
