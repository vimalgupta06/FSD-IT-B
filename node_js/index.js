const http = require('http');
const myserver = http.createServer((req,res) => {
    if(req.url === "/" && req.method === "GET"){
        res.end("ABES Engg. College")
    }
    else if(req.url === "/aboutus"){
        res.end("My name is Vimal Gupta")
    }

    else if(req.url === "/class"){
        res.end("We are student of class IT A")
    }
    else {
        res.end("Error 404 not found");
    }
    console.log('server1');
    
});


myserver.listen(3000, () => {
    console.log('Server is running on 3000')
})