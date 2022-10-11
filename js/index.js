function imgToSmile(){
    document.getElementById("header-img").src = "images/ward-nobkg-smile.png"
}

function imgToNormal(){
    document.getElementById("header-img").src = "images/ward-nobkg.png"
}

function jobPage(){
    window.location.href="pages/job.html";
}

function loadNavBar(){
    fetch('navbar.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('navbar').innerHTML = text);
  }