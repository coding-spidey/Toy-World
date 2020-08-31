window.onscroll = function () { myFunction() };
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
let slideIndex = 1;
const cart = document.getElementById("lblCartCount");
var count = 0;
const modal = document.getElementsByClassName("modal");
const span = document.getElementsByClassName("close");
const login = document.getElementById("login");
const signUp = document.getElementById("signUp");
const year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();


// Sticky nav
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// Slider 
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
}

// Add Item to cart
function increaseCount() {
    this.count += 1;
    cart.innerHTML = count;
}
function showCartItems() {
    alert("Your Cart Contains " + this.count + " Items");
}

// modal

login.onclick = function () {
    modal[0].style.display = "block";
}
signUp.onclick = function () {
    modal[1].style.display = "block";
}
span[0].onclick = function () {
    modal[0].style.display = "none";
}
span[1].onclick = function () {
    modal[1].style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    else if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
}

function onLogin() {
    modal[0].style.display = "none";
    alert("You Have been Logged In sucessfully!!");
}
function onSignUp() {
    modal[1].style.display = "none";
    alert("Sign Up Complete");
}