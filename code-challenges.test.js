// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Psuedocode
// Write out a describe statemtn that contains the function fibanacci
// create an it statement describing that itll take in the variable and put out a sequence.
// create two expect statements using .toEqual to tell the test what the output should equal 

describe ("fibanacci", () => {
  it ("should return the expected fibanacci seuquence", () => {
    const fibLength1 = 6
    const fibLength2 = 10
      expect (fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect (fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
      
  })
})


// ran test it failed 

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

//Psuedocode 
// make a function named fibanacci maker.
// declare an array with 1,1 in it to use for the first two spots
// use a loop with the index starting at two make the lenght the variable number
// have the loop go forwards by using i++
// make a newFibanacci variable to make the new sequence
// concat [i-1]+[i-2]
// use the push property to return the first fibanacci with the second fibbanacci 

const fib = (num) => {
  let fibonacci = [1, 1];
  for(let i = 2; i < num; i++){
    let newFib = fibonacci[i-1] + fibonacci[i-2]
    fibonacci.push(newFib)
  } 
  return fibonacci
}

// the test did not pass 
// // Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        1.103 s
// Ran all test suites.

// im not sure why the test isnt passing everything seems right to me. 


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// Psuedo code
// make a sortValues function
// make an it statement 
// "should return an array of values sorted from least to greatest"
// set toEqual to our expected outputs



const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortValues", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }

it("should return an array of values sorted from least to greatest", () => {
  expect(sortValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(sortValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
})
})

// ran the test the test failed. 

// b) Create the function that makes the test pass.

//Psuedocode
// create a function named sort values
// make it take an object as a paramater 
// extract all the values from the object
// return all the values sorted from least to most using (a-b)

const sortValues = (obj) => {
  return Object.values(obj).sort((a, b) => a - b)
  }


// I think something is wrong with my yarn or jest becaue the tests never pass and this
// is what i get back 
// Test Suites: 1 failed, 1 total
// Tests:       0 total
// Snapshots:   0 total
// Time:        1.215 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//psuedocode
// describe a function that takes in an array and returns an array with the sum
// make an it smatement that explains "it will take in an array and return the sum"
// create three expect statements

describe ("sumArrays", () => {
  it ("will take in an array and return the sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
      expect (sum(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect (sum(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect (sum(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

//Psuedo code 
// make a function called sumArrays
// create a variable and set the value to 0
// return using the map method to go through each element
// make it so you add each element to the sum variable which is 0
// return the result 



const sumArrays = (array) => {
  let sum = 0
  return array.map((value) => {
    sum += value
    return sum
  })
}


// i re ran my test and the first two passed but my last one on the sum of the arrays did not
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.577 s
// Ran all test suites.
