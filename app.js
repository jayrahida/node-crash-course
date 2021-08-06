const express = require('express'); //returns a function
const app = express();

//register view engine (EJS)
//by default it will look on views folder
app.set('view engine', 'ejs');
//app.set('views', 'myviews'); //to point to diff folder

// EnVironment Variable: PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

//app.get()
app.get('/',(req, res) => {
  //res.send('<html><b><font color="red">HOME PAGE</font></b></html>');
  res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about',(req, res) => {
  //res.send('<html><b><font color="blue">ABOUT</font></b></html>');
  res.sendFile('./views/about.html', { root: __dirname});
});

//redirects
app.get('/about-us',(req, res) => {
  res.redirect('/about');
});

//404 page
//app.use: it will fire if it reaches this code so should be at last
app.use((req, res) => { 
  res.status(404).sendFile('./views/404.html', { root: __dirname});
} )

//express handlebars
//view engine - to insert dynamic data to the template response

// app.use(express.json());

// const courses = [
//   {id: 1, name: 'course1'},
//   {id: 2, name: 'course2'},
//   {id: 3, name: 'course3'}
// ]

// //app.post()
// //app.put()
// //app.delete()

// app.get('/api/courses/:id',(req, res) => {
//   let course = courses.find(c => c.id === parseInt(req.params.id));
//   if(!course) //404
//   {
//      return res.status(404).send('Course not found.');
//   }
//   else res.send('<html><b><font color="blue">TEST EXPRESS COURSES '+JSON.stringify(course)+'</font></b></html>');
// });

// app.get('/api/courses/:year/:month',(req, res) => {
//   res.send(req.params);

//   //query parameter
//   //http://localhost:3001/api/courses/2018/1?sortBy=name
//   //res.send(req.query);
// });

// app.post('/api/courses',(req, res) => {

//   if(!req.body.name) //404
//   {
//      return res.status(400).send('Course Name is required.');
//   }

//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.put('/api/courses/:id',(req, res) => {
//   //look up the course
//   let course = courses.find(c => c.id === parseInt(req.params.id));
//   if(!course) //404
//   {
//      return res.status(404).send('Course not found.');
//   }

//   if(!req.body.name) //404
//   {
//      return res.status(400).send('Course Name is required.');
//   }

//   //update the course
//   course.name = req.body.name;
//   //return updated course
//   res.send(course);
// });


