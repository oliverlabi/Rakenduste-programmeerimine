const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const post = await Post.find({})
  
  res.status(200).send(post)
}

exports.createPost = async (req, res) => {
  const newPost = (req.body)

  const createdPost = new Post(newPost)

  const savedPost = createdPost.save()

  res.status(200).send("created")
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  var update = {};
  update.post = req.body.post
  try{
    const post = await Post.findOneAndUpdate({ _id: id }, { post: update.post })

    if(!post) throw Error("Error updating post")

    res.status(200).send("updated")
    
  } catch (e){
    res.status(400).json({ error: e.message })
  }
}

exports.getPost = async (req, res) => {
  const { id } = req.params;
    try{
        const post = await Post.findOne({_id: id})

        if (!post) throw Error("Error finding post")

        res.status(200).json(post)
    } catch (e){
        res.status(400).json({ error: e.message })
    }
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  
  const post = await Post.findOneAndDelete({ _id: id })

  res.status(200).send("deleted")
}