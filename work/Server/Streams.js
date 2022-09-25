const fs = require("fs");
//there is two types of streams read stream and write stream

//read stream this creates the stream
//another format that is used to read a file in a readable way by adding it as an  argument in form of an object('../Server/streams.txt,',{ encoding: 'utf8'}); if one doesnt want to add .toString method in the console

const readStream = fs.createReadStream("../Server/streams.txt", { encoding: 'utf8' });
const writeStream = fs.createWriteStream("../Server/Write.txt");

// calling in the data using the fs.ReadStream.on ".on" is an event listening from a data event using  a callback function to get acsess to the data provided example:netflix clics
readStream.on("data", (chunk) => {
  console.log("---- New All ----");
  console.log(chunk);

  //this is how the data is passed down the stream and by adding \n\n its for adding a new line
  //Note:the file write.txt wasnt there initially when this code was added.
  WriteStream.write("\nSee More\n");
  WriteStream.write(chunk);
});

//pipeing this is a much shorte way of writing a code into a readable format 

//readStream.pipe(writeStream);

