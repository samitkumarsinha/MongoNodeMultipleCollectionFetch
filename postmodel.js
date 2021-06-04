const mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/blog";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = {
  postmodel() {
    var postschema = new mongoose.Schema({
      name: String,
      category: String,
      body: String,
      title: String,
      myusers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
    },{
      versionKey: false,
      collection: "posts"
    });
    return mongoose.models.posts || mongoose.model("posts", postschema);
  }
 
};
