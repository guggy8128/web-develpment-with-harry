const fs = require("fs");
const text = fs.readFileSync("delet.txt", "utf-8");
text = text.replace("browser","Rohan");

console.log("the content of file is");
console.log(text);

console.log("creating a new file....");
fs.writeFileSync("rohan.txt", text);