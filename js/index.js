function imgToSmile() {
    document.getElementById("header-img").src = "images/ward-nobkg-smile.png"
}

function imgToBlush() {
    document.getElementById("header-img").src = "images/ward-nobkg-blush.png"
}

function imgToNormal() {
    document.getElementById("header-img").src = "images/ward-nobkg.png"
}

function jobPage() {
    window.location.href = "pages/job.html";
}

function loadNavBar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(text => document.getElementById('navbar').innerHTML = text);
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// When the user clicks on div, open the popup
function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}