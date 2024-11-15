//Example 1
// Define the first function
function john(sarah) { //function logs a message and prints the sarah parameter
  console.log("This is the John function:"); 
  console.log("Data received:", sarah);
}

// Define the second function that takes a callback
function sarah(john) { 
  console.log("This is the Sarah function");//logs its own message,
  john("Hello from Sarah!"); //then calls the john function, passing it the message "Hello from Sarah!".
}
// Call the second function with the first function as a callback
//We pass john as a callback to sarah, so john is called from inside sarah
sarah(john); 


//Example 2
// Function that processes data and then calls a callback
function processData(callback) {
  console.log("Processing data...");
  const data = "Sample Data";
  callback(data);  // Pass processed data to the callback
}
// Callback function to display data
function displayData(data) {
  console.log("Displaying data:", data);
}
// Call processData with displayData as the callback
processData(displayData);


//Example 3
// Function that asks a question and then calls a callback
function askQuestion(callback) {
  console.log("What is your favorite color?");
  callback("Blue");  // Pass an answer to the callback
}
// Callback function to respond with the answer
function respond(answer) {
  console.log("Oh, I see! Your favorite color is:", answer);
}
// Call askQuestion with respond as the callback
askQuestion(respond);


//Example 4
// Function that asks a question and then calls a callback
function hobby(cb)  {
    console.log("Your hobby?"); 
    cb("reading"); // Pass an answer to the callback
}
// Callback function to respond with the answer
function response(answer) {
    console.log("Your hobby is:", answer);
}
// Call askQuestion with respond as the callback
hobby(response);


//Example 5
// Function that runs a task and then calls a callback
function performTask(callback) {
  console.log("Task is being performed...");
  callback();  // Call the callback function
}
// Callback function that logs a message
function taskDone() {
  console.log("Task is done!");
}
// Call performTask with taskDone as the callback
performTask(taskDone);
