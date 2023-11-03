///CURSOR
document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

    customCursor.style.left = (x + 50) + "px";
    customCursor.style.top = (y + 30) + "px";
    });
    document.addEventListener("mouseenter", () => {
        customCursor.style.display = "block";
    });
    document.addEventListener("mouseleave", () => {
        customCursor.style.display = "none";
    });
});