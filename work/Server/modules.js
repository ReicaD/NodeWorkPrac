//this is one way of importing both variables in the file using node
//const weareone = require('./modules')or ;
const { people, ages, getAge, getName } = require("./people");

// console.log(getAge(5,7))

// console.log(getName("Steven"))



// console.log(people, ages);


//this is one of the inbuilt module that adds functionality OS(operating system)
const os = require('os');

//adding platform also helps to find what type of OS operating stystem we are using in the terminal

console.log(os.platform(),os.homedir());

console.log(os);


