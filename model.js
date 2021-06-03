const mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/blog";
module.exports = {
    getuserdata(){
        mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
        var userschema = new mongoose.Schema({
            name: String,
            category: String
        });
        return mongoose.models.users || mongoose.model('users', userschema);
    },
    getpostsdata(){
        mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
        var postschema = new mongoose.Schema({
            title: String,
            body: String,
            category: String
        });
        return mongoose.models.posts || mongoose.model('posts', postschema);
    }
}
