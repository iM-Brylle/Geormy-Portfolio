/* =========================================================
   GEORMY BRYLLE CRUZ ABALOS
   PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOADER
    ====================================================== */

    const pageLoader = document.getElementById("pageLoader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            pageLoader.classList.add("loaded");
        }, 500);

    });


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    const sidebar = document.getElementById("sidebar");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileClose = document.getElementById("mobileClose");

    function openMenu() {
        sidebar.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        sidebar.classList.remove("open");
        document.body.style.overflow = "";
    }

    mobileMenu.addEventListener("click", openMenu);

    mobileClose.addEventListener("click", closeMenu);


    /* =====================================================
       NAVIGATION LINKS
    ====================================================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            closeMenu();

        });

    });


    /* =====================================================
       ACTIVE SECTION DETECTION
    ====================================================== */

    const sections = document.querySelectorAll("section[id]");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    navLinks.forEach((link) => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${currentId}`
                        );

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       REVEAL ANIMATIONS
    ====================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener("click", (event) => {

        if (
            window.innerWidth <= 850 &&
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            !mobileMenu.contains(event.target)
        ) {
            closeMenu();
        }

    });


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

});