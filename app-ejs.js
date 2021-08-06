const express = require('express'); //returns a function
const morgan = require('morgan');

const app = express();

//register view engine (EJS)
//view engine - to insert dynamic data to the template response
//by default it will look on views folder
app.set('view engine', 'ejs');
//app.set('views', 'myviews'); //to point to diff folder

// EnVironment Variable: PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//middleware & static files
app.use(express.static('public'));

//middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next();
});

//logger
app.use(morgan('tiny'));

//app.get()
app.get('/',(req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'How to find eggs'},
        {title: 'Mario get stars', snippet: 'How to get stars'},
        {title: 'How to defeat bowser', snippet: 'How to defeat bowser'},
    ]
    res.render('index', { title: 'Home', blogs});
});

app.get('/about',(req, res) => {
    res.render('about', { title: 'About'});
});

//redirects
app.get('/about-us',(req, res) => {
  res.redirect('/about');
});

app.get('/blogs/create',(req, res) => {
    res.render('create', { title: 'Create Blog'});
  });

//middleware: process between a request and response
//runs from top to bottom until a response is sent
//404 page
//app.use: it will fire if it reaches this code so should be at last
app.use((req, res) => { 
  res.status(404).render('404', { title: '404'});
} )

//express handlebars




