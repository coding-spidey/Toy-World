window.onscroll = function () { myFunction() };
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
let slideIndex = 0;
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
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
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
    const lu = document.getElementById("lusername").value;
    const p = document.getElementById("lpassword").value;
    var a = true
    var b = true
    var bool = true
    if (lu == "") {
        text = "*Please Enter Username";
        document.getElementById("luText").innerHTML = text
        a = false;
        bool = false;
    }
    if (p == "") {
        text = "*Please Enter Password";
        document.getElementById("lpText").innerHTML = text
        b = false;
        bool = false;
    }
    if (a == true) {
        document.getElementById("luText").innerHTML = "";
    }
    if (b == true) {
        document.getElementById("lpText").innerHTML = "";
    }
    if (bool == true) {
        modal[0].style.display = "none";
        alert("You Have been Logged In sucessfully!!");
        document.getElementById("loginModal").reset();
    }
}
function onSignUp() {
    const su = document.getElementById("susername").value;
    const sp = document.getElementById("spassword").value;
    const fn = document.getElementById("fname").value;
    const ln = document.getElementById("lname").value;
    var a = true
    var b = true
    var c = true
    var d = true
    var bool = true
    if (su == "") {
        text = "*Please Enter Username";
        document.getElementById("suText").innerHTML = text
        a = false;
        bool = false;
    }
    if (sp == "") {
        text = "*Please Enter Password";
        document.getElementById("spText").innerHTML = text
        b = false;
        bool = false;
    }
    if (fn == "") {
        text = "*Please Enter First Name";
        document.getElementById("sfText").innerHTML = text
        c = false;
        bool = false;
    }
    if (ln == "") {
        text = "*Please Enter Last Name";
        document.getElementById("slText").innerHTML = text
        d = false;
        bool = false;
    }
    if (a == true) {
        document.getElementById("suText").innerHTML = "";
    }
    if (b == true) {
        document.getElementById("spText").innerHTML = "";
    }
    if (c == true) {
        document.getElementById("sfText").innerHTML = "";
    }
    if (d == true) {
        document.getElementById("slText").innerHTML = "";
    }
    if (bool == true) {
        modal[1].style.display = "none";
        alert("Sign Up Complete");
        document.getElementById("SignUpModal").reset();
    }
}