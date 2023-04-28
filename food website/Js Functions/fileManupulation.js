const fs = require("fs");
const { json } = require("stream/consumers");


export function Write(file = "", Data = "") {
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

  export default function hello(){
    return console.log(hello);
  }