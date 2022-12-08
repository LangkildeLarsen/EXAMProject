const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".hamburger");

hamburger. addEventListener ("click", () => {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
})

document.querySelectorAll ("a").forEach (n=> n.
    addEventListener("click", () => {
        hamburger.classList.remove("active")
        navbar.classList.remove("active")

    }))