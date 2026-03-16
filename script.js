// Typing Effect
const text = "Frontend Developer | Laravel | UI Design | TRPL IT Del";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 40);
    }
}
typingEffect();

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});

