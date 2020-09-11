/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */


function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content")
  arrayOfPeople.forEach(person => {
    var h1 = document.createElement('h1')
    h1.innerHTML = person.name
    content.appendChild(h1)
    var h2 = document.createElement('h2')
    h2.innerHTML = person.job
    content.appendChild(h2)
  })
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  let content = document.querySelector("#content")
  shopping.forEach(product => {
    var li = document.createElement('li');
    li.innerHTML = product;
    content.appendChild(li)
  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  let content = document.querySelector("#content")
  let ul = document.createElement('ul')
  ul.style.display = "flex"
  ul.style.flexDirection = "row"
  ul.style.justifyContent = "space-evenly"
  books.forEach(book => {
    let li = document.createElement('li')
    li.style.listStyle = "none"
    li.style.display = "flex"
    li.style.justifyContent = "space-evenly"
    li.style.flexDirection = "column"
    ul.appendChild(li);
    let p = document.createElement('p');
    p.innerHTML = `${book.title} - ${book.author}`
    li.appendChild(p)
    let img = document.createElement('img')
    img.style.height = "500px"
    img.style.width = "500px"
    if (book.author === "Don Norman") {
      img.src = "https://kbimages1-a.akamaihd.net/5f4764d2-55bd-48f5-8f4c-b2f001270cc8/1200/1200/False/the-design-of-everyday-things-9.jpg"
    } else if (book.author === "Brian Christian") {
      img.src = "https://images.penguinrandomhouse.com/cover/9780307476708"
    } else if (book.author === "Andrew Hunt") {
      img.src = "https://i1.wp.com/learnengineering.in/wp-content/uploads/2019/08/PDF-The-Pragmatic-Programmer-From-Journeyman-to-Master-By-Andrew-Hunt-David-Thomas-Free-Download.jpg?fit=398%2C499&ssl=1"
    }
    li.appendChild(img)
    content.appendChild(ul)
    if (book.alreadyRead === true) {
      li.style.backgroundColor = "green"
    } else {
      li.style.backgroundColor = "red"
    }
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

console.log(exerciseOne(people));

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
