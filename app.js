const express = require('express');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database')
const users = require('./routes/users')
const posts = require('./routes/posts')
const path = require('path');
const history = require('connect-history-api-fallback');

mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('connected to database ' + config.database)
});

mongoose.connection.on('Error', (err) => {
    console.log(err)
});

// App 
const app = express();


// Cors
app.use(cors());
// Static Folder

// BodyParser
app.use(bodyParser.json());
// Home
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

const staticFileMiddleware = express.static(path.join(__dirname + 'public'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
  }));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
    res.render(path.join(__dirname + 'public/index.html'));
  });

// Router Page
app.use('/users', users);
app.use('/posts', posts)

// Port

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });


