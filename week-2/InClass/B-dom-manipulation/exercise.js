/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
// ! Difference between append and appendChild = 


// 1. all the "p" element nodes of the document,
// --> should log a list of nodes with a length of 6
var paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// 2. the first div element node
// --> should log the ".site-header" node
var firstDiv = document.querySelector('div');
console.log(firstDiv);

// 3. the element with id "jumbotron-text"
// --> should log the "#jumbotron-text" node
var jumboTronDiv = document.getElementById('jumbotron-text');
console.log(jumboTronDiv);

// 4. all the "p" elements of contained inside  the .primary-content element node
// --> should log a list of nodes with a length of 3
var primaryContentP = document.querySelector('.primary-content p');
console.log(primaryContentP);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function greetings() {
    alert("Thanks for visiting bikes for refugees");
}

function greetingsConsole() {
    console.log("Thanks for visiting bikes for refugees");
}

var button = document.getElementById('alertBtn');
button.addEventListener('click', greetings);
button.addEventListener('click', greetingsConsole);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changeBackgroundColour() {
    var body = document.querySelector('body')
    body.style.backgroundColor = 'cyan'
}

var buttonChangeColour = document.getElementById('bgrChangeBtn');
buttonChangeColour.addEventListener('click', changeBackgroundColour)
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function addSomeText(newText) {
    var paragraph = document.createElement('p');
    paragraph.innerText = newText;

    // ! Creamos el var article para que tenga el mismo formato/diseño que en el DOM de la página original
    var article = document.querySelector('article');
    article.classList.add('article')
    article.appendChild(paragraph);

    var articles = document.querySelector('#mainArticles');
    articles.appendChild(article);
}

var newTextButton = document.querySelector('#addTextBtn');
newTextButton.addEventListener('click', addSomeText);
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
function largerLinks() {
    // ! Choose all a's that have "href"
    var anchors = document.querySelectorAll('a[href]');
    anchors.forEach(
        anchor => {
            var fontSize = parseInt(anchor.style.fontSize);
            fontSize++
            anchor.style.fontSize = `${fontSize}em`
            console.log(fontSize);
        }
    )
}

var largerLinksButton = document.querySelector('#largerLinksBtn');
largerLinksButton.addEventListener('click', largerLinks)

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

function add() {
    var inputText = document.querySelector('#content input')
    var text = inputText.value;
    addSomeText(text);
    inputText.value = ''
    console.log(inputText.value);
}
var addButton = document.getElementById('addArticleBtn');
addButton.addEventListener('click', add);

// Creating floating square
var floatingSquare = document.createElement('div');
floatingSquare.style.backgroundColor = "#FF0000"
floatingSquare.style.height = "3em"
floatingSquare.style.width = "3em"
floatingSquare.style.top = 0
floatingSquare.style.left = 0
floatingSquare.style.position = 'absolute' // ! Why set to zero?
var body = document.querySelector('body')
body.appendChild(floatingSquare)


var pos = 0;
var id = setInterval(frame, 500);

// Validaciones
var inputText = document.querySelector('#content input')
inputText.placeholder = "Campo Obligatorio"

function frame() {
    if (pos === 350) {
        clearInterval();
    } else {
        pos++
        floatingSquare.style.top = `${pos}px`
        floatingSquare.style.left = `${pos}px`
    }
}


function validation() {

    id = setInterval(frame, 500);
    var body = document.querySelector('body')
    body.appendChild(floatingSquare)


    var text = inputText.value;

    // Volver a caso limpio
    inputText.style.border = '';
    var currentAlerta = document.getElementById('alerta')
    if (currentAlerta) {
        currentAlerta.remove()
    }

    if (!text) {
        var div = document.querySelector('.primary-content div[style]');
        var alerta = document.createElement('p')
        // alerta.innerText = "El campo está vacío"
        div.appendChild(alerta)

        inputText.style.border = `1px solid #AA0000`
    } else {
        console.log('Si hay texto')
    }
}
addButton.addEventListener('click', validation);

function test() {
    console.log(`on change`)
}

addButton.addEventListener('onchange', test);
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

var colors = [
    'cyan',
    'red',
    'green',
    'blue',
    'yellow'
];

function changeBackgroundColour() {
    var body = document.querySelector('body')
    var currentColour = body.style.backgroundColor;  //ejemplo si usamos 'red'
    var currentColourIndex = colors.indexOf(currentColour) // Est nos daría que el indice de red es 1
    currentColourIndex++ // el 1 de red ahora es 2
    if (currentColourIndex >= colors.length) { // Si el color es mayor o igual a 5, comienza de cero el color ('cyan'). Ejemplo cuando es yellow 
        currentColourIndex = 0; // comienza desde cero con cyan
    }
    body.style.backgroundColor = colors[currentColourIndex]; // ! el color cambia al apretar el boton. Nosotros hacemos el "bucle"
}

var buttonChangeColour = document.getElementById('bgrChangeBtn');
buttonChangeColour.addEventListener('click', changeBackgroundColour)

