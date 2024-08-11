//Integration with Node with JSON : Data wrie and read
const fs=require("fs")
const bioData={
    name : "Afrujan",
    age : 19,
    skill : "NodeJS Programmer"
}
console.log(bioData);
const jsonData = JSON.stringify(bioData);
fs.writeFile("testjson.json",jsonData,(err) =>{
    console.log("Process Completed....");
})
fs.readFile("testjson.json","utf-8",(err,data)=>{
    console.log("file read complete...")
})