var btnHamburger = document.querySelector(".hamburger");
var close = document.querySelector(".close");
var slide = document.querySelector(".slide");

btnHamburger.addEventListener("click", function() {
    slide.style.display = "block";
})

close.addEventListener("click", function() {
    slide.style.display = "none";
})