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

    // Start typing effect after a small delay
    if (typeWriterElement) {
        setTimeout(typeWriter, 300);
    }
});
