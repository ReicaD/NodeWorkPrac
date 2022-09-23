const { builtinModules } = require("module");

const Allpeople = ["Ali", "Pete", "Manson"];

const size = [23, 99, 102];
const laundry = ['cloth','shirt','dress']
//console.log()
const allpeople = (x, y,z) => {
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === "Pete") {
      console.log(true);
    }
  };
  for (let i = 0; i <= y.length; i++) {
    if (y[i] === 99) {
      console.log(`the number is ${y[i]}`);
    }
  }
  for (let i = 1; i <= z.length; i++) {
    if (z[i] === 'shirt') {
      console.log(`this is a ${z[i]}`);
    }
  }
  return false
  
};
//allpeople(Allpeople,size,laundry);
// console.log(allpeople(Allpeople,size,laundry));
// const Allpeople = [“Ali”,”Pete”,“Mason”]

// function allpeople( (x,z)=>{
// if (fs.r)

// })

module.exports ={
    laundry,
    Allpeople,
    allpeople,
    size
}
