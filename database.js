var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const app = express();
const port = 3000;


app.use(express.static('../library'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.sendFile('Index.html', { root: __dirname })
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kud'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

app.post('/ThankYou.html', function (req, res) {


    var sql = "INSERT INTO `aplikacija`(`Ime`, `Prezime`, `Uzrast`, `Dodatni komentar`) VALUES ('"+ req.body.firstname +"', '"+ req.body.lastname +"' , '"+ req.body.Uzrast +"' ,'"+ req.body.komentar +"' )"

    connection.query(sql, function (err){
        if (err) throw err;
        res.redirect("http://localhost:3000/ThankYou.html");
    })
})

app.listen(port, ()=>console.info(`App listening on port ${port}`));
module.exports = connection;










