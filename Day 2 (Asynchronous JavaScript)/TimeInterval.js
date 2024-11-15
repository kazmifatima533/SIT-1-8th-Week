 //Example 1
 let count = 0;
 const intervalId = setInterval(() => {
   console.log(`Interval running: ${++count}`);
  if (count === 2) {
     clearInterval(intervalId); // Stops the interval after 2 executions
   }
 }, 2000);


//Example 2
// This function logs a message every 2 seconds
let interval = setInterval(() => {
  console.log('This message appears every 2 seconds');
}, 2000);
// If you want to stop the interval after 10 seconds:
setTimeout(() => {
  clearInterval(interval);
  console.log('Interval cleared');
}, 10000);


//Example 3
let countt = 0 ;
const int = setInterval (() => { 
    console.log("running" , countt++);
    if (countt === 5) {
        clearInterval(int)
    }
}, 5000);


//Example 4
let time = setInterval (() => {
    console.log("Every 8 seconds");
}, 8000);
setTimeout(()=>{
    clearInterval(time);
    console.log("Cleared")
},8000);


//Example 5
let counter = 0;
const gap = setInterval (() => {
    console.log("For 11 seconds", counter++);
    if (counter === 12) {
        clearInterval(gap);
    }
},11000);

