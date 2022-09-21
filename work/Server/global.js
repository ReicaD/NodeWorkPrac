
//this writes down the time intervals needed to add variables
console.log(global);
  

//time out is set for loging into the console by adding time intervars
setTimeout(()=>{
    console.log('in the Cloud');
    clearInterval(int);
},5000)

//setInterval is used for adding time on the loop for it to be stop we have to add clearInterval that will stop the code after a given timInt
const int = setInterval(() => {
    console.log('All are out')
}, 3000);


// //this calls for a particular folder name
// console.log(__dirname);
// //this calls for a particular file name
// console.log(__filename);



