require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3500;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/api/books', async (req, res) => {
  try {
    const amountOfBooks = parseInt(req.query.amount) || 10;
    const result = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
    const books = JSON.parse(result).filter((book, index) => index < amountOfBooks);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/books', (req, res) => {
  const response = {
    ...req.body,
    id: 101,
  }
  res.status(201).json(response);
});
app.get('/api/books/:id', async (req, res) => {
  try {
    const result = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
    const book = JSON.parse(result).find(book => book.id === Number(req.params.id));
    res.status(200).json(book);
  }catch(error) {
    res.status(500).json({ error: error.message });
  }
});
app.put('/api/books/:id', (req, res) => {
  const response = {
    ...req.body,
    id: Number(req.params.id),
  };
  res.status(200).json(response);
});
app.delete('/api/books/:id', (req, res) => {
  const response = {
    id: Number(req.params.id),
    message: 'Book deleted'
  }
  res.status(200).json(response);
});

if(process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
}

module.exports = app;
