
//making a variable that will be exported with node modules unde Modules.js

 const people = ["men","women","other"]

 const age =[11,45,89,32]

 console.log(people,age);

//this exports all the 2 Variables into the console with NODE
module.exports = {
    people,age
}; 

