// ===============================
// POPUP
// ===============================

const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

// Buka popup
openPopup.addEventListener("click", () => {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
});

// Tutup popup
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
});

// Tutup jika klik di luar popup
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// ===============================
// ANIMASI LOVE
// ===============================

const loves = document.querySelectorAll(".love");

loves.forEach((love) => {
    love.addEventListener("click", () => {

        love.classList.toggle("active");

        if (love.classList.contains("active")) {
            love.innerHTML = '<i class="fa-solid fa-heart"></i>';
            love.style.background = "#ff4f8d";
            love.style.color = "#fff";
        } else {
            love.innerHTML = '<i class="fa-solid fa-heart"></i>';
            love.style.background = "#fff";
            love.style.color = "#ff4f8d";
        }

    });
});

// ===============================
// ANIMASI CARD SAAT MOUSE MASUK
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

console.log("Rose Erron Website Ready ❤️");