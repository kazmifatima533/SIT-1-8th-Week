console.log("this is first line")

// this js is sync so thats why its take time for calculation
// so insted of the sync we will prepre the async
 function add(){
    let i=0;
    let y=0;
     for(let i=0; i<1000000000; i++){
     y=y+i
     }
    return y;
 }
 console.log("the result after for loop:",add())
 console.log("the last line")


//Async Timeout function
 console.log('Start');  // will print the first line
 //(function,delay,...arg)
 setTimeout(() => {
   console.log('Executed after 2 seconds');  // after 5 second it will give this line
  }, 5000); 

  console.log('End');  // then this second line



// set time intervel
 let count = 0;
 const intervalId = setInterval(() => {
   console.log(`Interval running: ${++count}`);
  if (count === 5) {
     clearInterval(intervalId); // Stops the interval after 5 executions
   }
 }, 2000);


//call back function
 function fetchData(processData) {
    console.log("the console inside the callback")
    processData('Sample data');
     setTimeout(() => {
   console.log('Data fetched');
 }, 1000);
   }
  function processData(data) {
     console.log('Processing:', data);
   }
    fetchData(processData);

//Example
 function fatima(ali){
     console.log("the fatima function:")
     console.log("the data that is  comming:",ali)
 }
 function ali(fatima){
   console.log("the ali  console")
   fatima("from ali side.")
 }
ali(fatima)

// promise has two state resolve or reject
function fetchData(){
   return new Promise ((reslove, reject)=>{
       setTimeout(()=>{
             reslove("data featch successfully")   // this will resolve and will give us the success message
            reject("there is some issue while taking data") // this will reject the promise and will give use the failure message
         },1000)
     })
 }
 fetchData()
.then((data)=>{  // once the the promise resolve then this will run
   console.log("the promise success:",data)
 })
 .catch((data)=>{   // once rejected then this will run
      console.log("the error is error")
    console.error("the error is:",data)
})