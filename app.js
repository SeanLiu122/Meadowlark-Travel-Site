// Require/import the necessary libraries for the webapp.
// (1) express - this provides the express web framework
// (2) handlebars - this provides the handlebars template - view engine
// (3) mongoose - this provides the mongo database
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

//**********************************************************************
// EXPRESS APP SETUP          										   *
//**********************************************************************

// Create an object variable that is an instance of express
const app = express();

// Connect to mongoose
mongoose.connect('mongodb://localhost:27017/meadowlark-dev', {
	useNewUrlParser: true
})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Load User Model
require('./models/User');
const User = mongoose.model('users');

// Load routes
const users = require('./routes/users');
//const profile = require('./routes/profile');

// Passport Config
require('./config/passport')(passport);

// Handlebars Middleware
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Add a static middleware--logo image.
// Static folder
app.use(express.static(path.join(__dirname, '/public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session middleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash middleware
app.use(flash());

// Global variables
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

// Route Methods
// homepage route
app.get('/', (req, res) => {
	const title = 'Welcome!';
	res.render('home', {
		body: title
	});
});
// about route
app.get('/about', (req, res) => {
	res.render('about');
});

// Use routes
app.use('/users', users);
//app.use('/profile', profile);

// Server is listening on port 3000...
const port = 3000;
app.listen(port, () => {
	console.log('Server started on port ' + port);
});