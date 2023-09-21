document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero-content", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".about-content", {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
    });

    gsap.from(".portfolio-item", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
    });

    gsap.from(".contact-form", {
        opacity: 0,
        x: 20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
    });
});