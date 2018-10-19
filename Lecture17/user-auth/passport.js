const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    db.User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        done(null, user)
    }).catch((err) => {
        done(err);
    })
});


passport.use(new LocalStrategy(
    function (username, password, done) {
        db.User.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            if (user.password!==password) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
));


module.exports = passport