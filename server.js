var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'article-one':{
        name:"vaibhav",
        surname:"dodiya",
        no:"one"
    },
    'article-two':{
        name:"vaibhav",
        surname:"dodiya",
        no:"two"
    },
    'article-three':{
        name:"vaibhav",
        surname:"dodiya",
        no:"three"
    }
};
function creat(data){
    var name=data.name;
    var surname=data.surname;
    var no=data.no;
    var html=`
        <!doctype html>
        <html>
            <head>
                <title>Article One</title>
            </head>
            <body>
                M ${name} ${surname}
                number is ${no}
            </body>
        </html>
    `;
    return html;
}
app.get('/:articleName', function (req, res) {
  var name=req.param.articleName;
  res.send(creat(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
