const http = require('http');
const fs = require("fs");
const home = fs.readFileSync("abes.html")
const myserver = http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    // res.end('hello world');
    res.end(home);

//     if(req.url === "/" && req.method === "GET"){
//         res.writeHead(200, {"Content-Type":"image/jpeg"});
//         const stream = fs.createReadStream("abesimage.jpg");
//         stream.pipe(res)
//         // res.end("ABES Engg. College")
//     }
//     else if(req.url === "/aboutus"){
//         res.end("My name is Vimal Gupta")
//     }

//     else if(req.url === "/class"){
//         res.end("We are student of class IT A")
//     }
//     else if(req.url === "/contact"){
//         res.end("949540323");
//     }
//     else {
//         res.end("Error 404 not found");
//     }
//     console.log('server1');
    
// });
//------------------sync------------------
// fs.writeFileSync("./abes.txt","we are students of abes");

// const result = fs.readFileSync("./abes.txt","utf-8");
// console.log(result);

//fs.appendFileSync("./abes.txt",`and i am happy`);
});
myserver.listen(3000, () => {
   console.log('Server is running on 3000')
})

// ------------------------async----------------
//fs.writeFile("./abes1.txt","code is very",() => { }); 

// fs.readFile("./abes1.txt","utf-8",(err,result) => {
//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }


// fs.appendFile("abes1.txt","appended msg" ,() => {
    
// });