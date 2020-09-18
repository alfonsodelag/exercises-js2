// Write your code here
let albertKing = "./example-screenshots/images/albert-king.jpg"
let bbKing = "./example-screenshots/images/bb-king.jpg"
let freddieKing = "./example-screenshots/images/freddie-king.jpg"

let bluesMusiciansArray = [albertKing, bbKing, freddieKing];

let currentIndex = 0

let output = document.getElementById("output");

isPaused = false;

function nextImage() {
    currentIndex++;
    currentIndex %= bluesMusiciansArray.length;
    let source = bluesMusiciansArray[currentIndex];
    let bluesMusiciansImg = document.getElementById("bluesMusiciansImg")
    bluesMusiciansImg.setAttribute('src', source)
}

function backImage() {
    currentIndex--;
    if (currentIndex === - 1) {
        currentIndex = bluesMusiciansArray.length - 1;
    }
    let source = bluesMusiciansArray[currentIndex];
    let bluesMusiciansImg = document.getElementById("bluesMusiciansImg")
    bluesMusiciansImg.setAttribute('src', source)
}

function autoForward() {
    setInterval(() => {
        if (!isPaused) {
            currentIndex++;
            if (currentIndex === bluesMusiciansArray.length) {
                currentIndex %= bluesMusiciansArray.length;
            }
            let source = bluesMusiciansArray[currentIndex];
            let bluesMusiciansImg = document.getElementById("bluesMusiciansImg")
            bluesMusiciansImg.setAttribute('src', source)
            output.innerText = currentIndex;
        }
    }, 1000);
}

function autoBack() {
    setInterval(() => {
        if (!isPaused) {
            currentIndex--;
            if (currentIndex === - 1) {
                currentIndex = bluesMusiciansArray.length - 1;
            }
            let source = bluesMusiciansArray[currentIndex];
            let bluesMusiciansImg = document.getElementById("bluesMusiciansImg")
            bluesMusiciansImg.setAttribute('src', source)
            output.innerText = currentIndex;
        }
    }, 1000);
}

let stopBtn = document.getElementById("stop").addEventListener("click", event => {
    event.preventDefault();
    bluesMusiciansImg.setAttribute('src', albertKing);
    isPaused = true;
})

let forward