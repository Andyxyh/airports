console.log("here!");


let navImages = document.querySelectorAll(".cloud");

let mainImage = document.querySelector(".airplane");

function greenCloud() {
    mainImage.src = "images/clouds-green.jpg";
}

function blueCloud() {
    mainImage.src = "images/clouds-blue.jpg";
}

function redCloud() {
    mainImage.src = "images/clouds-red.jpg";
}

function goBack() {
    mainImage.src = "images/airplane.jpg";
}

navImages[0].onclick = greenCloud;
navImages[1].onclick = blueCloud;
navImages[2].onclick = redCloud;
mainImage.onclick = goBack;