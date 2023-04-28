console.log("hello");
var a = 1,
  b = 5;

function Name(name = "") {
  console.log(`your name starts with
    ${name[0]} your name is ${name.length} char long
    `);

  console.log(`different opration on your
    Last three char ${name.substring(name.length - 2)}`);
}

do {
  console.log("how are you");
  console.log(a + b);
  a++;
} while (a < 5);

Name("Shahid");
// Requiring fs module in which
// writeFile function is defined.
const fs = require("fs");
const { json } = require("stream/consumers");

// Data which will write in a file.
let data = "Learning how to write in a file.";

let news = {"Fruits":[
    "pakistan"
    ,"uar"
]}





let myFirstObject =  [{ name: "Shahid", Address: "Lahore" },
{ name: "Shahid", Address: "Lahore" },
{ name: "Shahid", Address: "Lahore" }]
// Write data in 'Output.txt' .

myFirstObject.push(news);


function Write(file = "", Data = "") {
  fs.writeFile(file,Data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}

function Read(file = "") {

    fs.readFile(file,"utf8",(err,_Data)=>{
        if(err){
            console.error(err);
            return
        }
        console.log(_Data);
    })
  }


function Append(file ="",Data=""){
    fs.appendFile(file,Data, err=>{
        if(err){
            console.error(err);
            return
        }
    });
}
// Write("Output.txt","hello");
Write("Output.txt",JSON.stringify(myFirstObject,null,2));
Append("Output.txt","How Are you");
Read("Output.txt");
// fs.writeFile();
