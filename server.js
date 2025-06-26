const express = require('express');
const path = require('path');
const posts = require('./routes/post');
const app = express();


//Routes
app.use('/api/posts/', posts);


router.listen(3000, () => {
  console.log('Server is running on port 3000');
});
