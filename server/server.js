var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

module.exports = function(port, db, githubAuthoriser) {
    var app = express();

    console.log("dirname:\t" + __dirname);

    //app.use(express.static("public"));
    app.use("/lib", express.static(__dirname + "/../node_modules"));
    app.use("/templates", express.static(__dirname + "/../public/templates"));
    app.use("/", express.static(__dirname + "/../public"));

    app.use(bodyParser.json());
    app.use(cookieParser());

    var users = db.collection("users");
    var sessions = {};

    // my database stuff
    var uri = "mongodb://cwylie:testgradpass1@ds015636.mlab.com:15636/grad-chat-app-wylie";
    var myDB = mongodb.connect(uri, "users");

    app.get("/oauth", function(req, res) {
        githubAuthoriser.authorise(req, function(githubUser, token) {
            if (githubUser) {
                users.findOne({
                    _id: githubUser.login
                }, function(err, user) {
                    if (!user) {
                        // TODO: Wait for this operation to complete
                        users.insertOne({
                            id: githubUser.login,
                            name: githubUser.name,
                            avatarUrl: githubUser.avatar_url
                        });
                    }
                    sessions[token] = {
                        user: githubUser.login
                    };
                    res.cookie("sessionToken", token);
                    res.header("Location", "/");
                    res.sendStatus(302);
                });
            }
            else {
                res.sendStatus(400);
            }

        });
    });

    app.get("/api/oauth/uri", function(req, res) {
        res.json({
            uri: githubAuthoriser.oAuthUri
        });
    });

    app.use(function(req, res, next) {
        if (req.cookies.sessionToken) {
            req.session = sessions[req.cookies.sessionToken];
            if (req.session) {
                next();
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }
    });


    app.get("/api/user/:id", function(req, res) {
        users.findOne({
            _id: req.params.id
        }, function(err, user) {
            if (!err) {
                res.json(user);
            } else {
                res.sendStatus(500);
            }
        });
    });

    app.get("/api/user", function(req, res) {
        users.findOne({
            _id: req.session.user
        }, function(err, user) {
            if (!err) {
                res.json(user);
            } else {
                res.sendStatus(500);
            }
        });
    });

    app.get("/api/users", function(req, res) {
        users.find().toArray(function(err, docs) {
            if (!err) {
                res.json(docs.map(function(user) {
                    return {
                        _id: user._id,
                        name: user.name,
                        avatarUrl: user.avatarUrl
                    };
                }));
            } else {
                res.sendStatus(500);
            }
        });
    });

    return app.listen(port);
};
