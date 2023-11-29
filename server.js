require('dotenv').config();
const express = require('express');
const app = express();

// middleware package
const helmet = require('helmet');
const cors = require('cors');

// middleware declare
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '프로젝트명/build')));
app.use(cors());

// server open
app.listen(8080, () => {
  console.log('listening on node_port')
})

// router setting (build하기 이전)
app.get('*', (req,res) => {
  res.redirect('http://localhost:3000')
})
// (위에 거 작동 안 하면 이걸로 해보세요)
// app.get('*', (req,res) => {
//   res.sendFile(__dirname, '프로젝트명/public/index.html');
// })

// router setting (build한 후)
app.get('*', (req,res) => {
  res.sendFile(__dirname, '/프로젝트명/public/index.html');
})