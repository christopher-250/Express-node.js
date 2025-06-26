import express from 'express'
import path from 'path'
import posts from './routes/post.js'
const app = express();


//Routes
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/posts/', posts);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
