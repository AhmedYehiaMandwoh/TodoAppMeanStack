const express = require('express');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database')
const users = require('./routes/users')
const posts = require('./routes/posts')
const path = require('path')
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
app.use(express.static(path.join(__dirname, 'public')))

// BodyParser
app.use(bodyParser.json());
// Home
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/', (req, res, next) => {
    res.send('Hello From Home')
});


// Router Page
app.use('/users', users);
app.use('/posts', posts)

// Port
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server Is Started With Port ' + PORT)
});

