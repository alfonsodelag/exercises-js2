// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 5,
  abdul: 19
}

// ! One way of doing it
Object.entries(studentGrades)
  .filter(([_, grade]) => grade > 18) // ! Filter siempre usa condiciones
  .forEach(([name, grade]) => console.log(`${name} - ${grade}`)) // ! For each is used for "side effects"

// ! Another way of doing it
const students = Object.keys(studentGrades) // ['tom', 'george', 'abdul']
for (let i = 0; i < students.length; i++) {
  const estudiante = students[i]
  const grade = studentGrades[estudiante]
  if (grade > 18) {
    console.log(estudiante + ' - ' + grade)
  }
}
console.log()
students.filter( // ['tom', 'george', 'abdul']
  estudiante => {
    const grade = studentGrades[estudiante]
    return grade > 18
  }
) //[ 'tom', 'abdul' ]
  .forEach(
    estudiante => {
      const grade = studentGrades[estudiante]
      console.log(estudiante + ' - ' + grade)
    }
  )
  // Prints
  // TOM - 20
  // ABDUL - 19