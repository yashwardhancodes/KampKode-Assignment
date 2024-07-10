const express = require('express');
const bodyParser = require('body-parser');
const { addDoc } = require('firebase/firestore');
const Users = require('./firebaseconfig');
const morgan = require('morgan');
const path=require("path");


const app = express();
const port = 3000;


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  try {
    await addDoc(Users, { name, email, message });
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).send('Error submitting form');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
