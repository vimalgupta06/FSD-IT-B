const http = require('http');
const myserver = http.createServer((req,res) => {
    if(req.url === "/" && method === "GET"){
        res.end("Home page")
    }
    else{
        
    }
    console.log('server1');
    res.end("Hello this is my first server");
});


myserver.listen(3000, () => {
    console.log('Server is running on 3000')
})