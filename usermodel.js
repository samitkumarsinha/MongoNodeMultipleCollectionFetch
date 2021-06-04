const mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/blog";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = {
  usermodel() {
    var userschema = new mongoose.Schema({
      name: String,
      category: String,
      myposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'posts' }]
    },{
      versionKey: false
    });
    return mongoose.models.users || mongoose.model("users", userschema);
  }
};
