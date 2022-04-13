const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const bodyParser = require("body-parser")

const cors = require('cors');
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

const { v4: uuidv4 } = require('uuid');

const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb+srv://taha:G4FMz4Bm25hb6Qh4@cluster0.zbety.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

var md = require('marked');

app.get("/posts",cors(), async function(req, res, next){
  const posts = await loadPostsDb().catch(function(){
    res.json({"error":true});
  })
  
  res.json({"articles":await posts.find({}).toArray()});
});

app.get("/",cors(), async function(req, res, next){
    var Web3 = require('web3');
    var web3 = new Web3(Web3.givenProvider)
    console.log(web3.eth)

});

app.post('/insert',cors(), async function(req, res, next) {
    const posts = await loadPostsDb().catch(function(){
      res.json({"error":true});
    })
    await posts.insertOne({
      "body":md.marked(req.body.body),
      "at" : new Date(),
      "slug": new Date().toDateString().replace(" ","_")+uuidv4().toString()
    });
    
    res.json({"msg":"insert successfuly"});
    
});

async function  loadPostsDb(){
    await client.connect();
    const postsdb = client.db("blog");
    const posts = postsdb.collection('posts');
    return posts;
  }

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})