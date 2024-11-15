//Example 1
// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed.");
    }
  }, 2000);
});
// Handling the Promise result with .then() and .catch()
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


//Example 2
let pro = new Promise((resolve, reject) =>{
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Succesful");
            }
                else {
                  reject("Failed");
            }
        },4000);
            });
pro
  .then((message) => {
   console.log("success:", message);
    })
    .catch((error) => {
        console.log("error:", error)
    });


//Example 3
// Create a function that returns a Promise
function isEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even.");
    } else {
      reject("The number is odd.");
    }
  });
}
// Use the Promise
isEvenNumber(4)
  .then((message) => {
    console.log(message);  // Output: "The number is even."
  })
  .catch((error) => {
    console.log(error);  // Output if odd: "The number is odd."
  });


//Example 4
// Create a function that returns a Promise
function checkVotingEligibility(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are eligible to vote.");
    } else {
      reject("You are not eligible to vote.");
    }
  });
}
// Use the Promise
checkVotingEligibility(20)
  .then((message) => {
    console.log(message);  // Output: "You are eligible to vote."
  })
  .catch((error) => {
    console.log(error);  // Output if under 18: "You are not eligible to vote."
  });


//Example 5
// Create a function that returns a Promise
function checkgrade (grades) {
    return new Promise((resolve, reject) => {
        if (grades >=90) {
            resolve("Excellent grade");
        } else {
            reject("Average grade");
        }
    });
}
//Use the Promise
checkgrade(80)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

