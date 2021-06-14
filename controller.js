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
    //posts.find({category: 'news'}).populate('posts users').exec((err,posts) => { //based on category
    posts.find({}).populate('posts users').exec((err,posts) => { //all from both
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
  getinnerjoin(req, res) {
    var resources = {
      _id: 1,
    };
    var users = usermodel.usermodel();
    users.aggregate(
      [
        {
          $sort: resources, // use $match, $group etc
        },
        {
          $lookup: {
            from: "posts", // collection to join
            localField: "category", //field from the input documents
            foreignField: "category", //field from the documents of the "from" collection
            as: "users", // output array field
          },
        },
      ],
      function (error, data) {
        res.send(data);
      }
    );
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
    } //replace jsondata with req.body
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
