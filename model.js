const mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/blog";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = {
    getuserdata(){
        var userschema = new mongoose.Schema({
            name: String,
            category: String
        });
        return mongoose.models.users || mongoose.model('users', userschema);
    },
    getpostsdata(){
        var postschema = new mongoose.Schema({
            title: String,
            body: String,
            category: String
        });
        return mongoose.models.posts || mongoose.model('posts', postschema);
    }
}
