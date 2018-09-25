// randomized the background image

var myImages = [
    "./assets/images/desert.jpg",
    "./assets/images/beach.png",
    "./assets/images/city2.jpg",
    "./assets/images/rain.jpg",
    "./assets/images/forest.jpg",
    "./assets/images/vegas.jpg",
    "./assets/images/grand-canyon.jpg",
    "./assets/images/london.jpg",
    "./assets/images/seattle.jpg",
    "./assets/images/night-sky.jpg",
];

function changeImg() {

    var imgShown = document.body.style.backgroundImage;
    var newImgNumber = Math.floor(Math.random() * myImages.length);
    document.body.style.backgroundImage = 'url(' + myImages[newImgNumber] + ')';
}

window.onload = changeImg()

// Get the modal
let modal = document.getElementById('myModalSignUp');
let modal2 = document.getElementById('myModalLogIn');
// Get the button that opens the modal
let btnSignUp = document.getElementById("myBtnSignUp");
let btnLogIn = document.getElementById("myBtnLogIn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close2")[0];
// When the user clicks the button, open the modal 
btnSignUp.onclick = function() {
    event.preventDefault()
    modal.style.display = "block";
}
btnLogIn.onclick = function() {
    event.preventDefault()
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    };
};

function thingsToDo () {
    let newCity = decodeURIComponent(window.location.search);
    location.replace ('./locations.html'+ newCity)
};

$('#checking').on('click', function() {
    let newCity = decodeURIComponent(window.location.search)
    newCity = newCity.substring(1)
    newCity = newCity.replace('para1=','') 
});