const express = require('express');
// Node.js module to deal with file paths
const path = require('path');
const exphbs = require('express-handlebars'); // express Handlebars
const logger = require('./middleware/logger');
const members = require('./Members'); // Passes the Members.js array

const app = express();

// Init middleware
// app.use(logger);
// The above was just to demonstrate how middleware is implemented

// Handlebars Middleware 
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
// Set the view engine to handlebars and then passing exphbs and setting the default 
// layout to a file name of main
app.set('view engine', 'handlebars');
// Set the view engine

// Body Parser Middleware
app.use(express.json()); // allows us to handle raw Jason
app.use(express.urlencoded({ extended: false })); // this is to handle form submissions
// we can now handle urlencoded data
// This url is encoded to handle the form data

// Homepage Route
// To render the home.handlebars create a route 
// we're not in the router anymore we're in the main index
/* Routing – Routing is a feature that lets web applications retain webpage states through 
 URLs. URLs can be shared with others, and users can visit the URLs to reach the state-storage 
 page. Node.js offers a fundamental routing mechanism, in comparison to Express.js, which 
 provides a more sophisticated routing mechanism capable of handling dynamic URLs. */
app.get('/', (req, res) => 
    res.render('home', {
        title: 'Member App',
        members // which is the same as members: members 
        // parsed 'title' to home.handlebars
    })
);


// Originally used, but not great when you have multiple pages to load (1.8 at 2)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     // __dirname to get current directory open folder public and load the html file
// });

// Set static folder, this is for static data, not dynamic
app.use(express.static(path.join(__dirname, 'public')));
// use is a property used for middleware

// Members API Routes
app.use('/api/members', require('./routes/api/members'));
// first parameter is the 'parent route' ..
/* Routing – Routing is a feature that lets web applications retain webpage states through 
 URLs. URLs can be shared with others, and users can visit the URLs to reach the state-storage 
 page. Node.js offers a fundamental routing mechanism, in comparison to Express.js, which 
 provides a more sophisticated routing mechanism capable of handling dynamic URLs. */
// now because 'api/members' members is specified here we dont need it in members.js
// therefore replace it with '\'

const PORT = process.env.PORT || 5000;
// initially the server won't be on port 5000, so we check the environment variable. 
// If it isn't there then check on 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// 55:50 youtube how far
