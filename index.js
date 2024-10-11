const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

const indexpage = path.join(__dirname, 'index.html');
const projectpage = path.join(__dirname, 'projects.html');
const contactpage = path.join(__dirname, 'contact.html');
const exppage = path.join(__dirname, 'experience.html');

console.log(indexpage);

app.get('/', (req, res) => {
  res.sendFile(indexpage);
});
app.get('/index', (req, res) => {
    res.sendFile(indexpage);
  });

app.get('/projects', (req, res) => {
    res.sendFile(projectpage)
});

app.get('/contact', (req, res) => {
    res.sendFile(contactpage)
})

app.get('/experience', (req, res) => {
    res.sendFile(exppage)
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});