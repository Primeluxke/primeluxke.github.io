// PRIME LUX CAR RENTALS
// script.js

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // BOOKING FORM -> WHATSAPP
    // ==========================

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = bookingForm.querySelectorAll("input, select");

            const name = inputs[0].value;
            const phone = inputs[1].value;
            const vehicle = inputs[2].value;
            const pickup = inputs[3].value;
            const returnDate = inputs[4].value;
            const service = inputs[5].value;

            const message =
`🚗 PRIME LUX CAR RENTALS BOOKING

Name: ${name}
Phone: ${phone}

Vehicle: ${vehicle}

Pickup Date: ${pickup}

Return Date: ${returnDate}

Service Type: ${service}

Kindly confirm availability and pricing.`;

            const whatsappURL =
                `https://wa.me/254792214367?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        });

    }

    // ==========================
    // NAVBAR SCROLL EFFECT
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(0,0,0,0.95)";
            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.4)";

        } else {

            navbar.style.background =
                "rgba(0,0,0,0.85)";

            navbar.style.boxShadow = "none";

        }

    });

    // ==========================
    // REVEAL ON SCROLL
    // ==========================

    const revealElements = document.querySelectorAll(
        ".car-card, .service-card, .review-card, .stat-box"
    );

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition =
            "all 0.8s ease";

    });

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    // ==========================
    // COUNTER ANIMATION
    // ==========================

    const counters =
        document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const targetText =
            counter.innerText;

        const target =
            parseInt(targetText.replace(/\D/g, ""));

        if (!target) return;

        let count = 0;

        const updateCounter = () => {

            count += Math.ceil(target / 80);

            if (count >= target) {

                counter.innerText = targetText;

            } else {

                if (targetText.includes("%")) {

                    counter.innerText =
                        count + "%";

                } else if (targetText.includes("+")) {

                    counter.innerText =
                        count + "+";

                } else {

                    counter.innerText =
                        count;

                }

                requestAnimationFrame(
                    updateCounter
                );

            }

        };

        updateCounter();

    });

    // ==========================
    // ACTIVE NAV LINK
    // ==========================

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                pageYOffset >= sectionTop
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {
                link.classList.add("active");
            }

        });

    });

    // ==========================
    // SCROLL TO TOP BUTTON
    // ==========================

    const scrollBtn =
        document.createElement("button");

    scrollBtn.innerHTML = "↑";

    scrollBtn.id = "scrollTopBtn";

    document.body.appendChild(scrollBtn);

    scrollBtn.style.cssText = `
        position:fixed;
        bottom:100px;
        right:25px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        background:#D4AF37;
        color:#000;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:999;
        font-weight:bold;
    `;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.style.display =
                "block";

        } else {

            scrollBtn.style.display =
                "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ==========================
    // LOADING ANIMATION
    // ==========================

    const loader =
        document.createElement("div");

    loader.id = "loader";

    loader.innerHTML =
        "<div class='loader-text'>PrimeLux Car Rentals</div>";

    document.body.appendChild(loader);

    loader.style.cssText = `
        position:fixed;
        inset:0;
        background:#000;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:99999;
        transition:0.6s;
    `;

    const loaderText =
        loader.querySelector(
            ".loader-text"
        );

    loaderText.style.cssText = `
        color:#D4AF37;
        font-size:2rem;
        font-weight:800;
        letter-spacing:2px;
    `;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 1200);

});
