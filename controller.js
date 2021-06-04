var usermodel = require("./usermodel");
var postmodel = require("./postmodel");
var fs = require("fs");
myfuncs = {
  fetchdata(req, res) {
    var users = usermodel.usermodel();
    users.find({}, function (err, data) {
      res.json(data);
    });
  },
  postsdata(req, res) {
    var posts = postmodel.postmodel();
    posts.find({}, function (err, data) {
      res.json(data);
    });
  },
  getJoinData(req, res) {
    var posts = postmodel.postmodel();
    posts.find({category: 'news'}).populate('posts').exec((err,posts) => {
      res.send(posts);
    })
  },
  setpostsdata(req, res) {
    var obj = postmodel.postmodel();
    var ob = new obj
    ({
      title: "jj224",
      body: "jj224",
      category: "jj224",
      namr: "jj224"
    });
    console.log(ob)
    ob.save((err, data) => {
        console.log(data);
    });
    res.send("save")
  },
  deldata(req, res){
    var posts = postmodel.postmodel();
    posts.findByIdAndDelete('60b9c1be9838f9220c7778f4', (err, result) => {
        res.send(result);
    })
  },
  update(req,res){
    // res.send(req.params.id)
    // res.send(req.query)
    jsondata = {
      title: "up",
      body: "up",
      category: "up",
      namr: "up"
    }
    var posts = postmodel.postmodel();
    posts.findByIdAndUpdate({_id: req.params.id},jsondata, (err, result) => {
        res.send(result);
    })
  }
};
module.exports = myfuncs;

// exports.fetchdata = function(req,res){
//     res.send('ok')
// }
