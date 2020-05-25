const UsersModel = require('./models/users.model');
const _ = require('lodash');
const config = require('./config');
const bcrypt = require('bcryptjs');
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
var  logName;

function checkAuth(req, res, next){
    passport.authenticate('jwt', {session: false}, (err, decryptToken, jwtError) => {
        if(jwtError != void(0) || err != void(0)) return res.render('admin.html', {error: err || jwtError});
        req.user = decryptToken;
        next();
    })(req, res, next);
}

function createToken (body){
      return jwt.sign(
        body,
        config.jwt.secretOrKey,
          { expiresIn: config.expiresIn}
    );
}

module.exports = app => {
    app.use('/assets', express.static('./client/public'));

    app.get('/', checkAuth, (req,res) => {
        res.render('admin.html');
    });

    app.get('/chat', checkAuth, (req,res) => {
        res.render('chat.html', { username: req.user.username});
    });
    app.get('/other_profile', checkAuth, (req,res) => {
        res.render('other_profile.html', { username: req.user.username});
    });
    app.get('/profile', checkAuth, (req,res) => {
        res.render('profile.html', {
            about1: req.user.about1,about2: req.user.about2,about3: req.user.about3, username: req.user.username
        });
    });

    app.post('/login', async (req,res) => {
        try{
            let user = await UsersModel.findOne({username: {$regex: _.escapeRegExp(req.body.username), $options: "i"}}).lean().exec();
            if(user != void(0) && bcrypt.compareSync(req.body.password, user.password)) {
                const token = createToken({
                    id: user._id, username: user.username,about1:user.about1, about2:user.about2, about3:user.about3
                });
                res.cookie('token', token, {
                    httpOnly: true
                });
                logName = user._id;
                res.status(200).send({message: "User login success"});

            } else res.status(400).send({message: "User already exist or password not correct"});

        } catch (e) {
            console.log("E, login,", e);
            res.status(500).send({message:"Some error"});
        }

    });

    app.post('/register', async (req,res) => {
        try{
            let user = await UsersModel.findOne({username: {$regex: _.escapeRegExp(req.body.username), $options: "i"}}).lean().exec();
            if(user) return res.status(400).send({message: "User already exist"});

            user = await UsersModel.create({
                username: req.body.username,
                password: req.body.password,
            });

            const token = createToken({id: user._id, username: user.username});

            res.cookie('token', token, {
                httpOnly: true
            });

            res.status(200).send({message: "User created"});

        } catch (e) {
            console.log("E, register,", e);
            res.status(500).send({message:"Some error"});
        }
    });

    app.post('/edit', async (req,res) => {

           let user = await UsersModel.updateOne({
               _id: logName
            },{
                about1: req.body.about1,
                about2: req.body.about2,
                about3:  req.body.about3
            });

        res.status(200).send({message: "Данные изменены и после перезахода будут обновлены"});




    });
    // app.put("/edit/users", jsonParser, function(req, res){
    //
    //     if(!req.body) return res.sendStatus(400);
    //     const id = req.body.id;
    //     const userName = req.body.name;
    //     const userAge = req.body.age;
    //     const newUser = {age: userAge, name: userName};
    //
    //     User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
    //         if(err) return console.log(err);
    //         res.send(user);
    //     });
    // });
    app.post('/logout', (req, res) => {
        res.clearCookie('token');
        res.status(200).send({message: "Logout success"});

    })
};
