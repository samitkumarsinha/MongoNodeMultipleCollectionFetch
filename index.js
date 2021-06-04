var express = require('express');
var app = express();
var control = require('./controller');

app.get('/users', control.fetchdata);
app.get('/posts', control.postsdata);
app.get('/join', control.getJoinData);
app.get('/save', control.setpostsdata);
app.get('/del', control.deldata);
app.get('/update/:id',control.update);
app.listen(3000, () => {
    console.log('...3000')
})