var model = require('./model');
var fs = require('fs');
myfuncs = {
    fetchdata(req, res) {
        var users = model.getuserdata();
        users.find({}, function(err, data){
            res.json(data);
        });
    },
    postsdata(req, res) {
        var posts = model.getpostsdata();
        posts.find({}, function(err, data){
            res.json(data);
        });
    }
}
module.exports = myfuncs;

// exports.fetchdata = function(req,res){
//     res.send('ok')
// }