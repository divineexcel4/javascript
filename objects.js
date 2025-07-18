// let fruits = ['mango', 'oranges', 'apple', [1,2,3,4, 'paw-paw', 'pear'], {}]
// console.log(fruits[3][5])


// let age = 47

// console.log(typeof(fruits))

let person = {
    name : 'john',
    school : 'Unical',
    age : 23,
    status : 'single',
    employer : 'techturant',
    isMarried : false,
    // bookowed: ['tear of an orphan', 'golliver travel', 'wizard of love']
}
let changedData = JSON.stringify(person)
// console.log(typeof(changedData))

let newData = JSON.parse(changedData)


let workerJson ={
    "id":1,
    "StaffName":"John Doe",
    "StaffSalary":"$10000",
    "Employer":"Techturant"
}

console.log(typeof(workerJson))

// console.log(person.status)


// let school = {
//     Worker: 'AI',
//     numbersofworker: 20,
//     teachingstaff: 15,
//     noteachingstaff: 5,
//     numbersofstudent: 300,
//     schoolname: 'technicalcollege',

//     dayofwork:{
//         day1:'monday',
//         day2:'tuesday',
//         day3:'wednesday',
//     }
// }

// school.numbersofworker = 45
// console.log(school.numbersofworker)

