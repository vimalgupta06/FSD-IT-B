const http = require("http");
const os = require("os");
const PORT = 5000;
const app= http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }
  else if(req.url === "/user-info"){
    res.end(os.userInfo().username);
  }
  else if(req.url === "/home-dir"){
    res.end(os.homedir());
  }
  else if(req.url === "/platform"){
    res.end(os.platform());
  }
  else if(req.url === "/arch"){
    res.end(os.arch());
  }
  else if(req.url === "/hostname"){
    res.end(os.hostname());
  }
  else {
    res.end("Invalid route");
  }
});
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});