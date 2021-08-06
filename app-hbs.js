const express = require('express'); //returns a function
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

//middleware & static files
app.use(express.static('public'));

var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ extended: true, verify: rawBodySaver }));
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// Environment Variable: PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

//register view engine (EJS)
//view engine - to insert dynamic data to the template response
//by default it will look on views folder
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));
app.set('view engine', 'hbs');

//app.set('views', 'myviews'); //to point to diff folder

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
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'How to find eggs' },
        { title: 'Mario get stars', snippet: 'How to get stars' },
        { title: 'How to defeat bowser', snippet: 'How to defeat bowser' },
    ]
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
});

app.post('/publish', (req, res) => {

    //res.send(req.body);
    res.send(req.rawBody);
});

app.enable("strict routing");

//middleware: process between a request and response
//runs from top to bottom until a response is sent
//404 page
//app.use: it will fire if it reaches this code so should be at last
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})

//express handlebars




