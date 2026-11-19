
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
