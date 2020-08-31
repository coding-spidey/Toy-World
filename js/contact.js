function validateForm() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const fText = document.getElementById("nameText");
    const cText = document.getElementById("contactText");
    const eText = document.getElementById("emailText");
    const sText = document.getElementById("subjectText");
    var bool = true;
    var a = true;
    var b = true;
    var c = true;
    var d = true;

    if (name == "") {
        const text = "*Please Enter First Name";
        fText.innerHTML = text;
        bool = false;
        a = false;
    }
    if (!contact.match(/^\d{10}$/) && !contact.match(/^[0-9]+$/)) {
        const text = "*Please Enter Valid Number";
        cText.innerHTML = text;
        bool = false;
        b = false;
    }
    if (email == "" || /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email) == false) {
        const text = "*Please Enter Valid E-mail";
        eText.innerHTML = text;
        bool = false;
        c = false;
    }
    if (subject == "") {
        const text = "*Please Enter Subject";
        sText.innerHTML = text;
        bool = false;
        d = false;
    }
    if (a == true) {
        fText.innerHTML = "";
    }
    if (b == true) {
        cText.innerHTML = "";
    }
    if (c == true) {
        eText.innerHTML = "";
    }
    if (d == true) {
        sText.innerHTML = "";
    }
    if (bool == true) {
        document.getElementById("contactForm").reset();
        alert("Your Query Has Been Registered")
    }
}