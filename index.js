var express = require('express');
var app = express();
var control = require('./controller');

app.get('/users', control.fetchdata);
app.get('/posts', control.postsdata);
app.listen(3000, () => {
    console.log('...3000')
})