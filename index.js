const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({secret: 'lkjcmghfdsvghsd', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const host = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); 
});

app.get('/registration', (req, res) => {
    res.sendFile(__dirname + '/public/registration.html');
});

app.get('/tap_to_play', (req, res) => {
    res.sendFile(__dirname + '/public/tap_to_play.html');
});

app.get('/play', (req, res) => {
    res.sendFile(__dirname + '/public/play.html');
});

app.listen(process.env.PORT || port, host, () => {
    console.log(`Server started on PORT ${process.env.PORT || port}`);
});