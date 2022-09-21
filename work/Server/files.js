const fs = require("fs");

//reading files
//if data is being displayed we can add an arrow function
//to catch an err of display data using  IF statement

fs.readFile('../Client/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }

  //this will return a buther like data in the terminal
  console.log(data);
});

//writing files

//directories

//deleting files
