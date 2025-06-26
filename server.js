const express = require('express');
const app = express();

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" }
];

app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log('Query limit:', limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.json(posts);
});


/*app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(post);
});*/


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
