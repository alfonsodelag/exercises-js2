// ! Code for Blue Button
let blueBtn = document.getElementById("blueBtn");

function blueBtnChangeColors() {
    let jumbotron = document.querySelector('.jumbotron')
    let donateABike = document.querySelector("div .buttons").firstElementChild
    let volunteer = document.querySelector("div .buttons").lastElementChild
    jumbotron.style.backgroundColor = "#588fbd"
    donateABike.style.backgroundColor = "#ffa500"
    volunteer.style.backgroundColor = "black"
    volunteer.style.color = "white"
}

blueBtn.addEventListener("click", blueBtnChangeColors)

// ! Code for Orange Button
let orangeBtn = document.getElementById("orangeBtn");

function orangeBtnChangeColors() {
    let jumbotron = document.querySelector('.jumbotron')
    let donateABike = document.querySelector("div .buttons").firstElementChild
    let volunteer = document.querySelector("div .buttons").lastElementChild
    jumbotron.style.backgroundColor = "#f0ad4e"
    donateABike.style.backgroundColor = "#5751fd"
    volunteer.style.backgroundColor = "#31b0d5"
    volunteer.style.color = "white"
}

orangeBtn.addEventListener("click", orangeBtnChangeColors)

// ! Code for Green Button
let greenBtn = document.getElementById("greenBtn");

function greenBtnChangeColors() {
    let jumbotron = document.querySelector('.jumbotron')
    let donateABike = document.querySelector("div .buttons").firstElementChild
    let volunteer = document.querySelector("div .buttons").lastElementChild
    jumbotron.style.backgroundColor = "#87ca8a"
    donateABike.style.backgroundColor = "black"
    volunteer.style.backgroundColor = "#8c9c08"
}

greenBtn.addEventListener("click", greenBtnChangeColors)


// *********************** FORM VALIDATION ****************************
let submitBtn = document.querySelectorAll("form button")[0]

function formValidation(e) {
    let form = document.forms[0]
    console.log(form)

    e.preventDefault;
    let yourName = document.getElementById('exampleInputEmail1');
    let email = document.getElementById('example-text-input');
    let describeYourself = document.getElementById('exampleTextarea');

    if (!yourName.value.length > 0) {
        yourName.style.backgroundColor = "red"
    }
    if (!email.value.length > 0) {
        email.style.backgroundColor = "red"
    }
    if (!email.value.includes('@')) {
        console.log("You need to include the @")
    }
    if (!describeYourself.value.length > 0) {
        describeYourself.style.backgroundColor = "red"
    }
    if (yourName.value.length > 0 && email.value.length > 0 && describeYourself.value.length > 0) {
        alert("thanks");
        form.reset()
    }
}

submitBtn.addEventListener("click", formValidation)

