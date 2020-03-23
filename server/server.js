global.Promise = require("bluebird");
const PORT = process.env.PORT || 7777;

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const io = require('socket.io')(server, {serveClient: true});
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');

const passport = require('passport');
const {Strategy} = require('passport-jwt');

const {jwt} = require('./config');

passport.use(new Strategy(jwt, function (jwt_payload, done) {
    if(jwt_payload != void(0)) return done(false, jwt_payload);
    done();
}));

mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("debug", process.env.NODE_ENV !== "production");
mongoose.connection.on("error", e => {
    console.error("MongoDB connection error", e);
    process.exit(0);
});

nunjucks.configure('./client/html', {
    autoescape: true,
    express: app
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieparser());

require('./router')(app);

require('./sockets')(io);

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on port ${PORT}`);
});
