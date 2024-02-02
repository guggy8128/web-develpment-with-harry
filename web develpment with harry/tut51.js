// Synchronous or blocking
// -line by line execution

// Anchronous or non-blocking
// -lune by line execution not guaranteed
// -callbacks will fire

const fs =  require("fs");
let text = fs.readFile("delet50.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a message")