tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#901414",
                "background-light": "#FFFFFF",
                "background-dark": "#0A0A0A",
            },
            fontFamily: {
                display: ["Outfit", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
};

document.addEventListener("DOMContentLoaded", () => {
    // --- Theme Logic ---
    const themeToggleBtns = document.querySelectorAll(".theme-toggle");
    
    function toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    themeToggleBtns.forEach(btn => {
        btn.addEventListener("click", toggleTheme);
    });

    // --- Mobile Menu Logic ---
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-full");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    }

    const hideMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add("translate-x-full");
            document.body.style.overflow = ""; // Restore scrolling
        }
    };

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", hideMenu);
    }

    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", hideMenu);
    });

    // --- Typewriter Effect ---
    const textToType = "Andrei Silva";
    const speed = 70;
    const typeWriterElement = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (typeWriterElement && index < textToType.length) {
            typeWriterElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    if (typeWriterElement) {
        setTimeout(typeWriter, 300);
    }
});
