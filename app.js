const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/blog-post', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sử dụng routes
app.use('/', postRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
