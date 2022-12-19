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

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var countDownDate = new Date("Dec 23, 2022 16:00:00").getTime();
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        return [h, m, s];
    }

    var [hours, minutes, seconds] = secondsToHms(distance / 1000)

    // Output the result in an element with id="demo"
    document.getElementById("deadline").innerHTML = `${hours}:${minutes}:${seconds}`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("deadline").innerHTML = "He's outta here!";
    }
}, 1000);