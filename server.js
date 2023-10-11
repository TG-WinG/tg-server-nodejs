require('dotenv').config();
// const React = require('react');
// const ReactDOMServer = require('react-dom/server')
// const App = require('./react폴더위치')
const express = require('express');
const app = express();

// middleware package
const helmet = require('helmet');
const cors = require('cors');

// middleware declare
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// server open
app.listen(process.env.NODE_PORT, () => {
  console.log('listening on node_port')
})

// router setting
app.use('/info', require('./router/info'))
app.use('/login', require('./router/login'))
app.use('/calender', require('./router/calender'))
app.use('/gallery', require('./router/gallery'))
app.use('/profile', require('./router/profile'))
app.use('/notice', require('./router/notice')) 

// react-nodejs SSR
// app.get('*', (req,res) => {
//   const html = ReactDOMServer.renderToString(<App />);
//   res.send(html);
// })