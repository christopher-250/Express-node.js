const express = require('express');
const app = express();

const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
];

// ✅ Single route that handles both: full list and limit
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }

    res.json(posts); // default response if no valid limit
});

// ✅ Get one post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id); // changed from filter to find

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
});

// ✅ Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
