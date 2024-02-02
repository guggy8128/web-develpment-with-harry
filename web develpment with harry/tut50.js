const fs = require("fs");
const text = fs.readFileSync("delet50.txt","utf-8");
text = text.replace("browser","rohan");
console.log("The content of the file is");
console.log(text);

console.log("creating a new file....");
fs.writeFileSync("rohan50.txt",text); 