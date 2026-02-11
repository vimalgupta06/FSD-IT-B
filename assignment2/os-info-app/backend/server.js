const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Endpoint for User Info
app.get('/api/userinfo', (req, res) => {
  const userInfo = {
    username: os.userInfo().username,
    homedir: os.userInfo().homedir,
    uid: os.userInfo().uid,
    gid: os.userInfo().gid,
    shell: os.userInfo().shell
  };
  res.json(userInfo);
});

// Endpoint for Architecture
app.get('/api/arch', (req, res) => {
  const architecture = {
    arch: os.arch()
  };
  res.json(architecture);
});

// Endpoint for Hostname
app.get('/api/hostname', (req, res) => {
  const hostname = {
    hostname: os.hostname()
  };
  res.json(hostname);
});

// Endpoint for Free Memory
app.get('/api/freememory', (req, res) => {
  const freeMemory = {
    freeMemory: os.freemem(),
    freeMemoryInGB: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  };
  res.json(freeMemory);
});

// Endpoint for Total Memory
app.get('/api/totalmemory', (req, res) => {
  const totalMemory = {
    totalMemory: os.totalmem(),
    totalMemoryInGB: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  };
  res.json(totalMemory);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
