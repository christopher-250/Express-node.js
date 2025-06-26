import express from 'express'
const router = express.Router();
let posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" }
];

/*router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log('Query limit:', limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.json(posts);
});*/

/*router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const posts = posts.find(p => p.id === id);

  if (!posts) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.json(posts);
});*/
router.post('/',(req,res) => {
    console.log(req.body)
    
    /*const newPost = {
    id: posts.length + 1,
    title:req.body.title 
};

if(!newPost.title){
    return res.status(400).json({msg:'please include the title'})
}
posts.push(newPost)
 console.log('New post created:', newPost);*/
    res.status(201).json(posts)
});
 
router.put('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(401).json({msg:`This message is with this ${id} is not found`})
    }
    post.title = req.body.title
    res.status(200).json(posts)
})
router.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({msg:`This message is with this ${id} is not found`})
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts)
})

export default router