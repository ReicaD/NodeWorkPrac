 const fs = require("fs");

// const { fstat } = require("fs");

// //reading files
// //if data is being displayed we can add an arrow function
// //to catch an err of display data using  IF statement

 fs.readFile('../server/blog1.txt', (err, data) => {
if (err) {
    console.log(err); }

//   //it turns the buther console.log(data)of numbers to a readable format
  console.log(data.toString());
 });

 console.log('Secure Gate');

//writing files
 const fs = require('fs')

fs.writeFile('./Server/blog1.txt','hello world',() => {
  console.log('file is Up')
});
console.log(fs)


//directories

//deleting files
//